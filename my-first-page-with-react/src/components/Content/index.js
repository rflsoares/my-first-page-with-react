import styles from "./Content.module.css";

function Content() {
  return (
    <section className={styles.section}>
        <h1>Meu site</h1>
        <p> Insira um texto aqui</p>
        <p>

        E outro aqui    
        </p>
        <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/04/super-mario-bros-se-torna-maior-adaptac%CC%A7a%CC%83o-de-jogo-para-cinema.jpg" width="400px"/>
      </section>
  );
}

export default Content;
