
export const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">VistaVDI</h2>
            <p className="text-gray-400 mb-4">
              Professional Virtual Desktop Infrastructure solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Cloud VDI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">On-Premise VDI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Hybrid Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">VDI Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">info@vistavdi.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">123 Tech Plaza, Suite 400<br />San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 VistaVDI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-vdi-lightest transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
