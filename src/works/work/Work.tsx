import React from 'react';

type PropsType = {
    title: string,
    description: string
}

function Work(props: PropsType) {
    return (
        <div>
            <a href="#"><img src="https://i.pinimg.com/736x/dc/55/db/dc55db0b2acde4a52e0d81c835110eb2.jpg" alt=""/></a>
            <div>{props.title}</div>
            <span>{props.description}</span>
        </div>
    );
}

export default Work;