// export default function MainLayout({ children }) {
//   return (
//     <div className="font-sans text-gray-800">
//       <header className="bg-blue-900 text-white p-4">
//         <div className="container mx-auto flex justify-between">
//           <h1 className="text-xl font-bold">Kanai Technologies</h1>
//           <nav className="space-x-4">
//             <a href="/" className="hover:underline">Home</a>
//             <a href="/about" className="hover:underline">About</a>
//             <a href="/projects" className="hover:underline">Projects</a>
//             <a href="/services" className="hover:underline">Services</a>
//             <a href="/contact" className="hover:underline">Contact</a>
//           </nav>
//         </div>
//       </header>
//       <main className="container mx-auto p-4">{children}</main>
//     </div>
//   );
// }

import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-grow pt-6">
            {children}
        </main> 
        
        {/* {children} */}

      <Footer />
    </div>
  );
};

export default MainLayout;
