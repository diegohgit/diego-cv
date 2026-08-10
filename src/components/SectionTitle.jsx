

export default function SectionTitle({title}) {

  return (
    <>
        <div className="w-fit mx-auto my-4">
            <h2 className="font-mono text-3xl">{title}</h2>
            <hr className="border-2 border-yellow-500"/>
        </div>
    </>
  )
}
