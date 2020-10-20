import React from 'react';

const Bar = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hi <span>Rafael Moreno</span></p>
            <nav className="nav-principal">
                <a href="#!">Log Out</a>
            </nav>
        </header>
     );
}
 
export default Bar;