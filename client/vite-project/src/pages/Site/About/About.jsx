import React, { useEffect, useState } from "react";
import "./About.scss";
import MuiAccordion from "../../../components/MuiAccordion/MuiAccordion";
import Loading from "../../../components/Loading/Loading";

function About() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  return (
    <>
    {
      loading?
      <Loading />:
      
<section className="about__container">
        <div className="about__box">
          <div className="about__box__left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Carspotters.jpg/1200px-Carspotters.jpg"
              alt=""
            />
            <p className="about__text">
              Carspotting.az, Azərbaycan Avtomobil Federasiyasının (AAF)
              nəzdində 2019-cu ildə yaradılmışdır. Layihənin məqsədi avtomobil
              həvəskarlarına dəstək olmaq və ölkəmizdə bu sahəni inkişaf
              etdirməkdir.
            </p>
          </div>
          <div className="about__box__right">
            <MuiAccordion />
          </div>
        </div>
      </section>
    }

      
    </>
  );
}

export default About;
