'use client';

// import { useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';
import { Entity } from './meter';

export const TemperatureChart = () => {
  const run = async () => {
    const data1 = await fetch('/api/temperature');
    const newEntities: Entity[] = await data1.json();
    console.log(newEntities);
  };
  run();

  const data = [{ uv: 1, pv: 1, name: 'something' }];
  return (
    <>
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
    </>
  );
};
