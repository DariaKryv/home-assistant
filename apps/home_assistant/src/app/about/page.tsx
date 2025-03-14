import { Entity, Toggle } from './toggle';
import '../css/page.css';
import { Meter } from './meter';

export default async function Index() {
  const data = await fetch(
    'https://uncommon-obviously-man.ngrok-free.app/api/states',
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiZWJlNWVmMDEyYTU0YjQ2YjlkYzQzMmZjZjM0NDllYSIsImlhdCI6MTcyNzQ0Njg3MiwiZXhwIjoyMDQyODA2ODcyfQ.rDG4pTb4mzwxBzZ-MHq64WoGZ7MstybeISwfOOHJm3o`,
      },
    }
  );
  const entities: Entity[] = await data.json();
  console.log(entities);
  const toggles = entities
    .filter((entity) => entity.entity_id.startsWith('switch'))
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
