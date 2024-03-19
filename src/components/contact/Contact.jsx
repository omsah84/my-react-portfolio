import React, { useState } from 'react'
import './contact.scss'
import contactImage from './contactImage.png'

export default function Contact() {
    const [isSubmited, setIsSubmited] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: ""
    });

    const onChanged = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onClickHandler = (data) => {
        data.preventDefault();
        setIsSubmited(!isSubmited)
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            comment: ''
        });
        
        setTimeout(()=> setIsSubmited(true),1000);

    };

    return (
        <div id='contact'>
            <h2 className='text-center m-2'>Contact Us</h2>
            <div className="container">
                <div className="left">
                    <img src={contactImage} alt='contactImg' />
                </div>

                <div className="right">
                    <form onSubmit={onClickHandler}>
                        <div>
                            <label>Name</label>
                            <input type='text' className='card' name="name" required value={formData.name} onChange={onChanged} placeholder='Enter your name' /><br />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='email' className='card' name="email" required value={formData.email} onChange={onChanged}  placeholder='Enter your name' /><br />
                        </div>
                        <div>
                            <label>Comment</label>
                            <textarea type='text' className='card' name="comment" required value={formData.comment} onChange={onChanged}  placeholder='Enter your name' /><br />
                        </div>
                        <div className='submitbtn'>
                            <button className='btn  bg-success'>Submit</button>
                        </div>
                       {isSubmited?<></> : <div className='text-danger m-1'>Successfully Submitted.</div>}
                    </form>
                </div>
            </div>

        </div>
    )
}
