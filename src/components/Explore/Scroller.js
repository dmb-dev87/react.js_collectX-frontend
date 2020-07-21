import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Scroller = ({ explores }) => {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(100%, 0)" },
        to: { transform: "translate(-60%, 0)" },
        config: { duration: 20000 },
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });

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