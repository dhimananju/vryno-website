import React, { useState } from "react";
import { CreateUserQueryMutation } from "../../graphql/hooks/createUserMutation";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { request } from "graphql-request";
import NumberFormat from 'react-number-format';


export function ContactUsMain({ content }) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5 offset-xl-1">
          <div className="contact-info-minimal mb-30">
            <div className="section-title-2 mb-20">
              <span>{content.subtitle}</span>
              <h2>{content.description}</h2>
            </div>
            
            <p>
              Address: {content.address} <br /> Phone Number: 
              +{content.PhonePerfix}&nbsp;
              
              <NumberFormat
              value={content.phoneNumber} displayType={'text'}
              format={content.PhoneFormat}/>

               <br />
              Email: {content.email}
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <div className="contact-form ">
            <Formik
              initialValues={{
                fullName: "",
                subject: "",
                email: "",
                message: "",
                phone: "",
              }}
              validationSchema={Yup.object({
                fullName: Yup.string()
                  .min(3, "Must be atleast 3 characters or long")
                  .required("Full Name is a required"),
                subject: Yup.string()
                  .min(3, "Must be atleast 3 characters or long")
                  .required("Subject is required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
                phone: Yup.string()
                  .matches(phoneRegExp, "Phone number is not valid")
                  .required("Phone Number is required"),
                message: Yup.string()
                  .min(5, "Must be atleast 5 characters or long")
                  .required("Message is required"),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setLoading(true);
                const req1 = request(
                  process.env.NEXT_PUBLIC_GRAPH_API,
                  CreateUserQueryMutation,
                  { ...values }
                );
                const req2 = await fetch("/api/userquery", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ ...values }),
                });
                await Promise.all([req1, req2]);
                setSubmitting(true);
                resetForm();
                setSuccess(true);
                setLoading(false);
              }}
            >
              <Form>
                {success && (
                  <span
                    style={{
                      color: "green",
                      fontSize: "20px",
                      display: "block",
                    }}
                  >
                    Message sent successfully!
                  </span>
                )}
                <span style={{ display: "block", marginBottom: "20px" }}>
                  Field with * is required
                </span>
                <label htmlFor="fullName">Full Name *</label>
                <Field name="fullName" type="text" />
                <ErrorMessageWrapper>
                  <ErrorMessage name="fullName" />
                </ErrorMessageWrapper>

                <label htmlFor="email">Email address *</label>
                <Field name="email" type="text" />
                <ErrorMessageWrapper>
                  <ErrorMessage name="email" />
                </ErrorMessageWrapper>

                <label htmlFor="phone">Phone Number *</label>
                <Field name="phone" type="text" />
                <ErrorMessageWrapper>
                  <ErrorMessage name="phone" />
                </ErrorMessageWrapper>

                <label htmlFor="subject">Subject *</label>
                <Field name="subject" type="subject" />
                <ErrorMessageWrapper>
                  <ErrorMessage name="subject" />
                </ErrorMessageWrapper>

                <label htmlFor="message">Message *</label>
                <Field name="message" type="textarea" cols={30} rows={10} />
                <ErrorMessageWrapper>
                  <ErrorMessage name="message" />
                </ErrorMessageWrapper>

                <button type="submit" className="x-btn btn-black">
                  {loading ? "Sending Message" : "Send"}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ErrorMessageWrapper = ({ children }) => {
  return (
    <span
      style={{
        color: "red",
        display: "block",
        fontSize: "12px",
        marginBottom: "10px",
      }}
    >
      {children}
    </span>
  );
};
