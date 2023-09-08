   
function Skills() {

    const skills = [
        {
            title: 'HTML',
            percent: '95',
        },
        {
            title: 'CSS',
            percent: '95',
        },
        {
            title: 'JavaScript',
            percent: '95',
        },
        {
            title: 'React',
            percent: '95',
        },
    ]
    const currentSkill = {
        title: 'HTML',
        percent: '95',
    };
     
    return (
      <>
        <script defer src="https://unpkg.com/alpinejs@3.2.4/dist/cdn.min.js"></script>    
            
        <main className="grid w-full min-h-screen text-gray-100 bg-gray-900 place-content-center">

            <section x-data="skillDisplay"
                className="p-6 space-y-6 bg-gray-800 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
                <div className="grid grid-cols-2 gap-6">
                    <template x-for="skill in skills">
                        <button x-text="skill.title"
                            className="px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700"
                            ></button>
                    </template>
                </div>

                <div className="flex items-center justify-center" x-data="{ circumference: 2 * 22 / 7 * 120 }">
                    <svg className="transform -rotate-90 w-72 h-72">
                        <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
                            className="text-gray-700" />

                        <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
                            className="text-blue-500 " />
                    </svg>
                    <span className="absolute text-5xl" x-text={currentSkill.percent}></span>
                </div>
            </section>
        </main>
      </>
    )
  }
  
  export default Skills