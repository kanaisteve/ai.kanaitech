// export default function Home() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Welcome to Kanai Technologies</h1>
//       <p className="mt-2">Empowering SMEs with AI-driven solutions.</p>
//     </div>
//   );
// }

import HeroWithPhoto from '../components/HeroWithPhoto';
import Features from '../components/Features';

const About = () => {
  return (
    <>
      <HeroWithPhoto />
      <Features />
    </>
  );
};

export default About;