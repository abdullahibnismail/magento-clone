
import {
  Field,
  Form,
  Formik,
  ErrorMessage,
  getIn,
  FormikProps,

  
  FormikErrors,
} from "formik";

export default function Register() {
  const styles =
  "h-10 mt-1 mr-12 w-full pl-4   rounded-sm  border-[#dfe3fa] border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA]";
  return (
    <>
    <h1 className=' mt-10 mb-5 text-xl text-[#333] md:px-20 px-10'>Create New Customer Account</h1>
   <div className='grid grid-cols-1 md:grid-cols-2 md:px-20 px-5'>
    <div className='mx-10'>
      <h1 className='p-2 text-[#333] text-lg'>Personal Information</h1>
      <hr className='w-full'/>
      <Formik
            enableReinitialize
            initialValues={{firstName:"",lastName:"", email: "", password: "",confirmPassword:""}}
            // validationSchema={SinupValdation}
            onSubmit={(values, actions) => {
        
              
              
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
                <div>
                    <p className="text-[#333]  py-3">First Name</p>

                    <Field name="firstName" className={styles} />
                  
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-600"
                    />
                  </div><div>
                    <p className="text-[#333]  py-3">Last Name</p>

                    <Field name="lastName" className={styles} />
                  
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                  <h1 className='p-2 pt-10 text-[#333] text-lg'>Sign-in Information</h1>
                   <hr className='w-full'/>
                  </div>
  
                  <div>
                    <p className="text-[#333]  py-3">Email</p>

                    <Field name="email" className={styles} />
                  
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <p className="text-[#333]  py-3">Password</p>

                    <Field name="password" type="password" className={styles} />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <p className="text-[#333]  py-3">Confirm Password</p>

                    <Field name="confirmPassword" type="password" className={styles} />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#1979c3] mt-5 text-white border-1  py-[7px] border-[#1979c3] p-2 px-[15px]"
                  >
                    Create an Account
                  </button>
                
              </Form>
            )}
          </Formik>
      
    </div>
  


   </div>
    </>
  )
}
