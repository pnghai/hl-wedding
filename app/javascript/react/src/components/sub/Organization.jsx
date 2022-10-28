import * as React from "react";
import { Container, SmallTitle, StoryP, Subtitle } from "../../utils/styles";
import { useTranslation } from "react-i18next";
import { slider } from "../../../../assets";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png'
import marker2x from 'leaflet/dist/images/marker-icon-2x.png'
import markershadow from 'leaflet/dist/images/marker-shadow.png'
const iconMarker = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker2x,
  shadowUrl: markershadow,
  iconSize:    [25, 41],
  iconAnchor:  [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize:  [41, 41]
});
const data = {
  en: [
    {
      id: "01",
      title: "Ceremony",
      desc: "Will be organized privately from 8.00"
    },
    {
      id: "02",
      title: "Party",
      desc: "Will be organized at Đông Hồ Eden Restaurant from 18.00, District 10, HCMC",
      link: "https://goo.gl/maps/oR7CdNi2HZ6MvE7z6"
    },
    {
      id: "03",
      title: "Bouquet Toss",
      desc: "Who will be the luckiest unmarried girl at the day that can catch our bride's gorgeous floral centerpiece?"
    }
  ],
  'en-US': [
    {
      id: "01",
      title: "Ceremony",
      desc: "Will be organized privately from 8.00"
    },
    {
      id: "02",
      title: "Party",
      desc: "Will be organized at Đông Hồ Eden Restaurant from 18.00, District 10, HCMC"
      , link: "https://goo.gl/maps/oR7CdNi2HZ6MvE7z6"
    },
    {
      id: "03",
      title: "Bouquet Toss",
      desc: "Who will be the luckiest unmarried girl at the day that can catch our bride's gorgeous floral centerpiece?"
    }
  ],
  ja: [
    {
      id: "01",
      title: "セレモニー",
      desc: "午前８時から実家で行われます"
    },
    {
      id: "02",
      title: "パーティー",
      desc: "ホーチミン市の１０区に、午後６時からドンホーエデンのレストランで18.00から行われます"
      , link: "https://goo.gl/maps/oR7CdNi2HZ6MvE7z6"
    },
    {
      id: "03",
      title: "ブーケトス",
      desc: "私たちの花嫁のゴージャスな花のセンターピースをキャッチできる最も幸運な未婚の女性は何方でしょうか?"
    }
  ],
  vi: [
    {
      id: "01",
      title: "Hôn lễ",
      desc: "Tổ chức tại tư gia lúc 8:00 sáng"
    },
    {
      id: "02",
      title: "Tiệc cưới",
      desc: "Tổ chức tại khuôn viên nhà hàng Đông Hồ Eden, Q10, TP.HCM từ 18:00"
    },
    {
      id: "03",
      title: "Tung Hoa Cưới",
      desc: "Cô nàng độc thân may mắn nào sẽ bắt được bó hoa cưới và nhận lời chúc mừng đặc biệt từ tụi mình?"
    }
  ],
};
function MapPlaceholder() {
  const { t } = useTranslation();
  return (
    <p>
      {t("address")}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )
}
const position = [10.7736096, 106.6718240];
export default function Organization(){
  const { t, i18n } = useTranslation();
  const address = t("address");
  const detected = data[i18n.language] || data['en'];
  return(
    <section id="organization" className="bg-hint-of-red py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>{t("Wedding")}</SmallTitle>
          <Subtitle>{t("Organization")}</Subtitle>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-cover bg-no-repeat border border-[#F6F1F0] divide-x divide-y divide-[#F6F1F0] bg-center" style={{ backgroundImage: `url(${slider})`, }}>
          {detected?.map(({ id, title, desc, link=""}, key)=>(
            <div key={key} className="px-6 lg:px-8 lg:py-16 bg-white transition-all duration-500 hover:!text-white hover:bg-black/60">
              <h2 className="font-garamond font-medium leading-[1.25em] text-7xl text-transparent mb-2 lg:mb-4" style={{ WebkitTextStroke: '1px #BD945A', }}>{id}</h2>
              <h6 className="font-garamond uppercase text-xl lg:mt-2.5 mb-2 lg:mb-4">{title}</h6>
              <StoryP>{link.length >0 ? <a href={link} target="_blank">{desc} (<span  className="break-all underline hover:text-accent">{link}</span>)</a>: desc }</StoryP>
            </div>
          ))}
        </div>
        <div className="py-6">
          <MapContainer center={position} zoom={17} scrollWheelZoom={false} className="h-96 w-full"
                        placeholder={<MapPlaceholder />}>
            <TileLayer
              // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={iconMarker}>
              <Popup>
                <p>{address}</p>
                {<a href={detected[1]['link']} target="_blank">{detected[1]['link']}</a>}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Container>
    </section>
  )
}