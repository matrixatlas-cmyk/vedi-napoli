import React from 'react';

// Props for the logos to ensure they are easily reusable and styleable
interface LogoProps {
  color?: string;
  primary?: string;
  secondary?: string;
  size?: number | string;
  strokeWidth?: number;
  className?: string;
}

// 1. Line Art Variant - Minimalist continuous stroke
export const VesuviusLine = ({ 
  color = "currentColor", 
  size = "100%", 
  strokeWidth = 6, 
  className = "" 
}: LogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ overflow: 'visible' }}
  >
    <path
      d="M10,80 L35,25 L50,55 L65,15 L78,35 L88,20 L115,80"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 2. Solid Geometric Variant - Overlapping translucent shapes
export const VesuviusSolid = ({ 
  primary = "currentColor", 
  secondary = "currentColor", 
  size = "100%", 
  className = "" 
}: LogoProps) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 120 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ overflow: 'visible' }}
  >
    {/* Somma - Background Peak */}
    <polygon 
      points="10,80 35,25 75,80" 
      fill={secondary} 
      className="opacity-70"
      style={{ mixBlendMode: 'multiply' }}
    />
    
    {/* Vesuvius - Foreground Peak */}
    <polygon 
      points="40,80 65,15 78,35 88,20 115,80" 
      fill={primary} 
    />
  </svg>
);

// High-level wrapper that groups the logo mark and the typography
export const LogoCombination = ({
  variant = 'solid',
  layout = 'horizontal',
  primary = "#0f172a",
  secondary = "#38bdf8",
  className = ""
}: {
  variant?: 'line' | 'solid';
  layout?: 'horizontal' | 'vertical';
  primary?: string;
  secondary?: string;
  className?: string;
}) => {
  const isHorizontal = layout === 'horizontal';
  const LogoMark = variant === 'line' ? VesuviusLine : VesuviusSolid;
  
  return (
    <div className={`flex ${isHorizontal ? 'flex-row items-center gap-4' : 'flex-col items-center gap-6'} ${className}`}>
      <div className={isHorizontal ? "w-16 h-16 shrink-0" : "w-24 h-24 shrink-0"}>
        <LogoMark 
          primary={primary}
          secondary={secondary}
          color={primary} // Fallback for line art
        />
      </div>
      <div className={`font-display font-semibold tracking-tight ${isHorizontal ? 'text-4xl' : 'text-5xl'}`} style={{ color: primary }}>
        vedinapoli
      </div>
    </div>
  );
};

// 3. Fully-embeddable Horizontal Combination SVG (for direct client-side exports)
export const VesuviusHorizontalSvg = ({
  primary = "#0f172a",
  secondary = "#38bdf8",
  size = "100%",
  className = "",
  id
}: LogoProps & { id?: string }) => (
  <svg
    id={id}
    width={size}
    height="100%"
    viewBox="0 0 340 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ overflow: 'visible' }}
  >
    <g transform="translate(10, 10) scale(0.8)">
      <polygon 
        points="10,80 35,25 75,80" 
        fill={secondary} 
        className="opacity-70"
      />
      <polygon 
        points="40,80 65,15 78,35 88,20 115,80" 
        fill={primary} 
      />
    </g>
    <text
      x="120"
      y="63"
      fill={primary}
      fontFamily="Outfit, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontWeight="600"
      fontSize="38"
      letterSpacing="-0.03em"
    >
      vedinapoli
    </text>
  </svg>
);

// 4. Fully-embeddable Vertical Combination SVG (for direct client-side exports)
export const VesuviusVerticalSvg = ({
  primary = "#0f172a",
  secondary = "#38bdf8",
  size = "100%",
  className = "",
  id
}: LogoProps & { id?: string }) => (
  <svg
    id={id}
    width={size}
    height="100%"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ overflow: 'visible' }}
  >
    <g transform="translate(40, 15) scale(1)">
      <polygon 
        points="10,80 35,25 75,80" 
        fill={secondary} 
        className="opacity-70"
      />
      <polygon 
        points="40,80 65,15 78,35 88,20 115,80" 
        fill={primary} 
      />
    </g>
    <text
      x="100"
      y="155"
      textAnchor="middle"
      fill={primary}
      fontFamily="Outfit, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontWeight="600"
      fontSize="26"
      letterSpacing="-0.03em"
    >
      vedinapoli
    </text>
  </svg>
);

// 5. Instagram Profile Icon SVG (1:1 ratio formatted for perfect circular centering)
export const VesuviusInstagramIcon = ({
  bgType = 'white', // 'blue' | 'dark' | 'white' | 'gradient'
  iconVariant = 'solid', // 'solid' | 'line'
  primaryColor = '#0f172a',
  secondaryColor = '#38bdf8',
  size = "100%",
  className = "",
  id
}: {
  bgType?: 'blue' | 'dark' | 'white' | 'gradient';
  iconVariant?: 'solid' | 'line';
  primaryColor?: string;
  secondaryColor?: string;
  size?: number | string;
  className?: string;
  id?: string;
}) => {
  let fillBg = "#ffffff";
  let fgPrimary = primaryColor;
  let fgSecondary = secondaryColor;

  if (bgType === 'blue') {
    fillBg = "#0284c7"; // sky-600
    fgPrimary = "#ffffff";
    fgSecondary = "#bae6fd"; // sky-200
  } else if (bgType === 'dark') {
    fillBg = "#0f172a"; // slate-900
    fgPrimary = "#ffffff";
    fgSecondary = "#38bdf8"; // sky-400
  } else if (bgType === 'gradient') {
    fillBg = "url(#insta-grad)";
    fgPrimary = "#ffffff";
    fgSecondary = "#bae6fd"; 
  } else if (bgType === 'white') {
    fillBg = "#ffffff";
    fgPrimary = "#0f172a";
    fgSecondary = "#38bdf8";
  }

  return (
    <svg
      id={id}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="insta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      
      {/* Background canvas */}
      <rect width="500" height="500" fill={fillBg} rx="0" />
      
      {/* Centered logo container scaled and shifted for optimal circular safe-zone crop */}
      <g transform="translate(125, 125) scale(2.1)">
        {iconVariant === 'solid' ? (
          <>
            <polygon 
              points="10,80 35,25 75,80" 
              fill={fgSecondary} 
              opacity="0.8"
            />
            <polygon 
              points="40,80 65,15 78,35 88,20 115,80" 
              fill={fgPrimary} 
            />
          </>
        ) : (
          <path
            d="M10,80 L35,25 L50,55 L65,15 L78,35 L88,20 L115,80"
            stroke={fgPrimary}
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </g>
    </svg>
  );
};
