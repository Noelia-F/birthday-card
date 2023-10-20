'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {

  const defaultInfo = {
    upperIntro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non.',
    title: 'Lorem ipsum dolor sit amet',
    extraHighlightText: '2020',
    intro: 'Lorem ipsum dolor sit amet.',
  }

  const [info, setInfo] = useState(defaultInfo);

  return (
    <main className={styles.main}>
      <article className={styles.card}>
        <section className={styles.section}>
          <img className={styles.logo} src="https://picsum.photos/id/237/100/100" alt='logo' />
          <p className={styles.text}>{info.upperIntro}</p>
          <h1 className={styles.title}>{info.title}</h1>
          <p>{info.extraHighlightText}</p>
        </section>
        <section className={styles.section}>
          <p className={styles.text}>{styles.intro}</p>
          <h2 className={styles.subtitle}>20-25 april 2pm-6pm</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h2 className={styles.subtitle}>contact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
      </article>
      <form className={styles.form}>
        <label>Upper Intro</label>
        <input type="text" id="fname" name="fname" />
        <label>Title</label>
        <input type="text" id="lname" name="lname" />
        <label>Extra highlight text</label>
        <input type="text" id="lname" name="lname" />
        <label>Info Intro</label>
        <input type="text" id="lname" name="lname" />
        <label>Info Date</label>
        <input type="text" id="lname" name="lname" />
        <label>Info Direction</label>
        <input type="text" id="lname" name="lname" />
        <label>Info Contact</label>
        <input type="text" id="lname" name="lname" />
      </form>
    </main>
    /* <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main> */
  )
}
