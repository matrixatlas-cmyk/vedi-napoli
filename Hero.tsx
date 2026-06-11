@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  
  --color-napoli-blue: #004B87;
  --color-napoli-dark: #003666;
  --color-off-white: #F9F7F2;
  --color-volcanic: #E54B4B;
  --color-charcoal: #1A1A1A;
  --color-stone: rgba(0, 75, 135, 0.1);
}

body {
  background-color: var(--color-off-white);
  color: var(--color-charcoal);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif);
}
