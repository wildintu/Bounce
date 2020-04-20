import * as React from 'react'; 
import { NavLink } from 'react-router-dom'; 

const Bar: React.FC<BarProps> = () => {
    return (
        <nav style={{background: 'white'}} className="nav p-2 shadow justify-content-end align-tiems-center">
            <NavLink style={{ textDecorationLine: "none" }} className="py-2 mx-2 text-primary" activeClassName="py-2 mx-2 text-primary border-bottom border-primary" exact to="/">Home</NavLink>
            <NavLink style={{ textDecorationLine: "none" }} className="py-2 mx-2 text-primary" activeClassName="py-2 mx-2 text-primary border-bottom border-primary" exact to="/forum">Forum</NavLink>
        </nav>
    )
}

interface BarProps {}; 

export default Bar; 

