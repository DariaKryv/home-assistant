'use client';

import { toggle } from './actions';
import '../css/toggleButton.css';
import { useState } from 'react';

interface Props {
  entity: {
    state: string;
    attributes: {
      friendly_name: string;
    };
  };
}

export const Toggle = ({ entity }: Props) => {
  const [isOn, setIsOn] = useState(entity.state);
  const entityInfo = `${entity.attributes.friendly_name}(${entity.state})`;
  const handleToggle = async () => {
    const x = await toggle(isOn);
    setIsOn(x.state);
    console.log(x);
  };
  return (
    <div>
      <button
        className="toggle-button"
        onClick={handleToggle}
        title={entityInfo}
      >
        {isOn === 'on' ? 'Off' : 'On'}
      </button>
    </div>
  );
};
