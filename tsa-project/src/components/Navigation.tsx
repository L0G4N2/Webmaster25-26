import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

export function Navigation() {
  return (
    <>
      <div id='nav-bar'>

        <Link to="/contact"><button>CONTACT</button></Link>
        <Link to="/resources"><button>RESOURCES</button></Link>
        <Link to="/"><img id='logo' src={logo}/></Link>
        <Link to="/about"><button>ABOUT</button></Link>

        <img onClick={showSideBar} id='menu' src={menu}/>
      </div>
      <div id='side-bar'>
        <img onClick={hideSideBar} id='close-btn' src={close}/>
        <Link to="/contact"><button>CONTACT</button></Link>
        <Link to="/resources"><button>RESOURCES</button></Link>
        <Link to="/about"><button>ABOUT</button></Link>
      </div>
    </>
  );
};

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  const navbar = document.getElementById("nav-bar");
  const logo = document.getElementById("logo");
  if (!navbar || !logo) return;
  if (window.scrollY > 40) {
    navbar.style.backgroundColor = "#011638";
    navbar.style.height = '105px';
    logo.style.height = '90px';
  }
  else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.height = '160px';
    logo.style.height = '125px';
  }
}

function showSideBar() {
  const sideBar = document.getElementById("side-bar");
  if (!sideBar) return;
  sideBar.style.transform='translateX(0)';
}

function hideSideBar() {
  const sideBar = document.getElementById("side-bar");
  if (!sideBar) return;
  sideBar.style.transform='translateX(100%)';
}