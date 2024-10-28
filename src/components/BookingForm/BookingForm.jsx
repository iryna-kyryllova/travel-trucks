import { useId } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import toast from 'react-hot-toast'
import Button from 'components/Button/Button'
import styles from './BookingForm.module.css'

const BookingForm = () => {
  const nameId = useId()
  const emailId = useId()
  const dateId = useId()
  const commentId = useId()

  const BookingSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    date: Yup.date().required('Date is required')
  })

  const handleSubmit = (values, actions) => {
    console.log(values)
    toast.success(`Booking successfully added!`)
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        date: '',
        comment: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={BookingSchema}>
      {({ setFieldValue, values }) => (
        <Form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor={nameId} className='sr-only'>
              Name
            </label>
            <Field
              type='text'
              id={nameId}
              name='name'
              placeholder='Name*'
              className={styles.input}
            />
            <ErrorMessage name='name' component='span' className={styles.error} />
          </div>
          <div className={styles.field}>
            <label htmlFor={emailId} className='sr-only'>
              Email
            </label>
            <Field
              type='email'
              id={emailId}
              name='email'
              placeholder='Email*'
              className={styles.input}
            />
            <ErrorMessage name='email' component='span' className={styles.error} />
          </div>
          <div className={styles.field}>
            <label htmlFor={dateId} className='sr-only'>
              Booking date
            </label>
            <DatePicker
              id={dateId}
              selected={values.date}
              onChange={(date) => setFieldValue('date', date)}
              placeholderText='Booking date*'
              dateFormat='dd.MM.yyyy'
              className={styles.input}
            />
            <ErrorMessage name='date' component='span' className={styles.error} />
          </div>
          <div className={styles.field}>
            <label htmlFor={commentId} className='sr-only'>
              Comment
            </label>
            <Field
              as='textarea'
              id={commentId}
              name='comment'
              placeholder='Comment'
              className={styles.input}
            />
            <ErrorMessage name='comment' component='span' className={styles.error} />
          </div>
          <Button type='submit' className={styles.submit}>
            Send
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default BookingForm
