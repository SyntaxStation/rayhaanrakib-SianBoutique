import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Heading = ({text, tagline}) => {
    return (
        <div className="my-10 text-center container mx-auto px-10 lg:px-0">
            <h2 className="text-3xl lg:text-5xl font-semibold text-secondary"><Fade cascade damping={0.1}>{text}</Fade></h2>
            <p className="my-5">{tagline}</p>
        </div>
    );
};

export default Heading;