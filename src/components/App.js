import React, { useState } from 'react';
import './App.css';

const Star = ({handleClickStar, handleHoverStar, clickRating, hoverRating, interactedStar}) => {

    let goldStar = clickRating >= interactedStar || hoverRating >= interactedStar  ? "gold" : "";

    return (
        <i 
            className={`fa fa-star mx-1 ${goldStar}`}
            onClick={() => handleClickStar(interactedStar)}
            onMouseEnter={() => handleHoverStar(interactedStar)}
        />
    )
}

const App = () => {

    const numberOfStars = 10;

    const [clickRating, setClickRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    
    const getStarsArray = () => {
        const numberOfStarsArray = [];
        for (let i = 1; i <= numberOfStars; i++) {
            numberOfStarsArray.push(i);
        }
        return numberOfStarsArray;
    }

    const handleClickStar = (clickedStarNumber) => {
        setClickRating(clickedStarNumber);
    }

    const handleHoverStar = (clickedStarNumber) => {
        setHoverRating(clickedStarNumber)
    }

    return (
        <div className="container">
            <div className="text-center my-3">
                {getStarsArray().map((starNumber) => {
                    return (
                        <Star
                            key={starNumber}
                            handleClickStar={handleClickStar}
                            handleHoverStar={handleHoverStar}
                            clickRating={clickRating}
                            hoverRating={hoverRating}
                            interactedStar={starNumber}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default App;