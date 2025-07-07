const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'AI Services', href: '/services#ai' },
    { name: 'Mobile Apps', href: '/services#mobile' },
    { name: 'Web Development', href: '/services#web' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
  ];

  const contactInfo = {
    address: '123 Tech Street, Digital City',
    email: 'info@kanaitech.com',
    phone: '+1 (234) 567-8900'
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/kanaitech', icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    )},
    { name: 'Twitter', href: 'https://twitter.com/kanaitech', icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    )},
    { name: 'LinkedIn', href: 'https://linkedin.com/company/kanaitech', icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    )},
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <img
              className="h-8 w-auto mb-4"
              src="/images/kanai_tech.png"
              alt="Kanai Tech"
            />
            <p className="text-gray-500 text-sm">
              Kanai Technologies is an AI-first innovation company. We are building the intelligent infrastructure for intelligent African businesses — one AI-powered module at a time, data-driven, multilingual, affordable.
            </p>
            {/* <p className="text-gray-500 text-sm">
              Kanai Technologies is building intelligent digital solutions for African businesses. We empower SMEs with AI-driven tools, from custom ERPs and chatbots to lending and property platforms - making technology accessible, localized, and affordable.
            </p> */}
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-sm text-gray-500 hover:text-gray-900">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>{contactInfo.address}</li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gray-900">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-gray-900">
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Existing copyright and social links section */}
        <div className="mt-8 pt-8 border-t border-gray-200 md:flex md:items-center md:justify-between">
          <div className="text-gray-500">
            © {new Date().getFullYear()} Kanai Technologies. All rights reserved.
          </div>
          <div className="mt-4 flex justify-center space-x-6 md:mt-0">
            {/* ...existing social links map... */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
