import coco from '../assets/Mr-Coconut.png'
import { Button } from 'primereact/button';     
function MyName() {
     
    return (
      <>
      <div className="h-[100hv] flex items-center justify-center bg-blue-300">
        <h1 className="text-3xl font-bold">I'm Laura. Let's make your developments come true!</h1>
        <img src={coco} alt="Me foto" />
        <Button icon="pi pi-github" outlined rounded className='hover:bg-red-300'/>
        <Button icon="pi pi-linkedin" outlined rounded/>
        <Button icon="pi pi-book" outlined rounded/>
        <Button label="Let's work togheter" rounded/>
      </div>
      </>
    )
  }
  
  export default MyName