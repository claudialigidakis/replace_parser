import React from 'react';
import tw, { styled } from 'twin.macro';

const SvgContainer = styled.svg`
  ${tw`fill-current`}
  ${({ color }) => (color != null ? `color: ${color};` : null)}
`;

const Airplay: React.FC<Client.SVG.SvgProps> = ({ width, height, className, color }) => (
  <SvgContainer
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    className={className}
  >
    <path
      d="M8.33333 28.3333H6.66666C5.78261 28.3333 4.93476 27.9821 4.30964 27.357C3.68452 26.7319 3.33333 25.8841 3.33333 25V8.33333C3.33333 7.44928 3.68452 6.60143 4.30964 5.97631C4.93476 5.35119 5.78261 5 6.66666 5H33.3333C34.2174 5 35.0652 5.35119 35.6903 5.97631C36.3155 6.60143 36.6667 7.44928 36.6667 8.33333V25C36.6667 25.8841 36.3155 26.7319 35.6903 27.357C35.0652 27.9821 34.2174 28.3333 33.3333 28.3333H31.6667"
      stroke="black"
      strokeWidth="3.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 25L28.3333 35H11.6667L20 25Z"
      stroke="black"
      strokeWidth="3.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgContainer>
);

export default Airplay;
