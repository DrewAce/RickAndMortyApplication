import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../img/AA.png'
import style from './Landing.module.css';
const Landing = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
         <img className={style.logo} src={Logo} alt="" />

      <NavLink to='/form' > <button className={style.buttonLogin}>GO TO LOGIN</button></NavLink>
    </div>
    </div>
  )
}

export default Landing
