import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Contact Me",
};

const Contact = () => {
  return (
    <div className="w-full flex flex-col md:flex-row mt-5 px-2 overflow-hidden">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold font-lobster mb-6 mt-5 text-[#4A90E2]">Connect With Me</h2>
        <p className="text-lg md:text-xl font-semibold font-poppins w-full md:w-4/5 text-left md:text-justify">
          Feel free to contact with me for any inquiries, collaborations, or just to say hello. I&apos;m always open to connecting with new people and exploring new opportunities.
        </p>
        <form className='flex flex-col' action="https://formsubmit.co/mirzazain269@gmail.com" method="POST">
          <div className='flex flex-col md:flex-row mt-4'>
            <input className="mt-2 md:mt-0 p-2 border-2 border-[#D0021B] mx-2 text-[#4A90E2]" type="text" name="name" placeholder="Enter Your Name" required />
            <input className="mt-2 md:mt-0 p-2 border-2 border-[#D0021B] mx-2 text-[#4A90E2]" type="email" name="email" placeholder="Enter Your Email" required />
          </div>
          <textarea className="mt-2 mb-2 mx-2 w-[95%] md:w-2/3 md:h-1/2 p-4 border-2 border-[#D0021B] text-black" name='message' placeholder="Just say Hello 🙂" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://mirzaportfolio.vercel.app/thankyou" />
          <button className='mx-2 w-1/4 px-4 py-2 bg-yellow-400 text-[#D0021B] hover:bg-[#D0021B] hover:text-yellow-500 text-lg font-poppins font-bold border-2 border-[#4A90E2]' type="submit">Send</button>
        </form>
      </div>
      <div className="w-full md:w-1/2 mt-8 flex flex-col md:flex-row justify-center items-center">
        <div className="w-[300px] h-[400px] md:w-[500px] md:h-[300px] border-t-8 border-b-0 border-r-8 border-l-0 border-[#E40037] bg-[#E40037] rounded-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3759.659974369148!2d67.02598844551831!3d24.88515979851789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1735408236557!5m2!1sen!2s" 
            className="w-[300px] h-[380px] md:w-[490px] md:h-[280px] border-0" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;