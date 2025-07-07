// export default function Services() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Our Services</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="p-4 border rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2">AI Solutions</h2>
//           <p>Custom AI solutions for your business needs</p>
//         </div>
//         <div className="p-4 border rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2">Web Development</h2>
//           <p>Modern web applications built with cutting-edge technology</p>
//         </div>
//         <div className="p-4 border rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-2">Digital Transformation</h2>
//           <p>Transform your business with digital solutions</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { CpuChipIcon, ArchiveBoxIcon, ShoppingBagIcon, CircleStackIcon, HomeIcon, CalendarDateRangeIcon, ShieldCheckIcon, ClipboardDocumentCheckIcon,GlobeAltIcon, BanknotesIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-px rounded-lg bg-white border-2 border-gray-200 group-hover:border-red-300 transition-colors duration-200"></div>
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10 pb-6">
          <div className="flex items-center">
            <Icon className="h-8 w-8 text-red-600" />
            <p className="ml-4 text-lg font-medium tracking-tight text-gray-950">{title}</p>
          </div>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600">{description}</p>
        </div>
      </div>
      {/* <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5"></div> */}
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies, ensuring responsive design, fast performance, secure transactions, and seamless integration with African payment systems.",
      icon: GlobeAltIcon,
    },
    {
      title: "Data Engineering & Analytics",
      description: "Comprehensive data collection and structuring solutions for AI integration, helping businesses organize customer, project, payment, and operational data for actionable insights.",
      icon: CircleStackIcon,
    },
    {
      title: "AI Solutions & Chatbots",
      description: "Custom smart AI chatbots and automation tools tailored for African businesses, enabling 24/7 customer support, streamlined operations and enhance decision-making.",
      icon: CpuChipIcon,
    },
    {
      title: "Custom ERP Systems",
      description: "Tailored enterprise systems that integrate finance, sales, inventory, and customer management, designed for streamlined business operations.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "ICT Compliance & Security",
      description: "Help ICT managers meet compliance requirements with comprehensive system monitoring, security logging, and threat detection tools designed for schools, SMEs, and government institutions.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Digital Lending Platform",
      description: "Empower lenders, SACCOs, and fintechs with comprehensive loan management solutions - from application processing to disbursement tracking, all in one digital platform.",
      icon: BanknotesIcon,
    },
    {
      title: "Event Management Platform",
      description: "Comprehensive event management system for ticketing, RSVPs, and entry check-ins, streamlining African events and gatherings.",
      icon: CalendarDateRangeIcon,
    },
    {
      title: "Property Tech Platform",
      description: "Digital property management solution connecting landlords, agents and tenants. Handle listings, automate rent collection, and track maintenance - all in one platform.",
      icon: HomeIcon,
    },
    {
      title: "Digital Records Manager",
      description: "Streamline your organization's document handling with our secure digital records system. Efficiently manage, track, and retrieve documents while ensuring compliance and accessibility.",
      icon: ArchiveBoxIcon,
    },
    {
      title: "Smart Learning Solutions",
      description: "AI-powered educational platform helping African schools and students access personalized learning experiences and resources.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 0113 15.473v.001l.054-.001z" />
        </svg>
      )
    },
    {
      title: "AgriTech Platform",
      description: "Empower farmers, cooperatives, and agricultural officers with market insights, data-driven decision tools, and direct access to buyers through our digital marketplace.",
      icon: ChartBarIcon,
    },
    {
      title: "Smart Retail OS",
      description: "Transform your retail business with our all-in-one platform. Manage inventory, track sales, handle WhatsApp orders, and access digital payments - designed for African shops.",
      icon: ShoppingBagIcon,
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32 mt-14">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-red-600">Our Services</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Transforming Ideas into Digital Reality
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
