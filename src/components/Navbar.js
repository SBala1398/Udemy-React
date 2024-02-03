import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faSearch, faShoppingCart, faBell } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return (
        <div class="navbar">
            <div class="navbar__s1">
                <h1 class="navbar__s1__title">Udemy</h1>
            </div>
            <div class="navbar__s2">
                <FontAwesomeIcon icon={faSearch} style={{ color: '#000' }} />
                <input placeholder="Search for Your Course Here !"></input>
            </div>
            <div class="navbar__s3">
                <p>Courses</p>
                <div class="mylearing">
                    <p>Mylearing</p>
                    <div class="mylearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#000' }} />
                <FontAwesomeIcon icon={faBell} style={{ color: '#000' }} />
                <FontAwesomeIcon icon={faUser} style={{ color: '#000' }} />
            </div>
            <div class="navbar__s4">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>

    )
}

export default Navbar 