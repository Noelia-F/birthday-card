import { useState } from 'react';

export interface FormData {
  upperIntro: string;
  title: string;
  highlightText: string;
  intro: string;
  contact: string;
  day: string;
  monthName: string;
  hour: string;
  address: string;
};

const useForm = (formState: FormData) => {
  const [data, setData] = useState(formState)

  const onChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  const onSubmitForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log('data', data)
  }

  return {
    data,
    onChangeData,
    onSubmitForm,
  }
}

export default useForm;