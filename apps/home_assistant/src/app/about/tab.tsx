'use client';

import { useState } from 'react';
import styles from './tab.module.scss';

export const Tab = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <>
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
        Tab 2
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

      {activeTab === 1 && <div>Content 1</div>}
      {activeTab === 2 && <div>Content 2</div>}
      {activeTab === 3 && <div>Content 3</div>}
    </>
  );
};
