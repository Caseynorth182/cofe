import { NavLink } from "react-router-dom";


const Page404 = () => {
    return (
        <div className="container">
            <div className="text-center">
                Not found
                <div>
                    <NavLink to='/'>Go to hame</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Page404;