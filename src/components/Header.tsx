"use client"
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import "../style/globals.css";
import styles from '../style/Header.module.css';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const linkClassName = (path: string) => {
    console.log(pathname);
    console.log(path);
    return `bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 ${pathname === path ? 'text-blue-500' : 'text-white'}`;
  };

  return (
    <header className={`${styles.header} `}>
      <div className="container mx-auto p-4 flex flex-col md-only:flex-row justify-between items-center">
      <div className={`text-white font-bold text-3xl animate-pulse tracking-widest mb-4 md-only:mb-0 ${poppins.className}`}>
          <span className="text-gray-300">M</span>
          <span className="text-gray-400">y</span>
          <span className="text-transparent"> </span> {/* Space */}
          <span className="text-gray-400">P</span>
          <span className="text-gray-500">o</span>
          <span className="text-gray-600">r</span>
          <span className="text-gray-400">t</span>
          <span className="text-gray-300">f</span>
          <span className="text-white">o</span>
          <span className="text-gray-300">l</span>
          <span className="text-gray-400">i</span>
          <span className="text-gray-500">o</span>
        </div>  
        <div className={`flex ${styles.menu} overflow-x-auto space-x-4 ${poppins.className} md-only:justify-center scrollbar-hide`}>
          <Link href="/" className={linkClassName('/')}>
              home
          </Link>
          <Link href="/about" className={linkClassName('/about')}>
              about
          </Link>
          <Link href="/skills" className={linkClassName('/skills')}>
              skills
          </Link>
          <Link href="/projects" className={linkClassName('/projects')}>
              projects
          </Link>
          <Link href="/contact" className={linkClassName('/contact')}>
              contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;