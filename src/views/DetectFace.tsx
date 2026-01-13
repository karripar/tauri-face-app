import Camera from "@/components/Camera";
import { useRef } from "react";


const DetectFace = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <>
        <div className="p-4 text-center">
           <Camera ref={videoRef} width={640} height={480} />
        </div>
    </>
  )
}

export default DetectFace; 