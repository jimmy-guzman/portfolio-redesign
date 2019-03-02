import React from 'react'
import { bool, func } from 'prop-types'
import { NavLink } from 'react-router-dom'
// import DaySVG from "./svgs/DaySVG";
// import NightSVG from "./svgs/NightSVG";

const Options = ({ isEnglish, updateLang }) => (
  <div className='options'>
    {/* <div className="options__day-night">
      <button className="btn__primary" aria-label="Day Mode">
        <DaySVG height="24" width="24" />
      </button>
      <button className="btn__primary" aria-label="Night Mode">
        <NightSVG height="24" width="24" />
      </button>
    </div> */}
    <NavLink exact to='/' className='home-link' activeClassName='active-home'>
      Jimmy Guzman
    </NavLink>
    <div className='options__lang'>
      <button
        data-lang='spanish'
        className={!isEnglish ? 'btn__primary active' : 'btn__primary'}
        type='button'
        onClick={updateLang}
      >
        SP
      </button>
      <button
        data-lang='english'
        type='button'
        className={isEnglish ? 'btn__primary active' : 'btn__primary'}
        onClick={updateLang}
      >
        ENG
      </button>
    </div>
  </div>
)

Options.propTypes = {
  isEnglish: bool.isRequired,
  updateLang: func.isRequired
}

export default Options
