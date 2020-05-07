/*
 * @Description: Calender组件
 * @Version:
 * @Author: Henry
 * @Date: 2020-05-07 10:06:02
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 10:11:56
 */

import React from 'react';

export default function Calender() {
  const items = [
    {
      id: 0,
      title: "we're together!",
    },
    {
      id: 1,
      title: "we're married!",
    },
    {
      id: 2,
      title: 'we organize a banquet!',
    },
  ];
  return (
    <div>
      <h2>Calender</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
