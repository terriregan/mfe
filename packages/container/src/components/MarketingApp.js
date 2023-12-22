import React, { useRef, useEffect } from 'react';
//import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  console.log('MarketingApp');
  // const ref = useRef(null);

  // useEffect(() => {
  //   mount(ref.current);
  // }, []);

  // return <div ref={ref} />;
  return <div id="marketing" />;
};

export default MarketingApp;
