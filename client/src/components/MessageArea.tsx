import React, { useEffect, useRef } from "react";

const PremiumTypingAnimation = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
      {/* Enhanced typing dots */}
      <div className="flex items-center space-x-2">
        <div
          className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-bounce shadow-lg"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-bounce shadow-lg"
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-bounce shadow-lg"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>

      {/* Elegant typing text */}
      <div className="flex items-center space-x-2">
        <span className="text-slate-600 text-xs sm:text-sm font-medium">
          AI is thinking
        </span>
        <div className="flex space-x-0.5">
          <div
            className="w-1 h-1 bg-slate-400 rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-1 h-1 bg-slate-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-1 h-1 bg-slate-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const SearchStages = ({ searchInfo }: { searchInfo: any }) => {
  if (!searchInfo || !searchInfo.stages || searchInfo.stages.length === 0)
    return null;

  return (
    <div className="mb-6 mt-2 relative pl-4 sm:pl-8">
      {/* Enhanced Search Process UI */}
      <div className="flex flex-col space-y-6 sm:space-y-8 text-sm">
        {/* Searching Stage */}
        {searchInfo.stages.includes("searching") && (
          <div className="relative">
            {/* Enhanced indicator dot with glow */}
            <div className="absolute -left-3 sm:-left-6 top-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full z-10 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur opacity-60 animate-pulse"></div>
            </div>

            {/* Enhanced connecting line */}
            {searchInfo.stages.includes("reading") && (
              <div className="absolute -left-[11px] sm:-left-[19px] top-6 w-1 h-[calc(100%+2.5rem)] bg-gradient-to-b from-orange-500 via-orange-300 to-orange-200 rounded-full"></div>
            )}

            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
                <span className="font-semibold text-base sm:text-lg text-slate-800">
                  🔍 Searching the web
                </span>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>

              {/* Enhanced Search Query */}
              <div className="pl-0 sm:pl-1">
                <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 border-2 border-orange-200 text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3 rounded-xl inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="text-slate-800 font-semibold">
                    {searchInfo.query}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reading Stage */}
        {searchInfo.stages.includes("reading") && (
          <div className="relative">
            {/* Enhanced indicator dot */}
            <div className="absolute -left-6 top-1.5 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full z-10 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-60 animate-pulse"></div>
            </div>

            {/* Enhanced connecting line to writing */}
            {searchInfo.stages.includes("writing") && (
              <div className="absolute -left-[19px] top-6 w-1 h-[calc(100%+2.5rem)] bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 rounded-full"></div>
            )}

            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-semibold text-lg text-slate-800">
                  📖 Reading sources
                </span>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>
              </div>

              {/* Enhanced Search Results */}
              {searchInfo.urls && searchInfo.urls.length > 0 && (
                <div className="pl-1 space-y-3">
                  <div className="grid grid-cols-1 gap-3">
                    {Array.isArray(searchInfo.urls) ? (
                      searchInfo.urls
                        .slice(0, 4)
                        .map((url: string, index: number) => (
                          <div
                            key={index}
                            className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 border-2 border-blue-200 text-sm px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-blue-300 backdrop-blur-sm group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300"></div>
                              <span className="text-slate-700 font-medium hover:text-slate-800 transition-colors duration-300">
                                {typeof url === "string"
                                  ? url.replace(/https?:\/\//, "").split("/")[0]
                                  : "Source"}
                              </span>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 border-2 border-blue-200 text-sm px-4 py-3 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                          <span className="text-slate-700 font-medium">
                            Source
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Show more indicator if there are additional URLs */}
                    {Array.isArray(searchInfo.urls) &&
                      searchInfo.urls.length > 4 && (
                        <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-2 border-slate-200 text-sm px-4 py-3 rounded-xl">
                          <div className="flex items-center space-x-3 text-slate-600">
                            <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"></div>
                            <span className="font-medium">
                              +{searchInfo.urls.length - 4} more sources
                            </span>
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Enhanced Writing Stage */}
        {searchInfo.stages.includes("writing") && (
          <div className="relative">
            {/* Enhanced indicator dot */}
            <div className="absolute -left-6 top-1.5 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full z-10 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur opacity-60 animate-pulse"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-semibold text-lg text-slate-800">
                  ✍️ Generating response
                </span>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.8s" }}
                  ></div>
                </div>
              </div>

              <div className="pl-1">
                <div className="bg-gradient-to-r from-emerald-50 via-white to-teal-50 border-2 border-emerald-200 text-sm px-6 py-3 rounded-xl inline-flex items-center shadow-lg backdrop-blur-sm">
                  <svg
                    className="w-4 h-4 mr-3 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span className="text-slate-800 font-semibold">
                    Synthesizing comprehensive answer...
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Error Message */}
        {searchInfo.stages.includes("error") && (
          <div className="relative">
            <div className="absolute -left-6 top-1.5 w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full z-10 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-full blur opacity-60"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-semibold text-lg text-red-700">
                  ❌ Search error
                </span>
              </div>

              <div className="pl-1">
                <div className="bg-gradient-to-r from-red-50 via-white to-red-50 border-2 border-red-200 text-sm px-6 py-4 rounded-xl shadow-lg backdrop-blur-sm">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-red-800 font-medium">
                      {searchInfo.error ||
                        "An error occurred during search. Please try again."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MessageArea = ({ messages }: { messages: any[] }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex-grow overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      style={{ minHeight: 0 }}
    >
      <div className="max-w-4xl mx-auto p-6">
        {messages.length === 0 ? (
          // Enhanced empty state
          <div className="flex flex-col items-center justify-center h-full min-h-[50vh] text-center">
            {/* Compact hero visual */}
            <div className="relative mb-6">
              {/* Smaller main logo with glow */}
              <div className="relative group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-all duration-500 mb-4">
                  <svg
                    className="w-8 h-8 text-white drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                {/* Smaller animated glow rings */}
                <div className="absolute inset-0 -m-2 bg-gradient-to-br from-orange-400/30 to-red-600/30 rounded-full blur-lg opacity-60 animate-pulse"></div>
                <div
                  className="absolute inset-0 -m-4 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-full blur-xl opacity-40 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>

            {/* Compact welcome message */}
            <div className="space-y-4 max-w-xl">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-orange-600 bg-clip-text text-transparent">
                Welcome to IntelliSearch AI
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Your intelligent research companion powered by advanced AI. Ask
                questions, explore topics, and discover insights from across the
                web.
              </p>

              {/* Smaller feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="group p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm">
                    Smart Search
                  </h3>
                  <p className="text-xs text-slate-600">
                    Advanced web search with real-time results and intelligent
                    filtering
                  </p>
                </div>

                <div className="group p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm">
                    AI Synthesis
                  </h3>
                  <p className="text-xs text-slate-600">
                    Intelligent analysis and synthesis of information from
                    multiple sources
                  </p>
                </div>

                <div className="group p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm">
                    Conversational
                  </h3>
                  <p className="text-xs text-slate-600">
                    Natural conversation with memory and context understanding
                  </p>
                </div>
              </div>

              {/* Compact suggested prompts */}
              <div className="mt-8">
                <p className="text-base font-medium text-slate-700 mb-3">
                  Try asking about:
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Latest tech trends",
                    "Climate change research",
                    "AI developments",
                    "Market analysis",
                  ].map((prompt, index) => (
                    <button
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-orange-100 hover:to-orange-200 text-slate-700 rounded-lg border border-slate-300 hover:border-orange-300 transition-all duration-300 hover:shadow-sm transform hover:-translate-y-0.5 text-xs font-medium"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Enhanced message display
          <div className="space-y-8">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div className="flex flex-col max-w-4xl w-full">
                  {/* Search Status Display - Above the message */}
                  {!message.isUser && message.searchInfo && (
                    <SearchStages searchInfo={message.searchInfo} />
                  )}

                  {/* Enhanced Message Content */}
                  <div
                    className={`rounded-2xl py-6 px-8 shadow-lg border transition-all duration-300 hover:shadow-xl group ${
                      message.isUser
                        ? "bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 text-white ml-auto border-slate-700 shadow-2xl max-w-2xl"
                        : "bg-white/80 backdrop-blur-sm text-slate-800 border-slate-200 shadow-xl"
                    }`}
                  >
                    {/* Message header with enhanced avatars */}
                    <div className={`flex items-start space-x-4`}>
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center text-lg font-semibold shadow-lg transition-transform duration-300 group-hover:scale-105 ${
                          message.isUser
                            ? "bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-orange-500/30"
                            : "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-blue-500/30"
                        }`}
                      >
                        {message.isUser ? "👤" : "🤖"}
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Message role indicator */}
                        <div
                          className={`text-xs font-medium mb-2 ${
                            message.isUser ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {message.isUser ? "You" : "IntelliSearch AI"}
                        </div>

                        {message.isLoading ? (
                          <PremiumTypingAnimation />
                        ) : (
                          <div
                            className={`prose max-w-none ${
                              message.isUser
                                ? "prose-invert prose-slate"
                                : "prose-slate"
                            }`}
                          >
                            {message.content || (
                              <span
                                className={`text-sm italic ${
                                  message.isUser
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                }`}
                              >
                                Preparing response...
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageArea;
