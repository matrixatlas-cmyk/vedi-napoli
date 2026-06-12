import express from "express";
import path from "path";
import { onRequest } from "firebase-functions/v2/https";

const app = express();
app.use(express.json());

// API Route for Brevo Subscription
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ 
      error: "Server configuration error: BREVO_API_KEY is not defined. Please configure it in your secrets." 
    });
  }

  try {
    const listIdStr = process.env.BREVO_LIST_ID;
    const listIds = listIdStr ? [parseInt(listIdStr, 10)] : [];
    
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify({
        email,
        listIds: listIds.length > 0 ? listIds : undefined,
        updateEnabled: true
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Brevo API Error:", errorData);
      return res.status(response.status).json({ 
        error: errorData.message || "Failed to subscribe to the waitlist." 
      });
    }

    const data = await response.json().catch(() => ({}));
    return res.status(200).json({ success: true, data });

  } catch (err: any) {
    console.error("Failed to call Brevo API:", err);
    return res.status(500).json({ error: "An unexpected network error occurred." });
  }
});

// Export Cloud Function API
export const api = onRequest({ region: "europe-west1" }, app);

async function startServer() {
  console.log(`Starting server initialization in ${process.env.NODE_ENV || 'development'} mode...`);
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // Vite middleware for development (handles asset serving and hot reloading)
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });

  server.on('error', (error) => {
    console.error("Server failed to listen on port", PORT, error);
  });
}

// Start the server natively only if we are not running inside Firebase Functions
if (!process.env.FUNCTION_TARGET && !process.env.FIREBASE_CONFIG) {
  startServer().catch((error) => {
    console.error("Critical error during server startup:", error);
    process.exit(1);
  });
}
