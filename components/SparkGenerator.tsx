import React, { useState, useEffect } from "react";

interface Spark {
  x: number;
  y: number;
  id: number;
  size: number;
}

const SparkGenerator: React.FC = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const newSpark: Spark = {
        x: clientX,
        y: clientY,
        id: Date.now(),
        size: Math.random() * 10 + 5, // Random size between 5 and 15
      };

      setSparks((prevSparks) => [...prevSparks, newSpark]);

      setTimeout(() => {
        setSparks((prevSparks) =>
          prevSparks.filter((spark) => spark.id !== newSpark.id)
        );
      }, 500); // Remove spark after 2 seconds
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen pointer-events-none">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute bg-black rounded-full animate-spark"
          style={{
            top: spark.y,
            left: spark.x,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default SparkGenerator;
