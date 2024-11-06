import { useState, useEffect } from 'react';

const CounterItem = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-[#A16A00] mb-2">
        {count}+
      </h3>
      <p className="text-white text-sm md:text-base">{label}</p>
    </div>
  );
};

export default function Counter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      <CounterItem end={2000} label="registrations" />
      <CounterItem end={50} label="community partners" />
      <CounterItem end={45} label="evangelists" />
      <CounterItem end={35} label="cities" />
    </div>
  );
}
