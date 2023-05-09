import React from 'react'
import './css/style.css'


export default function Checkbox({
    size,
}) {

    return (
        <div>
            {/* <label className="check">
                <input type="checkbox" />
                <div className="box"></div>
            </label> */}
            <div className="cntr">
                <label for="cbx" className="label-cbx">
                    <input id="cbx" type="checkbox" className="invisible" />
                    <div className="checkbox" style={ {
                        width: size?size:"30px",
                        height: size?size:"30px"
                    }}>
                        <svg width={size?size:"30px"} height={size?size:"30px"} viewBox="1 1 18 18">
                            <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                            <polyline points="4 11 8 15 16 6"></polyline>
                        </svg>
                    </div>
                    {/* <span>Checkbox</span> */}
                </label>
            </div>
        </div>
    )
}
