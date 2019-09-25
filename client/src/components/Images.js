import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';

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
      .then(res => setImageData({ images: images.concat(res.data) }));
  }, []);

  const fetchImages = () => {
    setImageData({ start: start + count });

    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => setImageData({ images: res.data }));
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={images}
        next={fetchImages}
        hasMore={true}
        loader={<h3>Loading...</h3>}
      >
        {images.map((image, index) => (
          <Image key={image.id + index} image={image} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

Images.propTypes = {};

export default Images;
