import { Menu } from "lucide-react";
import Image from "next/image";

// Export a set of icons as components
export const Icons = {
  logo: (props: Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "width" | "height">) => (
    <Image
      src="/logo_glaze.png"
      alt="Logo"
      width={32}
      height={32}
      {...props}
    />
  ),
  menu: Menu,    // Just the component, not JSX
  // Add other icons as needed
};