import SectionTitle from "../components/SectionTitle"

const itemContainer = 'md:w-6/10 md:text-xl mt-8 mx-auto'
const jobCompany    = 'flex gap-6 text-xl md:text-2xl'
const ulElements    = 'list-disc mt-2 pl-5'

export default function Experience() {
  return (
    <>
      <div className="mt-14 flex flex-col md:flex-row">
        {/* Jobs list */}
        <div className="md:w-3/4 px-2 text-dark order-2
                        md:order-1 pb-8">

          <SectionTitle title="EXPERIENCE"/>

          <div className={itemContainer}>
            <div className={jobCompany}>
              <h3 className="font-bold">Web Developer</h3>
              <span className="italic">2016-2017</span>
            </div>

            <span>MovIT Solutions | Monterrey, NL, México</span>

            <ul className={ulElements}>
              <li>Web aplications development (Full Stack).</li>
              <li>Creation of stored procedures and views in MySQL.</li>
              <li>Creation of E-R diagrams in MySQL Workbench.</li>
              <li>Use of Android Studio.</li>
            </ul>
          </div>


          <div className={itemContainer}>
            <div className={jobCompany}>
              <h3 className="font-bold">Systems Analyst</h3>
              <span className="italic">2017-2023</span>
            </div>

            <span>Copamex Corrugados | San Nicolás de los Garza, NL, México</span>

            <ul className={ulElements}>
              <li>Design and development of the company's website
                  copamexcorrugados.com (managed until 2023).
              </li>
              <li>Design and development of web applications (Full Stack).</li>
              <li>Technical support of ERP Datasul.</li>
              <li>Maintainance to computer equipment and printers.</li>
              <li>Support in network administation, servers and IP cameras.</li>
            </ul>
          </div>


          <div className={itemContainer}>
            <div className={jobCompany}>
              <h3 className="font-bold">Web Developer</h3>
              <span className="italic">2024-2025</span>
            </div>
            <span>Plexonet | Monterrey, NL, México</span>

            <ul className={ulElements}>
              <li>Maintainance to a laboratory software named MedicaTI.</li>
              <li>Development of new modules, reports and features (Full Stack).</li>
              <li>Technical support.</li>
              <li>Development of parsers to interface laboratory equipment results.</li>
            </ul>
          </div>

          <div className={itemContainer}>
            <div className={jobCompany}>
              <h3 className="font-bold">Web Developer</h3>
              <span className="italic">2026</span>
            </div>
            <span>Independient</span>

            <ul className={ulElements}>
              <li>Design and development of Class Scheduler (Full Stack).</li>
            </ul>
          </div>


        </div>

        {/* Skills */}
        <div className="md:w-1/4 h-full right-0 
                        text-light md:fixed bg-dark
                        order-1 md:order-2
                        shadow-[0_4px_6px_1px_rgba(0,0,0,0.3)]">

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
