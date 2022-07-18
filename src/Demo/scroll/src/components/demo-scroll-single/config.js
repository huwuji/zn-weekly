import React, { useEffect, useState } from 'react';
/**
 * 列表项基本数据结构
 */
const RANGE_VALUE = 10;

export function creactList(len = 10) {
  let res = [];
  for (let i = 0; i < len; i++) {
    // const randomW = RANGE_VALUE + Math.floor(Math.random());
    const randomH = 50 * Math.floor(RANGE_VALUE * Math.random());
    res[i] = {
      width: 400,
      height: randomH,
      key: i,
    };
  }
  return res
}

/**
 * 截流函数
 */

export const useThrottle = (value, delay) => {
  const [state, setThrottle] = useState(value)
  useEffect(() => {
    let timer = null;
    if (!timer) {
      timer = setTimeout(() => {
        setThrottle(state)
      }, delay);
    }
    return () => {
      clearTimeout(timer)
    }
  }, [value]);
  return state
}