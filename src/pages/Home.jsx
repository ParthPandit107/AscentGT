import React from 'react';
import Hero from '../components/Home/Hero';
import Overview from '../components/Home/Overview';
import Solutions from '../components/Home/Solutions';
import Partners from '../components/Home/Partners';
import Stats from '../components/Home/Stats';
import Projects from '../components/Home/Projects';
import Industries from '../components/Home/Industries';
import MissionVision from '../components/Home/MissionVision';
import useSeo from '../hooks/useSeo';

export default function Home({ onRequestQuote }) {
  useSeo(
    'AGTPL | Ascent Green Technologies | Motors, Drives & Pumping Solutions',
    'Authorized partner for ABB, Yaskawa, and KSB in India. Supplying premium electric motors, compact AC drives, sewage submersible pumps, and automation engineering systems.'
  );

  return (
    <div className="w-full">
      <Hero onRequestQuote={onRequestQuote} />
      <Overview />
      <Solutions />
      <Partners />
      <Stats />
      <Projects />
      <Industries />
      <MissionVision />
    </div>
  );
}
