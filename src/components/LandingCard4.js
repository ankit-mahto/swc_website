import Link from 'next/link'
import Image from 'next/image';

const LandingCard4 = () => { 
    return (
        <Link target='_blank' href='https://github.com/swciitg/SWC_Course_Directory' className="group w-4/5 sm:w-3/4 md:w-full lg:w-full bg-gradient-45 from-graddarkbluedark to-gradwhitelight rounded-3xl overflow-hidden flex flex-col m-0 hover:opacity-50 transition-all duration-300 hover:cursor-pointer">
            <div className="mt-[8%] ml-[10%] rounded-tl-xl shadow-lg shadow-cardimgshadow overflow-hidden">
            <Image src="/swc/course-directory-screen.png" width={619} height={458}/>
            </div>
            <div className={`w-inherit h-16 bg-darkbluebg overflow-hidden m-0 px-[8%] flex flex-col justify-center`}>
                <div className="flex flex-row-reverse justify-between">
                    <div className="flex grow-0 justify-center items-center">
                        {/* arrow svg */}
                        <svg className="text-white fill-current opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" width="28" height="28">
                            <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="font-['Inter'] text-base text-left font-bold text-white">
                            Course Directory
                        </span>
                        <span className="font-['Inter'] left-0 font-normal text-sm text-left text-white text-opacity-80">
                            Launching Soon
                        </span>
                    </div>
                </div>
            </div>
        </Link>
        
    );
}

export default LandingCard4;