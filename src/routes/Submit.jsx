import React from "react";
import { useFormik } from "formik";
import Navbar from "../components/Navbar";
function Submit({ jsonData, setsortedResearches, researches }) {
  return (
    console.log(researches),
    (
      <div className="submit-form">
        <h1>Submit form</h1>
        <form>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" type="text" />
          <button type="submit"></button>
        </form>
      </div>
    )
  );
}
export default Submit;
