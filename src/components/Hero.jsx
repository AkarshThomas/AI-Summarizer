import {favicon} from "../assets"
const Hero = () => {


  return (
    <>
    
    <header className='w-full flex justify-center items-center flex-col'>
     <nav className='mt-4 flex flex-col md:flex-row justify-between items-center w-full mb-12 pt-3'>
     <p className="flex items-center">
     <img src={favicon} alt='IntelliBrief_logo' 
     className=' w-16 object-contain rounded-full'/>
        <h1 className="mt-1 mb-2 p-2 text-4xl font-extrabold  text-indigo-500 ;">IntelliBrief</h1>
     </p>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/AkarshThomas", "_blank")
          }
          className='black_btn mb-2 md:mb-0'
        >
          GitHub
        </button>
      </nav> 
      <h1 className='head_text'>
        Summarize Articles using <br className='max-md:hidden' />
        <span className='violet_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Streamline your reading with IntelliBrief, a freely available article summarization tool that condenses extensive articles into precise and effortlessly comprehensible summaries.
      </h2>  
    </header>
    </>
  )
}

export default Hero