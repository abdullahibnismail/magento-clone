import Image from "next/image"
import { AiOutlineDashboard  } from "react-icons/ai";
import { BiDollar  } from "react-icons/bi";
 import { MdOutlineContentPaste } from "react-icons/md";
 import { IoIosMan } from "react-icons/io";
 import { FaStore  } from "react-icons/fa";
 import { IoMdSettings } from "react-icons/io";
  import { BsGraphUp } from "react-icons/bs";
  import { HiSpeakerphone} from "react-icons/hi";

const admin = () => {
  return (
   <>
   <div className="bg-[#373330] text-[#aaa6a0] p-2 text-sm absolute h-full flex flex-col justify-between items-center">
   <Image src='/images/logo.png' height="70"
                    width="50" ></Image>
                    <div className="flex flex-col justify-center items-center hover:text-[#f7f3eb] ">
      <AiOutlineDashboard className="text-3xl"/>              
     <p>DASHBORD</p>
     </div>
     <div className="flex flex-col justify-center items-center hover:text-[#f7f3eb] ">
      <BiDollar className="text-3xl"/>              
     <p>SALES</p>
     </div>
     <div className="flex flex-col justify-center items-center hover:text-[#f7f3eb] ">
      <MdOutlineContentPaste className="text-3xl"/>              
     <p>CATALOG</p>
     </div>
     
     <div className="flex flex-col justify-center items-center hover:text-[#f7f3eb] ">
      <IoIosMan className="text-3xl"/>              
     <p>COUSTOMERS</p>
     </div>

     <div className="flex flex-col justify-center items-center hover:text-[#f7f3eb] ">
      <HiSpeakerphone className="text-3xl "/>              
     <p>MARKETING</p>
     </div>
      <div className="flex flex-col justify-center items-center hover:text-[#f7f3eb] ">
      <MdOutlineContentPaste className="text-3xl"/>              
     <p>CONTENT</p>
     </div>
     <div className="flex flex-col justify-center items-center hover:text-[#f7f3eb] ">
      <BsGraphUp className="text-3xl"/>              
     <p>REPORTS</p>
     </div>
     <div className="flex flex-col justify-center items-center hover:text-[#f7f3eb] ">
      <FaStore className="text-3xl"/>              
     <p>STORE</p>
     </div>
     <div className="flex flex-col justify-center items-center hover:text-[#f7f3eb] ">
      <IoMdSettings className="text-3xl"/>              
     <p>SYSTEM</p>
     </div>
   </div>
   
   
   </>
  )
}

export default admin