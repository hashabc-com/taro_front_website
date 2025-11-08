"use client";

export default function GetStartedAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 700"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 渐变定义 */}
          <linearGradient id="btnGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="btnGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          {/* 阴影滤镜 */}
          <filter
            id="buttonShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 箭头标记 */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#93c5fd" />
          </marker>
        </defs>

        {/* 步骤1：Consult Our Team */}
        <g>
          <rect
            x="100"
            y="50"
            width="200"
            height="60"
            rx="30"
            fill="url(#btnGradient1)"
            filter="url(#buttonShadow)"
          >
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
          <text
            x="200"
            y="85"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="600"
          >
            Consult Our Team
          </text>
        </g>

        {/* 连接线1 - 虚线箭头 */}
        <g>
          <line
            x1="200"
            y1="110"
            x2="200"
            y2="180"
            stroke="#93c5fd"
            strokeWidth="3"
            strokeDasharray="8,4"
            markerEnd="url(#arrowhead)"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="12;0"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </line>
          {/* 装饰小圆点 */}
          <circle cx="200" cy="145" r="4" fill="#60a5fa">
            <animate
              attributeName="cy"
              values="110;180"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* 步骤2：Test Account */}
        <g>
          <rect
            x="100"
            y="180"
            width="200"
            height="60"
            rx="30"
            fill="url(#btnGradient1)"
            filter="url(#buttonShadow)"
          >
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur="2s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </rect>
          <text
            x="200"
            y="215"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="600"
          >
            Test Account
          </text>
        </g>

        {/* 连接线2 */}
        <g>
          <line
            x1="200"
            y1="240"
            x2="200"
            y2="310"
            stroke="#93c5fd"
            strokeWidth="3"
            strokeDasharray="8,4"
            markerEnd="url(#arrowhead)"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="12;0"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.2s"
            />
          </line>
          <circle cx="200" cy="275" r="4" fill="#60a5fa">
            <animate
              attributeName="cy"
              values="240;310"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.2s"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.2s"
            />
          </circle>
        </g>

        {/* 步骤3：Production Launch */}
        <g>
          <rect
            x="80"
            y="310"
            width="240"
            height="60"
            rx="30"
            fill="url(#btnGradient2)"
            filter="url(#buttonShadow)"
          >
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur="2s"
              repeatCount="indefinite"
              begin="1s"
            />
          </rect>
          <text
            x="200"
            y="345"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="600"
          >
            Production Launch
          </text>
        </g>

        {/* 连接线3 */}
        <g>
          <line
            x1="200"
            y1="370"
            x2="200"
            y2="440"
            stroke="#93c5fd"
            strokeWidth="3"
            strokeDasharray="8,4"
            markerEnd="url(#arrowhead)"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="12;0"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </line>
          <circle cx="200" cy="405" r="4" fill="#60a5fa">
            <animate
              attributeName="cy"
              values="370;440"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.4s"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </circle>
        </g>

        {/* 步骤4：Configure and Optimize */}
        <g>
          <rect
            x="60"
            y="440"
            width="280"
            height="60"
            rx="30"
            fill="url(#btnGradient2)"
            filter="url(#buttonShadow)"
          >
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur="2s"
              repeatCount="indefinite"
              begin="1.5s"
            />
          </rect>
          <text
            x="200"
            y="475"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="600"
          >
            Configure and Optimize
          </text>
        </g>

        {/* 背景装饰圆圈 */}
        <circle cx="50" cy="100" r="20" fill="#dbeafe" opacity="0.3">
          <animate
            attributeName="r"
            values="20;25;20"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="350" cy="200" r="15" fill="#dbeafe" opacity="0.3">
          <animate
            attributeName="r"
            values="15;20;15"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="80" cy="350" r="18" fill="#dbeafe" opacity="0.3">
          <animate
            attributeName="r"
            values="18;23;18"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="340" cy="450" r="22" fill="#dbeafe" opacity="0.3">
          <animate
            attributeName="r"
            values="22;27;22"
            dur="4.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* 装饰粒子 */}
        {[...Array(6)].map((_, i) => (
          <circle
            key={i}
            cx={50 + i * 60}
            cy={550 + i * 10}
            r="3"
            fill="#3b82f6"
            opacity="0"
          >
            <animate
              attributeName="cy"
              values={`${550 + i * 10};${520 + i * 10};${550 + i * 10}`}
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
            <animate
              attributeName="opacity"
              values="0;0.6;0"
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
            />
          </circle>
        ))}

        {/* 侧边装饰线条 */}
        <g opacity="0.2">
          <line
            x1="30"
            y1="80"
            x2="70"
            y2="80"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animate
              attributeName="x2"
              values="70;80;70"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="330"
            y1="220"
            x2="370"
            y2="220"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animate
              attributeName="x2"
              values="370;380;370"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="30"
            y1="370"
            x2="70"
            y2="370"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animate
              attributeName="x2"
              values="70;80;70"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
        </g>

        {/* 成功图标 - 底部 */}
        <g transform="translate(170, 550)">
          <circle cx="30" cy="30" r="25" fill="#10b981" opacity="0.9">
            <animate
              attributeName="r"
              values="25;27;25"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <path
            d="M 20 30 L 27 37 L 42 22"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,50;50,0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
