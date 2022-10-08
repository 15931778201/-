import React, { useEffect } from 'react';

function Index1() {
  useEffect(()=>{
      console.log('useEffect=>老弟，你来了！Index页面')
      return ()=>{
        console.log('老弟，你走了!Index页面')
      }      
  })
  return <h2>JSPang.com</h2>;
}

export default Index1;