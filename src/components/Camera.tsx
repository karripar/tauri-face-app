type CameraProps = {
  width: number;
  height: number;
};
import { useRef, forwardRef, useImperativeHandle, useEffect} from "react";

const Camera = forwardRef<HTMLVideoElement, CameraProps>((props, ref) => {
  const { width, height } = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useImperativeHandle(ref, () => videoRef.current!);

  useEffect(() => {
    const setupCamera = async () => {
        try {
            if (videoRef.current) {
                const stream = await navigator.mediaDevices.getUserMedia();
                videoRef.current.srcObject = stream;
                await videoRef.current.play();
            }
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };

    setupCamera();
    }, []);

  return (
    <>
      <div className="p-4 text-center">
        <video ref={videoRef} width={width} height={height}></video>
      </div>
    </>
  );
});

export default Camera;
