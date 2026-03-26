import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = 0,
      y = 0,
      rx = 0,
      ry = 0;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    };

    const animate = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.opacity = "0.3";
    };

    const onLeave = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.6";
    };

    const attachListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    document.addEventListener("mousemove", onMove);
    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  const shared = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 9999,
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    top: 0,
    left: 0,
  };

  return (
    <>
      <Box ref={dotRef} style={shared} w="6px" h="6px" bg="#CDA84F" />
      <Box
        ref={ringRef}
        style={shared}
        w="36px"
        h="36px"
        border="1.5px solid rgba(205, 168, 79, 0.6)"
        opacity={0.6}
        transition="width 0.3s, height 0.3s, opacity 0.3s"
      />
    </>
  );
}

export default Cursor;
