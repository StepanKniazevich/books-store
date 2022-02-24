import React from 'react'
import logo from './images/header__logo.png'
import menu from './images/menu.jpg'
import vector from './images/vector.png'
import search from './images/search.png'
import profile from './images/profile.png'


export default function Header() {

    return (
        <div className="bookStoreHeader">
            <div className="bookStoreHeader__container ">
                <img src={logo} className="bookStoreHeader__logo" alt='LOGO' />

                <div className="bookStore__catalog">
                    <img src={menu} className="bookStore__menu" />
                    <span>Menu</span>
                    <img src={vector} />
                </div>

                <input type="text" className="bookStoreHeader__searchField" />

                <div className="bookStoreHeader__search">
                    <a href="#" className="search__button"> <img src={search} /> </a>
                </div>

                <div className="bookStore__auto">
                    <button className="bookStore__login"> Log in   </button>
                    <button className="bookStore__singIn"><img src={profile} /> Sing in   </button>

                </div>

            </div>

        </div>
    )

}


