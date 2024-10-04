'use client';

import { toggle } from './actions';
import '../css/toggleButton.css';

interface Props {
  entity: {
    state: string;
    attributes: {
      friendly_name: string;
    };
  };
}

export const Toggle = ({ entity }: Props) => {
  const entityInfo = `${entity.attributes.friendly_name}(${entity.state})`;
  return (
    <div>
      <button
        className="toggle-button"
        onClick={() => {
          toggle();
        }}
        title={entityInfo}
      >
        On
      </button>
    </div>
  );
};
