import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import { Box } from "@chakra-ui/react";
import { useConfigSection } from "./context/ConfigProvider";
function AppLayout({ children }) {
  const navigation = useConfigSection("navigation");
  const footer = useConfigSection("footer");
  const brand = useConfigSection("brand");
  const social = useConfigSection("social");
  return (
    <>
      <Cursor />
      <Box
        position="fixed"
        top="-200px"
        right="-100px"
        width="600px"
        height="600px"
        borderRadius="50%"
        bg="primary.500"
        filter="blur(120px)"
        opacity={0.18}
        pointerEvents="none"
        zIndex={0}
        animation="orbFloat 8s ease-in-out infinite"
      />
      <Box
        position="fixed"
        bottom="-100px"
        left="-80px"
        width="400px"
        height="400px"
        borderRadius="50%"
        bg="#2040a0"
        filter="blur(120px)"
        opacity={0.18}
        pointerEvents="none"
        zIndex={0}
        animation="orbFloat 10s ease-in-out infinite reverse"
      />
      <Navbar
        navItems={navigation.items}
        actions={navigation.actions}
        variant={navigation.variant}
        align={navigation.align}
        textColor={navigation.textColor}
        hoverColor={navigation.hoverColor}
      />
      {children}
      <Footer
        brand={brand}
        sections={footer.sections}
        backgroundColor={footer.backgroundColors}
        textColor={footer.textColor}
        social={social}
      />
    </>
  );
}
export default AppLayout;
