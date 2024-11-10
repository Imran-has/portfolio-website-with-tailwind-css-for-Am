
import Header from "./components/Headerr"
import Hero from "./components/Herro"
import Form from "./components/form"
import Footer from "./components/Footer"


const Homepage = () => {
  return (
    <div className="bg-[url('/images/pexels-asphotograpy-218717.jpg')]bg-cover bg-center h-[400px] bg-no-repeat w-full ">
      <Header/>
      <Hero/>
      <Form/>
      
      <Footer/>
      
    </div>
  )
}

export default Homepage
