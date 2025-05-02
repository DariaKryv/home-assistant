'use client';

import { useState } from 'react';
import styles from './tab.module.scss';
import EntityList from './entityList';
import { TemperatureChart } from './temperatureChart';
import { EnergyChart } from './energyChart';

export const Tab = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <>
      <div className={styles['tab-container']}>
        <div className={styles['tab-buttons']}>
          <button
            id="1"
            className={styles['tab']}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            Tab 1
          </button>

          <button
            id="2"
            className={styles['tab']}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Living room
          </button>

          <button
            id="3"
            className={styles['tab']}
            onClick={() => {
              setActiveTab(3);
            }}
          >
            Tab 3
          </button>
        </div>
        <div className={styles['tab-content']}>
          {activeTab === 1 && (
            <div>
              <TemperatureChart />
            </div>
          )}
          {activeTab === 2 && <EntityList />}
          {activeTab === 3 && <EnergyChart />}
        </div>
      </div>
    </>
  );
};
