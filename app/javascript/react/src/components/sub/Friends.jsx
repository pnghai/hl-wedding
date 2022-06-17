import * as React from "react";
import { Container, SmallTitle, Subtitle } from "../../utils/styles";

export default function Friends(){
  return(
    <section id="friends" className="bg-hint-of-red py-24">
      <Container>
        <div className="mb-8">
          <SmallTitle>Our best friends ever</SmallTitle>
          <Subtitle>Thanks for being there</Subtitle>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div className="owl-item cloned">
                    <div className="item">
                      <div className="img"><img
                        src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w2.jpg" alt=""/></div>
                      <div className="info valign">
                        <div className="full-width">
                          <h6>Matthew Brown</h6>
                          <span>Groomsmen</span>
                          <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned">
                    <div className="item">
                      <div className="img"><img
                        src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/b3.jpg" alt=""/></div>
                      <div className="info valign">
                        <div className="full-width">
                          <h6>Fredia Halle</h6>
                          <span>Bridesmaids</span>
                          <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned">
                    <div className="item">
                      <div className="img"><img
                        src="https://shtheme.org/demosd/enrico/wp-content/uploads/2022/01/w3.jpg" alt=""/></div>
                      <div className="info valign">
                        <div className="full-width">
                          <h6>Pablo Dante</h6>
                          <span>Groomsmen</span>
                          <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <div className="owl-prev">prev</div>
                <div className="owl-next">next</div>
              </div>
              <div className="owl-dots">
                <div className="owl-dot active"><span></span></div>
                <div className="owl-dot"><span></span></div>
                <div className="owl-dot"><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}