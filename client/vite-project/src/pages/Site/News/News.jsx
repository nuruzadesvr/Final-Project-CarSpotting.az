import React, { useEffect, useState } from "react";
import "./News.scss";
import Carousel from "../../../components/Carousel/Carousel";
import EventNews from "../../EventNews/EventNews";
import CarNews from "../../CarNews/CarNews";
import Loading from "../../../components/Loading/Loading";

function News() {
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
            loading ?
            <Loading/>:
            <section className="news__container">
            <Carousel />
            <div className="news__box">
              <div className="news__title">
                <p className="eventnewstitle">Event və Tədbirlər</p>
              </div>
              <EventNews />
              <div className="news__title">
                <p className="eventnewstitle">Avtomobil Dünyası</p>
              </div>
              <CarNews />
            </div>
          </section>

    }
      
     
    </>
  );
}

export default News;
