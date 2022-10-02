import { IMG_4843, IMG_5262, IMG_5290, IMG_5413, IMG_5572, IMG_5732, IMG_5860, IMG_6134, IMG_7382, IMG_4915, IMG_5272, IMG_5336, IMG_5463, IMG_5703, IMG_5766, IMG_6045, IMG_6268, IMG_7401, IMG_5147, IMG_5282, IMG_5411, IMG_5508, IMG_5707, IMG_5830, IMG_6130, IMG_6516 } from "../../../../assets";

const breakpoints = [2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashPhotos = [
  { key: 'IMG_4843', id: IMG_4843, width: 2560, height: 1440 },
  { key: 'IMG_4915', id: IMG_4915, width: 2560, height: 1440 },
  { key: 'IMG_5147', id: IMG_5147, width: 2560, height: 1920 },
  { key: 'IMG_5262', id: IMG_5262, width: 2560, height: 1440 },
  { key: 'IMG_5272', id: IMG_5272, width: 1440, height: 2560 },
  // { key: 'IMG_5282', id: IMG_5282, width: 2560, height: 1440 },
  // { key: 'IMG_5290', id: IMG_5290, width: 2560, height: 1440 },
  { key: 'IMG_5336', id: IMG_5336, width: 1440, height: 2560 },
  { key: 'IMG_5411', id: IMG_5411, width: 1440, height: 2560 },
  { key: 'IMG_5508', id: IMG_5508, width: 2560, height: 1440 },
  { key: 'IMG_5703', id: IMG_5703, width: 2560, height: 1440 },
  { key: 'IMG_5732', id: IMG_5732, width: 2560, height: 1440 },
  { key: 'IMG_5766', id: IMG_5766, width: 2560, height: 1440 },
  { key: 'IMG_5830', id: IMG_5830, width: 2560, height: 1440 },
  { key: 'IMG_5860', id: IMG_5860, width: 2560, height: 1749 },
  { key: 'IMG_6130', id: IMG_6130, width: 2560, height: 1440 },
  { key: 'IMG_6045', id: IMG_6045, width: 2560, height: 1440 },
  { key: 'IMG_6268', id: IMG_6268, width: 1440, height: 2560 },
  { key: 'IMG_6516', id: IMG_6516, width: 1440, height: 2560 },
  { key: 'IMG_7382', id: IMG_7382, width: 1440, height: 2560 },
  { key: 'IMG_7401', id: IMG_7401, width: 2560, height: 1440 },
];

const photos = unsplashPhotos.map(({
                                     id,
                                     key,
                                     width,
                                     height,
}) => ({
  src: id,
  key,
  width,
  height,
  // images: breakpoints.map((breakpoint) => {
  //   const height = Math.round((photo.height / photo.width) * breakpoint);
  //   return {
  //     src: unsplashLink(photo.id, breakpoint, height),
  //     width: breakpoint,
  //     height,
  //   };
  // }),
}));

export default photos;
