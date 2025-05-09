'use client';
import { Entity, Toggle } from './toggle';
import '../css/page.css';
// import { Meter } from './meter';
import { useEffect, useState } from 'react';

export default function EntityList() {
  const [entities, setEntities] = useState<Entity[]>([]);
  async function getEntities() {
    // const data = await fetch(
    //   'https://uncommon-obviously-man.ngrok-free.app/api/states',
    //   {
    //     headers: {
    //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiZWJlNWVmMDEyYTU0YjQ2YjlkYzQzMmZjZjM0NDllYSIsImlhdCI6MTcyNzQ0Njg3MiwiZXhwIjoyMDQyODA2ODcyfQ.rDG4pTb4mzwxBzZ-MHq64WoGZ7MstybeISwfOOHJm3o`,
    //     },
    //   }
    // );
    const data = await fetch('/api/hello');
    const newEntities: Entity[] = await data.json();
    setEntities(newEntities);
  }

  useEffect(() => {
    const intervalEntities = setInterval(getEntities, 6000);
    return () => {
      clearInterval(intervalEntities);
    };
  }, []);

  console.log(entities);
  const toggles = entities
    .filter((entity) => entity.entity_id.startsWith('switch'))
    .filter((entity) =>
      ['switch.shellyplusplugs_d48afc5ada8c_switch_0'].includes(
        entity.entity_id
      )
    )
    .map((entity) => {
      return <Toggle key={entity.entity_id} entity={entity} />;
    });

  return (
    <div>
      {toggles}
      {/* <Meter /> */}
    </div>
  );
}
