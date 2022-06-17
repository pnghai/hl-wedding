import * as React from "react";
import { Container, SmallTitle, Subtitle } from "../../utils/styles";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import photos from "../data/photos";
import { useState } from "react";
const slides = photos.map(({ src, width, height, images }) => ({
  src,
  aspectRatio: width / height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
  })),
}));
export default function Gallery(){
  const [index, setIndex] = useState(-1);
  return(
    <section id="gallery" className=" py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>Gallery</SmallTitle>
          <Subtitle>Our memories</Subtitle>
        </div>
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={150}
          onClick={(event, photo, index) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow]}
        />
      </Container>
    </section>
  )
}