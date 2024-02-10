import React from 'react'
import {Link} from 'react-router-dom'
import xbox from '../../../assets/xbox.png'
import git from '../../../assets/git.png'
import twitter from '../../../assets/twitter.png'
import insta from '../../../assets/insta.png'
import pin from '../../../assets/pin.png'
import style from './footer.module.css'
const FormFooter = () => {
  return (
    <div>
      
      <div className={style.footer}>
          <div className={style.link}>
            <Link>Company </Link>
            <Link>About Us </Link>
            <Link>Team </Link>
            <Link>Products </Link>
            <Link>Blog </Link>
            <Link>Pricing </Link>
          </div>
          <div className={style.logos}>
            <img src={xbox} />
            <img src={pin} />
            <img src={twitter} />
            <img src={insta} />
            <img src={git} />
          </div>
          <p className={style.privacy}>
            Copyright © 2024 Soft by Raden Creation
          </p>
        </div>

    </div>
  )
}

export default FormFooter
