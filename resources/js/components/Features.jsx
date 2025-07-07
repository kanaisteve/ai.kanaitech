import { CpuChipIcon, CloudArrowUpIcon, ShieldCheckIcon, ClipboardDocumentCheckIcon,LockClosedIcon, BanknotesIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'WorkBench',
    description:
      'Freelancer and MSME\'s workspace: manage project/tasks, clients, cashflow, and invoices',
    icon: ClipboardDocumentCheckIcon,
    // icon: CloudArrowUpIcon,
  },
  {
    name: 'BizAI Assistant', 
    description:
      'AI-powered business advisor, forecast tool, and bookkeeper in your pocket (for SMEs and Shop owners)',
    icon: CpuChipIcon,
  },
  {
    name: 'LogShield',
    description:
      'ICT Compliance, logging and observability for SMEs, schools, and ministries',
    icon: ShieldCheckIcon,
  },
  {
    name: 'KisuLoans',
    description:
      'End-to-end digital loan management for lenders, SACCOs, micro-finance and fintechs',
    icon: BanknotesIcon,
  },
]

export default function Features() {
  return (
    // <div className="bg-white py-24 sm:py-32">
    <div className="bg-white mb-16 sm:mb-32">

      <div className="mx-auto text-center mb-16">
        <h2 className="text-base font-semibold text-red-600">Why Choose Kanai Technologies</h2>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-x-8 gap-y-16">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for Africa. Powered by Local Intelligence
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our tools are designed for the real-world conditions of African entrepreneurs, cooperatives, landlords, teachers, lenders, and institutions. That means Offline-friendly access, Mobile-first dashboards, and AI-powered insights that work in local languages and contexts.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From a solo entrepreneur in Kitwe to a landlord in Lusaka or a cooperative in Chipata — we’ve got your context covered.
            </p>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:flex-auto">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-red-600">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
