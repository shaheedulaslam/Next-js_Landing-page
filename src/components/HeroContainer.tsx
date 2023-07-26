import React from "react";
import Services from "./ServiceCard";



export default function HeroContainer() {
  return (
    <>
      <div className="relative isolate px-6 lg:px-8">
        <div className="flex items-end justify-end mr-6">
          <svg width="145" height="74" viewBox="0 0 145 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M144.105 0L144.105 1.94736C144.105 41.7409 111.846 74 72.0528 74C32.2593 74 0.00019654 41.7409 0.000198279 1.94736L0.000198364 -6.29904e-06L144.105 0Z" fill="#0744C3" />
          </svg>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center">
            <svg width="93" height="94" viewBox="0 0 93 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.5 0.947266L51.2648 20.5971C53.9117 31.5128 62.4345 40.0356 73.3502 42.6825L93 47.4473L73.3502 52.2121C62.4345 54.859 53.9117 63.3817 51.2648 74.2975L46.5 93.9473L41.7352 74.2975C39.0883 63.3817 30.5655 54.859 19.6498 52.2121L0 47.4473L19.6498 42.6825C30.5655 40.0356 39.0883 31.5128 41.7352 20.5971L46.5 0.947266Z" fill="#EEF2F5" />
            </svg>
          </div>



          <div className="font-sans">
            <p className="text-3xl lg:text-6xl font-extrabold text-dark-blue">The Home for Entrepreneurs,</p>
            <p className="text-center text-3xl lg:text-6xl font-extrabold text-dark-blue">Startups & Remoters</p>

            <div className="flex justify-between md:grid-flow-col">
              <svg width="70" height="125" viewBox="0 0 74 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H1.94736C41.7409 0 74 32.2591 74 72.0526C74 111.846 41.7409 144.105 1.94737 144.105H0V0Z" fill="#FAB151" />
              </svg>

              <div className="flex items-center gap-10">
                <svg width="90" height="12" viewBox="0 0 90 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0.613929C3.05448 0.613928 0.666667 3.00174 0.666667 5.94726C0.666667 8.89278 3.05448 11.2806 6 11.2806C8.94552 11.2806 11.3333 8.89278 11.3333 5.94726C11.3333 3.00174 8.94552 0.613929 6 0.613929ZM90 5.94727L80 0.173762L80 11.7208L90 5.94727ZM6 6.94726L81 6.94727L81 4.94727L6 4.94726L6 6.94726Z" fill="#1F1F1F" />
                </svg>

                <svg width="203" height="35" viewBox="0 0 203 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.296784" y="1.24405" width="33.2398" height="33.2398" stroke="#716F9F" strokeWidth="0.593567" />
                  <mask id="path-2-inside-1_1_23" fill="white">
                    <path d="M33.8333 0.947266H67.6666V34.7806H33.8333V0.947266Z" />
                  </mask>
                  <path d="M67.6666 0.947266H68.2602V0.353698H67.6666V0.947266ZM67.6666 34.7806V35.3742H68.2602V34.7806H67.6666ZM33.8333 1.54083H67.6666V0.353698H33.8333V1.54083ZM67.0731 0.947266V34.7806H68.2602V0.947266H67.0731ZM67.6666 34.187H33.8333V35.3742H67.6666V34.187Z" fill="#716F9F" mask="url(#path-2-inside-1_1_23)" />
                  <mask id="path-4-inside-2_1_23" fill="white">
                    <path d="M67.6666 0.947266H101.5V34.7806H67.6666V0.947266Z" />
                  </mask>
                  <path d="M101.5 0.947266H102.094V0.353698H101.5V0.947266ZM101.5 34.7806V35.3742H102.094V34.7806H101.5ZM67.6666 1.54083H101.5V0.353698H67.6666V1.54083ZM100.906 0.947266V34.7806H102.094V0.947266H100.906ZM101.5 34.187H67.6666V35.3742H101.5V34.187Z" fill="#716F9F" mask="url(#path-4-inside-2_1_23)" />
                  <mask id="path-6-inside-3_1_23" fill="white">
                    <path d="M101.5 0.947266H135.333V34.7806H101.5V0.947266Z" />
                  </mask>
                  <path d="M135.333 0.947266H135.927V0.353698H135.333V0.947266ZM135.333 34.7806V35.3742H135.927V34.7806H135.333ZM101.5 1.54083H135.333V0.353698H101.5V1.54083ZM134.74 0.947266V34.7806H135.927V0.947266H134.74ZM135.333 34.187H101.5V35.3742H135.333V34.187Z" fill="#716F9F" mask="url(#path-6-inside-3_1_23)" />
                  <mask id="path-8-inside-4_1_23" fill="white">
                    <path d="M135.333 0.947266H169.167V34.7806H135.333V0.947266Z" />
                  </mask>
                  <path d="M169.167 0.947266H169.76V0.353698H169.167V0.947266ZM169.167 34.7806V35.3742H169.76V34.7806H169.167ZM135.333 1.54083H169.167V0.353698H135.333V1.54083ZM168.573 0.947266V34.7806H169.76V0.947266H168.573ZM169.167 34.187H135.333V35.3742H169.167V34.187Z" fill="#716F9F" mask="url(#path-8-inside-4_1_23)" />
                  <mask id="path-10-inside-5_1_23" fill="white">
                    <path d="M169.167 0.947266H203V34.7806H169.167V0.947266Z" />
                  </mask>
                  <path d="M203 0.947266H203.594V0.353698H203V0.947266ZM203 34.7806V35.3742H203.594V34.7806H203ZM169.167 1.54083H203V0.353698H169.167V1.54083ZM202.406 0.947266V34.7806H203.594V0.947266H202.406ZM203 34.187H169.167V35.3742H203V34.187Z" fill="#716F9F" mask="url(#path-10-inside-5_1_23)" />
                </svg>

              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="text-center font-medium font-inter">
              <p className="mt-6 lg:text-2xl leading-8 text-gray-400 tracking-widest">
                Oye startup is here for the emerging startup ideas and
              </p>
              <p className="lg:text-2xl leading-8 text-gray-400 tracking-widest">
                brilliant upcoming entrepreneurs
              </p>
            </div>
          </div>

          <p className="mt-10 text-2xl text-gray-400 font-inter">Let's explore</p>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-300 h-4 w-4 my-1 rounded-full"></div>
            <div className="w-0 h-0" style={{ borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '16px solid darkgray' }}></div>
          </div>
        </div>


        {/* Hero Content */}
        <h1 className="text-center mt-10 mb-20 text-4xl lg:text-5xl font-bold text-dark-blue font-inter">What we do?</h1>
        <Services />
      </div>
    </>
  )
}


