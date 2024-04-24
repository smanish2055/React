import React from 'react'
import photo1 from './Assets/photo1.png'
import EastIcon from '@mui/icons-material/East';
import Form from './Form';
export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-4">
                <h3 className="text-success font-weight-bold simply">Simply fill up this form</h3>
                <p>We will get back to you instantly to explore possible avenues where we could work together. You will hear from us within 2 working days.</p>
                <img src={photo1} alt="" />

                <h3 className='looking'>Looking for a job?</h3>
                <p className='lookContain'>There is always an exciting position open that you can apply right away. Don’t worry even if there’s not something that suits you immediately, we will get in touch when it becomes available!</p>
                <a href=".">apply now <EastIcon/> </a>
            </div>
            <div className="col-8">
                <Form/>
            </div>
        </div>
      </div>
    </div>
  )
}
