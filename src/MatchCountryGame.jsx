import { useState, useEffect } from "react";
import "./styles.css";
const countriesWithCapital = {
  Poland: "Warsaw",
  Germany: "Berlin",
  Azerbaijan: "Baku",
  "Papua New Guinea": "Port Moresby",
};

// Berlin
// Object.values(countriesWithCapital).findIndex(element, index => {
//.          data === element

const MatchCountryGame = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [isMatched, setIsMatched] = useState(false);
  const [gameData, setGameData] = useState(countriesWithCapital);

  const countries = Object.keys(gameData);
  const capitals = Object.values(gameData);

  useEffect(() => {
    if (selectedValues.length === 2) {
      const isFirstEleCounry = isCountry(selectedValues[0]);
      const isSecondEleCounry = isCountry(selectedValues[1]);
      console.log({ isFirstEleCounry, isSecondEleCounry });

      if (isFirstEleCounry && isSecondEleCounry) {
        setIsMatched(false);
        setTimeout(() => {
          setSelectedValues([]);
        }, 1000);
      } else if (!isFirstEleCounry && !isSecondEleCounry) {
        setIsMatched(false);
        setTimeout(() => {
          setSelectedValues([]);
        }, 1000);
      } else if (
        countriesWithCapital[selectedValues[1]] === selectedValues[0] ||
        countriesWithCapital[selectedValues[0]] === selectedValues[1]
      ) {
        setIsMatched(true);
        setTimeout(() => {
          setSelectedValues([]);
          setGameData((prev) => {
            const dataCopy = { ...prev };

            const key = isFirstEleCounry
              ? selectedValues[0]
              : selectedValues[1];

            console.log({});

            delete dataCopy[key];
            return dataCopy;
            // dataCopy delete isFirstEleCounry ? selectedValues[0] : selectedValues[1]
            // dataCopy.delete(
            //   isFirstEleCounry ? selectedValues[0] : selectedValues[1]
            // );
          });
        }, 1000);
      }
    }
  }, [selectedValues]);

  const isCountry = (data) => {
    return countries.find((item) => item === data);
  };

  const handleClick = (data, type) => {
    if (selectedValues.length < 2) {
      setSelectedValues((prev) => [...prev, data]);
    }
  };

  console.log({ selectedValues, gameData });

  const getClassName = (value) => {
    if (selectedValues.length === 1 && selectedValues[0] === value) {
      return "initial-selection";
    }

    if (selectedValues.length === 2 && selectedValues.includes(value)) {
      return isMatched ? "right-selection" : "wrong-selection";
    }
  };

  return (
    <div>
      {Object.keys(gameData).length === 0 ? "Congratulations !" : ""}
      {countries.map((item) => (
        <button
          style={{ margin: "8px" }}
          className={getClassName(item)}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
      {capitals.map((item) => (
        <button
          style={{ margin: "8px " }}
          className={getClassName(item)}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default MatchCountryGame;
