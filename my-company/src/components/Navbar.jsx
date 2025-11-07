import { Link, useLocation} from "react-router-dom";
function Navbar(){
    const { pathname } = useLocation();

const navStyles = {
position: 'sticky',
top: 0,
zIndex: 10,
background: '#ffffff',
borderBottom: '1px solid #e9e9ef',
padding: '12px 0'
}

const links = {
display: 'flex',
alignItems: 'center',
gap: '14px'
}

const linkBase = {
textDecoration: 'none',
padding: '8px 12px',
borderRadius: '10px',
fontWeight: 600,
transition: 'background 120ms ease',
color: '#1f2937'
}


const isActive = (to) => pathname === to


const linkStyle = (to) => ({
...linkBase,
background: isActive(to) ? '#eef2ff' : 'transparent',
color: isActive(to) ? '#4338ca' : '#1f2937',
border: isActive(to) ? '1px solid #c7d2fe' : '1px solid transparent'
})
    return (
        <nav style={navStyles}>
            <div style={links}>
            <Link to="/" style={linkStyle("/")}>Home</Link>
            <Link to="/about" style={linkStyle("/about")}>About</Link>
            <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
            <Link to="/services" style={linkStyle("/services")}>Services</Link>
            </div>
        </nav>

    );
}

export default Navbar;