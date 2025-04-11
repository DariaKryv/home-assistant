import '../css/page.css';
import EntityList from './entityList';
import { Tab } from './tab';

export default async function Index() {
  return (
    <div>
      <Tab />
      <EntityList />
    </div>
  );
}
