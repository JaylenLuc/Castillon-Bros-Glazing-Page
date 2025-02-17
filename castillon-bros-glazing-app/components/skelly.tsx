import { Separator } from "@/components/ui/separator";
const serviceList: any[] = [
    {
        k : "1",
        name : <span className="text-primary">service 1</span>, 
        image : <div className="h-12 w-12 rounded-full bg-primary" />,
        desc : <span className="">"fdhasjklfhdjksfhdjskahfdkjshfdajskfhdsajkfhdsajklhhfdjksa"</span>
    
    } ,
    {
        k : "2",
        name : <span className="text-primary">service 2</span>, 
        image : <div className="h-12 w-12 rounded-full bg-primary" />,
        desc : <span className="">"fdhasjklfhdjksfhdjskahfdkjshfdajskfhdsajkfhdsajklhhfdjksa"</span>
    
    } ,
    {
        k : "3",
        name : <span className="text-primary">service 3</span>, 
        image : <div className="h-12 w-12 rounded-full bg-primary" />,
        desc : <span className="">"fdhasjklfhdjksfhdjskahfdkjshfdajskfhdsajkfhdsajklhhfdjksa"</span>
    
    } ,
    {
        k : "4",
        name : <span className="text-primary">service 4</span>, 
        image : <div className="h-12 w-12 rounded-full bg-primary" />,
        desc : <span className="">"fdhasjklfhdjksfhdjskahfdkjshfdajskfhdsajkfhdsajklhhfdjksa"</span>
    
    } 

]
export function Skelly() {
  return (
    <>
        <h1 className="text-2xl font-bold text-center text-primary">Our Services</h1>
        <ul className="grid gap-3 p-4 ">
            {serviceList.map((item) => (
            <li key={item.k}>
                <div className="flex items-center space-x-4 ">
                    {item.image}
                    {item.name} : 
                    <div className="space-y-2 text-primary">
                        {item.desc}
                    </div>
                </div>
                <Separator className="my-2 mt-2 mb-2" />
            </li>
            
            ))}
        </ul>
    </>
  )
}
