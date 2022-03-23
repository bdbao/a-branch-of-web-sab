import React from 'react'
import './Partners.css'
import { useContext } from 'react';
import { HomePageContext } from '../HomePage/HomePage';

import SABnho from './Images/sabnho.svg';
import Partner1 from './Images/partner1.svg';
import Partner2 from './Images/partner2.svg';

const Partners = () => {
    const { scrollToNext } = useContext(HomePageContext)

    return (
        <section id = 'partners'>
            <p className = 'partners-container'>HỢP TÁC VỚI SAB</p>

            <img  src={SABnho} alt='sabnho' className = 'SABnho'/>

            <div class = 'partners-logo'> 
                <img src={Partner1} alt='partner1' height = '88'/>
                <img src={Partner2} alt='partner2' height = '95'/>
            </div>

            <div className="HomePage__next">
                <svg onClick={() => scrollToNext("")} className="HomePage__next-button" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="96" height="96" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_185_150" transform="scale(0.0104167)"/>
                        </pattern>
                        <image id="image0_185_150" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABfElEQVR4nO3ZvW0CQRCG4a8FB07ck0NacE+0QOqeHDighSM4nXRCjO6Hnd3ZnfeRiIGb9xMBEgAAAAAAAAAAAAAAAAAAAAAAyOhX0lfrDxHQp6RbjTeaJN0l/dR4s05cJP1rfjbuptUr+xqW6tfPxN309Mq6hnX1TQ+QbQ2vqg9xgAxrsKoPc4BR17BVfbgDjLSGPdWHPEDvazhSfegD9LiGo9WHP0AvazhbfTcHiLyGd6rv6gDR1lCi+i4PEGENparv9gCt1lC6+u4PUHMNHtVXPcC3pD/HL+C1Bs/qJ81HvTh87pc+JF0dv0zpNXhXf9N84Oqir2Go6i1R1zBs9ZYoa0hRvaX1GtJVb6m9htTVW2o9FKrf4L0Gqt/B+7eB6neKvoahqrdEXcOw1VuirCFF9ZbWa0hXvaX2GlJXb6m1Bqrf4LUGqj+g9Bqo/qR310D1BZxdA9UXtncNVO9oaw1UX8nzGqi+geX/BqoHAAAAAAAAAAAAAAAAEMoDKe576ijF13UAAAAASUVORK5CYII="/>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default Partners