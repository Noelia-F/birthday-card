'use client'

import './Form.css';
import { FormData  } from "@/hooks/useForm";

interface FormProps extends FormData {
  onChangeData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form(props: FormProps) {
  const { upperIntro, title, highlightText, intro, contact, day, monthName, hour, address, onChangeData } = props;
  
  return (
    <form className="form">
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
  )
}
