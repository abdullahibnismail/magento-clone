
import Image from 'next/image'
import { BsCart4 } from 'react-icons/bs';

export default function Header() {
    const styles =
    "h-10 mt-1 mr-12 w-96 pl-4 font-bold text-base rounded-md  border-[#dfe3fa] border-solid border-2 hover:border-[#7C5DFA] focus:outline-none focus:border-[#7C5DFA]";
  return (
   <>
   <div className='flex justify-between'>
    <div className='ml-16 p-5'>
   <Image src='/images/logo.svg' height="100"
                    width="250" ></Image>
                    </div>
                    
                <div className='flex justify-center items-center mr-24 p-5'>
                <h1 className='mr-6 text-lg'>Product compare {`(item 1)`}</h1>
                    <input type='text' placeholder='search entire store here....' className={styles}/>
                    <BsCart4  className='text-3xl'/>
                </div>


   </div>

   </>
  )
}
