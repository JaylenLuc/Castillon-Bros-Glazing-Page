import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const projectsList: any[] = [
    {k : "proj1", title: "project 1", images: ["/stock.webp","/stock.webp","/stock.webp"],
        address: "123 Main St, City, Country",
        contractSize: "$500,000",
        description: "A modern glass installation project focusing on energy efficiency."
    },
    {k : "proj2", title: "project 2", images: ["/stock.webp","/stock.webp","/stock.webp"],
        address: "456 Elm St, City, Country",
        contractSize: "$750,000",
        description: "A skyscraper glazing project with state-of-the-art materials."
    },
    {k : "proj3", title: "project 3", images: ["/stock.webp","/stock.webp","/stock.webp"],
        address: "789 Oak St, City, Country",
        contractSize: "$300,000",
        description: "A custom residential glasswork project with intricate detailing."
    },
    {k : "proj4", title: "project 4", images: ["/stock.webp","/stock.webp","/stock.webp"],
        address: "789 Oak St, City, Country",
        contractSize: "$300,000",
        description: "A custom residential glasswork project with intricate detailing."
    }


]

export default function Projects() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
            <ul className="w-full space-y-8">
                {projectsList.map((item) => (
                    <li key={item.k} className="w-full flex grid-cols-1 sm:grid-cols-[auto_1fr] items-center gap-6">
                        {/* <Separator className="mt-2 mb-2" /> */}

                        {/* Left: Resizable Panels for Images */}
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-center text-primary mb-4">{item.title}</h1>
                            <ResizablePanelGroup
                                direction="horizontal"
                                className="max-w-lg rounded-lg border md:min-w-[450px]"
                            >
                                {/* First Panel */}
                                <ResizablePanel defaultSize={50}>
                                    <div className="relative h-[200px] w-full">
                                        <Image
                                            src={item.images[0]}
                                            alt="Project Image 1"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                        {/* <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black/40 rounded-lg">
                                            One
                                        </span> */}
                                    </div>
                                </ResizablePanel>

                                <ResizableHandle />

                                {/* Second Panel (Vertical Group) */}
                                <ResizablePanel defaultSize={50}>
                                    <ResizablePanelGroup direction="vertical">
                                        {/* Second Panel */}
                                        <ResizablePanel defaultSize={25}>
                                            <div className="relative h-full w-full">
                                                <Image
                                                    src={item.images[1]}
                                                    alt="Project Image 2"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-lg"
                                                />
                                                {/* <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black/40 rounded-lg">
                                                    Two
                                                </span> */}
                                            </div>
                                        </ResizablePanel>

                                        <ResizableHandle />

                                        {/* Third Panel */}
                                        <ResizablePanel defaultSize={75}>
                                            <div className="relative h-full w-full">
                                                <Image
                                                    src={item.images[2]}
                                                    alt="Project Image 3"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-lg"
                                                />
                                                {/* <span className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black/40 rounded-lg">
                                                    Three
                                                </span> */}
                                            </div>
                                        </ResizablePanel>
                                    </ResizablePanelGroup>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </div>

                        {/* Right: Description Area */}
                        <div className="flex-1 bg-secondary p-6 rounded-lg shadow-md border">
                            <h2 className="text-xl font-semibold text-primary mb-2">Project Details</h2>
                            <p className="text-muted-foreground">
                                <strong>📍 Address:</strong> {item.address}
                            </p>
                            <p className="text-muted-foreground">
                                <strong>💰 Contract Size:</strong> {item.contractSize}
                            </p>
                            <p className="text-muted-foreground mt-2">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
  }