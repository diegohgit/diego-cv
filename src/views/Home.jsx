import SectionTitle from "../components/SectionTitle"
import CopyToClipboard from "../components/CopyToClipboard";



export default function Home() {
  return (
    <>
      {/* TOP */}
      <div className="sticky top-0 flex
                      h-screen md:h-6/12 items-center
                      justify-center">
        <div className="md:flex mt-14 mx-auto
                        items-center">
          <img className="mx-auto w-50"
                src="../img/circulo_cv.png"
                alt="Profile"/>

          <div className="text-center text-dark *:mt-2">
            <h1 className="font-mono text-5xl">
              Diego Hernández Hernández
            </h1>
            <span className="text-3xl">Web Developer</span>

            <div className="flex w-fit mx-auto gap-1 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
              </svg>
              <a  href="/Diego Hernández Hernández - Resume.pdf"
                  download
                  className="underline"
              >
                <span>Download this resume in PDF.</span>
              </a>
            </div>
          </div>
        </div>
      </div>



    {/* BOTTOM */}
      <div className="relative z-10 bg-dark 
                      pb-14 pt-8 md:pt-0
                      shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
        <div className="md:flex text-light">

        {/* About Me */}
          <div className="md:w-8/12 pb-10 md:pb-0 ">
            <div className="w-full md:w-10/12 px-2
                            md:mx-auto text-xl text-center">

              <SectionTitle title="ABOUT ME"/>

              <p>
                I'm 34 years old, I was born in Mexico and I have 10 years of experience in IT. 
              </p><br />
              <p>
                I specialize in web development using React and Laravel but I'm always willing to 
                learn new frameworks and technologies to expand my knowledge.
              </p><br />
              <p>
                I enjoy learning new things, but I also like to share my knowledge and help others
                when its needed.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-[310px] mx-auto">

            <SectionTitle title="GENERAL INFO" />
            <div className="*:flex *:gap-2 *:mt-3">
              <div>
                {/*Github icon*/}
                <svg width="24" viewBox="14 14 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M56.7937 84.9688C44.4187 83.4688 35.7 74.5625 35.7 63.0313C35.7 58.3438 37.3875 53.2813
                    40.2 49.9063C38.9812 46.8125 39.1687 40.25 40.575 37.5313C44.325 37.0625 49.3875 39.0313 52.3875
                    41.75C55.95 40.625 59.7 40.0625 64.2937 40.0625C68.8875 40.0625 72.6375 40.625 76.0125
                    41.6563C78.9187 39.0313 84.075 37.0625 87.825 37.5313C89.1375 40.0625 89.325 46.625 88.1062
                    49.8125C91.1062  53.375 92.7 58.1563 92.7 63.0313C92.7 74.5625 83.9812 83.2813 71.4187 
                    84.875C74.6062 86.9375 76.7625 91.4375 76.7625 96.5938L76.7625 106.344C76.7625 109.156 79.1062
                    110.75 81.9187 109.625C98.8875 103.156 112.2 86.1875 112.2 65.1875C112.2 38.6563 90.6375 17
                    64.1062 17C37.575 17 16.2 38.6562 16.2 65.1875C16.2 86 29.4187 103.25 47.2312 109.719C49.7625
                    110.656 52.2 108.969 52.2 106.438L52.2 98.9375C50.8875 99.5 49.2 99.875 47.7 99.875C41.5125
                    99.875 37.8562 96.5 35.2312 90.2188C34.2 87.6875 33.075 86.1875 30.9187 85.9063C29.7937
                    85.8125 29.4187 85.3438 29.4187 84.7813C29.4187 83.6563 31.2937 82.8125 33.1687 82.8125C35.8875
                    82.8125 38.2312 84.5 40.6687 87.9688C42.5437 90.6875 44.5125 91.9063 46.8562 91.9063C49.2 91.9063
                    50.7 91.0625 52.8562 88.9063C54.45 87.3125 55.6687 85.9063 56.7937 84.9688Z"
                    fill="currentColor"
                  />
                </svg>
                <a href="https://github.com/diegohgit" target="_blank">
                  <span className="underline">github.com/<b>diegohgit</b></span>
                </a>
              </div>

              <div>
                {/*Mail icon*/}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <div className="group flex gap-2">
                    6diegoh@gmail.com
                  <div className="hidden group-hover:inline-flex">
                    <CopyToClipboard  text='6diegoh@gmail.com'
                                      size='5'
                    />
                  </div>
                </div>
              </div>

              <div>
                {/*Location icon*/}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Guadalupe, Nuevo León, México</span>
              </div>

              <div>
                {/*Graduation cap icon*/}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <div >
                  <span className="font-bold">Instituto Tecnológico de Nuevo León</span>
                  <br />
                  <span>- Computer Systems Engineering</span>
                  <br />
                  <span>(From 2011 to 2016)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}