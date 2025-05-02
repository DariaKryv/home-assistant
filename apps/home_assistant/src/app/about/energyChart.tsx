'use client';

// import { useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';
import { Entity } from './meter';
import { useState } from 'react';

export const EnergyChart = () => {
  const [data, setData] = useState<Entity[]>([]);
  const run = async () => {
    const data1 = await fetch('/api/energy');
    const newEntities: Entity[][] = await data1.json();
    console.log(newEntities);
    setData(newEntities[0]);
  };
  run();

  // const data = [{ uv: 1, pv: 1, name: 'something' }];
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
        <Line type="monotone" dataKey="state" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
    </>
  );
};
