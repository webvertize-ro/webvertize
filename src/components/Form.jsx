import { useEffect, useState } from 'react';
import Turnstile from './Turnstile';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Form({ onValidSubmit }) {
  const [turnstileToken, setTurnstileToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    if (!turnstileToken) {
      return;
    }

    onValidSubmit({ ...data, cf_turnstile_token: turnstileToken });
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors?.message && (
          <small className="text-danger">{errors.name?.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors?.email && (
          <small className="text-danger">{errors.email?.message}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea
          name="message"
          id="form-message"
          className="form-control"
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors?.message && (
          <small className="text-danger">{errors.message?.message}</small>
        )}
      </div>
      <input
        type="hidden"
        name="cf_turnstile_token"
        value={turnstileToken || ''}
      />
      <div className="mb-3 d-flex justify-content-center">
        <Turnstile onVerify={setTurnstileToken} />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
}

export default Form;
