function Header() {
    return(
        <header className="header">
            <img src="" alt="Kiuone logo" className="logo"/>
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref="images/sprites.svg#icon-bell"></use>
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__user">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80" alt="User photo" className="user-nav__user-photo"/>
                    <span className="user-nav__user-name">alan flores</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;