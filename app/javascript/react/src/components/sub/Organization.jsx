import * as React from "react";
import { Container, SmallTitle, StoryP, Subtitle } from "../../utils/styles";
import { useTranslation } from "react-i18next";
import { slider } from "../../../../assets";
const data = {
  vi: [
    {
      id: "01",
      title: "Hôn lễ",
      desc: "Tổ chức tại tư gia từ 8:00 sáng"
    },
    {
      id: "02",
      title: "Tiệc cưới",
      desc: "Tổ chức tại khuôn viên nhà hàng Đông Hồ Eden, Q10, TP.HCM từ 18:00"
    },
    {
      id: "03",
      title: "Tung Hoa Cưới",
      desc: "Cô nàng độc thân may mắn nào sẽ bắt được bó hoa cưới của cô dâu ngày hôm đấy?"
    }
  ],
};
export default function Organization(){
  const { t, i18n } = useTranslation();
  return(
    <section id="organization" className="bg-hint-of-red py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>{t("Wedding")}</SmallTitle>
          <Subtitle>{t("Organization")}</Subtitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 bg-cover bg-no-repeat border border-[#F6F1F0] divide-x divide-y divide-[#F6F1F0] bg-center" style={{ backgroundImage: `url(${slider})`, }}>
          {data[i18n.language].map(({ id, title, desc}, key)=>(
            <div key={key} className="px-8 py-16 bg-white transition-all duration-500 hover:!text-white hover:bg-black/60">
              <h2 className="font-garamond font-medium leading-[1.25em] text-7xl text-transparent mb-4" style={{ WebkitTextStroke: '1px #BD945A', }}>{id}</h2>
              <h6 className="font-garamond uppercase text-xl mt-2.5 mb-4">{title}</h6>
              <StoryP>{desc}</StoryP>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}