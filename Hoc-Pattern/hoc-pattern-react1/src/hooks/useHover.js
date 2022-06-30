import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [hovering, setHover] = useState(false);
  const ref = useRef(null);
  const handleMouseHover = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseHover);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseHover);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);
  return [ref, hovering];
}
