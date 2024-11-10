


const Header = () => {
  return (
    <header >
    
      
        <nav className='grid-cols-1 sm:grid-col-3 lg:grid-col-4'>
        <ul className ="display: flex  text-lg text-align:center bg-blue-700 justify-evenly font-light items-start gap-6 p-10 mx-auto felx">
      
       <div className="text-2xl text-white font-bold text-left hover:bg-teal-500">Imran Hassn</div>
        <li className=" hover:bg-gray-600 rounded-md text-white "><b>Home</b></li>
        <li className=" hover:bg-gray-600 rounded-md text-white "><b>About</b></li>
        <li className=" hover:bg-gray-600 rounded-md text-white  "><b>Contact us</b></li>
        <li className=" hover:bg-gray-600 rounded-md text-white "><b>Skills</b></li>
      </ul>
      </nav>
      
    </header>
  )
}

export default Header
