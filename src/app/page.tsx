'use client';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Poppins } from 'next/font/google';
import axios from 'axios';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const Home: React.FC = () => {
  useEffect(() => {
    const text = document.querySelector('.text-animation');
    if (text) {
      text.innerHTML =
        text.textContent
          ?.split('')
          .map((char, i) => {
            if (char === ' ') {
              return `<span class="text-color-animation char space" style="animation-delay: ${
                i * 0.1
              }s">&nbsp;</span>`;
            }
            return `<span class="text-color-animation char" style="animation-delay: ${
              i * 0.1
            }s">${char}</span>`;
          })
          .join('') || '';

          const chars = document.querySelectorAll<HTMLElement>('.char');
          chars.forEach((char, i) => {
            char.classList.add('animate-char');
            char.style.animationDelay = `${i * 0.1}s`;
          });
    }
  }, []);

  const downloadPdf = () => {
    axios({
      url: 'https://sslsoo.github.io/portfolio/resume.pdf',
      method: 'GET',
      responseType: 'blob',
    })
      .then(response => {
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch(error => {
        console.error('Error while downloading the PDF:', error);
      });
  }

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <section className="mx-auto mt-20">
            <div className="flex">
              <div>
              <div className="text-5xl mb-4 sm:text-3xl sm:mb-2">안녕하세요.</div>
        <div className="text-5xl mb-4 sm:text-3xl sm:mb-2">
          <span className="text-animation text-color-animation">프론트엔드 개발자</span>
        </div>
        <div className="text-5xl mb-12 sm:text-3xl sm:mb-6">전진수입니다.</div>
        <div className={`text-lg sm:small font-bold mb-4 ${poppins.className}`}>
          소통하는 개발자
          <br />
          <blockquote className="text-lg text-gray-500 border-l-4 border-gray-300 pl-4 italic mt-4">
            다양한 경험을 바탕으로 조금 더 성장하고 싶은 프론트엔드 개발자입니다.
          </blockquote>
        </div>
                <button
            onClick={downloadPdf}
            className="mt-8 inline-block w-40 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <span>이력서</span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
              </div>
              <div className="ml-auto emoji">🧑🏻‍💻</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
