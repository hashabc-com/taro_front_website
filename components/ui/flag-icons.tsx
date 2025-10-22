export const FlagIcons = {
  CN: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="24" fill="#DE2910" />
      <g transform="translate(3.2, 2.4)">
        {/* Main star */}
        <polygon
          points="4,0 4.8,2.4 7.2,2.4 5.2,3.6 6,6 4,4.8 2,6 2.8,3.6 0.8,2.4 3.2,2.4"
          fill="#FFDE00"
        />
        {/* Four smaller stars */}
        <polygon
          points="10,1 10.3,1.8 11.1,1.8 10.5,2.2 10.8,3 10,2.6 9.2,3 9.5,2.2 8.9,1.8 9.7,1.8"
          fill="#FFDE00"
        />
        <polygon
          points="10.8,3.2 11.1,4 11.9,4 11.3,4.4 11.6,5.2 10.8,4.8 10,5.2 10.3,4.4 9.7,4 10.5,4"
          fill="#FFDE00"
        />
        <polygon
          points="10.8,6.4 11.1,7.2 11.9,7.2 11.3,7.6 11.6,8.4 10.8,8 10,8.4 10.3,7.6 9.7,7.2 10.5,7.2"
          fill="#FFDE00"
        />
        <polygon
          points="10,8.6 10.3,9.4 11.1,9.4 10.5,9.8 10.8,10.6 10,10.2 9.2,10.6 9.5,9.8 8.9,9.4 9.7,9.4"
          fill="#FFDE00"
        />
      </g>
    </svg>
  ),
  US: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="24" fill="#B22234" />
      <g>
        {[0, 2, 4, 6, 8, 10, 12].map((y) => (
          <rect
            key={y}
            x="0"
            y={(y * 24) / 13}
            width="32"
            height={24 / 13}
            fill="#FFFFFF"
          />
        ))}
      </g>
      <rect x="0" y="0" width="12.8" height="12" fill="#3C3B6E" />
      <g fill="#FFFFFF">
        {/* Simplified star pattern */}
        {Array.from({ length: 50 }, (_, i) => {
          const row = Math.floor(i / 10);
          const col = i % 10;
          const x = col * 1.28 + (row % 2 === 1 ? 0.64 : 0) + 0.64;
          const y = row * 1.2 + 0.6;
          if (row < 5 && col < (row % 2 === 0 ? 6 : 5)) {
            return <circle key={i} cx={x} cy={y} r="0.3" />;
          }
          return null;
        })}
      </g>
    </svg>
  ),
  KE: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="24" fill="#FFFFFF" />
      <rect width="32" height="8" fill="#000000" />
      <rect y="8" width="32" height="8" fill="#CE1126" />
      <rect y="16" width="32" height="8" fill="#006B3F" />
      <rect y="6" width="32" height="4" fill="#FFFFFF" />
      <rect y="14" width="32" height="4" fill="#FFFFFF" />
      <g transform="translate(16, 12)">
        <circle r="3" fill="#CE1126" stroke="#000000" strokeWidth="0.5" />
        <rect x="-0.5" y="-4" width="1" height="8" fill="#000000" />
        <rect x="-4" y="-0.5" width="8" height="1" fill="#000000" />
      </g>
    </svg>
  ),
  BD: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="24" fill="#006A4E" />
      <circle cx="12" cy="12" r="8" fill="#F42A41" />
    </svg>
  ),
  ID: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="12" fill="#CE1126" />
      <rect y="12" width="32" height="12" fill="#FFFFFF" />
    </svg>
  ),
  PH: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="12" fill="#0038A8" />
      <rect y="12" width="32" height="12" fill="#CE1126" />
      <g transform="translate(0, 0)">
        <polygon points="0,0 12,8 12,16 0,24 0,0" fill="#FFFFFF" />
        <g transform="translate(4, 8)">
          <circle r="1.5" fill="#FCD116" />
          <polygon
            points="0,-2 0.6,0 2,0 0.7,1 1.3,3 0,2 -1.3,3 -0.7,1 -2,0 -0.6,0"
            fill="#0038A8"
          />
        </g>
      </g>
    </svg>
  ),
  VN: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="24" fill="#DA020E" />
      <g transform="translate(16, 12)">
        <polygon
          points="0,-6 1.8,-1.8 6,0 1.8,1.8 0,6 -1.8,1.8 -6,0 -1.8,-1.8"
          fill="#FFFF00"
        />
      </g>
    </svg>
  ),
  TH: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="4" fill="#A51931" />
      <rect y="4" width="32" height="4" fill="#FFFFFF" />
      <rect y="8" width="32" height="8" fill="#2D2A4A" />
      <rect y="16" width="32" height="4" fill="#FFFFFF" />
      <rect y="20" width="32" height="4" fill="#A51931" />
    </svg>
  ),
  MY: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <g>
        {[0, 2, 4, 6, 8, 10, 12].map((y) => (
          <rect
            key={y}
            x="0"
            y={(y * 24) / 14}
            width="32"
            height={24 / 14}
            fill="#DC143C"
          />
        ))}
        {[1, 3, 5, 7, 9, 11, 13].map((y) => (
          <rect
            key={y}
            x="0"
            y={(y * 24) / 14}
            width="32"
            height={24 / 14}
            fill="#FFFFFF"
          />
        ))}
      </g>
      <rect x="0" y="0" width="12.8" height="12" fill="#010066" />
      <g transform="translate(6.4, 6)">
        <circle r="2.5" fill="#FFCC00" />
        <circle cx="0.8" cy="0" r="2" fill="#010066" />
        <polygon
          points="0,-3.5 0.3,-1 1.5,-1 0.6,0 0.9,2.5 0,1.5 -0.9,2.5 -0.6,0 -1.5,-1 -0.3,-1"
          fill="#FFCC00"
        />
      </g>
    </svg>
  ),
  SG: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="12" fill="#ED2939" />
      <rect y="12" width="32" height="12" fill="#FFFFFF" />
      <g transform="translate(4, 6)">
        <circle r="2.5" fill="#FFFFFF" />
        <circle cx="0.8" cy="0" r="2" fill="#ED2939" />
        <g fill="#FFFFFF">
          {/* Pre-calculated star positions to avoid hydration errors */}
          <circle cx="0" cy="-3" r="0.3" />
          <circle cx="1.43" cy="-2.14" r="0.3" />
          <circle cx="0.88" cy="-0.64" r="0.3" />
          <circle cx="-0.88" cy="-0.64" r="0.3" />
          <circle cx="-1.43" cy="-2.14" r="0.3" />
        </g>
      </g>
    </svg>
  ),
  IN: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="8" fill="#FF9933" />
      <rect y="8" width="32" height="8" fill="#FFFFFF" />
      <rect y="16" width="32" height="8" fill="#138808" />
      <g transform="translate(16, 12)">
        <circle r="3" fill="none" stroke="#000080" strokeWidth="0.3" />
        <g fill="#000080">
          {Array.from({ length: 24 }, (_, i) => (
            <rect
              key={i}
              x="-0.1"
              y="-3"
              width="0.2"
              height="0.5"
              transform={`rotate(${i * 15})`}
            />
          ))}
        </g>
      </g>
    </svg>
  ),
  AE: () => (
    <svg viewBox="0 0 32 24" className="w-full h-full">
      <rect width="32" height="8" fill="#00732F" />
      <rect y="8" width="32" height="8" fill="#FFFFFF" />
      <rect y="16" width="32" height="8" fill="#000000" />
      <rect x="0" y="0" width="8" height="24" fill="#CE1126" />
    </svg>
  ),
};

export type FlagCode = keyof typeof FlagIcons;

interface FlagIconProps {
  code: FlagCode;
  className?: string;
}

export function FlagIcon({ code, className = "w-6 h-4" }: FlagIconProps) {
  const Icon = FlagIcons[code];

  if (!Icon) {
    return null;
  }

  return (
    <div
      className={`${className} overflow-hidden rounded-sm shadow-sm flex-shrink-0`}
    >
      <Icon />
    </div>
  );
}
