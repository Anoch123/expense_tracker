'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all`,
        {
          ' bg-white/75 backdrop-blur-lg': scrolled,
          ' bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[60px] md:h-[55px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <img className="h-6 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>

            <span className="font-semibold text-lg md:flex text-[#1F22BF]">Hubio</span>
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
            <span className="font-semibold text-sm"><UserButton /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
