import React from 'react';
import useIsMobile from './hooks/useIsMobile';

export default function ComponentB() {
  const isMobile = useIsMobile();

  console.log(isMobile, 'Component B');

  return <></>;
}
