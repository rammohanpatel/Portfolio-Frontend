import React, { useState } from 'react'
import { client } from '../lib/client'


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(formData.name === '' || formData.email === '' || formData.message === '') return alert('Please fill all the fields')
    const res = await client.create({
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message
    }).then(() => {
      setSubmitted(true)
    }).catch((err) => {
      console.log(err)
    })
    console.log(res)
    setFormData({ name: '', email: '', message: '' })
  }
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 pt-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?width=100%&amp;height=600&amp;pb=!1m18!1m12!1m3!1d3690.857191103976!2d87.2972150594481!3d22.32124009205401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d43f84565534f%3A0xaf689ca8fb7bda0e!2sLBS%20Hall%20Badminton%20Court%2C%20IIT%20Kharagpur%2C%20Kharagpur%2C%20West%20Bengal%20721302!5e0!3m2!1sen!2sin!4v1698249296576!5m2!1sen!2sin"  ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">IIT, Kharagpur, West Bengal</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">mram41614@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+919696861559</p>
            </div>
          </div>
        </div>
        { !submitted ?( 
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-2xl mb-3  title-font font-bold">Let's Connect :</h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChange} />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={handleChange}></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Submit</button>
          <p className="text-xs text-gray-500 mt-3"></p>
        </div>):
        (<div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          {/* <h2 className="text-gray-900 text-5xl mb-3  title-font font-bold">Thank You</h2> */}
          <img src="/ThankYou.jpg" alt="Thank You" className="w-full h-50 object-cover rounded-t-md" />
          <p className="text-lg text-gray-500 mt-3 text-center">Your message has been sent.</p>
          </div>)

        }

      </div>
    </section>

  )
}

export default Contact
