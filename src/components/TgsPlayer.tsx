import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import pako from "pako";

interface TgsPlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
}

export function TgsPlayer({ src, className, loop = true }: TgsPlayerProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const decompressed = pako.inflate(new Uint8Array(buffer), { to: "string" });
        setAnimationData(JSON.parse(decompressed));
      })
      .catch(console.error);
  }, [src]);

  if (!animationData) return null;

  return <Lottie animationData={animationData} loop={loop} className={className} />;
}
