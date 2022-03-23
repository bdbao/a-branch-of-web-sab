import React from 'react'
import './Coreteam.css'
import { useContext } from 'react';
import { HomePageContext } from '../HomePage/HomePage';
import SlideshowWithPagination from "react-slideshow-with-pagination";

import Image1 from "./Images/core-member1.png";
import Image2 from "./Images/core-member2.png";
import Image3 from "./Images/core-member3.png";
import Image4 from "./Images/core-member4.png";

const CARDS_DETAILS = [
  { image: Image1, title: <div class="title-core-member">Nguyễn Văn A</div> },
  { image: Image2, title: <div class="title-core-member">Nguyễn Văn A</div> },
  { image: Image3, title: <div class="title-core-member">Nguyễn Văn A</div> },
  { image: Image4, title: <div class="title-core-member">Nguyễn Văn A</div> },
]

const Coreteam = () => {
    const { scrollToNext } = useContext(HomePageContext)
    
    return (
        <div id="coreteam-slideshow">
            <p className='coreteam-container'>CORE TEAM</p>
          
            <SlideshowWithPagination
                options={CARDS_DETAILS}
                showDots={true}
                numberOfCardsPerScreen={2}
                showOneCardForWidthLower="sm"
                slideshowContainerMaxWidth={false}
                cardWidth={338.66}
                cardHeight={328}
            />

            <div className="HomePage__next">
                <svg onClick={() => scrollToNext("partners")} className="HomePage__next-button" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="96" height="96" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_185_150" transform="scale(0.0104167)"/>
                        </pattern>
                        <image id="image0_185_150" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABfElEQVR4nO3ZvW0CQRCG4a8FB07ck0NacE+0QOqeHDighSM4nXRCjO6Hnd3ZnfeRiIGb9xMBEgAAAAAAAAAAAAAAAAAAAAAAyOhX0lfrDxHQp6RbjTeaJN0l/dR4s05cJP1rfjbuptUr+xqW6tfPxN309Mq6hnX1TQ+QbQ2vqg9xgAxrsKoPc4BR17BVfbgDjLSGPdWHPEDvazhSfegD9LiGo9WHP0AvazhbfTcHiLyGd6rv6gDR1lCi+i4PEGENparv9gCt1lC6+u4PUHMNHtVXPcC3pD/HL+C1Bs/qJ81HvTh87pc+JF0dv0zpNXhXf9N84Oqir2Go6i1R1zBs9ZYoa0hRvaX1GtJVb6m9htTVW2o9FKrf4L0Gqt/B+7eB6neKvoahqrdEXcOw1VuirCFF9ZbWa0hXvaX2GlJXb6m1Bqrf4LUGqj+g9Bqo/qR310D1BZxdA9UXtncNVO9oaw1UX8nzGqi+geX/BqoHAAAAAAAAAAAAAAAAEMoDKe576ijF13UAAAAASUVORK5CYII="/>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Coreteam