import { useEffect, useState } from 'react';
import Turnstile from './Turnstile';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-5">
          {t('contactForm.nameLabel')}:
        </label>
        <input
          type="text"
          className="form-control fs-5"
          name="name"
          {...register('name', { required: 'contactForm.errors.nameError' })}
        />
        {errors?.name && (
          <small className="text-danger">{t(errors.name?.message)}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fs-5">
          {t('contactForm.emailLabel')}:
        </label>
        <input
          type="email"
          className="form-control fs-5"
          name="email"
          {...register('email', { required: 'contactForm.errors.emailError' })}
        />
        {errors?.email && (
          <small className="text-danger">{t(errors.email?.message)}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="project-description" className="form-label fs-5">
          {t('contactForm.projectDescriptionLabel')}:
        </label>
        <textarea
          name="project-description"
          id="form-message"
          className="form-control fs-5"
          {...register('project-description', {
            required: 'contactForm.errors.descriptionError',
          })}
        ></textarea>
        {errors['project-description'] && (
          <small className="text-danger">
            {t(errors['project-description']?.message)}
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
        className="d-flex align-items-center justify-content-center gap-2 btn btn-primary w-100 fs-5"
      >
        {isLoading ? <div class="spinner-border" role="status"></div> : ''}
        {isLoading
          ? t('contactForm.submitBtnLoading')
          : t('contactForm.submitBtn')}
      </button>
    </StyledForm>
  );
}

export default Form;
