import * as React from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { SmallTitle, Subtitle } from "../../utils/styles";

export default function Rsvp(){
  const submitHandler = async (payload) => {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('[name=csrf-token]').content
    axios.post('rsvps', payload)
      .then( (resp) => console.log(resp))
      .catch( (error) => console.log(error))
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
                initialValues={{
                  name: '',
                  email: '',
                  guests: 0,
                  message: ''
                }}
                onSubmit={submitHandler}
              >
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