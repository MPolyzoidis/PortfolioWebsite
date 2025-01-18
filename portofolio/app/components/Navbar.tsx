const Navbar = () => {
    return (
        <div className="flex justify-center items-center fixed w-full top-3 z-50">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-lg bg-white/10 backdrop-blur">
                <a href="#" className="nav-item">Home</a>
                <a href="#" className="nav-item">About</a>
                <a href="#" className="nav-item">Projects</a>
                <a href="#" className="nav-item">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar  