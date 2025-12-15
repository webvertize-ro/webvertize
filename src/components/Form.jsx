import { useState } from 'react';
import Turnstile from './Turnstile';

function Form({ onSubmit }) {
  const [turnstileToken, setTurnstileToken] = useState(null);
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input type="email" className="form-control" name="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea
          name="message"
          id="form-message"
          className="form-control"
        ></textarea>
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
        disabled={!turnstileToken}
        className="btn btn-primary w-100"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
