import React, { useState, useEffect, useRef } from 'react'
import './Contact.css'
import { useForm } from 'react-hook-form'
import Warning from '../components/Warning'
import '../components/Navbar.css'

import useUnsavedChangesWarning from '../hooks/useUnsavedChangesWarning.js'

const FORM_ENDPOINT = ''

export default function Contact() {
  const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning()
  const [submitted, setSubmitted] = useState(false)
  const handleReturn = () => {
    setSubmitted(false)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      msg: '',
    },
  })

  if (submitted) {
    return (
      <>
        <div className='response-modal'>
          <div className='response-text'>
            <h2>
              Thank you! <br></br> We will be in touch as soon as possible.{' '}
            </h2>

            <button id='return-btn' onClick={handleReturn}>
              Return
            </button>
          </div>
        </div>
      </>
    )
  } else {
    console.log('something went wrong')
  }

  return (
    <>
      <h1>Contact</h1>
      <div className='contact-wrapper'>
        <form
          id='contact-form'
          // action={FORM_ENDPOINT}
          onSubmit={handleSubmit((data) => {
            setSubmitted(true)
            reset()
            setPristine()
          })}
        >
          <div className='input-field'>
            <p>
              First name <span id='asterix'>*</span>
            </p>
            <div className='input-wrapper'>
              <input
                type='text'
                {...register('firstName', {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className='placeholder'
                onChange={() => {
                  setDirty()
                }}
              />
              {errors?.firstName?.type === 'required' && (
                <p id='req-text'>First name is required</p>
              )}
              {errors?.firstName?.type === 'pattern' && (
                    <p id='req-text'>Alphabetical characters only</p>
                  )}
            </div>
            <p>
              Last name <span id='asterix'>*</span>
            </p>
            <div className='input-wrapper'>
              <input
                type='text'
                {...register('lastName', {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className='placeholder'
                onChange={() => {
                  setDirty()
                }}
              />
              {errors?.firstName?.type === 'required' && (
                <p id='req-text'>Last name is required</p>
              )}
              {errors?.firstName?.type === 'pattern' && (
                <p id='req-text'>Alphabetical characters only</p>
              )}
            </div>
          </div>
          <div className='input-field'>
            <p>
              Email <span id='asterix'>*</span>
            </p>
            <div className='input-wrapper'>
              <input
                type='email'
                {...register('email', {
                  required: true,
                })}
                className='placeholder'
                onChange={() => {
                  setDirty()
                }}
              />
              {errors?.email?.type === 'required' && (
                <p id='req-text'>Email is required</p>
              )}
            </div>
          </div>
          <div className='input-field'>
            <p>
              Your message <span id='asterix'>*</span>
            </p>
            <div className='input-wrapper'>
              <textarea
                {...register('msg', {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className='msg-placeholder'
                onChange={() => {
                  setDirty()
                }}
              />
              {errors?.msg?.type === 'required' && (
                <p id='req-text'>Last name is required</p>
              )}
              {errors?.msg?.type === 'pattern' && (
                <p id='req-text'>Alphabetical characters only</p>
              )}
            </div>
          </div>
          <button className='submit-btn' type='submit'>
            Send a message
          </button>
        </form>
      </div>
      {Prompt}
    </>
  )
}
