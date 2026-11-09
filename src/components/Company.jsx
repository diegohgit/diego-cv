export default function Company({company}) {


  return (
    <>
      <div className='md:w-6/10 md:text-xl mt-8
                      mx-auto'>


      {/* Position and years */}
        <div className='flex gap-6 text-xl
                        mb-2 md:text-2xl'
        >
          <h3 className="font-bold">{company.position}</h3>
          <span className="italic">{company.years}</span>
        </div>


      {/* Company name and location */}
        <span className="italic *:mr-2">
          {
            company.website ? (
              <a  href={company.website}
                  target="_blank"
                  className="underline"
              >
                {company.company}
              </a>
            ) : (
              <span>{company.company}</span>
            )
          }

          | {company.location}
        </span>


      {/* List of activities */}
        <ul className='list-disc mt-2 pl-5'>
          {
            company.activities.map((act) =>
              <li key={act.activity_id}>{act.description}</li>
            )
          }
        </ul>
      </div>
    </>
  )
}
