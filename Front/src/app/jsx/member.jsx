import React from 'react'
import {HexIcon} from './hex_icon.jsx'

var width = 260;
var height = 300;

function Member(props) {

    return  <div className="comb">
                <div className="content">
                    <div className="name ">{props.name}</div>
                    <div className="prof">{props.prof}</div>
                    <div className="sn">
                        <div className="sn__grid"><HexIcon link="#" icon_class="fa-instagram"/></div>
                        <div className="sn__grid"><HexIcon link="#" icon_class="fa-twitter"/></div>
                        <div className="sn__grid"><HexIcon link="#" icon_class="fa-linkedin"/></div>
                        <div className="clear">

                        </div>
                    </div>
                </div>
                <svg className="hex" version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height}
                     viewBox="0 0 259.8076211353316 300">
                    <defs>
                        <pattern id={props.id} patternUnits="userSpaceOnUse" width={width} height={height}>
                            <image xlinkHref={props.img} x="0" y="0" width={width + 40} height={height}>

                            </image>
                        </pattern>
                    </defs>
                    <path fill={"url(#" + props.id + ")"}
                          d="M103.92304845413264 14.999999999999998Q129.9038105676658 0 155.88457268119896 14.999999999999998L233.82685902179844 60Q259.8076211353316 75 259.8076211353316 105L259.8076211353316 195Q259.8076211353316 225 233.82685902179844 240L155.88457268119896 285Q129.9038105676658 300 103.92304845413264 285L25.98076211353316 240Q0 225 0 195L0 105Q0 75 25.98076211353316 60Z">

                    </path>
                </svg>
            </div>
}

module.exports = {
    Member:Member
};