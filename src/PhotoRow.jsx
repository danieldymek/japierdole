import React from "react";

const images = require.context("./photos", true);
const loadImage = (imageName) => images(`./${imageName}.jpg`);

const PhotoRow = ({imie, nazwisko}) => (
  <img style={{maxHeight: "100px"}} src={loadImage(`${imie}${nazwisko}`)} />
);
export default PhotoRow;
