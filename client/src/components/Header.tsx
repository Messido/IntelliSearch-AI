const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 bg-gradient-to-r from-slate-800 via-slate-900 to-indigo-900 shadow-xl">
      {/* Enhanced background with depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 via-slate-900/95 to-indigo-900/90"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>

      {/* Logo section with enhanced branding */}
      <div className="flex items-center relative z-10">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Enhanced logo with glow effect */}
          <div className="relative group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              <svg
                className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-orange-400/30 to-red-600/30 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Enhanced brand name with gradient text */}
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-white via-blue-100 to-orange-100 bg-clip-text text-transparent tracking-tight">
              IntelliSearch AI
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide hidden sm:block">
              AI-Powered Research Assistant
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation with better spacing */}
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 relative z-10">
        <div className="hidden md:flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          <NavButton active={false}>HOME</NavButton>
          <NavButton active={true}>CHAT</NavButton>
          <NavButton active={false}>DISCOVER</NavButton>
          <NavButton active={false}>SETTINGS</NavButton>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="p-2 text-slate-300 hover:text-white transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// Navigation Button Component
const NavButton = ({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <button
      className={`
        relative px-3 py-2 sm:px-4 lg:px-6 sm:py-2 lg:py-3 rounded-lg lg:rounded-xl font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 group
        ${
          active
            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105"
            : "text-slate-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
        }
      `}
    >
      {/* Active button glow effect */}
      {active && (
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-600 rounded-lg lg:rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      )}

      <span className="relative z-10">{children}</span>

      {/* Hover highlight line for inactive buttons */}
      {!active && (
        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></div>
      )}
    </button>
  );
};

export default Header;
