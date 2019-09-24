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
      .get('https://reqres.in/api/users')
      // .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => setImageData({ images: res.data }));
  }, []);

  return (
    <div className="images">
      <InfiniteScroll
        dataLength={images.length}
        // next=
        // hasMore={true}
        loader={<h3>Loading...</h3>}
      >
        {images.map((image, index) => (
          <Image key={image.id + index} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

Images.propTypes = {};

export default Images;
