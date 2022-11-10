import React from 'react';
import useIsMobile from './hooks/useIsMobile';

export default function ComponentA() {
  const isMobile = useIsMobile();

  console.log(isMobile, 'Component A');

  return <></>;
}
