import React from "react";
import { render } from "react-dom";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import * as Yup from "yup";

import cData from "../COLLEGES_DATA.json";
const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  title: "",
  abstract: "",
  file: null,
};

const schema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  firstName: Yup.string()
    .matches(/\b[^\d\W]+\b/g, "Invalid firstName")
    .required("First name is required")
    .max(15, "First name is to long"),
  lastName: Yup.string()
    .matches(/\b[^\d\W]+\b/g, "Invalid lastName")
    .required("Last name is required")
    .max(15, "Last name is to long"),
  title: Yup.string()
    .matches(/\b[^\d\W]+\b/g, "Invalid title")
    .required("Title of research to be submitted is required")
    .max(15, "Title is to long"),
  abstract: Yup.string()
    .required("Title of research to be submitted is required")
    .max(30, "Abstract should atleast be more than 50 words."),
  file: Yup.mixed().required(),
});

function Submit({ jsonData, setsortedResearches, researches }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      //cast objects to a defined schema
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
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
              <div className="form-row">
                <label htmlFor="title">Title</label>
                <Field
                  type="title"
                  name="title"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.title && touched.title ? "input-error" : null
                  }
                />
                <ErrorMessage name="title" component="span" className="error" />
              </div>
              <div className="form-row">
                <label htmlFor="abstract">Abstract</label>
                <Field
                  type="abstract"
                  name="abstract"
                  id="abstract"
                  value={values.abstract}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.abstract && touched.abstract ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="abstract"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <label htmlFor="college">Select college</label>

                <Field as="select" name="colleges">
                  <option value="College of Electrical and Mechanical Engineering">
                    College of Electrical and Mechanical Engineering
                  </option>
                  <option value="College of Architecture and Civil Engineering">
                    College of Architecture and Civil Engineering
                  </option>
                  <option value="College of Applied Science">
                    College of Applied Science
                  </option>
                  <option value="College of Natural and Soical Sciences">
                    College of Natural and Soical Sciences
                  </option>
                </Field>

                <ErrorMessage
                  name="abstract"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <label for="file">File upload</label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                  className="form-control"
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
