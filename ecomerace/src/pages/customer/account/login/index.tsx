import React from 'react'
import Button from '../../../../components/Button'

import {
  Field,
  Form,
  Formik,
  ErrorMessage,
  getIn,
  FormikProps,

  
  FormikErrors,
} from "formik";

export default function Login() {
  const styles =
    "h-10 mt-1 mr-12 w-full pl-4 font-bold text-base rounded-md  border-[#dfe3fa] border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA]";
  return (
   <>
   <h1 className=' mt-10 mb-5 text-xl text-[#333] md:px-20 px-10'>Customer Login</h1>
   <div className='grid grid-cols-1 md:grid-cols-2 md:px-20 px-5 '>
    <div className='mx-10'>
      <h1 className='p-2 text-[#333] text-lg'>Registered Customers</h1>
      <hr className='w-full'/>
      <Formik
            enableReinitialize
            initialValues={{ Email: "", password: ""}}
            // validationSchema={SinupValdation}
            onSubmit={(values, actions) => {
        
              
              
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
  
                  <div>
                    <p className="text-[#333] py-3">Email</p>

                    <Field name="Email" className={styles} />
                  
                    <ErrorMessage
                      name="Email"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <p className="text-[#333] py-3">Password</p>

                    <Field name="password" type="password" className={styles} />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#1979c3] mt-3 text-white border-1  py-[7px] border-[#1979c3] p-2 px-[15px]"
                  >
                    Sign In
                  </button>
                
              </Form>
            )}
          </Formik>
      
    </div>
    <div  className='mx-10 '>
    <h1 className='p-2 text-[#333] text-lg'>Registered Customers</h1>
      <hr className='w-full'/>
      <p className='p-2 text-[#333] '>Creating an account has many benefits:
         check out faster, keep more than one address, track orders and more.</p>
      <button className='bg-[#1979c3] mt-3 text-white border-1  py-[7px] border-[#1979c3] p-2 px-[15px]'>Create an Account</button>

    </div>


   </div>
 

   </>
  )
}
