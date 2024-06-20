// Write your code here
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}
const Header = props => {
  const a = 'hi'

  return (
    <div className="header-container">
      <Link to="/" className="links">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="trigger-button"
          >
            <GiHamburgerMenu />
          </button>
        }
        overlayStyle={overlayStyles}
      >
        {close => (
          <>
            <div className="close-btn-container">
              <button
                data-testid="closeButton"
                type="button"
                className="close-btn"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>

            <ul className="col-container">
              <li>
                <Link to="/" className="links">
                  <AiFillHome className="icons" />
                  <h1 className="home-name">Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/about" className="links">
                  <BsInfoCircleFill className="icons" />
                  <h1 className="home-name">About</h1>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  )
}

export default withRouter(Header)
