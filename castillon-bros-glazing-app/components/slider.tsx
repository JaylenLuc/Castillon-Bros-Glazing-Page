import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export function Slider() {
  return (
    <>
        <Carousel className="w-full max-w-screen-xl mx-auto">
          <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="text-center md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 ">
                  <Card>
                      <CardContent className="flex aspect-square items-center justify-center">
                      </CardContent>
                  </Card>
                  <span className="text-xl font-semibold text-primary ">{index + 1} Image and text</span>
                  </div>
              </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
       
    </>
    
  )
}