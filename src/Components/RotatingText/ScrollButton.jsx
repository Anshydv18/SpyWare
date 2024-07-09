import React from 'react';

const ScrollButton = () => {
  return (
    <a href="#" className="go-down-btn" title="Scroll down">
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <style>
          {`
            @keyframes rotate-text {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <path id="circlePath" d="M50,10 A40,40 0 1,0 90,50 A40,40 0 0,0 50,90 A40,40 0 0,0 10,50 A40,40 0 1,0 50,10" fill="none" />
        <text>
          <textPath xlinkHref="#circlePath" startOffset="0%">
            SCROLL SCROLL SCROLL SCROLL
          </textPath>
        </text>
      </svg>
    </a>
  );
};

export default ScrollButton;
