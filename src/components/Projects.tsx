import { TabView, TabPanel } from 'primereact/tabview';  
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';   
import { Button } from 'primereact/button';     
import { Project } from '../utils/interfaces';
import { projects } from '../utils/projects';
function Projects() {
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const productTemplate = (project: Project) => {
        return (
            <div className="border-1 bg-slate-100 surface-border border-round m-2 text-center py-3 px-3 hover:scale-105 rounded-3xl ">
                <div className="mb-3 relative">
                    <img src={project.img_black} alt="Imagen 1" className="w-[600px] h-[300px] object-cover rounded-2xl" />
                    <img src={project.img_white} alt="Imagen 2" className="w-[600px] h-[300px] object-cover rounded-2xl absolute top-0 left-0 opacity-0 transition-opacity duration-800 ease-in-out hover:opacity-100"/>
                </div>
                <div>
                    <h4 className="mb-1 text-3xl font-semibold">{project.name}</h4>
                    <div className="flex gap-2 items-center w-[100%] justify-center mt-2">
                        <Button icon="pi pi-github" className="p-button-info p-button-rounded hover:bg-white text-blue-400"/>
                        <Button icon="pi pi-video" className="p-button-danger p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };
     
    return (
      <>
        <div className="h-[100%] my-5">
            <h2 className='text-center text-3xl'>Creaciones Asombrosas</h2>
            <div className='mx-[10%]'>
                <TabView>
                    <TabPanel header="Todos" leftIcon="pi pi-calendar mr-2">
                        <div className="card">
                            <Carousel value={projects} className='justify-center text-center items-center gap-5' numVisible={3} numScroll={3} itemTemplate={productTemplate} />
                        </div>
                    </TabPanel>
                    <TabPanel header="SPA" leftIcon="pi pi-user mr-2">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel header="Landing" leftIcon="pi pi-cog mr-2">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                    <TabPanel header="Challenges" leftIcon="pi pi-cog mr-2">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                </TabView>
            </div>
        </div>
      </>
    )
  }
  
  export default Projects