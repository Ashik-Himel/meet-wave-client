'use client'

import useAxiosPublic from "@/hooks/useAxiosPublic";



const Contact = () => {

  const axiosPublic=useAxiosPublic()

    const handleSend=async e=>{
         e.preventDefault()
         const form =e.target;
         const firstName=form.first.value;
         const lastName=form.last.value;
         const email=form.email.value;
         const phone=form.phone.value;
         const text=form.text.value;

         const contactInfo={firstName,lastName,email,phone,text}
         

         const response = await axiosPublic.post('/send-email', contactInfo);

         console.log("Message sent:", response.data.message);
        
         
    }


    return (
        <div className='my-28'>
   
         <div className="my-10 flex justify-center">
         <form className="w-2/3 border p-6 border-blue-400 rounded-lg shadow-blue-400 shadow-lg "onSubmit={handleSend}>
         <h1 className='text-center font-bold  my-4 text-2xl'>Contact Us</h1>

<div className="flex w-full   gap-2">
    <div className="form-control w-[50%]">
      <label className="label">
        <span className="label-text text-white">First Name</span>
      </label>

      <input name='first' type="text" placeholder="First Name" className="input input-bordered border-blue-400 shadow-2xl text-black w-full" required />
    </div>

    <div className="form-control w-[50%]">
      <label className="label">
        <span className="label-text text-white">Last Name</span>
      </label>
      <input name='last' type="text" placeholder="Last Name" className="input input-bordered border-blue-400 shadow-2xl text-black w-full" required />
    </div>
</div>
<div className="flex w-full   gap-2">
   
<div className="form-control w-[50%]">
      <label className="label">
        <span className="label-text text-white">Email</span>
      </label>
      <input name="email" type="text" placeholder="Email" className="input input-bordered border-blue-400 shadow-2xl text-black w-full " required />
    </div>

    <div className="form-control w-[50%]">
      <label className="label">
        <span className="label-text text-white">Phone</span>
      </label>
      <input name="phone" type="text" placeholder="Phone" className="input input-bordered border-blue-400 shadow-2xl text-black w-full " required />
    </div>

</div>

<textarea  placeholder="Write Your Text.................." className="border-2 border-blue-400 shadow-2xl text-black p-3 rounded-lg w-full mt-6" name="text" id="" cols="30" rows="3"></textarea>
   <input className="btn w-full mt-5 bg-blue-400 shadow-2xl text-black" type="submit" value="Send" />
</form>
        
         </div>
             
        </div>
        
    );
};

export default Contact;