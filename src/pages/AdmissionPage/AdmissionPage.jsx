import React, { useState } from 'react';
import { AdmissionPageStyles } from './AdmissionPageStyles';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import StudentSection from './components/StudentSection';
import ParentSection from './components/ParentSection';


const AdmissionPage = () => {


  const logourl = '/assets/images/AdmissionLogo.png';
  const arrowurl = '/assets/images/Arrow1.png';


  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {

      content: (
        <div className='form-container'>
          <h3 className='form-basic-student'>Basic Student Details Register Form</h3>
          <div>

            <Field type="text" id="studentName" name="studentName" placeholder="Student's Name" className="form-fields" />
            <ErrorMessage name="studentName" component="div" className="error" />
          </div>
          <div>

            <Field type="text" id="studentClass" name="studentClass" placeholder="Class for admission " className="form-fields" />
            <ErrorMessage name="studentClass" component="div" className="error" />
          </div>
          <div>

            <Field type="text" id="lastSchoolName" name="lastSchoolName" placeholder="Last School Attended" className="form-fields" />
            <ErrorMessage name="lastSchoolName" component="div" className="error" />
          </div>
          <div>

            <Field type="text" id="dateofbirth" name="dateofbirth" placeholder="Date of Birth" className="form-fields" />
            <ErrorMessage name="dateofbirth" component="div" className="error" />
          </div>
          <button type="button" className='form-button' onClick={() => goToStep(currentStep + 1)}>Next</button>
        </div>
      )
    },
    {

      content: (
        <div className='form-container'>
          <h3 className='form-basic-student'>Basic Parent Details
            Register Form</h3>
          <div>

            <Field type="text" id="parentName" name="parentName" placeholder="Parent's Name" className="form-fields" />
            <ErrorMessage name="parentName" component="div" className="error" />
          </div>
          <div>

            <Field type="text" id="parentEmail" name="parentEmail" placeholder="Email Id" className="form-fields" />
            <ErrorMessage name="parentEmail" component="div" className="error" />
          </div>
          <div>

            <Field type="text" id="parentAddress" name="parentAddress" placeholder="Address" className="form-fields" />
            <ErrorMessage name="parentAddress" component="div" className="error" />
          </div>
          <div>

            <Field type="text" id="mobileNo" name="mobileNo" placeholder="Mobile No" className="form-fields" />
            <ErrorMessage name="mobileNo" component="div" className="error" />
          </div>

<div className='button-div'>


          <button type="button" onClick={() => goToStep(currentStep - 1)}  className='form-button'>Previous</button>
          <button type="submit" className='form-button' >Submit</button>
          </div>
        </div>
      )
    }
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log('Form data:', values);
      setSubmitting(false);
    }, 400);
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };


  return (
    <>
      <AdmissionPageStyles>
        <div className='admission-header d-flex justify-content-center align-items-center'>

          <img src={`${logourl}`} alt="" className='logo-img' />

          <div className='admission-title'>Touheed English Medium School</div>

        </div>


        <p className='fresh-admission-text mx-auto'>Fresh admissions and re-admissions from lower K.G to 10th standard is open from 15th April 2024 at the School office</p>

        <div className='steps-container d-flex justify-content-center align-items-center'>
          <div className='step-div d-flex justify-content-center align-items-center'>Step 1 :- Collect the application form  from the school office and complete it.</div>
          <img src={`${arrowurl}`} alt="" className='steps-arrow' />
          <div className='step-div d-flex justify-content-center align-items-center'>
            Step 2 :- Please submit the completed application form along with following documents at the School Office.
          </div>
        </div>

        <div className='document-req-div mx-auto'>
          <h3 className='document-req-text'>Document Required</h3>
          <p className='doc-text mx-auto'>a. Photocopy of Student’s Birth Certificate. <br />
            b. Photocopy of Student’s Aadhaar Card.<br />
            c. School Leaving Certificate  (Std 2 onwards).<br />
            e. Photocopy of Student's previous class Report Card (Std 2 onwards).<br />
            d. Photocopy of Address proof (any one) :<br />
            1) Ration Card. 2) Electricity Bill 3) Passport 4) Aadhar Card.<br />
            e. Photocopy of Aadhar card of any one parent/guardian..<br />
            f.  2 Passport size photographs of the student.<br />
            g. Caste Certificate (if applicable).<br />
            h. Please submit the first term fees & 3 months advance Transportation
            fees( if van facility is availed) to the School Office.<br /><br />

            Based on the application and the submission of all the valid documents, and the availability of seats, the school reserves the right to admit any student who is found fit for admission. For all matters related to admissions, the decision of the Management will be final.</p>

        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form>
              <div>
                <h2>{steps[currentStep - 1].title}</h2>
                {steps[currentStep - 1].content}
              </div>
             
            </Form>
          )}
        </Formik>


        <p className='fee-concession-text mx-auto'><span>Fee concession</span> : Touheed Educational Trust (Regd.) has devised a strategy of reaching out to every deserving child ensuring its admission to the school through an endowment scheme – financial assistance is being given to the needy by partial / full fee concessions mostly through Zakat funding.</p>

      </AdmissionPageStyles>

    </>
  )
}

export default AdmissionPage