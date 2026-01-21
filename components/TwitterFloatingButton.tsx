"use client";

import { useState, useEffect } from "react";

export default function TwitterFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 页面加载后显示按钮
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTelegramClick = () => {
    // 根据您提供的图片，这应该是Telegram群组链接
    window.open("https://t.me/dd666dd", "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-75"
      }`}
    >
      <button
        onClick={handleTelegramClick}
        className="group relative flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Join our Telegram group"
      >
        {/* Telegram Icon */}
        <svg
          className="w-5 h-5 text-white mr-2 transition-transform duration-300 group-hover:rotate-12"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.317 2.187-1.188 2.555-2.399 2.555-.836 0-1.476-.317-2.399-.792-.792-.396-2.474-1.188-3.23-1.585-.556-.317-.952-.634-.317-1.268.158-.158.317-.475.634-.792 1.109-1.109 2.396-2.317 3.466-3.466.317-.317.634-.792.158-1.109-.317-.158-.792.158-1.268.475-1.584.951-4.613 2.792-5.563 3.382-.634.396-1.188.396-1.743.158-.555-.238-1.268-.555-1.268-.555s-.951-.634.634-1.268c0 0 6.252-2.713 8.409-3.743.951-.475 2.158-.792 2.158-.792s1.267-.317 1.267.475z" />
        </svg>

        {/* Text */}
        <span className="text-white text-sm font-medium">@TaroPayBD</span>

        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>

        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          加入Telegram群组
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-1 -right-1 w-2 h-2 bg-blue-300 rounded-full animate-bounce opacity-60"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-50"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute top-1/2 -left-2 w-1 h-1 bg-blue-200 rounded-full animate-pulse opacity-40"></div>
      </div>
    </div>
  );
}
