"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useState } from "react";

const homeFragments = [
  { title: "Cover Page", href: "/#home" },
  { title: "About us", href: "/#about" },
  { title: "Slide Show", href: "/#slideshow" },
  { title: "Our services", href: "/#services" },
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground w-full z-50 sticky top-0 shadow-md">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-3">
            <Icons.logo className="h-8 w-8" />
            <span className="text-lg sm:text-xl font-bold whitespace-nowrap">
              Castillon Bros Glazing
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary-foreground/10 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground border border-border px-4 py-2 rounded-md">
                    Home
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-2 p-4">
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
                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink  className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-primary text-primary-foreground border border-border px-4 py-2 rounded-md"
                )}>
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/team" legacyBehavior passHref>
                    <NavigationMenuLink  className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-primary text-primary-foreground border border-border px-4 py-2 rounded-md"
                )}>
                      The Team
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink  className={cn(
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
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="px-4 py-2 space-y-2">
            <div className="space-y-2">
              <div className="font-medium px-3 py-2">Home</div>
              {homeFragments.map((fragment) => (
                <Link
                  key={fragment.href}
                  href={fragment.href}
                  className="block px-3 py-2 text-sm hover:bg-primary-foreground/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {fragment.title}
                </Link>
              ))}
            </div>
            <Link
              href="/projects"
              className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/team"
              className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              The Team
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 hover:bg-primary-foreground/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
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
  );
});
ListItem.displayName = "ListItem";