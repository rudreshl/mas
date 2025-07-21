import { useEffect, useState } from "react";

export default function CountUp(props) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    if (number > props.number) return;
    const timer = setInterval(() => {
        setNumber(prev => prev + 1);
    }, props.speed);

    return () => clearInterval(timer); // Cleanup
  }, [number]);
  return <span className="">{number}</span>;
}
