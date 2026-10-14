import SectionTitle from "../components/SectionTitle";



export default function Portfolio() {
  return (
    <>
      <div className="mt-18 text-dark">
        <SectionTitle className='text-dark!' title='ClassScheduler' />


        <div className="md:w-8/12 px-2 text-justify mx-auto text-xl">
          <p>
            I have been taking English classes with my teacher Daniel since 2025. From the beginning 
            I noticed that Daniel used to write down all of his students' progress and class schedules 
            in a couple of paper notebooks.
          </p>
          <br />
          <p>
            Sometimes it was difficult to see if a student had already covered an specific chapter so
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
          <p>
            You can use the demo by clicking the following icon:
          </p>
            <a href='/class-scheduler-demo/login' target='_blank'>
              <img className="md:w-1/2 my-10 mx-auto" 
                   src="../img/scheduler_sky-blue-test_1.png"
                   alt="ClassScheduler logo"/>
            </a>
        </div>

      </div>
    </>
  )
}
