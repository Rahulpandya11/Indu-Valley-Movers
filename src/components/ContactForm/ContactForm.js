import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FormContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem;
  max-width: 420px;
  margin: 0 auto;
  animation: ${fadeIn} 0.7s cubic-bezier(.39,.575,.565,1) both;
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 1.2rem 0.5rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FieldWrapper = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.1rem 1rem 0.5rem 2.5rem;
  border: 1.5px solid #eaeaea;
  border-radius: 8px;
  font-size: 1rem;
  background: #fafbfc;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: #eec921;
    background: #fffbe6;
  }
  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: 0.3rem;
    left: 2.5rem;
    font-size: 0.85rem;
    color: #eec921;
    border-radius: 4px;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding-left: 2rem;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 90px;
  padding: 1.1rem 1rem 0.5rem 2.5rem;
  border: 1.5px solid #eaeaea;
  border-radius: 8px;
  font-size: 1rem;
  background: #fafbfc;
  outline: none;
  resize: vertical;
  transition: border 0.2s;
  &:focus {
    border-color: #eec921;
    background: #fffbe6;
  }
  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: 0.3rem;
    left: 2.5rem;
    font-size: 0.85rem;
    color: #eec921;
    border-radius: 4px;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding-left: 2rem;
  }
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: 0.7rem;
  left: 2.5rem;
  font-size: 1rem;
  color: #888;
  pointer-events: none;
  transition: all 0.2s;
  background: transparent;
`;

const Icon = styled.span`
  position: absolute;
  top: 0.7rem;
  left: 1rem;
  color: #eec921;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
  background: #eec921;
  color: #222;
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  padding: 0.9rem 0;
  margin-top: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(238,201,33,0.08);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  letter-spacing: 0.03em;
  &:hover {
    background: #ffe066;
    color: #111;
    transform: translateY(-2px) scale(1.03);
  }
`;

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', description: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Request sent!');
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <FieldWrapper>
          <Icon><svg width="18" height="18" fill="none" stroke="#eec921" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-8 0v2"/><circle cx="12" cy="7" r="4"/></svg></Icon>
          <StyledInput name="name" type="text" required placeholder=" " value={form.name} onChange={handleChange} />
          <FloatingLabel>Name</FloatingLabel>
        </FieldWrapper>
        <FieldWrapper>
          <Icon><svg width="18" height="18" fill="none" stroke="#eec921" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg></Icon>
          <StyledInput name="email" type="email" required placeholder=" " value={form.email} onChange={handleChange} />
          <FloatingLabel>E-mail</FloatingLabel>
        </FieldWrapper>
        <FieldWrapper>
          <Icon><svg width="18" height="18" fill="none" stroke="#eec921" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V17a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v.09"/><path d="M22 16.92a16 16 0 01-8 2.08 16 16 0 01-8-2.08"/><path d="M2 7V5a2 2 0 012-2h16a2 2 0 012 2v2"/></svg></Icon>
          <StyledInput name="phone" type="tel" required placeholder=" " value={form.phone} onChange={handleChange} />
          <FloatingLabel>Phone</FloatingLabel>
        </FieldWrapper>
        <FieldWrapper>
          <Icon><svg width="18" height="18" fill="none" stroke="#eec921" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg></Icon>
          <StyledTextarea name="description" required placeholder=" " value={form.description} onChange={handleChange} />
          <FloatingLabel>Description</FloatingLabel>
        </FieldWrapper>
        <SubmitButton type="submit">SEND REQUEST</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default ContactForm; 