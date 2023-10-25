'use client'

import { FormData } from '@/hooks/useForm';
import './Card.css';

interface CardProps extends FormData {};

export default function Card(props: CardProps) {
  const { upperIntro, title, highlightText, intro, contact, day, monthName, hour, address } = props;

  return (
    <article className="card">
      <section className="section">
        <p>{highlightText}</p>
      </section>
      <section className="section">
        <p className="text">{upperIntro}</p>
        <h1 className="title">{title}</h1>
      </section>
      <section className="section">
        <p className="text">{intro}</p>
      </section>
      <section className="section">
        <div>
          <p className="text">{day}</p>
          <p className="text">{monthName}</p>
        </div>
        <div>
          <p className="subtitle">{hour}</p>
          <p className="text">{address}</p>
        </div>
      </section>
      <section className="section">
        <p>{contact}</p>
      </section>
    </article>
  )
}
