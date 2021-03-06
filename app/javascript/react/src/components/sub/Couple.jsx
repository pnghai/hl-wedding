import * as React from "react";
import { BsHeart, TbBrandInstagram, TbBrandTwitter, TiSocialFacebook } from "react-icons/all";
import { Avatar, Container, SocialLink } from "../../utils/styles";
export default function Couples(){
  return(
    <section className="bg-hint-of-red py-24" id="couple">
      <Container>
        <div className="grid gap-8 grid-cols-1 md:gap-4 md:grid-cols-2 mb-16">
          <div className="p-8 bg-white flex flex-col xl:flex-row-reverse">
            <div>
              <Avatar className="mb-8 xl:mb-0 xl:ml-6">
                <img src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/bride.jpg" alt="bride"/>
              </Avatar>
            </div>
            <div className="text-center xl:text-right">
              <div className="mb-3 text-2xl font-garamond flex items-center justify-center xl:justify-end">
                Đào Mỹ Linh
                <span className="ml-2"><BsHeart color="#BD945A" size="16px"/></span>
              </div>
              <span className="font-alex text-2xl text-twine mt-1 mb-3">Trưởng nữ</span>
              <p>Olivia fringilla dui at elit finibus viverra nec a lacus seda themo the miss druane semper sollicitudin non the fermen.</p>
              <div className="mt-4">
                <SocialLink href="https://www.facebook.com/" className="mr-2"> <TiSocialFacebook size="18px"/> </SocialLink>
                <SocialLink href="http://twitter.com/" className="mr-2"> <TbBrandTwitter size="18px"/> </SocialLink>
                <SocialLink href="https://www.instagram.com/"> <TbBrandInstagram size="18px"/> </SocialLink>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white flex flex-col xl:flex-row">
            <div>
              <Avatar className="mb-8 xl:mb-0 xl:ml-6">
                <img src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/bride.jpg" alt="bride"/>
              </Avatar>
            </div>
            <div className="text-center xl:text-left">
              <div className="mb-3 text-2xl font-garamond flex items-center justify-center xl:justify-start">
                <span className="mr-2"><BsHeart color="#BD945A" size="16px"/></span>
                Phan Nguyễn Hải
              </div>
              <span className="font-alex text-2xl text-twine mt-1 mb-3">Trưởng nam</span>
              <p>Olivia fringilla dui at elit finibus viverra nec a lacus seda themo the miss druane semper sollicitudin non the fermen.</p>
              <div className="mt-4">
                <SocialLink href="https://www.facebook.com/" className="mr-2"> <TiSocialFacebook size="18px"/> </SocialLink>
                <SocialLink href="http://twitter.com/" className="mr-2"> <TbBrandTwitter size="18px"/> </SocialLink>
                <SocialLink href="https://www.instagram.com/"> <TbBrandInstagram size="18px"/> </SocialLink>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-twine text-6xl font-alex">
            Are getting married!
          </h3>
          <h4 className="text-lg font-garamond">
            December 15, 2021 — New York, Brooklyn
          </h4>
        </div>
      </Container>
    </section>
  )
}