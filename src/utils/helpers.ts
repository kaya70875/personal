/**
 * Scrolls down to contact page with smooth behavior.
 */
export const scrollToContact = () => {
  const contactRef = document?.querySelector(".contact");
  if (contactRef) {
    contactRef.scrollIntoView({ behavior: "smooth" });
  }
};
