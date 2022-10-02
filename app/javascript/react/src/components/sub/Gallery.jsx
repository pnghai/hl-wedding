import * as React from "react";
import { Container, SmallTitle, Subtitle } from "../../utils/styles";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import photos from "../data/photos";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Gallery(){
  const [index, setIndex] = useState(-1);
  const { t } = useTranslation();
  const slides = photos.map(({ key, src, width, height,
                               // title,
                               // description,
                               // images,
                             }) => ({
    src,
    aspectRatio: width / height,
    // title: t(key+"_title").length > 0 ? t(key+"_title") : null,
    description: t(key+"_desc")!== key+"_desc" ? t(key+"_desc") : null,
    // srcSet: images.map((image) => ({
    //   src: image.src,
    //   width: image.width,
    // })),
  }));
  return(
    <section id="gallery" className=" py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>{t("Gallery")}</SmallTitle>
          <Subtitle>{t("Our memories")}</Subtitle>
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
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
        />
      </Container>
    </section>
  )
}