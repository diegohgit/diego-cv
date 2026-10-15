import { Link, useLocation } from "react-router-dom"; 

export default function Sidebar() {

  const location = useLocation();

  //Routes and options shown in toolbar.
  const options = [
            {label:"About Me",   route:"/"},
            {label:"Experience", route:"/experience"},
            {label:"Portfolio",  route:"/portfolio"},
          ];



  return (
  <div className="h-14 w-full flex
                  z-20 fixed bg-dark
                  shadow-[0_4px_6px_1px_rgba(0,0,0,0.3)]">
    <div className="flex mx-auto items-center">
      {
        options.map(option => (
          <Link
            key={option.label}
            to={option.route}
            className="text-lg text-center font-bold 
                       text-light cursor-pointer truncate"
            onClick={() => {setPath(option.route)}}
          >
            <div className="h-14 items-center w-full 
                            mr-4 bg-midtone-hover cursor-pointer">
              {/*Module name*/}
              <div className="h-12 flex items-center">
                <p className="text-center w-full">{option.label}</p>
              </div>

              {/*Mark active option*/}
              <div className={`${location.pathname === option.route ? "bg-midtone" : ""}
                              h-2 w-full `}></div>
            </div>
          </Link>
        ))
      }
    </div>
  </div>
  )
}
