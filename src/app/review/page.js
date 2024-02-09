
import { promises as fs } from 'fs';
import Image from "next/image";
import { FaStar } from 'react-icons/fa';


export default async function ReviewPage () {
    const file = await fs.readFile(process.cwd() + '/src/app/review/review.json', 'utf8');
    const datas = JSON.parse(file)
    return (
        <div className=' max-w-7xl mx-auto mt-24'>
            <h1 className="text-4xl text-center  sm:text-5xl font-semibold !leading-[1.25] mb-8">Client <span className="text-primary">Review</span></h1>
            
            <div className='grid md:grid-cols-2  grid-cols-1 gap-6  '>
            
                {
                    datas.map( data =><figure key={data.id} className=" mt-8 flex w-3/4 flex-col items-center justify-center p-8 text-center bg-[hsl(var(--nc) / var(--tw-text-opacity))] border-b border-gray-400 rounded-3xl md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700 [box-shadow:0px_0px_30px_rgba(33,128,232,0.25)]">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-white">
 
                        <h3 className="text-lg font-semibold text-white dark:text-white">Very easy this was to integrate</h3>
                            <div className='items-center lg:ml-28' style={{ display: 'flex ', flexDirection: 'row' }}>
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <span className='ml-4' key={index} style={{ marginBottom: '5px' }}>
                                            <FaStar color={ratingValue <= data.stars ? '#ffc107' : '#e4e5e9'} />
                                        </span>
                                    );
                                })}
                            </div>
                        <p className="my-4">{data.review}</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                            <Image
                                src={data.userProfile}
                                alt="Picture of the author"
                                width={40}
                                height={20}
                                className=' rounded-full'

                            />
                 
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>{data.userName}</div>
                            <div className="text-sm text-white dark:text-white">Developer at Open AI</div>
                        </div>
                    </figcaption>    
                </figure>)
                }
          
            </div>
            
    
            
        </div>
    );
};

