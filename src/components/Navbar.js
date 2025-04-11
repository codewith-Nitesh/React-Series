const Navbar = () => {
    return (
        <div className='navbar' style={{backgroundColor :'red'}}>
            {/* leftPart */}
            <div className='logo'>
                <h1>Ajio</h1>
            </div>
            {/* rightPart */}
            <div className='menu_item'>
                <ul className='items'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Kids</li>
                    <li>Men</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar