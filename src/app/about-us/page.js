

import Contact from "../ContactUs/Contact"

export default function AboutUs(){

     const teamInfo=[
          {
               id:1,
               image:'https://i.ibb.co/RB8Z8yp/416019817-1568507517314011-6094222588573398545-n.jpg',
               name:'Ashikujjaman Himel',
               title:'Team Leader',
               designation:'MERN Stack Developer',
               animate:"fade-right"
          },
          {
               id:2,
               image:'https://i.ibb.co/fnv1DTP/419707973-1042124190424011-8225019617387626439-n.jpg',
               name:'Ridoy Ali',
               title:'Member',
               designation:'MERN Stack Developer',
               animate:"fade-right"
          },
          {
               id:3,
               image:'https://i.ibb.co/GT8Jc4k/416244411-1283641375636850-6721411101287825912-n.jpg',
               name:'Tawkir Ahmed',
               title:'Member',
               designation:'MERN Stack Developer',
               animate:"fade-right"
          },
          {
               id:4,
               image:'https://i.ibb.co/rbm32gC/424754488-2676634389150873-8291311666118337308-n.jpg',
               name:'Tanvir Ramim',
               title:'Member',
               designation:'MERN Stack Developer',
               animate:"fade-left"
          },
          {
               id:5,
               image:'https://i.ibb.co/gStSqg7/423514263-2435699963304126-6843102119189943071-n.jpg',
               name:'Tushar Imran',
               title:'Member',
               designation:'MERN Stack Developer',
               animate:"fade-left"
          },
          {
               id:6,
               image:'https://i.ibb.co/9qhvmT1/portfolio.jpg',
               name:'Tafiyatul Jannat',
               title:'Member',
               designation:'MERN Stack Developer',
               animate:"fade-left"
          },

     ]

    return(
         <div className='container mt-12'>

          <h1 className='text-center font-bold  my-10 text-2xl'> <h1 className='text-center font-bold  my-10 text-4xl sm:text-5xl'>About this <span className="text-primary">Website</span>  </h1> </h1>
          <div className="flex justify-center">
          <div className=' w-2/3  '>
                <p className='text-center '>
Experience the next level of team meetings with our MERN stack platform! Easily create or join meetings and enjoy features like live video, audio calls, and instant chat. Feel like you're meeting face-to-face, no matter where you are. Boost your team's collaboration with our user-friendly solution!</p>
 </div>

          </div>
          <div className="max-w-screen-xl mx-auto p-8 mt-10 ">
        <div className=" flex md:flex-row flex-col text-white relative">
        <div className=" shadow-lg shadow-blue-400 md:w-96 glass h-[120px]  relative mt-7 rounded-lg "  data-aos="flip-right">
  <div className="card-body p-6" >
    
    <h2 className="text-center text-xl font-bold">Create Meeting</h2>
    <p className="text-center">
    The user can create a meeting from this Website.</p>
 
  </div>
</div>
<div className="shadow-lg shadow-blue-400 md:w-96 bg-primary h-[180px] rounded-lg  " data-aos="flip-up">

  <div className="card-body p-6 ">
    <h2 className=" text-center text-xl font-bold">Join Meeting</h2>
    <p className="text-center">
Joining a meeting via link is as simple as clicking on the provided URL, entering any necessary details, and instantly connecting to the virtual meeting. </p>
   
  </div>
</div>
<div className="shadow-lg shadow-blue-400 md:w-96 glass relative mt-7 h-[120px]  rounded-lg " data-aos="flip-left">

  <div className="card-body p-6">
    <h2 className="text-center text-xl font-bold">Meeting Page</h2>
    <p className="text-center">
    The meeting page includes various types of functionalities.</p>
   
  </div>
</div>
      

    
    </div>

        </div>
        <div className=" my-24">
        <h1 className='text-center font-bold    mb-12 text-4xl'> Our <span className="text-primary">Expert</span>  Team </h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
   {
      teamInfo.map(item=><div key={item?.id}>
           <div
           data-aos={item?.animate}
           data-aos-duration="1500"
           className="shadow-lg p-2 pr-0 shadow-blue-400 rounded-lg gap-6 flex">
                <img className="w-40 h-40 rounded-lg" src={item?.image} />

                <div>
                     <h1 className="font-bold text-lg">{item?.name}</h1>
                     <h1 className="font-semibold my-2">{item?.title}</h1>
                     <h1 className="text-small">{item?.designation}</h1>
                </div>
           </div>
      </div>)
   }
</div>


        </div>
      
           


             
            

              <Contact/>
               
         </div>
    )
}