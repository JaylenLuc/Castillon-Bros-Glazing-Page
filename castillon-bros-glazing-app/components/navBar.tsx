"use client"
 
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 

const homeFragments = [
  { title: "Cover Page", href: "/#home"},
    { title: "About us", href: "/#about" },
    { title: "Slide Show", href: "/#slideshow" },
    { title: "Our services", href: "/#services" },
  ];
 
export function NavBar() {
    //projects
    //home
    //The Team
    //contact us

  return (
    <nav className= "bg-primary text-primary-foreground border border-border w-full justify-between z-50 sticky top-0 flex items-center justify-between px-6 py-4 shadow-md">
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-3">
        <Icons.logo className="h-8 w-8" /> {/* Your Logo */}
        <span className="text-xl font-bold">Castillon Bros Glazing</span>
      </div>
      <div className="flex justify-end">
        <NavigationMenu className="relative">
          <NavigationMenuList className="ml-auto">
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="bg-primary text-primary-foreground border border-border ">Home</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 w-max">
                <ul className="grid gap-3 p-4 ">
                  {homeFragments.map((fragment) => (
                    <li key={fragment.href}>
                      <Link href={fragment.href} passHref legacyBehavior>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {fragment.title}
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-primary text-primary-foreground border border-border px-4 py-2 rounded-md"
                )}>
                Projects
              </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem >
                <Link href="/team" legacyBehavior passHref>            
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-primary text-primary-foreground border border-border px-4 py-2 rounded-md"
                  )}>
                  The Team
                </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>            
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-primary text-primary-foreground border border-border px-4 py-2 rounded-md"
                  )}>
                  Contact Us
                </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          
        </NavigationMenu>
      </div>
    </nav>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
