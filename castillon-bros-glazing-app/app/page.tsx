import { Slider } from "@/components/slider";
import { Separator } from "@/components/ui/separator";
import { Skelly } from "@/components/skelly";
import Image from "next/image";

export default function Home() {
  return (
    <div 
      id="home" 
      className="flex flex-col w-full min-h-screen font-[family-name:var(--font-geist-sans)]"
    >
      {/* Hero Section */}
      <div className="w-full p-4 md:p-8 mb-8">
        <div className="relative rounded-2xl shadow-lg min-h-[50vh] md:min-h-[70vh] w-full max-w-screen-xl mx-auto text-primary flex items-center justify-center overflow-hidden">
          <Image
            src="/cover.png"
            alt="Cover"
            fill
            className="object-cover z-0"
            priority
          />
          <h1 className="relative z-10 text-4xl font-bold text-center text-white drop-shadow-lg">
            World class glazing 
          </h1>
          <div className="absolute inset-0 bg-black/40 z-0" />
        </div>
      </div>

      <Separator className="w-[90%] mx-auto" />

      {/* About Section */}
      <div 
        id="about" 
        className="text-center scroll-mt-16 w-full px-4 md:px-8 py-8"
      >
        <span className="text-xl md:text-2xl font-bold text-primary block mb-4">
          About us: Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
        <p className="max-w-prose mx-auto text-sm md:text-base">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum
        </p>
      </div>

      <Separator className="w-[90%] mx-auto" />

      {/* Slideshow Section */}
      <div 
        id="slideshow" 
        className="scroll-mt-16 w-full px-4 md:px-16 py-8"
      >
        <Slider />
      </div>

      <Separator className="w-[90%] mx-auto" />

      {/* Services Section */}
      <div 
        id="services" 
        className="scroll-mt-16 w-full px-4 md:px-8 py-8"
      >
        <Skelly />
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div id="home" className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
//       <div className="rounded-2xl shadow-lg min-h-screen w-[95%] text-primary flex items-center justify-center">
            
//             <h1 className="text-4xl font-bold text-center">
//               Your Title Goes Here and image goes int the back
//             </h1>
//       </div> 
//       <Separator className="my-4 mt-5 mb-2" />
//       <div id="about" className="text-center scroll-mt-16">
//           <span className="text-2xl font-bold text-center text-primary"> About us: Clorem ipsum dolor sit amet, consectetur adipiscing elit</span>
//         <p>
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//         </p>
//       </div>
//       <Separator className="my-4 mt-2 mb-2" />
//       <div id="slideshow" className="scroll-mt-16">
//         <Slider/>
//       </div>  
//       <Separator className="my-4 mt-2 mb-2" />
//       <div id="services" className="scroll-mt-16">
//         <Skelly/>
//       </div>
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
//     </div>
//   );
// }
