import Company from "../components/Company"
import SectionTitle from "../components/SectionTitle"
import {jobs} from '../data/Jobs'


export default function Experience() {


  return (
    <>
      <div className="mt-14 flex flex-col
                      md:flex-row">

        <div className="md:w-3/4 px-2 text-dark 
                        order-2 md:order-1 pb-8">

          <SectionTitle title="EXPERIENCE"/>

        {/* List of jobs */}
          { jobs.map((job) =>
              <Company key={job.id} company={job} />
            )
          }

        </div>

        {/* Skills */}
        <div className="md:w-1/4 h-full right-0 
                        text-light md:fixed bg-dark
                        order-1 md:order-2
                        shadow-[0_0_6px_6px_rgba(0,0,0,0.3)]">

          <SectionTitle title="SKILLS" />
          <ul className="columns-2 md:columns-1 gap-x-8 
                         ml-8 text-xl p-5
                         list-disc">
            <li>Full Stack</li>
            <li>MySQL</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>CodeIgniter</li>
            <li>Git</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>JQuery</li>
            <li>CSS 3</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </>
  )
}
