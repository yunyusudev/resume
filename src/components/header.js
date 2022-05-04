import { useState, createRef, forwardRef } from 'react'
import ScrollSpy from 'react-scrollspy-navigation';
import goScrollTo from "../hooks/goScrollTo"


const HeaderListItem = forwardRef(({ href, text, onClick, transition }, ref) => (
    <li><a ref={ref} href={href} onClick={onClick}>
        {text}
    </a></li>
));


function Header() {
    const [showMenu, setShowMenu] = useState(true);
    const handleScroll = (goToElement) => {
        goScrollTo(goToElement)
    }
    return (
        <header className="header">
            <div className="logo" onClick={() => handleScroll('#Top')}>
                REBECCA SU</div>
            <div className={`menuIconContainer ${showMenu ? '' : ' menuIconClick'}`}>
                <div className="menuIcon" onClick={() => setShowMenu(!showMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`headerList${showMenu ? '' : ' headerListClick'} `} onClick={() => setShowMenu(!showMenu)}>
                <ul>
                    <ScrollSpy>
                        <HeaderListItem href="#AboutMe" text="AboutMe" ref={createRef()} />
                        <HeaderListItem href="#Skills" text="Skills" ref={createRef()} />
                        <HeaderListItem href="#Portfolio" text="Portfolio" ref={createRef()} />
                        <HeaderListItem href="#Experiences" text="Experiences" ref={createRef()} />
                        <HeaderListItem href="#Contact" text="Contact" ref={createRef()} />
                    </ScrollSpy>
                </ul>
            </div>
        </header>
    )
}


export default Header;