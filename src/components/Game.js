import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Card1Background from "../assets/card-1.svg";
import Card2Background from "../assets/card-2.svg";
import Card3Background from "../assets/card-3.svg";
import Card4Background from "../assets/card-4.svg";
import Card5Background from "../assets/card-5.svg";
import Card6Background from "../assets/card-6.svg";
import Card7Background from "../assets/card-7.svg";
import Card8Background from "../assets/card-8.svg";
import Card9Background from "../assets/card-9.svg";
import Card10Background from "../assets/card-10.svg";
import Card1Complete from "../assets/card-1-complete.svg";
import Card2Complete from "../assets/card-2-complete.svg";
import Card3Complete from "../assets/card-3-complete.svg";
import Card4Complete from "../assets/card-4-complete.svg";
import Card5Complete from "../assets/card-5-complete.svg";
import Card6Complete from "../assets/card-6-complete.svg";
import Card7Complete from "../assets/card-7-complete.svg";
import Card8Complete from "../assets/card-8-complete.svg";
import Card9Complete from "../assets/card-9-complete.svg";
import Card10Complete from "../assets/card-10-complete.svg";
import Card1Turned from "../assets/card-1-turned.svg";
import Card2Turned from "../assets/card-2-turned.svg";
import Card3Turned from "../assets/card-3-turned.svg";
import Card4Turned from "../assets/card-4-turned.svg";
import Card6Turned from "../assets/card-6-turned.svg";
import Bee from "../assets/img-bee.svg";

function Game() {
  const storedState = localStorage.getItem("gameState");
  const parseStoredState = storedState ? JSON.parse(storedState) : null;
  // const [cards, setCards] = useState([
  //   {
  //     name: "card1",
  //     id: 1,
  //     icon: Card1Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 1,
  //   },
  //   {
  //     name: "card2",
  //     id: 2,
  //     icon: Card1Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 1,
  //   },
  //   {
  //     name: "card3",
  //     id: 3,
  //     icon: Card2Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 2,
  //   },
  //   {
  //     name: "card4",
  //     id: 4,
  //     icon: Card2Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 2,
  //   },
  //   {
  //     name: "card5",
  //     id: 5,
  //     icon: Card3Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 3,
  //   },
  //   {
  //     name: "card6",
  //     id: 6,
  //     icon: Card3Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 3,
  //   },
  //   {
  //     name: "card7",
  //     id: 7,
  //     icon: Card4Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 4,
  //   },
  //   {
  //     name: "card8",
  //     id: 8,
  //     icon: Card4Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 4,
  //   },
  //   {
  //     name: "card9",
  //     id: 9,
  //     icon: Card6Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 5,
  //   },
  //   {
  //     name: "card10",
  //     id: 10,
  //     icon: Card6Turned,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //     iconId: 5,
  //   },
  // ]);

  const [asset, setAsset] = useState([
    { name: "card1", background: Card1Background, complete: Card1Complete },
    { name: "card2", background: Card2Background, complete: Card2Complete },
    { name: "card3", background: Card3Background, complete: Card3Complete },
    { name: "card4", background: Card4Background, complete: Card4Complete },
    { name: "card5", background: Card5Background, complete: Card5Complete },
    { name: "card6", background: Card6Background, complete: Card6Complete },
    { name: "card7", background: Card7Background, complete: Card7Complete },
    { name: "card8", background: Card8Background, complete: Card8Complete },
    { name: "card9", background: Card9Background, complete: Card9Complete },
    { name: "card10", background: Card10Background, complete: Card10Complete },
  ]);
  const [cards, setCards] = useState(
    parseStoredState?.cards
      ? parseStoredState?.cards
      : [
          {
            name: "card1",
            id: 1,
            icon: Card1Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 1,
          },
          {
            name: "card2",
            id: 2,
            icon: Card1Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 1,
          },
          {
            name: "card3",
            id: 3,
            icon: Card2Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 2,
          },
          {
            name: "card4",
            id: 4,
            icon: Card2Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 2,
          },
          {
            name: "card5",
            id: 5,
            icon: Card3Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 3,
          },
          {
            name: "card6",
            id: 6,
            icon: Card3Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 3,
          },
          {
            name: "card7",
            id: 7,
            icon: Card4Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 4,
          },
          {
            name: "card8",
            id: 8,
            icon: Card4Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 4,
          },
          {
            name: "card9",
            id: 9,
            icon: Card6Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 5,
          },
          {
            name: "card10",
            id: 10,
            icon: Card6Turned,
            visible: false,
            solved: false,
            beingSolved: false,
            iconId: 5,
          },
        ]
  );

  const [game, setGame] = useState(
    parseStoredState?.game ? parseStoredState.game : true
  );
  const [flippedCards, setFlippedCards] = useState(
    parseStoredState?.flippedCards ? parseStoredState.flippedCards : 0
  );
  const [tries, setTries] = useState(
    parseStoredState?.tries >= 0 ? parseStoredState.tries : 10
  );
  const [wonOrLost, setWonOrLost] = useState(
    parseStoredState?.wonOrLost ? parseStoredState.wonOrLost : ""
  );
  const [startAgain, setStartAgain] = useState(
    parseStoredState?.startAgain ? parseStoredState.startAgain : false
  );
  const [roundsPlayed, setRoundsPlayed] = useState(
    parseStoredState?.roundsPlayed ? parseStoredState.roundsPlayed : 0
  );
  const [hasLocalStorage, setHasLocalStorage] = useState(
    parseStoredState?.localStorage ? parseStoredState.localStorage : false
  );

  // Function for shuffling the cards
  function shuffleGivenArray(array) {
    const newArray = [...array]; // Create a new array to avoid modifying the original array
    let currentIndex = newArray.length;

    // While there are elements to shuffle
    while (currentIndex > 0) {
      // Pick a remaining element randomly
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap the current element with the randomly picked element
      const temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }

    return newArray;
  }

  // This useEffect is run on screen load and when user clicks "Replay"
  // It resets the game by shuffling the cards and setting other game variables back to default
  useEffect(() => {
    // game is true on screen load
    if (game) {
      // Reset all cards and shuffle them
      const cardArray = cards;
      const resetCards = cards.map((card) => {
        return { ...card, solved: false, visible: false, beingSolved: false };
      });
      const shuffledCards = shuffleGivenArray(resetCards);
      setCards(shuffledCards);
      setWonOrLost("");
      setTries(10);
      setStartAgain(false);
    }
  }, [game]);

  // This function runs when a user clicks a card and flips it
  function setCardToVisible(card) {
    // This if only allows card flipping during an active game
    if (game) {
      // This if prevents the code within it from running if user clicks same card twice
      if (card.beingSolved === false && card.solved === false) {
        // This if prevents the code within it from running if the user tries to click more than two cards in a turn
        if (flippedCards < 2) {
          setCards((prevCards) =>
            prevCards.map((prevCard) => {
              if (prevCard.id === card.id) {
                return { ...prevCard, visible: true, beingSolved: true };
              }
              return prevCard;
            })
          );
          setFlippedCards((prev) => prev + 1);
        }
      }
    }
  }

  // This useEffect handles card matching and solving.
  // It runs each time a card is clicked, and checks if two cards are visible.
  // If so, it checks if they match, and sets their "solved" property to true.
  // If they dont match, it sets their "visible" property to false
  useEffect(() => {
    const cardsArray = cards;
    if (flippedCards == 2) {
      // Get the two visible cards
      const activeCards = cardsArray.filter(
        (card) => card.beingSolved === true
      );
      const card1 = activeCards[0];
      const card2 = activeCards[1];
      // Check if the two visible cards have the same icon and set them to solved if so
      if (card1.iconId === card2.iconId) {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => {
              if (card.visible === true) {
                return {
                  ...card,
                  solved: true,
                  beingSolved: false,
                };
              }
              return card;
            })
          );
          setTries((prevTries) => prevTries - 1);
          setFlippedCards(0);
        }, 1000);
        // Flip them back over if not
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) => {
              if (card.id === card1.id || card.id === card2.id) {
                return { ...card, visible: false, beingSolved: false };
              }
              return card;
            })
          );
          setTries((prevTries) => prevTries - 1);
          setFlippedCards(0);
        }, 1000);
      }
    }
  }, [flippedCards]);

  // This useEffect handles whether a game has been won or lost
  useEffect(() => {
    const cardsArray = cards;
    const hasSolvedAll = cardsArray.every((obj) => obj.solved === true);
    // If the user has solved all cards if tries are above 0, they win
    if (hasSolvedAll) {
      setGame(false);
      setWonOrLost("You won!");
      setStartAgain(true);
      setRoundsPlayed((prev) => prev + 1);
      // Else they lose
    } else {
      if (tries === 0) {
        setGame(false);
        setWonOrLost("You lost!");
        setStartAgain(true);
        setRoundsPlayed((prev) => prev + 1);
      }
    }
  }, [tries]);

  const gameState = {};
  gameState["cards"] = cards;
  gameState["game"] = game;
  gameState["flippedCards"] = flippedCards;
  gameState["tries"] = tries;
  gameState["wonOrLost"] = wonOrLost;
  gameState["startAgain"] = startAgain;
  gameState["roundsPlayed"] = roundsPlayed;
  gameState["localStorage"] = true;
  // localStorage.setItem("gameState", JSON.stringify(gameState));
  // console.log("hasLocalStorage", hasLocalStorage);

  return (
    <Container>
      <Row id="hero-row-mobile" className="pt-4">
        <Col>
          <Row>
            <span id="hero-text-mobile">
              <strong>Buy & sell</strong> premium, pre-loved fashion for little
              ones!
            </span>
          </Row>

          <Row id="bee-legend-row-mobile">
            <Col id="legend-mobile">
              <div>Moves left: {tries}</div>
              <div>Moves taken: {10 - tries}</div>
              <div>Rounds played: {roundsPlayed}</div>
            </Col>
            <Col id="bee-mobile-col">
              <Row>
                <Col id="outcome-col-mobile">
                  <div id="outcome-mobile">{wonOrLost ? wonOrLost : ""}</div>
                </Col>
                <Col>
                  <img id="bee-mobile" src={Bee}></img>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id="mix-match-replay-row-mobile">
            <Col align="end" className="mt-2">
              {startAgain ? (
                <Button className="replay" onClick={() => setGame(true)}>
                  Replay
                </Button>
              ) : (
                <span id="mix-and-match-mobile">
                  Mix & match the tiles<br></br> to reveal a suprise!
                </span>
              )}
            </Col>
          </Row>
          <Row>
            <Col align="end" className="mt-2"></Col>
          </Row>
        </Col>
      </Row>
      <Row id="card-row" className="pt-5">
        <Col md={8}>
          <Row>
            {cards.map((card, index) => (
              <Col key={card.id} className="card-col">
                <div
                  className="card-div"
                  onClick={() => setCardToVisible(card)}
                >
                  {/* back of card */}
                  {!card.visible && !card.solved && (
                    <img
                      className="card-back"
                      src={asset[index].background}
                    ></img>
                  )}
                  {/* front of card */}
                  {card.visible && !card.solved && (
                    <img className="card-turned" src={card.icon}></img>
                  )}
                  {/* solved card */}
                  {card.visible && card.solved && (
                    <img
                      className="card-complete"
                      src={asset[index].complete}
                    ></img>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4} id="hero-col-desktop">
          <Row>
            <Col>
              <div id="outcome-desktop">{wonOrLost ? wonOrLost + "!" : ""}</div>
            </Col>

            <Col
              lg={7}
              id="mix-and-match-col-desktop"
              className="pe-4"
              align="end"
            >
              {startAgain ? (
                <Button className="replay" onClick={() => setGame(true)}>
                  Replay
                </Button>
              ) : (
                <span id="mix-and-match">
                  Mix & match the tiles to reveal a suprise!
                </span>
              )}
            </Col>
          </Row>
          <Row>
            <Col id="legend-desktop">
              <div>Moves left: {tries}</div>
              <div>Moves taken: {10 - tries}</div>
              <div>Rounds played: {roundsPlayed}</div>
            </Col>
            <Col align="end" className="bee-desktop-col mt-lg-5">
              <img id="bee-desktop" src={Bee}></img>
            </Col>
          </Row>
          <Row className="mt-lg-4">
            <Col>
              <span id="hero-text-large-screen">
                The perfect place to <strong>buy & sell</strong> premium,
                pre-loved fashion for little ones!
              </span>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <span id="sub-hero-text">
                <strong>
                  Delivering something<br></br> sweet, real soon!
                </strong>{" "}
                Join the hive to stay in the loop!
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row id="delivering-soon-row-mobile" className="mt-3">
        <Col className="pe-5" xs={10}>
          <span>
            <strong>
              Delivering something<br></br> sweet, real soon!
            </strong>
            Join the<br></br> hive to stay in the loop!
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Game;
