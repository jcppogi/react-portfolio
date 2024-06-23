import React, { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';

const Cover = () => {
    
    const [aboutMe] = useState(aboutMeData);

    return (
        <div>
            {
            /* {aboutMe.map((bio) => (
                <p key={bio.id}> {bio.bio} </p>
            ))} */
            }
            <p>{aboutMe[0].bio}</p>
            <p>{aboutMe[1].bio}</p>
        </div>
    );
};

export {Cover};
