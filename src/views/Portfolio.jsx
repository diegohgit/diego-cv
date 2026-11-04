import SectionTitle from "../components/SectionTitle";



export default function Portfolio() {
  return (
    <>
      <div className="mt-20 mb-20 text-dark">

        <a href='/class-scheduler-demo/login'
            target='_blank'
            className=" block md:mx-auto mx-2
                        md:w-1/4"
        >
          <img className="my-10 mx-auto" 
               src="../img/scheduler_sky-blue.png"
               alt="ClassScheduler logo"/>
        </a>

        <div className="md:w-8/12 px-2 text-justify
                        flex flex-col space-y-3
                        mx-auto text-xl"
        >

          <p>
            I have been taking English classes with my teacher Daniel since 2025. From the beginning 
            I noticed that Daniel used to write down all of his students' progress and class schedules 
            in a couple of paper notebooks.
          </p>
          <br />
          <p>
            Sometimes it was difficult to see if a student had already covered a specific chapter so
            he had to search through every page of his notebook. Rescheduling classes was also complicated
            because sometimes he couldn't undertstand the schedule he had written down.
          </p>
          <br />
          <p>
            As time went by, he needed to buy another notebook because the last one was completely full.
          </p>
          <br />
          <p>
            To improve this process, I decided to create <b>Class Scheduler</b>. With this web app he can see his class schedule, but it also keeps track of every chapter 
            covered by the students making it easier to maintain a record of every student's progress.
          </p>
          <br />



          <SectionTitle title="Try The Demo" />
          <div className="flex flex-col space-y-3
                          text-left md:text-xl text-lg">
            <p>You can visit the demo version:
              <a href="https://diegomysite.com/class-scheduler-demo/login" target="_blank">
                <span className="ml-2 underline font-bold">Class Scheduler - Demo</span>
              </a>
            </p>
            <p>
              To log into the demo version, you will need the following credentials:
            </p>
            <p>
              <b>Demo user:</b> demo-user@diegomysite.com
              <br />
              <b>Password:</b> Cl4ss$chedul3r
            </p>
            <br />
            <p>
              Feel free to download the project directly from my GitHub repository:
              <a href="https://github.com/diegohgit" target="_blank">
                <span className="ml-2 hover:underline font-bold">github.com/diegohgit</span>
              </a>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
