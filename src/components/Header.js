import "./Header.css";

function Header(props) {
    return (
        <div className="header-container">
           {props.title}
        </div>
    )
}

export default Header;