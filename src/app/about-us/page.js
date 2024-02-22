"use client"

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
               image:'https://i.ibb.co/Njs4qFH/download.png',
               name:'Tafiyatul Jannat',
               title:'Member',
               designation:'MERN Stack Developer',
               animate:"fade-left"
          },

     ]

    return(
         <div className='container'>

          <h1 className='text-center font-bold  my-10 text-2xl'> <h1 className='text-center font-bold  my-10 text-4xl'>What do you know about this website? </h1> </h1>
      
             <div className=' '>
                <p className='text-center '>We will build a MERN stack project, an online meeting platform. In this platform, the user will be able to create a meeting for his/her team or he/she will be able to join a meeting with their team. In this meeting, they will be able to do live video conferencing, audio conferencing, live chatting, and many more. With those various types of features during that meeting, the meeting will be an outstanding meeting like a face-to-face meeting.</p>

                <p className='text-center my-4'>
                    Create Meeting: The user can create a meeting from this page. (Private) <br/>

                    Join Meeting: The user can join a meeting by meeting from this page. (Private) <br/>

                    Meeting Page: The meeting page includes various types of functionalities. (Private and Secure)

                </p>

                
             </div>


              <h1 className='text-center font-bold  my-10 text-2xl'>Do you know about our team ? </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

              <h1 className='text-center font-bold  my-10 text-2xl'>Contact Us</h1>

              <Contact/>
               
         </div>
    )
}