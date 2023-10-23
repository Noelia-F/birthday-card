'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import useForm from '../hooks/useForm';

export default function Home() {

  const { data, onChangeData, onSubmitForm } = useForm({
    upperIntro: 'We request your presence at my',
    title: 'Birthday!',
    highlightText: '20 years',
    intro: 'Please join us',
    contact: 'How do you want to be contacted?',
    day: '20',
    monthName: 'april',
    hour: '4pm',
    address: 'The Stabans Street 12345',
  });

  const { upperIntro, title, highlightText, intro, contact, day, monthName, hour, address } = data;

  return (
    <main className={styles.main}>
      <article className={styles.card}>
        <section className={styles.section}>
          <p>{highlightText}</p>
        </section>
        <section className={styles.section}>
          <p className={styles.text}>{upperIntro}</p>
          <h1 className={styles.title}>{title}</h1>
        </section>
        <section className={styles.section}>
          <p className={styles.text}>{intro}</p>
        </section>
        <section className={styles.section}>
          <div>
            <p className={styles.text}>{day}</p>
            <p className={styles.text}>{monthName}</p>
          </div>
          <div>
            <p className={styles.subtitle}>{hour}</p>
            <p className={styles.text}>{address}</p>
          </div>
        </section>
        <section className={styles.section}>
          <p>{contact}</p>
        </section>
      </article>
      <form className={styles.form}>
        <label>The important thing...</label>
        <input
          name="highlightText"
          value={highlightText}
          type="highlightText"
          placeholder="20"
          onChange={onChangeData} />
        <label>Upper Intro</label>
        <input
          name="upperIntro"
          value={upperIntro}
          type="upperIntro"
          placeholder="We request your presence at my"
          onChange={onChangeData} />
        <label>Name of the event</label>
        <input
          name="title"
          value={title}
          type="title"
          placeholder="Birthday"
          onChange={onChangeData} />
        <label>Brief description</label>
        <input
          name="intro"
          value={intro}
          type="intro"
          placeholder="Please join us"
          onChange={onChangeData} />
        <label>Date</label>
        <input
          name="day"
          value={day}
          type="day"
          placeholder="Write your day..."
          onChange={onChangeData} />
        <label>Month</label>
        <input
          name="monthName"
          value={monthName}
          type="monthName"
          placeholder="Write your month..."
          onChange={onChangeData} />
        <label>Hour</label>
        <input
          name="hour"
          value={hour}
          type="hour"
          placeholder="Write your hour..."
          onChange={onChangeData} />
        <label>Address</label>
        <input
          name="address"
          value={address}
          type="address"
          placeholder="Write your address..."
          onChange={onChangeData} />
        <label>Contact</label>
        <input
          name="contact"
          value={contact}
          type="contact"
          placeholder="Write your contact..."
          onChange={onChangeData} />
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
