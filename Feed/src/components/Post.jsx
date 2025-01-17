import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/113376173?v=4"
          />
          <div className={styles.authorInfo}>
            <strong> Maryéli Obici</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="14 de maio às 20:29h"
          dateTime="2024-05-14 20:28:30"
        ></time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">maryeli.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit"> Publicar</button>
        </footer>
      </form>
    </article>
  );
}
