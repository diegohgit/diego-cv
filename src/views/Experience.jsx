import SectionTitle from "../components/SectionTitle"

export default function Experience() {
  return (
    <>
      <div className="mt-14 flex">
        {/* Jobs list */}
        <div className="w-3/4 text-dark">

          <SectionTitle title="EXPERIENCE" />

          <div className="m-6 text-xl  w-140 mx-auto">
            <div className="flex gap-6 text-2xl ">
              <h3 className=" font-bold">Web Developer</h3>
              <span className="italic">2016-2017</span>
            </div>

            <span>MovIT Solutions | Monterrey, NL, México</span>

            <ul className="list-disc p-5">
              <li>Web aplications development (fullstack).</li>
              <li>Creation of stored procedures and views in MySQL.</li>
              <li>Creation of E-R diagrams in MySQL Workbench.</li>
              <li>Use of Android Studio.</li>
            </ul>
          </div>


          <div className="m-6 text-xl  w-140 mx-auto">
            <div className="flex gap-6 text-2xl ">
              <h3 className=" font-bold">Systems Analyst</h3>
              <span className="italic">2017-2023</span>
            </div>

            <span>Copamex Corrugados | San Nicolás de los Garza, NL, México</span>

            <ul className="list-disc p-5">
              <li>Design and development of the company's website
                  copamexcorrugados.com (managed until 2023).
              </li>
              <li>Design and development of web applications (fullstack).</li>
              <li>Technical support of ERP Datasul.</li>
              <li>Maintainance to computer equipment and printers.</li>
              <li>Support in network administation, servers and IP cameras.</li>
            </ul>
          </div>


          <div className="m-6 text-xl  w-140 mx-auto">
            <div className="flex gap-6 text-2xl ">
              <h3 className=" font-bold">Web Developer</h3>
              <span className="italic">2024-2025</span>
            </div>
            <span>Plexonet | Monterrey, NL, México</span>

            <ul className="list-disc p-5">
              <li>Maintainance to laboratory software MedicaTI.</li>
              <li>Development of new modules and features (fullstack).</li>
              <li>Development of reports.</li>
              <li>Development of parsers to interface laboratory equipment results.</li>
            </ul>
          </div>

          <div className="m-6 text-xl  w-140 mx-auto">
            <div className="flex gap-6 text-2xl ">
              <h3 className=" font-bold">Web Developer</h3>
              <span className="italic">2026</span>
            </div>
            <span>Independient</span>

            <ul className="list-disc p-5">
              <li>Design and development of ClassScheduler (fullstack).</li>
            </ul>
          </div>


        </div>

        {/* Skills */}
        <div className="w-1/4 h-full right-0 text-light fixed bg-dark">

          <SectionTitle title="SKILLS" />
          <ul className="ml-6 text-xl list-disc p-5">
            <li>Fullstack</li>
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
