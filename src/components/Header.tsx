import React from 'react';
import "../style/globals.css";
import styles from '../style/Header.module.css';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} `}>
      <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="text-white font-bold text-2xl animate-pulse tracking-widest">
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
        <div className={`flex space-x-4 ${poppins.className}`}>
          <Link href="/about" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              about
          </Link>
          <Link href="/skills" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              skills
          </Link>
          <Link href="/projects" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              projects
          </Link>
          <Link href="/contact" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;