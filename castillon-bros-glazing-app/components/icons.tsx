import { Activity, Menu } from "lucide-react";
import Image from "next/image";

// Export a set of icons as components
export const Icons = {
  logo: ({ src, alt, width, height, ...rest }: React.ComponentProps<typeof Image>) => (
    <Image
      src="/logo_glaze.png"
      alt="Logo"
      width={32}
      height={32}
      {...rest}
    />
  ),
  menu: Menu,    // Just the component, not JSX
  // Add other icons as needed
};