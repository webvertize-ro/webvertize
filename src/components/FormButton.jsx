import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';
import Form from './Form';

const StyledFormButton = styled.a`
  display: flex;
  text-decoration: none;
  font-size: 2rem;
  color: #1b3c53;
  background-color: #fff;
  padding: 5px 2px;
  border-radius: 5px;
  cursor: pointer;
`;

function FormButton() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // send to Vercel API route
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      // Navigate to the thank-you page
      // 1. Removing Bootstrap's modal-backdrop
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
      setShowForm(false);
      // 2. Setting a flag in the SessionStorage
      sessionStorage.setItem('formSubmitted', 'true');
      // 3. Navigating to the thank-you page
      navigate('/thank-you');
    } else if (res.status === 429) {
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
      setShowForm(false);
      // setting a flag in sessionStorage
      sessionStorage.setItem('tooManyRequests', 'true');
      navigate('/too-many-requests');
      return;
    }
  }

  return (
    <>
      <StyledFormButton onClick={() => setShowForm(true)}>
        <FontAwesomeIcon icon={faMessage} />
      </StyledFormButton>
      <Modal
        show={showForm}
        title="Contact Form"
        onClose={() => setShowForm(false)}
      >
        <Form onSubmit={handleSubmit}></Form>
      </Modal>
    </>
  );
}

export default FormButton;
