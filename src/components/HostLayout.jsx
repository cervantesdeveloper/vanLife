import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "161616"
    }
    return(
        <>
            <nav className="host-nav">
                <NavLink 
                    to="."
                    end 
                    style={({isActive})=> isActive ? activeStyles : null}
                > {/*end es una atributo que le dice al enrutador que las coincidencias de tuta  terminan aqui, nos ayudara para que el enlace de host no reciba los atributos como si estubiera seleccionad mientras "income" o "reviews" esten seleccionados*/}
                    Dashboard
                </NavLink>

                <NavLink 
                    to="income"
                    style={({isActive})=> isActive ? activeStyles : null}
                >
                    Income
                </NavLink>

                <NavLink 
                    to="vans"
                    style={({isActive})=> isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>

                <NavLink 
                    to="reviews"
                    style={({isActive})=> isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
        
    )
}