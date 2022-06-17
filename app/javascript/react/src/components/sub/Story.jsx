import * as React from "react";
import { dots } from "../../../../assets";
import { Container, SmallTitle, StoryP, Subtitle } from "../../utils/styles";

export default function Story(){
  return(
    <section id="story" className=" py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="relative md:mb-8">
              <div className="z-0 w-[90%] absolute top-[-18%] bottom-[-25%] left-0 bg-repeat" style={{ backgroundImage: `url(${dots})`}}/>
              <div className="pb-7 pr-7 pl-4 relative">
                <div className="z-10 absolute top-8 right-0 left-11 bottom-0 border-8 border-twine border-solid"/>
                <img src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/story.jpg" className="relative z-20 max-w-full"/>
              </div>
              <div className="z-30 w-[30%] h-[120px] absolute top-[15px] right-[45px] bg-cover bg-no-repeat bg-center animate-[spin_12s_infinite_linear]" style={{ backgroundImage: `url(https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/wedding-logo.png)` }} />
            </div>
          </div>
          <div className="md:col-span-7">
            <SmallTitle>Our love.</SmallTitle>
            <Subtitle>Our Story</Subtitle>
            <StoryP>Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede gravida
              aliquam, neque libero hendrerit magna, sit amet mollis lacus ithe maurise. Dunya erat volutpat edat
              themo the druanye semper.</StoryP>
            <StoryP>Luality fringilla duiman at elit vinibus viverra nec a lacus themo the druanye sene sollicitudin mi
              suscipit non sagie the fermen.</StoryP>
            <StoryP>Phasellus viverra tristique justo duis vitae diam neque nivamus ac est augue artine aringilla dui at
              elit finibus viverra nec a lacus. Nedana themo eros odio semper soe suscipit non. Curabit aliquet orci
              elit genes tristique.</StoryP>
            <h4 className="font-garamond mb-5 font-medium text-2xl leading-5">Dec 5th, 2021, We Said Yes!</h4>
            <StoryP>Luality fringilla duiman at elit finibus viverra nec a lacus themo the druanye sene sollicitudin mi
              suscipit non sagie the fermen.</StoryP>
          </div>
        </div>
      </Container>
    </section>
  )
}