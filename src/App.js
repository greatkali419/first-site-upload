import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Features from "./components/Features";
import Bookmark from "./components/Bookmark";
import Download from "./components/Download";
import Faqs from "./components/Faqs";
import {useState } from 'react';
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [NavMenu, SetNavMenu] = useState('')
  const [LogoColor, SetLogoColor] = useState('')
  const [SpeedyColor, SetSpeedyColor] = useState('')
  const [EasyColor, SetEasyColor] = useState('')
  const [BookmarkColor, SetBookmarkColor] = useState('')
  const [BookmarkNav, SetBookmarkNav] = useState('')
  const [SpeedyNav, SetSpeedyNav] = useState('')
  const [EasyNav, SetEasyNav] = useState('')
  const [Dropdown1, SetDropdown1] = useState('')
  const [Dropdown2, SetDropdown2] = useState('')
  const [Dropdown3, SetDropdown3] = useState('')
  const [Dropdown4, SetDropdown4] = useState('')
  const [DropdownColor, SetDropdownColor] = useState('')
  

  const handleMenu = ()=> {
    SetNavMenu('flex')
    SetLogoColor('#fff')
  }
  const handleCloseMenu = ()=> {
    SetNavMenu('none')
    SetLogoColor('')
  }
  const handleBookmarkClick = () => {
    SetBookmarkColor('3px solid red')
    SetSpeedyColor('')
    SetEasyColor('')
    SetBookmarkNav('flex')
    SetSpeedyNav('none')
    SetEasyNav('none')
  }
  const handleSpeedyClick = () => {
    SetSpeedyColor('3px solid red')
    SetBookmarkColor('0.5px solid white')
    SetEasyColor('')
    SetSpeedyNav('flex')
    SetBookmarkNav('none')
    SetEasyNav('none')

  }
  const handleEasyClick = () => {
    SetEasyColor('3px solid red')
    SetBookmarkColor('0.5px solid white')
    SetSpeedyColor('')
    SetEasyNav('flex')
    SetBookmarkNav('none')
    SetSpeedyNav('none')
  }
  const handleDropdown1 = () => {
    // let figure = 
    SetDropdown1('flex')
  }
  const handleDropdown2 = () => {
    // let figure = 
    SetDropdown2('flex')
  }
  const handleDropdown3 = () => {
    // let figure = 
    SetDropdown3('flex')
  }
  const handleDropdown4 = () => {
    // let figure = 
    SetDropdown4('flex')
  }
  const handleDropup1 = () => {
    SetDropdown1('none')
  }
  const handleDropup2 = () => {
    SetDropdown2('none')
  }
  const handleDropup3 = () => {
    SetDropdown3('none')
  }
  const handleDropup4 = () => {
    SetDropdown4('none')
  }
  

  return (
    <div className="App">
      <Navbar
      NavMenu={NavMenu}
      SetNavMenu={SetNavMenu}
      handleMenu={handleMenu} 
      handleCloseMenu={handleCloseMenu}
      LogoColor={LogoColor}
      SetLogoColor={SetLogoColor}
      />
      <Main />
      <Features
       BookmarkColor={BookmarkColor}
       SetBookmarkColor={SetBookmarkColor}
       handleBookmarkClick={handleBookmarkClick}
       EasyColor={EasyColor}
       SetEasyColor={SetEasyColor}
       handleEasyClick={handleEasyClick}
       SpeedyColor={SpeedyColor}
       SetSpeedyColor={SetSpeedyColor}
       handleSpeedyClick={handleSpeedyClick}
      />
      <Bookmark
      BookmarkNav={BookmarkNav}
      SetBookmarkNav={SetBookmarkNav}
      SpeedyNav={SpeedyNav}
      SetSpeedyNav={SetSpeedyNav}
      EasyNav={EasyNav}
      SetEasyNav={SetEasyNav}
      />
      <Download />
      <Faqs 
      handleDropdown1={handleDropdown1}
      handleDropdown2={handleDropdown2}
      handleDropdown3={handleDropdown3}
      handleDropdown4={handleDropdown4}
      handleDropup1={handleDropup1}
      handleDropup2={handleDropup2}
      handleDropup3={handleDropup3}
      handleDropup4={handleDropup4}
      Dropdown1={Dropdown1}
      Dropdown2={Dropdown2}
      Dropdown3={Dropdown3}
      Dropdown4={Dropdown4}
      SetDropdown1={SetDropdown1}
      SetDropdown2={SetDropdown2}
      SetDropdown3={SetDropdown3}
      SetDropdown4={SetDropdown4}
      LogoColor={LogoColor}
      DropdownColor={DropdownColor}
      />
      <Form />
      <Footer />
    </div>
  )
};

export default App;

