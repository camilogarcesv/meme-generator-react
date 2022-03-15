import React, { useEffect, useState } from "react";
import { getMemes } from "../../api/memes";
import "./MemeForm.css";

export const MemeForm = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = useState([]);
  const [errorState, setErrorState] = useState({ hasError: false });

  useEffect(() => {
    getMemes()
      .then((data) => setAllMemes(data.data.memes))
      .catch(handleError);
  }, []);

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };
  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          name="topText"
          type="text"
          placeholder="Top text"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className="form--input"
          name="bottomText"
          type="text"
          placeholder="Bottom text"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme--container">
        {errorState.hasError && <div>{errorState.message}</div>}
        {meme.randomImage && (
          <>
            <img
              className="meme--image"
              src={meme.randomImage}
              alt="data"
              width={400}
            />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </>
        )}
      </div>
    </main>
  );
};
