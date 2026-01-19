import { RefObject, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const useFaceDetection = () => {
  const [detection, setDetection] = useState<faceapi.FaceDetection | null>(
    null
  );

  // Detect face from video frames
  const getDescriptors = async (videoRef: RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      const result = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks(true)
        .withFaceDescriptor();

      if (!result) {
        setDetection(null);
        return;
      }

      setDetection(result?.detection); // Update detection state
      console.log(result);
    }
  };

  useEffect(() => {
    // Load the face detection models
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models");
        await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
        console.log("Models loaded");
      } catch (error) {
        console.error("Error loading models:", error);
      }
    };

    loadModels();
  }, []);

  return { detection, getDescriptors };
};

export { useFaceDetection };
