import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Scroller = () => {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(0%, 0)" },
        to: { transform: "translate(-100%, 0)" },
        config: { duration: 250000 },
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });

    let explores = [ 
        {
            id: 1,
            percent: 2.48,
            type: "MJR",
        },
        {
            id: 2,
            percent: -3.41,
            type: "SOR",
        },
        {
            id: 3,
            percent: 8.39,
            type: "PGR",
        },
        {
            id: 4,
            percent: 4.28,
            type: "PMJ",
        },
        {
            id: 5,
            percent: -2.48,
            type: "WCT",
        },
        {
            id: 6,
            percent: 2.57,
            type: "PGR",
        },
        {
            id: 7,
            percent: 5.48,
            type: "WCT",
        },
        {
            id: 8,
            percent: -21.93,
            type: "MJR",
        },
        {
            id: 9,
            percent: 8.14,
            type: "MJR",
        },
        {
            id: 10,
            percent: 7.34,
            type: "WCT",
        }
    ]

    explores = explores.concat(explores);
    explores = explores.concat(explores);
    explores = explores.concat(explores);
    explores = explores.concat(explores);
    explores = explores.concat(explores);
    explores = explores.concat(explores);
    
    return (
        <div key={key} className="scroller">
            <animated.div style={scrolling}>
            {
                explores && explores.map( ( explore, key ) => {
                    return (
                        <div key={key}> {explore.type}
                            { 
                                explore.percent < 0 ? 
                                    <span className="negotive">{ explore.percent }%<div></div></span>
                                : 
                                    <span className="positive">+{ explore.percent }%<div></div></span> 
                            }
                        </div> 
                    );
                })
            }            
            </animated.div>
        </div>
    );
};

export default Scroller;