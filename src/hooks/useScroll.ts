import { scrollToContact } from "@/utils/helpers";
import { usePathname, useRouter } from "next/navigation";

export const useScrollNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  /**
   * This function adds a pathname to scrollTo=contact to url if user is not in home page otherwise scrolls to contact element.
   * @param e React mouse event includes <HTMLAnchorElement, MouseEvent> | More generic type
   */
  const handleContactScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (pathname === "/") {
      scrollToContact();
    } else {
      router.push("/?scrollTo=contact");
    }
  };
  return { handleContactScroll };
};
