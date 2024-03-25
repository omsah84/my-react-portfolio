import React, { useState } from 'react'
import './contact.scss'

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
        setTimeout(() => setIsSubmited(true), 1000);
    };

    return (
        <div id='contact'>
            <h2 className='text-center'>CONTACT US</h2>
                <div className="right">
                    <form onSubmit={onClickHandler}>
                        <div className='section'>
                            <label>Name</label>
                            <input type='text' name="name" className='no-outline' required value={formData.name} onChange={onChanged} placeholder='Name' />
                        </div>
                        <div className='section'>
                            <label>Email</label>
                            <input type='email' name="email" className='no-outline' required value={formData.email} onChange={onChanged} placeholder='Email' />
                        </div>
                        <div className='section'>
                            <label>Message</label>
                            <textarea type='text' name="comment" className='no-outline' required value={formData.comment} onChange={onChanged} placeholder='Message' />
                        </div>
                        <div className='submitbtn'>
                            <button className='btn w-75'>Submit</button>
                        </div>
                        {isSubmited ? <></> : <div className='text-danger content'>Successfully Submitted.</div>}
                    </form>
                </div>
            </div>
    )
}
