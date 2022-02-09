import React from 'react';

function Navbar(){
    return(
        <div className="nav-bar">
            <div className="aastu-logo">
                <img src="https://images.app.goo.gl/7qQyQjAUczvoCMx26" width="200px" height="200px" alt="aastu-logo"/>
                <p>Addis Ababa Science and Technology University</p>
            </div>
            <div className="nav-container">
            <div className="links">
                <i class=" "></i>
                <button className="submit" type="submit">Submit</button>
            </div>
                <div className="search-container">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </div>
    );
}
export default Navbar;