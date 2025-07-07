import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'US',
    phoneNumber: '',
    message: '',
    agreeToPolicy: false
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (!formData.email || !formData.firstName || !formData.message) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Please fill in all required fields'
      });
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setNotification({
        show: true,
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        country: 'US',
        phoneNumber: '',
        message: '',
        agreeToPolicy: false
      });
    } catch (error) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact sales</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>

      {notification.show && (
        <div className={`mx-auto mt-6 max-w-xl rounded-md p-4 ${
          notification.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          <p>{notification.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
              First name<span className="text-red-600">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 invalid:outline-red-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email<span className="text-red-600">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 invalid:outline-red-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="US">US</option>
                    <option value="CA">CA</option>
                    <option value="EU">EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message<span className="text-red-600">*</span>
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 invalid:outline-red-500"
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px outline-offset-2 outline-indigo-600 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-600 has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
                <span className="size-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-3.5" />
                <input
                  id="agreeToPolicy"
                  name="agreeToPolicy"
                  type="checkbox"
                  checked={formData.agreeToPolicy}
                  onChange={handleChange}
                  required
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-none"
                />
              </div>
            </div>
            <label htmlFor="agreeToPolicy" className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="whitespace-nowrap font-semibold text-indigo-600 hover:text-indigo-500">
                privacy policy
              </a>
              .<span className="text-red-600">*</span>
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={loading}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : "Let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
