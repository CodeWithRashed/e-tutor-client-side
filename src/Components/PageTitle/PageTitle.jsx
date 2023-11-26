import { Breadcrumbs } from "@material-tailwind/react";
import useBreadcrumbs, { Route } from "use-react-router-breadcrumbs";
import {  } from "../../Router/Router";
import { NavLink } from "react-router-dom";


const PageTitle = ({children}) => {
    const breadcrumbs = useBreadcrumbs();
  return (
    <div className="bg-gray-50 mt-20 mb-5 py-8 flex justify-center items-center flex-col gap-2">

        <h1 className="text-2xl">{children}</h1>
        <Breadcrumbs>
        {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb }
          {/* {console.log(breadcrumb.key.split("/")[2])} */}
        </NavLink>
      ))}
    </Breadcrumbs>
      
    </div>
  )
}

export default PageTitle
