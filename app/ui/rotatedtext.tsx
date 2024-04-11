import React from 'react';

type RotatedTextProps = {
    text: string;
};

const RotatedText: React.FC<RotatedTextProps> = ({ text }) => {
    // Split the text into an array of characters
    const characters = text.split("").map((char, index) => (
        <span key={index} style={{ transform: `rotate(${index * 8.2}deg)`, position: 'absolute', left:"50%",transformOrigin: "0 200px" }} >
            {char}
        </span>
    ));

    return <p className="text">{characters}</p>;
};

export default RotatedText;
