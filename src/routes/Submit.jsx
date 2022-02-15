import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
};
const schema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  firstName: Yup.string()
    .matches(/\b[^\d\W]+\b/g, "invalid firstName")
    .required("first name is required")
    .max(15, "first name is to long"),
  lastName: Yup.string()
    .matches(/\b[^\d\W]+\b/g, "invalid lastName")
    .required("last name is required")
    .max(15, "last name is to long"),
});

function Submit({ jsonData, setsortedResearches, researches }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      //cast objects to a defined schema
      onSubmit={(values) => {
        console.log(values.email);
      }}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <div className="container">
            <h1>Sign in to continue</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>
              <div className="form-row">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="firstName"
                  name="firstName"
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="lastName"
                  name="lastName"
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="error"
                />
              </div>

              <button
                type="submit"
                className={dirty && isValid ? "" : "disabled-btn"}
                disabled={!(dirty && isValid)}
              >
                Submit
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default Submit;
