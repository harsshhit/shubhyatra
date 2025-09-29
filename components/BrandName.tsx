'use client';

import React from 'react';

interface BrandNameProps {
  className?: string;
  showTours?: boolean;
  toursClassName?: string;
}

export function BrandName({ className = '', showTours = true, toursClassName = '' }: BrandNameProps) {
  return (
    <span className={className}>
      <span style={{ color: '#02aed3' }}>B</span>
      <span style={{ color: '#f8b31b' }}>V</span>
      <span style={{ color: '#e7107d' }}>N</span>
      {showTours && (
        <>
          {' '}
          <span className={toursClassName}>Tours</span>
        </>
      )}
    </span>
  );
}


