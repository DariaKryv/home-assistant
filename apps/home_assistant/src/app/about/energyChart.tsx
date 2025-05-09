'use client';

import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { Entity } from './meter';
import { useState } from 'react';
import styles from './energyChart.module.scss';
// import dayjs from 'dayjs';

export const EnergyChart = () => {
  const [data, setData] = useState<Entity[]>([]);
  const run = async () => {
    const data1 = await fetch('/api/energy');
    const newEntities: Entity[][] = await data1.json();
    console.log(newEntities);
    setData(newEntities[0].slice(-20));
  };
  run();

  // const data = [{ uv: 1, pv: 1, name: 'something' }];
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width={600} height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis
            dataKey="last_changed"
            // tickFormatter={(value) => dayjs(value).format('YYYY-MM-DD')}
            tickFormatter={(value) =>
              new Date(value).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })
            }
          />
          <Tooltip
            labelFormatter={(label) => {
              const date = new Date(label);
              return new Intl.DateTimeFormat('en-US').format(date);
            }}
          />
          <YAxis dataKey="state" unit={'kWh'} />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="state" stroke="#ff7300" yAxisId={0} />
          {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
