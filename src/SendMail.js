import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className='sendMail'>
      <div className='sendMail-header'>
        <h3>New Message</h3>
        <CloseIcon className='sendMail-close' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='text'
          {...register('to', { required: true })}
        />
        {errors.to && <p className='sendMail-error'>To is Required!</p>}
        <input
          name='subject'
          placeholder='Subject'
          type='text'
          {...register('subject', { required: true })}
        />
        {errors.subject && (
          <p className='sendMail-error'>Subject is Required!</p>
        )}
        <input
          name='message'
          placeholder='Message...'
          type='text'
          className='sendMail-message'
          {...register('message', { required: true })}
        />
        {errors.message && <p className='sendMail-error'>Message is Required!</p>}

        <div className='sendMail-options'>
          <Button
            className='sendMail-send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
