'use client';

import { toggle } from './actions';
import '../css/toggleButton.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface Entity {
  state: string;
  attributes: {
    friendly_name: string;
  };
  entity_id: string;
}
interface Props {
  entity: Entity;
}

export const Toggle = ({ entity }: Props) => {
  console.log(entity);
  const { t } = useTranslation();
  const [isOn, setIsOn] = useState(entity.state);
  const displayName = entity.attributes.friendly_name || entity.entity_id;
  const entityInfo = `${displayName} (${entity.state})`;
  //   const entityInfo = `${entity.attributes.friendly_name}(${entity.state})`;
  useEffect(() => {
    console.log('TEST', entity);
  }, [entity]);
  const handleToggle = async () => {
    // const x = await toggle(isOn);
    console.log(' :');
    setIsOn(x.state);
    console.log(x);
  };
  return (
    <div>
      <button
        className={`toggle-button ${isOn === 'on' ? 'on' : ''}`}
        onClick={handleToggle}
        title={entityInfo}
      >
        {displayName}
      </button>
      {/* <span className="toggle-label">
     {isOn === 'on' ? t('toggle.turnOff') : t('toggle.turnOn')} –{' '}
      {displayName}
      </span> */}
    </div>
  );
};
