import coco from '../assets/Mr-Coconut.png'
import { Button } from 'primereact/button';     
function MyName() {
     
    return (
      <>
      <div className="h-[100hv] flex items-center justify-center bg-blue-300">
        <div className='w-[60%] mx-[10%]'>
          <h1 className="text-6xl font-bold">I'm Laura. Let's make your developments come true!</h1>
          <div className='flex my-5 gap-3'>
            <Button icon="pi pi-github" outlined rounded className='hover:bg-red-300'/>
            <Button icon="pi pi-linkedin" outlined rounded/>
            <Button icon="pi pi-book" outlined rounded/>
          </div>
          <button className='bg-blue-500 p-5 rounded-full text-white font-bold text-xl
          hover:bg-white hover:text-blue-500 transition-colors'>Empezar ahora</button>
        </div>
        <img src={coco} alt="Me foto" />
      </div>
      </>
    )
  }
  
  export default MyName