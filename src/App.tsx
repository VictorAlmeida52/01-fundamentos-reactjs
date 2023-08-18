import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Victor Almeida"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minus? Delectus voluptas eveniet sunt sit voluptates ipsum corporis rem tempore quis? Ullam quisquam voluptate porro consectetur. Numquam, eos! Ipsam, earum!"
          />

          <Post author="Diego Fernandes" content="Um novo post muito legal!" />
        </main>
      </div>
    </div>
  );
}
