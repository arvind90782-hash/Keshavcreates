import React, { useState } from 'react';
import { MenuBar } from "@/components/ui/animated-menu-bar";
import HeroText from "@/components/ui/hero-shutter-text";

export default function DemoOne() {
  const [active, setActive] = useState('home');

  return (
    <div className="w-full flex flex-col items-center gap-8 py-12">
      <MenuBar active={active} onSelect={setActive} />
      <HeroText text="PORTFOLIO" />
    </div>
  );
}
