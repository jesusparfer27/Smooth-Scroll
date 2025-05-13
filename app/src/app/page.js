"use client"

import styles from '../components/style.module.css'
import { useEffect } from 'react';
import Index from '../components/index.jsx';


export default function Home() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Index />
    </main>
  );
}
