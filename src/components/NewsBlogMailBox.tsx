import React,{useState} from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export default function NewsBlogMailBox() {
  const [showIcon, setShowIcon] = useState(true);

  const handleInputChange = (event:any) => {
    if (event.target.value.trim() !== '') {
      setShowIcon(false);
    } else {
      setShowIcon(true);
    }
  };
  return (
    <div className="bg-secondary-100 text-center bg-[#0744C3] mt-20 rounded-lg" data-aos='fade-up'>
      <div className="flex flex-col sm:flex-row">
        <div className="">
          <img src="/flower.png" alt="SVG Image" className='mt-7' />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center lg:gap-3">
          <p className="text-white text-2xl font-semibold font-sans">
            Get our exclusive interviews & blogs in your inbox
          </p>
          <form action="">
          {showIcon && <MailOutlineIcon className='mail px-4 absolute text-gray-600 mt-4 w-12 text-center' />}
             <input
               id="outlined-basic"
               type="email"
               className="rounded w-80 h-12 mx-2 outline-none bg-white my-1"
               placeholder="      Enter your email address" 
               onChange={handleInputChange} 
                />
            <button
              type="button"
              className="rounded-lg px-5 h-12 text-base bg-dark-cyan hover:bg-gray-400 hover:text-white text-white duration-200 font-sans my-1"
            >
              Stay Informed
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


