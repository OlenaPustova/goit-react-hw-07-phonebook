import { useState } from 'react';

export function useForm({ initialValues, cbOnSubmit }) {
  const [form, setForm] = useState(initialValues);

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    cbOnSubmit(form);
  };

  const reset = () => {
    setForm({ name: '', number: '' });
  };

  return { form, reset, handleChange, handleSubmit };
}
