import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

const Images = props => {
  const [imageData, setImageData] = useState({
    images: [],
    count: 30,
    start: 1
  });

  const { images, count, start } = imageData;

  useEffect(() => {
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => setImageData({ images: res.data }));

    console.log('images', images);
  });

  return <div></div>;
};

Images.propTypes = {};

export default Images;
