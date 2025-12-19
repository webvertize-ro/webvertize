import { useEffect, useState } from 'react';
import Turnstile from './Turnstile';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Form({ onValidSubmit, isLoading }) {
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
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
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
        {errors?.name && (
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
        <label htmlFor="project-description" className="form-label">
          Project Description:
        </label>
        <textarea
          name="project-description"
          id="form-message"
          className="form-control"
          {...register('project-description', {
            required: 'Project Description is required',
          })}
        ></textarea>
        {errors['project-description'] && (
          <small className="text-danger">
            {errors['project-description']?.message}
          </small>
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
      <button
        type="submit"
        className="d-flex align-items-center justify-content-center gap-2 btn btn-primary w-100"
      >
        {isLoading ? <div class="spinner-border" role="status"></div> : ''}
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </StyledForm>
  );
}

export default Form;
