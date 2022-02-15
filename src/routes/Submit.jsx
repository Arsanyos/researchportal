import React, { useState } from "react";
import { render } from "react-dom";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import * as Yup from "yup";
import subrData from "../SUBMITTED_RESEARCH_DATA.json";
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
    .required("Title of research to be submitted is required"),

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
        // values are in javascript object format
        console.log(values);
        let firstName = values.firstName;
        let lastName = values.lastName;
        let email = values.email;
        let file = values.file;
        let title = values.title;
        let abstract = values.abstract;
        let collegeSubmitedTo = values.colleges;
        let object = {
          email: email,
          title: title,
          author: {
            firstName: firstName,
            lastName: lastName,
          },
          collegeSubmitedTo: collegeSubmitedTo,
          file: file.relativePath,
        };
        alert("Research submitted for evalution");
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
            <form onSubmit={handleSubmit}>
              <h1>Submit research</h1>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <br />
                <Field
                  placeHolder="Email"
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
                <br />
                <ErrorMessage name="email" component="span" className="error" />
              </div>
              <div className="form-row">
                <label htmlFor="firstName">First Name</label>
                <br />
                <Field
                  placeHolder="first name"
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
                <br />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <label htmlFor="lastName">Last Name</label>
                <br />
                <Field
                  placeHolder="last name"
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
                <br />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <label htmlFor="title">Title</label>
                <br />
                <Field
                  placeHolder="title"
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
                <br />
                <ErrorMessage name="title" component="span" className="error" />
              </div>
              <div className="form-row">
                <label htmlFor="abstract">Abstract</label>
                <br />
                <Field
                  placeHolder="Enter abstract here"
                  className="abstract-class"
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
                <br />
                <ErrorMessage
                  name="abstract"
                  component="span"
                  className="error"
                />
              </div>
              <div className="form-row">
                <label htmlFor="college">Select college</label>
                <br />
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
              </div>
              <div className="form-row">
                <label for="file">File upload</label>
                <br />
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
