import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const today = new Date();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Hello, It’s Qian Here </h1>
          <Image
            className={styles.logo}
            src="/illustration-no-bg.png"
            alt="qiannyqian illustration"
            width={180}
            height={180}
            priority
          />
      </div>

      <div className={styles.links}>
        <div className={styles.card}>
          <a href="#about">
            <h2>About</h2>
          </a>
        </div>
       
        <div className={styles.card}>
          <a
            href="https://qiannyqian.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Blog</h2>
          </a>
        </div>

        <div className={styles.card}>
          <a
            href="https://bio.link/qiannyqian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Links</h2>
          </a>
        </div>
        
      </div>

      <div className={styles.content} id="#about">
        <h3>About Me</h3>
  
        <p>Hi, I’m Hui Qian! I go by the moniker <code>qiannyqian</code> on the Internet, welcome to my website!</p>

        <br/>

        <p>I have been working in tech, specialising in front-end and web development, from small startups to mid-sized companies.</p>

        <br/>

        <p>When I’m not coding for work, you can find me reading vicariously on my Kindle, iPad or physical book, or taking photos or videos to make memories.
        </p>

        {/* <br/>

        <p>Here’s all the tech I’ve touched:</p> */}

      </div>

      <footer>
        <p>&copy; {today.getFullYear()} qiannyqian | Made with <a href="https://nextjs.org/"  target="_blank"
          rel="noopener noreferrer">NextJS</a></p>
      </footer>
    </main>
  );
}
