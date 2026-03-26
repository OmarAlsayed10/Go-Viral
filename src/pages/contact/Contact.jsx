import { Box } from "@chakra-ui/react";
import ContactHero from "./components/contacthero";
import ContactForm from "./components/contactform";

function Contact() {
  return (
    <Box as="main">
      <ContactHero />
      <ContactForm />
    </Box>
  );
}

export default Contact;
