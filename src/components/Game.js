import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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

function Game() {
  // console.log("assets", assets);
  const storedState = localStorage.getItem("gameState");
  const parseStoredState = storedState ? JSON.parse(storedState) : null;
  const [cards, setCards] = useState([
    {
      name: "card1",
      id: 1,
      icon: 1,
      visible: false,
      solved: false,
      beingSolved: false,
    },
    {
      name: "card2",
      id: 2,
      icon: 2,
      visible: false,
      solved: false,
      beingSolved: false,
    },
    {
      name: "card3",
      id: 3,
      icon: 3,
      visible: false,
      solved: false,
      beingSolved: false,
    },
    {
      name: "card4",
      id: 4,
      icon: 4,
      visible: false,
      solved: false,
      beingSolved: false,
    },
    {
      name: "card5",
      id: 5,
      icon: 5,
      visible: false,
      solved: false,
      beingSolved: false,
    },
    {
      name: "card6",
      id: 6,
      icon: 1,
      visible: false,
      solved: false,
      beingSolved: false,
    },
    {
      name: "card7",
      id: 7,
      icon: 2,
      visible: false,
      solved: false,
      beingSolved: false,
    },
    {
      name: "card8",
      id: 8,
      icon: 3,
      visible: false,
      solved: false,
      beingSolved: false,
    },
    {
      name: "card9",
      id: 9,
      icon: 4,
      visible: false,
      solved: false,
      beingSolved: false,
    },
    {
      name: "card10",
      id: 10,
      icon: 5,
      visible: false,
      solved: false,
      beingSolved: false,
    },
  ]);

  const [asset, setAsset] = useState([
    { name: "card1", value: Card1Background },
    { name: "card2", value: Card2Background },
    { name: "card3", value: Card3Background },
    { name: "card4", value: Card4Background },
    { name: "card5", value: Card5Background },
    { name: "card6", value: Card6Background },
    { name: "card7", value: Card7Background },
    { name: "card8", value: Card8Background },
    { name: "card9", value: Card9Background },
    { name: "card10", value: Card10Background },
  ]);

  // const [cards, setCards] = useState(
  //   parseStoredState?.cards
  //     ? parseStoredState?.cards
  //     : [
  //         {
  //           name: "card1",
  //           id: 1,
  //           icon: 1,
  //           visible: false,
  //           solved: false,
  //           beingSolved: false,
  //         },
  //         {
  //           name: "card2",
  //           id: 2,
  //           icon: 2,
  //           visible: false,
  //           solved: false,
  //           beingSolved: false,
  //         },
  //         {
  //           name: "card3",
  //           id: 3,
  //           icon: 1,
  //           visible: false,
  //           solved: false,
  //           beingSolved: false,
  //         },
  //         {
  //           name: "card4",
  //           id: 4,
  //           icon: 2,
  //           visible: false,
  //           solved: false,
  //           beingSolved: false,
  //         },
  //       ]
  // );
  // const [shuffle, setShuffle] = useState(false);
  // const [game, setGame] = useState(
  //   parseStoredState?.game ? parseStoredState.game : false
  // );
  // const [flippedCards, setFlippedCards] = useState(
  //   parseStoredState?.flippedCards ? parseStoredState.flippedCards : 0
  // );
  // const [tries, setTries] = useState(
  //   parseStoredState?.tries ? parseStoredState.tries : 2
  // );
  // const [wonOrLost, setWonOrLost] = useState(
  //   parseStoredState?.wonOrLost ? parseStoredState.wonOrLost : ""
  // );
  // const [playButtonText, setPlayButtonText] = useState(
  //   parseStoredState?.playButtonText ? parseStoredState.playButtonText : "Play"
  // );

  // const [cards, setCards] = useState([
  //   {
  //     name: "card1",
  //     id: 1,
  //     icon: 1,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //   },
  //   {
  //     name: "card2",
  //     id: 2,
  //     icon: 2,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //   },
  //   {
  //     name: "card3",
  //     id: 3,
  //     icon: 1,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //   },
  //   {
  //     name: "card4",
  //     id: 4,
  //     icon: 2,
  //     visible: false,
  //     solved: false,
  //     beingSolved: false,
  //   },
  // ]);
  const [game, setGame] = useState(false);
  const [flippedCards, setFlippedCards] = useState(0);
  const [tries, setTries] = useState(3);
  const [wonOrLost, setWonOrLost] = useState("");
  const [playButtonText, setPlayButtonText] = useState("Play");

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

  function startGame() {
    const cardArray = cards;
    const resetCards = cards.map((card) => {
      return { ...card, solved: false, visible: false, beingSolved: false };
    });
    const shuffledCards = shuffleGivenArray(resetCards);
    setCards(shuffledCards);
    setWonOrLost("");
    setPlayButtonText("Restart");
    setTries(3);
    setGame(true);
  }

  // useEffect(() => {
  //   if (game) {
  //     const unshuffledCards = cards;
  //     const shuffledCards = shuffleGivenArray(unshuffledCards);
  //     setCards(shuffledCards);
  //   }
  // }, [game]);

  function setCardToVisible(id) {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id) {
          return { ...card, visible: true, beingSolved: true };
        }
        return card;
      })
    );
    setFlippedCards((prev) => prev + 1);
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
      // console.log("activeCards", activeCards);
      //   Check if the two visible cards have the same icon and set them to solved if so
      if (card1.icon === card2.icon) {
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
        }, 1000);
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
        }, 1000);
      }
      setFlippedCards(0);
    }

    // copy card state to a new array
  }, [flippedCards]);

  // when condition is tries >= 1 and you win with one try it says you lost

  useEffect(() => {
    const cardsArray = cards;
    const hasSolvedAll = cardsArray.every((obj) => obj.solved === true);
    // console.log("hasUnsolvedCards", hasUnsolvedCards);
    if (hasSolvedAll) {
      setGame(false);
      setWonOrLost("You won!");
      setPlayButtonText("Play Again");
    } else {
      if (tries === 0) {
        setGame(false);
        setWonOrLost("You lost!");
        setPlayButtonText("Play Again");
      }
    }
  }, [tries]);
  // console.log("cards", cards);
  // console.log("flippedCards", flippedCards);
  const gameState = {};
  gameState["cards"] = cards;
  gameState["game"] = game;
  gameState["flippedCards"] = flippedCards;
  gameState["tries"] = tries;
  gameState["wonOrLost"] = wonOrLost;
  gameState["playButtonText"] = playButtonText;
  // localStorage.setItem("gameState", JSON.stringify(gameState));

  // not showing => !visible && !solved
  // showing visible && !solved
  // solved visible && solved

  // const [shuffle, setShuffle] = useState(false);
  // const [game, setGame] = useState(false);
  // const [flippedCards, setFlippedCards] = useState(0);
  // const [tries, setTries] = useState(2);
  // const [wonOrLost, setWonOrLost] = useState("");
  // const [playButtonText, setPlayButtonText] = useState("Play");
  return (
    <Container>
      <Row className="pt-5">
        <Col md={8}>
          <Row>
            {cards.map((card, index) => (
              <Col key={card.id} className="card-col">
                <div
                  className="card-div"
                  onClick={() => setCardToVisible(card.id)}
                >
                  {/* back of card */}
                  {!card.visible && !card.solved && (
                    <img src={asset[index].value}></img>
                  )}
                  {/* front of card */}
                  {card.visible && !card.solved && <h1>{card.icon}</h1>}
                  {/* solved card */}
                  {card.visible && card.solved && <h1>Solved</h1>}
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <button onClick={startGame}>{playButtonText}</button>
          </Row>

          <Row>
            <Col>
              <h3>{tries}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>{wonOrLost}</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Game;
