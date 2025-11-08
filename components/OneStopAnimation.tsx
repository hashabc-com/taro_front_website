"use client";

import { useEffect, useState } from "react";

export default function OneStopAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 渐变定义 */}
          <linearGradient
            id="cardGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient
            id="cardGradient2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient
            id="cardGradient3"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>
          <linearGradient
            id="cardGradient4"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* 阴影滤镜 */}
          <filter id="cardShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 中心圆形背景 */}
        <circle
          cx="200"
          cy="250"
          r="120"
          fill="url(#cardGradient1)"
          opacity="0.1"
        >
          <animate
            attributeName="r"
            values="120;130;120"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* 卡片1 - 用户卡片（左上） */}
        <g className="card-group" filter="url(#cardShadow)">
          <rect
            x="30"
            y="80"
            width="140"
            height="100"
            rx="12"
            fill="url(#cardGradient1)"
            opacity="0.95"
          >
            <animate
              attributeName="y"
              values="80;75;80"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
          {/* 用户图标 */}
          <circle cx="60" cy="110" r="15" fill="white" opacity="0.9">
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <path
            d="M 60 120 Q 50 130, 40 135 L 80 135 Q 70 130, 60 120 Z"
            fill="white"
            opacity="0.9"
          />
          {/* 文本线条 */}
          <rect
            x="90"
            y="105"
            width="60"
            height="6"
            rx="3"
            fill="white"
            opacity="0.7"
          />
          <rect
            x="90"
            y="120"
            width="40"
            height="6"
            rx="3"
            fill="white"
            opacity="0.5"
          />
          <rect
            x="90"
            y="135"
            width="50"
            height="6"
            rx="3"
            fill="white"
            opacity="0.5"
          />
        </g>

        {/* 卡片2 - 时间卡片（右上） */}
        <g className="card-group" filter="url(#cardShadow)">
          <rect
            x="230"
            y="100"
            width="140"
            height="100"
            rx="12"
            fill="url(#cardGradient2)"
            opacity="0.95"
          >
            <animate
              attributeName="y"
              values="100;95;100"
              dur="3.5s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </rect>
          {/* 时钟图标 */}
          <circle
            cx="265"
            cy="130"
            r="18"
            stroke="white"
            strokeWidth="3"
            fill="none"
            opacity="0.9"
          />
          <line
            x1="265"
            y1="130"
            x2="265"
            y2="118"
            stroke="white"
            strokeWidth="2"
            opacity="0.9"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 265 130"
              to="360 265 130"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="265"
            y1="130"
            x2="275"
            y2="130"
            stroke="white"
            strokeWidth="2"
            opacity="0.9"
          />
          {/* 文本线条 */}
          <rect
            x="300"
            y="120"
            width="50"
            height="6"
            rx="3"
            fill="white"
            opacity="0.7"
          />
          <rect
            x="300"
            y="135"
            width="35"
            height="6"
            rx="3"
            fill="white"
            opacity="0.5"
          />
        </g>

        {/* 卡片3 - 支付卡片（左下） */}
        <g className="card-group" filter="url(#cardShadow)">
          <rect
            x="30"
            y="320"
            width="140"
            height="100"
            rx="12"
            fill="url(#cardGradient3)"
            opacity="0.95"
          >
            <animate
              attributeName="y"
              values="320;315;320"
              dur="4.5s"
              repeatCount="indefinite"
              begin="1s"
            />
          </rect>
          {/* 信用卡图标 */}
          <rect
            x="40"
            y="345"
            width="50"
            height="35"
            rx="4"
            fill="white"
            opacity="0.9"
          />
          <rect
            x="40"
            y="355"
            width="50"
            height="8"
            fill="rgba(139, 92, 246, 0.5)"
          />
          <rect
            x="45"
            y="370"
            width="15"
            height="4"
            rx="2"
            fill="rgba(139, 92, 246, 0.7)"
          />
          {/* 文本线条 */}
          <rect
            x="105"
            y="350"
            width="50"
            height="6"
            rx="3"
            fill="white"
            opacity="0.7"
          />
          <rect
            x="105"
            y="365"
            width="40"
            height="6"
            rx="3"
            fill="white"
            opacity="0.5"
          />
        </g>

        {/* 卡片4 - 数据卡片（右下） */}
        <g className="card-group" filter="url(#cardShadow)">
          <rect
            x="230"
            y="300"
            width="140"
            height="100"
            rx="12"
            fill="url(#cardGradient4)"
            opacity="0.95"
          >
            <animate
              attributeName="y"
              values="300;295;300"
              dur="3.8s"
              repeatCount="indefinite"
              begin="0.8s"
            />
          </rect>
          {/* 图表图标 */}
          <rect
            x="250"
            y="355"
            width="12"
            height="30"
            rx="2"
            fill="white"
            opacity="0.9"
          >
            <animate
              attributeName="height"
              values="30;35;30"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="268"
            y="345"
            width="12"
            height="40"
            rx="2"
            fill="white"
            opacity="0.8"
          >
            <animate
              attributeName="height"
              values="40;45;40"
              dur="2s"
              repeatCount="indefinite"
              begin="0.3s"
            />
          </rect>
          <rect
            x="286"
            y="335"
            width="12"
            height="50"
            rx="2"
            fill="white"
            opacity="0.9"
          >
            <animate
              attributeName="height"
              values="50;55;50"
              dur="2s"
              repeatCount="indefinite"
              begin="0.6s"
            />
          </rect>
          {/* 文本线条 */}
          <rect
            x="315"
            y="340"
            width="40"
            height="6"
            rx="3"
            fill="white"
            opacity="0.7"
          />
          <rect
            x="315"
            y="355"
            width="30"
            height="6"
            rx="3"
            fill="white"
            opacity="0.5"
          />
        </g>

        {/* 中心连接线动画 */}
        <g opacity="0.3">
          <line
            x1="100"
            y1="130"
            x2="200"
            y2="250"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;10"
              dur="1s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="300"
            y1="150"
            x2="200"
            y2="250"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;10"
              dur="1s"
              repeatCount="indefinite"
              begin="0.25s"
            />
          </line>
          <line
            x1="100"
            y1="370"
            x2="200"
            y2="250"
            stroke="#ec4899"
            strokeWidth="2"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;10"
              dur="1s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </line>
          <line
            x1="300"
            y1="350"
            x2="200"
            y2="250"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;10"
              dur="1s"
              repeatCount="indefinite"
              begin="0.75s"
            />
          </line>
        </g>

        {/* 中心图标 */}
        <circle cx="200" cy="250" r="30" fill="white" opacity="0.95">
          <animate
            attributeName="r"
            values="30;32;30"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <path
          d="M 200 235 L 200 265 M 185 250 L 215 250"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 250"
            to="360 200 250"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* 浮动粒子效果 */}
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx={200} cy={250} r="3" fill="#3b82f6" opacity="0">
            <animate
              attributeName="cx"
              values={`200;${200 + Math.cos((i * Math.PI) / 4) * 100};200`}
              dur="4s"
              repeatCount="indefinite"
              begin={`${i * 0.5}s`}
            />
            <animate
              attributeName="cy"
              values={`250;${250 + Math.sin((i * Math.PI) / 4) * 100};250`}
              dur="4s"
              repeatCount="indefinite"
              begin={`${i * 0.5}s`}
            />
            <animate
              attributeName="opacity"
              values="0;0.6;0"
              dur="4s"
              repeatCount="indefinite"
              begin={`${i * 0.5}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
