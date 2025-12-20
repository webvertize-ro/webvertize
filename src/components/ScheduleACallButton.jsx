import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ModalForm from './ModalForm';
import Form from './Form';

const StyledButton = styled.button`
  background-color: #344955;
  border: none;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  @media (min-width: 576px) {
    &:hover {
      background-color: #455e6b;
    }
  }
`;

function ScheduleACallButton() {
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
    <div>
      <StyledButton onClick={() => setShowForm(true)}>
        Schedule a Call
      </StyledButton>

      <ModalForm
        show={showForm}
        title="Schedule a Call"
        onClose={() => setShowForm(false)}
      >
        <Form onSubmit={handleSubmit}></Form>
      </ModalForm>
    </div>
  );
}

export default ScheduleACallButton;
