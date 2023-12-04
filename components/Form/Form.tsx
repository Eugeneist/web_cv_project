'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import styles from './Form.module.scss';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Email must be in proper format',
  }),
  content: z.string().min(2, {
    message: 'Content must be at least 2 characters.',
  }),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        name: values.name,
        emailAddress: values.email,
        content: values.content,
      }),
    });
  }

  return (
    <section className={styles.form}>
      <div className={styles.form__form}>
        <form
          className={styles.form__form_elements}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.form__input_group}>
            <label className={styles.form__label} htmlFor="name">
              Name
            </label>

            <input
              className={styles.form__input}
              placeholder="Name"
              type="text"
              id="name"
              {...register('name')}
            />

            {errors?.name && (
              <p className={styles.form__error}>{errors.name.message}</p>
            )}
          </div>

          <div className={styles.form__input_group}>
            <label className={styles.form__label} htmlFor="email">
              Email
            </label>

            <input
              className={styles.form__input}
              placeholder="Email address"
              type="email"
              id="email"
              {...register('email')}
            />

            {errors?.email && (
              <p className={styles.form__error}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.form__input_group}>
            <label className={styles.form__label} htmlFor="message">
              Message
            </label>

            <textarea
              className={styles.form__textarea}
              placeholder="Message"
              rows={8}
              id="message"
              {...register('content')}
            />

            {errors?.content && (
              <p className={styles.form__error}>{errors.content.message}</p>
            )}
          </div>

          <div className={styles.form__submit}>
            <button type="submit" className={styles.form__button}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
