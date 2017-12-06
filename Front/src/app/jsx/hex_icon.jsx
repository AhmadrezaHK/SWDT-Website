import React from 'react'

function HexIcon(props) {
    return  <div className="hex-icon">
                <a href={props.link}>
                    <i className={"fa " + props.icon_class}>

                    </i>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 34.64101615137754 40">
                        <path d="M12.990381056766577 2.4999999999999996Q17.32050807568877 0 21.650635094610962 2.5L30.31088913245535 7.5Q34.64101615137754 10 34.64101615137754 15L34.64101615137754 25Q34.64101615137754 30 30.310889132455348 32.5L21.650635094610966 37.5Q17.32050807568877 40 12.990381056766578 37.5L4.330127018922193 32.5Q0 30 0 25L0 15Q0 10 4.330127018922194 7.5Z">

                        </path>
                    </svg>
                </a>
            </div>
}

module.exports = {
    HexIcon : HexIcon
};