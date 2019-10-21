import styles from './index.css';
import {Button} from 'antd-mobile'
import router from 'umi/router'
export default function() {
  const onTodoList = ()=>{
    router.push('/todoList')
  }
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
        <li onClick={onTodoList}>
          <Button type="primary">todoList</Button>
        </li>
      </ul>
    </div>
  );
}
