import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const VirtualExperience = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
    return (
        <div className='flex flex-col justify-center mx-auto items-center mt-12 lg:w-auto lg:mx-0 w-[370px] lg:mt-36'>
            <div className='text-4xl font-bold text-center duration-3000' data-aos="fade-up">
                <h3 className='text-gradient'> The virtual experience with us</h3>
                <p className='text-gray-500 mt-5 font-light text-xl lg:w-[850px]'>Your events are under increased pressure to drive pipeline and produce measurable results. Your budget is under a microscope too. With Bizzabo,  proving ROI to the C-suite is easier than ever.</p>
            </div>

            <div className='mt-12 ' data-aos="fade-up">
                <img  className='md:w-[500px] w-[90%] mx-auto shadow-xl shadow-black' src="https://tse3.mm.bing.net/th?id=OIP.Gp6UQUzAEm2Ni9TuLg-PvwHaEK&pid=Api&P=0&h=220" alt="" />
            </div>
            <div className='flex lg:flex-row flex-col relative bottom-8  justify-between items-center lg:px-[10%] gap-5'> 
                <div className='drop-shadow-xl shadow-xl shadow-black' data-aos="fade-up-right">
                <img className='md:h-[500px] md:w-auto w-[90%]' src="https://cdn.dribbble.com/users/1627881/screenshots/11065115/online20_4x.jpg" alt="" />
                </div>
                <div className='drop-shadow-xl shadow-xl shadow-black'  data-aos="fade-up-left">
                <img className='md:h-[500px] md:w-auto w-[90%]' src="https://media.istockphoto.com/vectors/virtual-meeting-vector-id1220035426?k=6&m=1220035426&s=170667a&w=0&h=FP3kk5dJtWYLd0s6_3rZR66wWaOHXKtTK3Snp68C2NI=" alt="" />
                </div>
            </div>
            {/* another */}
            <div className='flex lg:flex-row flex-col relative bottom-36 justify-between items-center lg:px-[10%] gap-5'> 
                <div className='drop-shadow-xl shadow-xl shadow-black'  data-aos="fade-up-right ">
                <img className='md:h-[500px] md:w-auto w-[90%]' src="https://thumbs.dreamstime.com/z/virtual-meeting-collective-home-video-conference-man-chatting-online-people-discussion-friends-internet-e-learning-chat-195820132.jpg" alt="" />
                </div>
                <div className='drop-shadow-xl shadow-xl  shadow-black'   data-aos="fade-up-left">
                <img className='md:h-[500px] md:w-auto w-[90%]' src="https://remote-tools-images.s3.amazonaws.com/Office+Meeting.png" alt="" />
                </div>
            </div>
            <div  className='drop-shadow-xl -z-50 shadow-xl relative lg:bottom-52  shadow-black'  data-aos="fade-up" >
                <img className='lg:w-auto w-[350px]' src="https://media.slidesgo.com/storage/1506299/conversions/0-virtual-meetings-thumb.jpg" alt="" />
            </div>
            {/* another */}

            
        </div>

    );
};

export default VirtualExperience;