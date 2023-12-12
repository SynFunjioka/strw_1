function Navigation() {
    return (
        <nav className="navigation">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="#" className="side-nav__link" >
                        <svg className="side-nav__icon">
                            <use xlinkHref="images/sprites.svg#icon-home"></use>
                        </svg>
                        <span>Hotel</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="images/sprites.svg#icon-news"></use>
                        </svg>
                        <span>My licenses</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref="images/sprites.svg#icon-user"></use>
                        </svg>
                        <span>Account</span>
                    </a>
                </li>
            </ul>

            <div className="legal">
                &copy; 2023 by Alan Flores
            </div>
        </nav>
    )
}

export default Navigation;