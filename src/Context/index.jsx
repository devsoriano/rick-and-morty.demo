import { createContext, useState, useEffect } from "react";

export const RickAndMortyContext = createContext();

// eslint-disable-next-line react/prop-types
export const RickAndMortyProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [actualPage, setActualPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [nameCharacter, setNameCharacter] = useState("");

  const [isCharacterDetailOpen, setIsCharacterDetailOpen] = useState(false);
  const openCharacterDetail = () => setIsCharacterDetailOpen(true);
  const closeCharacterDetail = () => setIsCharacterDetailOpen(false);

  const [characterToShow, setCharacterToShow] = useState({});

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setNextPage(2);
      });
  }, []);

  const chargeItemsByPagination = (page) => {
    if (nameCharacter === "") {
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          setActualPage(page);
          data.info.prev !== null ? setPrevPage(page - 1) : setPrevPage(null);
          data.info.next !== null ? setNextPage(page + 1) : setNextPage(null);
        });
    } else {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${nameCharacter}&page=${page}`
      )
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          setActualPage(page);
          data.info.prev !== null ? setPrevPage(page - 1) : setPrevPage(null);
          data.info.next !== null ? setNextPage(page + 1) : setNextPage(null);
        });
    }
  };

  const setSearchByName = (nameCharacter) => {
    setNameCharacter(nameCharacter);
    fetch(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setPrevPage(null);
        setActualPage(1);
        setNextPage(2);
      });
  };

  return (
    <RickAndMortyContext.Provider
      value={{
        items,
        chargeItemsByPagination,
        prevPage,
        nextPage,
        actualPage,
        setSearchByName,
        isCharacterDetailOpen,
        openCharacterDetail,
        closeCharacterDetail,
        characterToShow,
        setCharacterToShow,
      }}
    >
      {children}
    </RickAndMortyContext.Provider>
  );
};
