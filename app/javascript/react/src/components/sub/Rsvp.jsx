import * as React from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import isEmailValidator from "validator/lib/isEmail";
import { SmallTitle, Subtitle } from "../../utils/styles";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "../../utils/axios";
import { BsFillPersonFill, GrPowerReset } from "react-icons/all";

export default function Rsvp(){
  const { t } = useTranslation();
  const validationSchema = yup.object({
    // token: yup.string().required(),
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
  const [stat, setStat] = useState({});
  // const captchaRef = useRef(null);
  const submitHandler = async (payload, { setSubmitting }) => {
    // captchaRef.current.execute();
    setSubmitting(true);
    try {
      await axios.post('/rsvps.json', payload)
      setStat({ type: "success", message: t("Thank you for your message")})
      // setSubmitting(true);
      // resetForm();
    } catch (error) {
      setSubmitting(false);
      setStat({ type: "error", message: t("Fail: ") + error})
    }
  }
  return(
    <section id="rsvp">
      <div className="py-24 bg-cover bg-scroll md:bg-fixed bg-no-repeat" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/banner-2.jpg)`}}>
        <div className="container px-8 lg:px-16">
          <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
            <div className="text-center font-garamond">
              <SmallTitle>{t("Will you attend?")}</SmallTitle>
              <Subtitle>{t("R.S.V.P")}</Subtitle>
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
                {({ isValid, touched, errors, submitForm, isSubmitting, resetForm, setFieldValue, values: { guests } }) => (
                  <Form className="font-nunito-sans mt-8">
                    <Field id="name" name="name" placeholder={t("Name")} className="input w-full input-bordered input-primary mb-4" />
                    <Field
                      id="email"
                      name="email"
                      placeholder={t("Email")}
                      type="email"
                      className="input w-full input-bordered input-primary mb-4"
                    />
                    <label className="label">{t("Guests")}</label>
                    {[...Array(4).keys()].map((_,idx)=>
                      <button
                        key={idx}
                        onClick={()=>setFieldValue("guests",idx+1)}
                        className={guests === 1 + idx ? "btn btn-circle mr-4 mb-4": "btn btn-circle mr-4 mb-4 btn-outline"}
                        type="button"
                      >
                        <BsFillPersonFill size="18px"/>
                      </button>
                    )}
                    {guests > 4 && (
                      <button
                        className={"btn btn-circle mr-4 mb-4"}
                        type="button"
                      >
                        ...
                      </button>
                    )}
                    {guests > 0 && (
                      <button
                        onClick={()=>setFieldValue("guests",0)}
                        className="btn btn-warning btn-circle mr-4 mb-4"
                        type="button"
                      >
                        <GrPowerReset size="18px"/>
                      </button>
                    )}
                    <Field type="number" id="guests" name="guests" placeholder={t("Guests")} className="input w-full input-bordered input-primary mb-4"  />
                    <Field component="textarea" id="message" name="message" placeholder={t("Message")} className="textarea textarea-primary w-full mb-4" />
                    {/*<HCaptcha*/}
                    {/*  sitekey={HCAPTCHA_SITE_KEY}*/}
                    {/*  // onLoad={onLoad}*/}
                    {/*  onVerify={(token)=> {*/}
                    {/*    setFieldValue('token', token)*/}
                    {/*  }}*/}
                    {/*  // onError={onError}*/}
                    {/*  // onExpire={onExpire}*/}
                    {/*  ref={captchaRef}*/}
                    {/*/>*/}
                    <button disabled={!isValid || isSubmitting} type="submit" className="btn btn-primary rounded-none">{t("Submit")}</button>
                    {stat?.type === "success" && <div className="mt-5 alert alert-success shadow-lg">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{stat.message}</span>
                      </div>
                    </div>}
                    {stat?.type === "error" && <div className="mt-5 alert alert-error shadow-lg">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{stat.message}</span>
                      </div>
                    </div>}
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