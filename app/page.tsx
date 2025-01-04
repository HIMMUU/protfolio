import Approach from "@/components/Approach";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Appproachlamp from "@/components/Approachlamp";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";
import TechStack from "@/components/TechStack";
// Update this line with the correct module name

export default function Home(){
  return (
    <main className ="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-20 px-5">

<div className="max-w-7xl w-full">

<FloatingNav navItems={navItems}/>
<Hero />
<Dock/>
<Grid/>

<TechStack/>
<RecentProjects/>
<Appproachlamp/>
<Approach/>
<Footer/>


</div>
</main>
);
}