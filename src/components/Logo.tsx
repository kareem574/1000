import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtitle?: boolean;
  variant?: 'light' | 'dark' | 'auto';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'auto'
}) => {
  const sizeMap = {
    sm: { container: 'h-10 sm:h-12', svgWidth: '150px' },
    md: { container: 'h-14 sm:h-16', svgWidth: '200px' },
    lg: { container: 'h-18 sm:h-22', svgWidth: '260px' },
    xl: { container: 'h-24 sm:h-28', svgWidth: '320px' },
    hero: { container: 'h-28 sm:h-36', svgWidth: '380px' }
  };

  const textColor =
    variant === 'dark'
      ? '#ffffff'
      : variant === 'light'
      ? '#1e293b'
      : 'currentColor';

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* High-Fidelity Vector Replica of El Ezz Express Official Logo */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeMap[size].container}`}>
        <svg
          viewBox="0 0 460 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto drop-shadow-sm overflow-visible"
        >
          <defs>
            {/* Chrome 3D Metallic Gradients */}
            <linearGradient id="chromeBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#d1d5db" />
              <stop offset="50%" stopColor="#6b7280" />
              <stop offset="75%" stopColor="#9ca3af" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>

            <linearGradient id="chromeBody" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="30%" stopColor="#9ca3af" />
              <stop offset="60%" stopColor="#e5e7eb" />
              <stop offset="85%" stopColor="#6b7280" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>

            <linearGradient id="chromeWheelRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="40%" stopColor="#6b7280" />
              <stop offset="70%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#1f2937" />
            </linearGradient>

            {/* Vibrant Ruby Red 3D Gradient for 'ZZ' */}
            <linearGradient id="redZZGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff1744" />
              <stop offset="45%" stopColor="#e11d48" />
              <stop offset="80%" stopColor="#be123c" />
              <stop offset="100%" stopColor="#881337" />
            </linearGradient>

            <linearGradient id="redZZBevel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#ffe4e6" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#9f1239" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#4c0519" stopOpacity="0.9" />
            </linearGradient>

            {/* Flaming Exhaust Fire */}
            <linearGradient id="fireGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="40%" stopColor="#f97316" />
              <stop offset="75%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>

            {/* Deep Metallic Drop Shadow */}
            <filter id="ezzShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.32" />
            </filter>
          </defs>

          {/* Group 1: The Motorcycle Body & Fairings */}
          <g filter="url(#ezzShadow)">
            {/* Speed Flame shooting out behind rear wheel */}
            <path
              d="M 300 48 C 322 34 348 36 366 42 C 348 48 340 56 362 58 C 336 64 318 68 292 60 C 298 55 299 50 300 48 Z"
              fill="url(#fireGrad)"
            />
            {/* Inner yellow flame core */}
            <path
              d="M 303 50 C 318 42 334 44 345 46 C 332 50 326 54 342 55 C 324 59 314 60 298 56 Z"
              fill="#fef08a"
              opacity="0.9"
            />

            {/* Swept Upper Aerodynamic Wings (Chrome Bevel) */}
            <path
              d="M 130 58 L 180 18 L 235 42 L 270 24 L 290 48 L 245 54 L 275 74 L 220 64 L 175 92 L 142 70 Z"
              fill="url(#chromeBody)"
              stroke="url(#chromeBevel)"
              strokeWidth="2.5"
            />

            {/* Sharp inner contour highlights for metallic 3D depth */}
            <path
              d="M 180 23 L 230 45 L 265 28 L 282 48 L 243 53"
              stroke="#ffffff"
              strokeWidth="1.5"
              fill="none"
              opacity="0.8"
            />

            {/* Front Wheel: Chrome Tire Rim */}
            <circle
              cx="145"
              cy="74"
              r="40"
              fill="#111827"
              stroke="url(#chromeWheelRim)"
              strokeWidth="12"
            />
            <circle
              cx="145"
              cy="74"
              r="28"
              fill="#1f2937"
              stroke="#475569"
              strokeWidth="2"
            />

            {/* 'EL' Chrome Letters inside Front Wheel */}
            <text
              x="145"
              y="84"
              fontFamily="Impact, 'Arial Black', sans-serif"
              fontWeight="900"
              fontSize="30"
              fill="url(#chromeBevel)"
              textAnchor="middle"
              letterSpacing="-2"
            >
              EL
            </text>

            {/* Rear Wheel Arc with Red Speed Ring */}
            <circle
              cx="290"
              cy="70"
              r="30"
              fill="none"
              stroke="#e11d48"
              strokeWidth="6"
              strokeDasharray="6 3"
              opacity="0.95"
            />
          </g>

          {/* Group 2: The Iconic Bold Red 'ZZ' of EL ZZ */}
          <g filter="url(#ezzShadow)">
            {/* First Z */}
            <path
              d="M 235 84 L 292 84 L 254 122 L 296 122 L 291 135 L 230 135 L 268 97 L 233 97 Z"
              fill="url(#redZZGrad)"
              stroke="url(#redZZBevel)"
              strokeWidth="2"
            />
            {/* First Z chrome top highlight */}
            <path
              d="M 237 86 L 290 86 L 275 101"
              stroke="#ffe4e6"
              strokeWidth="1.5"
              fill="none"
              opacity="0.75"
            />

            {/* Second Z */}
            <path
              d="M 298 84 L 355 84 L 317 122 L 359 122 L 354 135 L 293 135 L 331 97 L 296 97 Z"
              fill="url(#redZZGrad)"
              stroke="url(#redZZBevel)"
              strokeWidth="2"
            />
            {/* Second Z chrome top highlight */}
            <path
              d="M 300 86 L 353 86 L 338 101"
              stroke="#ffe4e6"
              strokeWidth="1.5"
              fill="none"
              opacity="0.75"
            />
          </g>

          {/* Group 3: Arabic Official Wordmark 'شركة العز اكسبريس' */}
          <g filter="url(#ezzShadow)">
            <text
              x="230"
              y="168"
              fontFamily="'Cairo', Arial, sans-serif"
              fontWeight="900"
              fontSize="27"
              fill={textColor}
              textAnchor="middle"
              letterSpacing="0.8"
              style={{
                paintOrder: 'stroke fill',
                stroke: variant === 'dark' ? '#0f172a' : '#ffffff',
                strokeWidth: '1.5px',
                strokeLinejoin: 'round'
              }}
            >
              شركة العز اكسبريس
            </text>
          </g>
        </svg>
      </div>

      {showSubtitle && (
        <div className="flex flex-col border-r-2 border-orange-500/80 pr-3.5 mr-0.5">
          <div className="flex items-center gap-2">
            <span className="font-black text-stone-900 tracking-tight text-base sm:text-lg">
              العز اكسبريس
            </span>
            <span className="text-[11px] font-extrabold text-orange-700 bg-orange-100 border border-orange-300 px-2 py-0.5 rounded-md">
              وكيل طلبات
            </span>
          </div>
          <span className="text-xs text-stone-600 font-semibold mt-0.5">
            زون مصر الجديدة & مدينة نصر
          </span>
        </div>
      )}
    </div>
  );
};
