import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator";
const serviceList = [
    {
        k : "1",
        name : <span className="text-primary">service 1</span>, 
        image :     <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>,
        desc : <span >fdhasjklfhdjksfhdjskahfdkjshfdajskfhdsajkfhdsajklhhfdjksa</span>
    
    } ,
    {
        k : "2",
        name : <span className="text-primary">service 2</span>, 
        image :     <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>,
        desc : <span >fdhasjklfhdjksfhdjskahfdkjshfdajskfhdsajkfhdsajklhhfdjksa</span>
    
    } ,
    {
        k : "3",
        name : <span className="text-primary">service 3</span>, 
        image :     <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>,
        desc : <span >fdhasjklfhdjksfhdjskahfdkjshfdajskfhdsajkfhdsajklhhfdjksa</span>
    
    } ,
    {
        k : "4",
        name : <span className="text-primary">service 4</span>, 
        image :     <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>,
        desc : <span >fdhasjklfhdjksfhdjskahfdkjshfdajskfhdsajkfhdsajklhhfdjksa</span>
    
    } 

]
export function Skelly() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center text-primary mb-6">
        Our Services
      </h1>
      
      <ul className="space-y-4">
        {serviceList.map((item) => (
          <li key={item.k} className="rounded-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0">
                {item.image}
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="font-medium text-primary">
                  {item.name}
                </div>
                <div className="text-sm text-primary">
                  {item.desc}
                </div>
              </div>
            </div>
            <Separator className="mt-4" />
          </li>
        ))}
      </ul>
    </div>
  )
}
