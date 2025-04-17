'use client';

import { motion as m } from 'motion/react';

import Hero from '@home/hero';
import Message from '@home/message';
import About from '@home/about';
import Faq from '@home/faq';
import Advices from '@home/advices';
import Kids from '@components/kids';

export default function Home() {
  return (
    <m.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Hero />
      <Message />
      <About />
      <Faq />
      <Advices />
      <Kids />
    </m.main>
  );
}
