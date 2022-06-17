import * as React from "react";
import { Field, Form, Formik } from "formik";

export default function Rsvp(){
  return(
    <section id="rsvp">
      <div className="py-24 bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/banner-2.jpg)`}}>
        <div className="container px-8 lg:px-16">
          <div className="bg-white p-10 md:w-2/4 mx-auto">
            <div className="text-center">
              <span className="font-alex text-3xl text-twine leading-7 mb-4">Will you attend?</span>
              <h2 className="font-garamond text-3xl tracking-wide uppercase mb-8">R.S.V.P</h2>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  guests: 0,
                  message: ''
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                <Form className="font-nunito-sans">
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
                  <button type="submit" className="btn btn-primary rounded-none">Submit</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}