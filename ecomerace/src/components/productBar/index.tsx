


const ProductBar = () => {
  return (
    <div className="flex bg-[#f0f0f0] ">
      
      <div className='ml-12 '>
        <h1 className=" px-5 py-2 text-gray-500 hover:text-black  text-md">Whats New</h1>
        
       
        
    </div>
      
      <div className='relative'>
        <h1 className="peer px-5 py-2 text-gray-500 hover:text-black text-md ">Woman</h1>
        
       
        <div className="hidden absolute  peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
            <a className="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
        </div>
    </div>
    <div className='relative'>
        <h1 className="peer px-5 py-2 text-gray-500 hover:text-black text-md ">Men</h1>
        
       
        <div className="hidden absolute  peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
            <a className="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
        </div>
    </div>
    <div className='relative'>
        <h1 className="peer px-5 py-2 text-gray-500 hover:text-black  text-md">Gear</h1>
        
       
        <div className="hidden absolute peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg">
            <a className="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
        </div>
    </div>
      

      </div>
  )
}

export default ProductBar