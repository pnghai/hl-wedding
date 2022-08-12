import * as React from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import isEmailValidator from "validator/lib/isEmail";
import axios from "axios";
import { toast } from "react-toastify";
import { SmallTitle, Subtitle } from "../../utils/styles";
import { useTranslation } from "react-i18next";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { HCAPTCHA_SITE_KEY } from "../../utils/config";
import { useRef } from "react";

export default function Rsvp(){
  const { t } = useTranslation();
  const validationSchema = yup.object({
    token: yup.string().required(),
    guests: yup.number().integer().min(0),
    email: yup
      .string()
      .max(50)
      .required(t("Email is required"))
      .test(
        "is-valid",
        (message) => t(`${message.path} is invalid`),
        (value) => (value ? isEmailValidator(value) : new yup.ValidationError(t("Invalid email address")))
      ),
  });
  const captchaRef = useRef(null);
  const submitHandler = async (payload, { setSubmitting, resetForm }) => {
    captchaRef.current.execute();
    setSubmitting(true);
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('[name=csrf-token]').content
    try {
      const resp = await axios.post('/rsvps.json', payload)
      toast.success(t("Succeeded"));
      setSubmitting(false);
      resetForm();
    } catch (error) {
      setSubmitting(false);
    }
  }
  return(
    <section id="rsvp">
      <div className="py-24 bg-cover bg-scroll md:bg-fixed bg-no-repeat" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/banner-2.jpg)`}}>
        <div className="container px-8 lg:px-16">
          <div className="bg-white p-10 md:w-2/4 mx-auto">
            <div className="text-center">
              <SmallTitle>Will you attend?</SmallTitle>
              <Subtitle>R.S.V.P</Subtitle>
              <Formik
                enableReinitialize
                validationSchema={validationSchema}
                initialValues={{
                  name: '',
                  email: '',
                  guests: 0,
                  message: '',
                  token: '',
                }}
                onSubmit={submitHandler}
              >
                {({ isValid, touched, errors, submitForm, isSubmitting, resetForm, setFieldValue }) => (
                  <Form className="font-nunito-sans mt-8">
                    <Field id="name" name="name" placeholder="Name" className="input w-full input-bordered input-primary mb-4" />
                    <Field
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="input w-full input-bordered input-primary mb-4"
                    />
                    <Field type="number" id="guests" name="guests" placeholder="Guests" className="input w-full input-bordered input-primary mb-4"  />
                    <Field component="textarea" id="message" name="message" placeholder="Message" className="textarea textarea-primary w-full mb-4" />
                    <HCaptcha
                      sitekey={HCAPTCHA_SITE_KEY}
                      onLoad={onLoad}
                      onVerify={(token)=> {
                        setFieldValue('token', token)
                      }}
                      // onError={onError}
                      // onExpire={onExpire}
                      ref={captchaRef}
                    />
                    <button disabled={!isValid || isSubmitting} type="submit" className="btn btn-primary rounded-none">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}