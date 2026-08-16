'use client';
import { useState, useEffect, useRef } from 'react';

function getVisitorId() {
  let id = localStorage.getItem('visitorId');
  if (!id) {
    id = `v_${Math.random().toString(36).slice(2, 11)}`;
    localStorage.setItem('visitorId', id);
  }
  return id;
}

export function useActiveUsers() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    const visitorId = getVisitorId();

    // Heartbeat + count ek saath fetch karo
    const tick = async () => {
      try {
        const res = await fetch('/api/active-users', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ visitorId }),
        });
        const { count } = await res.json();
        setCount(count);
      } catch {}
    };

    tick(); // Turant pehli baar
    timer.current = setInterval(tick, 5_000); // Har 5 sec

    return () => clearInterval(timer.current);
  }, []);

  return count;
}