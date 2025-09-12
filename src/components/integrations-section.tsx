import React from 'react';

export default function IntegrationsSection() {
  return (
    <section className="bg-[#d6f6d9] relative overflow-hidden py-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '80px 80px'
             }}>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-30">
        <div className="w-full h-full bg-gradient-to-bl from-green-400/20 to-green-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-8">
          {/* Subtitle */}
          <div className="text-lg font-medium text-[#041319]/70 tracking-tight">
            Integrations
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-medium text-[#041117] leading-tight tracking-tight">
              Seamless Integrations for
              <br />
              Effortless Workflow
            </h2>
            <p className="text-lg text-[#576165] leading-relaxed max-w-3xl mx-auto">
              Connect with your favorite tools to optimize efficiency and streamline your processes.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="bg-white hover:bg-gray-50 transition-colors duration-200 inline-flex items-center gap-3 px-6 py-4 rounded-xl shadow-sm font-semibold text-[#041117] text-base">
              Start Integrating Now
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Grid Blocks Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated grid blocks */}
        <div className="absolute top-20 left-1/4 w-20 h-20 bg-green-500/20 rounded-lg animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-16 h-16 bg-green-600/15 rounded-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-green-400/25 rounded-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/4 w-18 h-18 bg-green-500/20 rounded-lg animate-pulse delay-1500"></div>
      </div>
    </section>
  );
}