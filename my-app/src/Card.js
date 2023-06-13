import React from "react";
import imgScr from './assets/images/dz1.jpeg'

const Card = ({ title, subTitle, buttonTitle, onButtonClicked }) => {
    const handleButtonClick = () => {
        alert(title);
        if(onButtonClicked) {
            onButtonClicked();
        }
    };

    return (
        <div style={{ width: "200px", height: "300px", backgroundColor: "whitesmoke", padding: "16px", margin: "16px" }}>
            <img style={{ width: "100%", height: "40%" }} src={imgScr} alt="Card img" />
            <div style={{ marginTop: "16px" }}>
                <h3 style={{ margin: "0" }}>{title}</h3>
                <p style={{ color: "gray", margin: "4px 0" }}>{subTitle}</p>
                <button onClick={handleButtonClick} style={{ backgroundColor: "blueviolet", color: "white", border: "none", padding: "8px 16px", cursor: "pointer" }}>{buttonTitle}</button>
            </div>
        </div>
    );
};

const App = () => {
    const handleClick = () => {
        console.log("Button clicked");
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
                imgSrc
                title="Card 1"
                subTitle="This is Card 1"
                buttonTitle="Click me"
                onButtonClicked={handleClick}
            />
            <Card
                imgSrc
                title="Card 2"
                subTitle="This is Card 2"
                buttonTitle="Button"
            />
            <Card
                imgSrc
                title="Card 3"
                subTitle="This is Card 3"
                buttonTitle="Press me"
                onButtonClicked={handleClick}
            />
        </div>
    );
};

export default App;