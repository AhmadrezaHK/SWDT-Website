import React from 'react'

function getImage(url) {
    return({
            backgroundImage: 'url(' + url + ')'
        }
    )
}

function SlideShow(props) {
    return  <main>
                <div className="slideshow">
                    <div className="slides">
                        {
                            props.slides.map(function (slide) {
                                return  <div className={"slide " + (slide.current ? "slide--current" : "")}>
                                            <div className="slide__img" style={getImage(slide.img)}>

                                            </div>
                                            <h2 className="slide__title">{slide.title}</h2>
                                            <p className="slide__desc">{slide.desc}</p>
                                            <a className="slide__link" href={slide.link}>
                                                <span className="slide__btnText">{slide.btn_text}</span>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="160" height="70" viewbox="0 0 80 69.28203230275508">
                                                    <path fill={slide.btn_color} d="M3.000000000000001 39.837168574084174Q0 34.64101615137754 3.000000000000001 29.44486372867091L17 5.196152422706632Q20 0 26 0L134 0Q140 0 143 5.196152422706632L157 29.44486372867091Q160 34.64101615137754 157 39.837168574084174L143 64.08587988004845Q140 69.28203230275508 134 69.28203230275508L26 69.28203230275508Q20 69.28203230275508 17 64.08587988004845Z">

                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                            })
                        }
                    </div>
                    <nav className="slidenav">
                        <button className="slidenav__item slidenav__item--prev">Previous</button>
                        <span>/</span>
                        <button className="slidenav__item slidenav__item--next">Next</button>
                    </nav>
                </div>
            </main>
}

module.exports = {
    SlideShow : SlideShow
}