import { useState } from "react";

const InputBar = ({
  currentMessage,
  setCurrentMessage,
  onSubmit,
}: {
  currentMessage: string;
  setCurrentMessage: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative p-4 sm:p-6 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800/95 border-t border-slate-700/50 backdrop-blur-sm"
    >
      {/* Enhanced background with depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/95 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-orange-900/10"></div>

      <div className="relative max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
        {/* Compact input container with enhanced visual hierarchy */}
        <div className="relative group">
          {/* Glow effect for active state */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-orange-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-all duration-500"></div>

          <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-xl p-3 sm:p-4 border border-slate-600 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-md">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Smaller emoji/reaction button */}
              <button
                type="button"
                className="group p-2 sm:p-3 rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              {/* Compact text input with sophisticated styling */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-6 sm:py-3 bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm sm:text-base font-medium tracking-wide"
                  style={{
                    background: "transparent",
                    border: "none",
                  }}
                />

                {/* Compact animated placeholder */}
                {!currentMessage && (
                  <div className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <div className="flex items-center space-x-1 sm:space-x-2 text-slate-400">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full animate-pulse"></div>
                        <div
                          className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <span className="text-sm sm:text-base hidden sm:inline">
                        Ask me anything about any topic...
                      </span>
                      <span className="text-sm sm:hidden">
                        Ask me anything...
                      </span>
                    </div>
                  </div>
                )}

                {/* Typing indicator line */}
                <div className="absolute bottom-0 left-3 right-3 sm:left-6 sm:right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Smaller attachment button */}
              <button
                type="button"
                className="group p-2 sm:p-3 rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 hover:from-blue-600 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>

              {/* Compact send button with premium styling */}
              <button
                type="submit"
                disabled={!currentMessage.trim()}
                className={`
                  group relative p-2 sm:p-3 rounded-lg transition-all duration-300 font-semibold shadow-md
                  ${
                    currentMessage.trim()
                      ? "bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-400 hover:via-orange-500 hover:to-red-400 text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-110 hover:-translate-y-1"
                      : "bg-gradient-to-r from-slate-700 to-slate-600 text-slate-400 cursor-not-allowed"
                  }
                `}
              >
                {/* Active button glow effect */}
                {currentMessage.trim() && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                )}

                <svg
                  className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                    currentMessage.trim() ? "text-white" : "text-slate-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Compact feature showcase with better visual hierarchy */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-2 space-y-2 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-2 sm:space-x-4 text-xs text-slate-400">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-slate-800/50 px-2 py-1.5 rounded-md backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">AI-powered research</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-slate-800/50 px-2 py-1.5 rounded-md backdrop-blur-sm">
              <div
                className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span className="text-xs sm:text-sm">Real-time web search</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-slate-800/50 px-2 py-1.5 rounded-md backdrop-blur-sm">
              <div
                className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <span className="text-xs sm:text-sm">Intelligent synthesis</span>
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 text-xs text-slate-400 bg-slate-800/30 px-2 py-1.5 rounded-md backdrop-blur-sm">
            <kbd className="px-1.5 py-0.5 bg-slate-700 rounded text-xs font-medium">
              Enter
            </kbd>
            <span className="text-xs sm:text-sm">to send</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputBar;
