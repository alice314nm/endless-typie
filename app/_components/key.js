import React from 'react';
import '../keyboard.css';

export default function Key ({ dataKey, topLabel, bottomLabel, styleClass }){
    return (
        <div className={`key ${styleClass}`} data-key={dataKey}>
            <center>
                <p>{topLabel}</p>
                {bottomLabel && <p>{bottomLabel}</p>}
            </center>
        </div>
    );
};

