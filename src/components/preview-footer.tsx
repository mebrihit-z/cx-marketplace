const logoIcon = "icons/preview-log.svg";
export default function PreviewFooter() {
  
  return (
    <div 
      className="px-6 sm:px-8 lg:px-12 py-12 sm:py-16"
      style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 358.23\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(47.521 27.794 -27.794 47.521 634.5 0.000010398)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(1,7,8,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(2,13,16,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,20,12,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">
          {/* Left Section - Logo and Tagline */}
          <div className="lg:w-[30%]">
            <div className="flex items-center gap-4 mb-6">
              {/* Logo Icon */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src={logoIcon} alt="Logo" className="w-12 h-12" />
              </div>
              {/* Stain Text */}
              <h2 className="text-5xl font-bold text-white">Stain</h2>
            </div>
            
            {/* Tagline */}
            <h3 className="text-xl font-bold text-white mb-2">
              Empower Your Business for Success
            </h3>
            <p className="text-white text-base">
              Streamline, enhance, achieve, and succeed.
            </p>
          </div>
          
          {/* Right Section - Navigation Links */}
          <div className="lg:w-[70%]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Solutions Column */}
              <div>
                <h4 className="text-green-400 font-semibold text-lg mb-4">Solutions</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">e Commerce Distributors</a></li>
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">Brand Commerce</a></li>
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">Omnichannel Retailers</a></li>
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">Cross-Borders e Commerce</a></li>
                </ul>
              </div>
              
              {/* Company Column */}
              <div>
                <h4 className="text-green-400 font-semibold text-lg mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">Journey</a></li>
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">Blog</a></li>
                </ul>
              </div>
              
              {/* Resources Column */}
              <div>
                <h4 className="text-green-400 font-semibold text-lg mb-4">Resources</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">Partner Program</a></li>
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">What is SaaS?</a></li>
                  <li><a href="#" className="text-white hover:text-green-400 transition-colors">SaaS Comparison</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-white text-sm">
            Copyright © 2023 Stain. All Rights Reserved
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {/* X (Twitter) Icon */}
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Facebook Icon */}
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Reddit Icon */}
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
