import Image from "next/image";
import { Slider } from "@/components/slider";
import { Separator } from "@/components/ui/separator";
import { Skelly } from "@/components/skelly";



export default function Home() {
  return (
    <div id="home" className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <div className="rounded-2xl shadow-lg min-h-screen w-[95%] text-primary flex items-center justify-center">
            
            <h1 className="text-4xl font-bold text-center">
              Your Title Goes Here and image goes int the back
            </h1>
      </div> 
      <Separator className="my-4 mt-5 mb-2" />
      <div id="about" className="text-center scroll-mt-16">
          <span className="text-2xl font-bold text-center text-primary"> About us: Clorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </p>
      </div>
      <Separator className="my-4 mt-2 mb-2" />
      <div id="slideshow" className="scroll-mt-16">
        <Slider/>
      </div>  
      <Separator className="my-4 mt-2 mb-2" />
      <div id="services" className="scroll-mt-16">
        <Skelly/>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
    </div>
  );
}
