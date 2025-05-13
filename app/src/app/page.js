"use client"

import styles from '../components/Intro/style.module.css'
import { useEffect } from 'react';
import Intro from '../components/Intro/index.jsx';
import Description from '../components/Description/index'
import Projects from '../components/Projects/index'


export default function Home() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}
