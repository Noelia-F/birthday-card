'use client'

import styles from './page.module.css';
import useForm from '../hooks/useForm';
import Form from './components/Form/Form';
import Card from './components/Card/Card';
import { DEFAULT_DATA } from './constants';

export default function Home() {
  const { data, onChangeData, onSubmitForm } = useForm(DEFAULT_DATA);

  return (
    <main className={styles.main}>
      <Card {...data} />
      <Form {...data} onChangeData={onChangeData} />
    </main>
  )
}
