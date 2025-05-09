import '../css/page.css';
// import EntityList from './entityList';
import { Tab } from './tab';
import styles from './page.module.scss';

export default async function Index() {
  return (
    <div className={styles['background']}>
      <div className={styles['blurred-box']}>
        <Tab />
        {/* <EntityList /> */}
      </div>
    </div>
  );
}
