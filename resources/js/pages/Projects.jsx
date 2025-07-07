// export default function Projects() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Our Projects</h1>
//       <p className="mb-4">
//         Check out some of our successful projects and implementations.
//       </p>
//     </div>
//   );
// }

const ProjectCard = ({ logo, title, excerpt, clientName, category }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex-shrink-0 bg-white p-6">
        <img
          className="h-12 w-auto object-contain"
          src={logo}
          alt={`${clientName} logo`}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-red-600">
            {category}
          </p>
          <div className="mt-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base text-gray-500">
              {excerpt}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <div className="text-sm text-gray-500">
              <p>Client: <span className="font-medium text-gray-900">{clientName}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      logo: "/images/clients/mwds.png",
      title: "Integrate Management Information System",
      excerpt: "Led architectural design and implementation of a comprehensive information system for data-driven decision making, stakeholder management, and monitoring water sector performance indicators.",
      clientName: "Ministry of Water Development and Sanitation",
      category: "Government"
    },
    {
      logo: "/images/clients/nwasco.png",
      title: "NWASCO Internal ERP",
      excerpt: "Engineered a comprehensive ERP system automating HR, administration, finance, and ICT operations, transforming manual processes into digital workflows for enhanced organizational efficiency and decision-making.",
      clientName: "National Water Supply and Sanitation Council",
      category: "Water"
    },
    {
      logo: "/images/clients/recordcare.png",
      title: "Digital Records Management System",
      excerpt: "Developed an enterprise-grade document management platform with secure digital archiving, workflow automation, and compliance tracking for seamless organizational record-keeping and data governance.",
      clientName: "RecordCare Consultants",
      category: "Enterprise Solutions"
    },
    {
      logo: "/images/clients/swenastar.png",
      title: "Event Management Platform",
      excerpt: "Built a comprehensive event management platform featuring automated ticketing, RSVP handling, and real-time entry management for seamless African events and gatherings.",
      clientName: "SwenaStar Events",
      category: "Events"
    },
    {
      logo: "/images/clients/primecare_horizontal.png",
      title: "PrimeCare Property Management",
      excerpt: "Developed a website and comprehensive property management platform with listing management, client portal, and automated workflows for buying, selling, and renting properties across Zambia.",
      clientName: "PrimeCare Property Zambia",
      category: "Real Estate"
    },
    {
      logo: "/images/clients/unicef.png",
      title: "WASH Data Analytics",
      excerpt: "Analyzed nationwide WASH survey data, developing structured insights and interactive dashboards to support evidence-based decision-making for water and sanitation initiatives across Zambia.",
      clientName: "UNICEF Zambia",
      category: "Data Analytics"
    },
    {
      logo: "/images/clients/luwsi.png",
      title: "LuWSI Website & Event Management",
      excerpt: "Upgraded website infrastructure and developed an integrated event management system with automated registration workflows for workshops and stakeholder engagement activities.",
      clientName: "Lusaka Water Security Initiative",
      category: "Water"
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32 mt-14">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-red-600">Our Projects</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Showcasing Our Success Stories
        </p>
        <div className="mt-10 grid gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              logo={project.logo}
              title={project.title}
              excerpt={project.excerpt}
              clientName={project.clientName}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
