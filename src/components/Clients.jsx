import React, { useState } from 'react';
import { request } from 'graphql-request';
import { SubscribeNewsLetterMutation } from '../graphql/hooks/subscribeNewLetter';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';

export function Clients({ content }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-6 col-lg-8 offset-lg-2 offset-xl-3'>
          <div className='section-title-pink text-center mb-70'>
            <span>{content.subtitle}</span>
            <h2>{content.title}</h2>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-xl-6 col-lg-8 offset-lg-2 offset-xl-3'>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required(),
            })}
            onSubmit={async (values, { resetForm, setFieldError }) => {
              setLoading(true);
              setSuccess(false);
              try {
                await fetch('/api/newsletterRegisterEmail', {
                  method: 'POST',
                  headers: { 'content-type': 'application/json' },
                  body: JSON.stringify({ ...values }),
                });
                await request(
                  process.env.NEXT_PUBLIC_GRAPH_API,
                  SubscribeNewsLetterMutation,
                  { ...values }
                );

                resetForm();
                setSuccess(true);
                setLoading(false);
              } catch (error) {
                setFieldError(
                  'email',
                  'This email address is already subscribed to our newsletter'
                );
                setLoading(false);
              }
            }}
          >
            <Form>
              {success && (
                <span
                  style={{
                    color: 'green',
                    fontSize: '20px',
                    display: 'block',
                  }}
                >
                  Successfully subscribed
                </span>
              )}

              <span style={{ color: 'red', display: 'block' }}>
                <ErrorMessage name='email' />
              </span>
              <div style={{ display: 'flex' }}>
                <Field
                  name='email'
                  type='text'
                  placeholder='email address'
                  style={{
                    textTransform: 'lowercase',
                    borderRadius: '100px',
                    border: 'gray',
                    padding: '20px',
                    width: '100%',
                    marginRight: '5px',
                  }}
                />

                <button
                  type='submit'
                  className='x-btn btn-black'
                  style={{ borderRadius: '100px' }}
                >
                  {loading ? 'Subscribing' : 'Subscribe'}
                </button>
              </div>
            </Form>
          </Formik>
        </div>

        <div className='section-title-pink text-center mb-20 mt-50'>
          <h2>{content.partnersTitle}</h2>
        </div>
        <div className='col-xl-12' style={{ marginTop: '30px' }}>
          <div
            className='brand-active'
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {content.Client.map((client) => (
              <div className='single-brand' key={client.logo.url}>
                <img src={`${client.logo.url}`} alt='clientlogo' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
