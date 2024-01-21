

import thankPic from "@/assets/thank-you.png"
import Image from "next/image";
import Link from "next/link";

const PostMeeting = () => {
    return (
        <main className="mt-16 md:mt-0 md:mb-0 mb-6" >
            <section className="h-[73vh] container">
                    {/* flex div */}
                   <div className="flex md:flex-row flex-col   h-full justify-around  items-center w-full ">
                        {/* left div */}
                        <div className="">
                            <Image className="shadow-xl shadow-blue-400 lg:w-[400px] md:w-[300px] w-[280px] " src={thankPic} alt="thankPic" ></Image>
                        </div>
                        {/* right div */}
                        <div className="md:mt-0  mt-16">
                            <h1 className="text-[26px] ">The meeting is  closed</h1>
                            <div className=" flex justify-center gap-5  mt-4" >
                            <Link href='/join-meeting' className="btn btn-primary ">Rejoin</Link>
                                <Link href='/' className="btn btn-primary from-secondary to-secondary">Return Home</Link>
                            </div>
                        </div>
                    </div>
               

            </section>
        </main>
    );
};

export default PostMeeting;