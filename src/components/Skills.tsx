import { useState } from "react"

function Skills() {

    const [currentSkill, setCurrentSkill] = useState<skill>()
    const [currentSkill2, setCurrentSkill2] = useState<skill>()

    interface skill {
        title: string
        percent: string
        color?: string
    }

    const skills: Array<skill> = [
        { title: 'HTML', percent: '98' },
        { title: 'CSS', percent: '93' },
        { title: 'JavaScript', percent: '95' },
        { title: 'TypeScript', percent: '85' },
        { title: 'React JS', percent: '93' },
        { title: 'Redux', percent: '92' },
        { title: 'Tailwind', percent: '90' },
        { title: 'Bootstrap', percent: '87' },
    ]

    const skills2: Array<skill> = [
        { title: 'Node JS', percent: '94' },
        { title: 'Sequelize', percent: '95' },
        { title: 'MySQL', percent: '90' },
        { title: 'PostgreSQL', percent: '93' },
        { title: 'Express', percent: '89' },
        { title: 'JWT', percent: '83' },
        { title: 'NGINX', percent: '75' },
    ]

    const circunference = 2 * 22 / 7 * 120
     
    return (
      <>
        <main className="w-full py-5 text-gray-100 bg-gray-900">
            <h1 className="text-center text-6xl p-5">Mis Habilidades</h1>
            <div className="flex gap-5 justify-center items-center p-5">
                {/* Frontend */}
                <section className="bg-gray-800 rounded-xl p-2">
                    <h3 className="text-center text-2xl">Habilidades Frontend</h3>
                    <div className="p-6 space-y-6 md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
                        <div className="grid grid-cols-2 gap-6"> 
                            {skills.map((skill) => (
                                <button key={skill.percent}
                                className={`px-4 py-2 text-xl text-gray-100 transition rounded-md h-14 w-44 bg-blue-500
                                hover:ring-2 hover:ring-white hover:ring-opacity-1`}
                                onClick={() => setCurrentSkill(skill)}>{skill.title}</button>
                            ))}
                                
                        </div>

                        <div className="flex items-center justify-center">
                            <svg className="transform -rotate-90 w-72 h-72">
                                <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                                    className="text-gray-700" />

                                <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                                    className="text-blue-500 " strokeDasharray={circunference} 
                                    strokeDashoffset={currentSkill ? circunference - Number(currentSkill.percent) / 100 * circunference : 100 * circunference}/>
                            </svg>
                            <span className="absolute text-5xl text-white">{currentSkill ? currentSkill.percent : 100}%</span>
                        </div>
                    </div>
                </section>

                {/* Backend */}
                <section className="bg-gray-800 rounded-xl p-2">
                    <h3 className="text-center text-2xl">Habilidades Backend</h3>
                    <div className="p-6 space-y-6 md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
                        <div className="grid grid-cols-2 gap-6"> 
                            {skills2.map((skill) => (
                                <button key={skill.percent}
                                className="px-4 py-2 text-xl text-gray-100 transition bg-blue-500 rounded-md h-14 w-44 hover:bg-blue-700"
                                onClick={() => setCurrentSkill2(skill)}>{skill.title}</button>
                            ))}
                                
                        </div>

                        <div className="flex items-center justify-center">
                            <svg className="transform -rotate-90 w-72 h-72">
                                <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                                    className="text-gray-700" />

                                <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                                    className="text-blue-500 " strokeDasharray={circunference} 
                                    strokeDashoffset={currentSkill2 ? circunference - Number(currentSkill2.percent) / 100 * circunference : 100 * circunference}/>
                            </svg>
                            <span className="absolute text-5xl text-white">{currentSkill2 ? currentSkill2.percent : 100}%</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
      </>
    )
  }
  
  export default Skills