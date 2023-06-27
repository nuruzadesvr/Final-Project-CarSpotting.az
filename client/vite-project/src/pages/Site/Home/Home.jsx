import React, { useEffect, useState } from "react";
import BackgroundVideo from "../../../components/BackgroundVideo/BackgroundVideo";
import "./Home.scss";
import carspotvolga from "../../../images/carspot__volga.jpg";
import carspotgtr from "../../../images/carspot__gtr.jpg";
import carspot458 from "../../../images/carspot__458spyder.jpg";
import carspotcls from "../../../images/carspot__cls63.jpg";
import carspot370 from "../../../images/carspot__370z.jpg";
import carspotaudi from "../../../images/carspot__r8.jpg";
import carspotbmw from "../../../images/carspot__f10m5.jpg";
import carspotlada from "../../../images/carspot__lada.jpg";
import Loading from "../../../components/Loading/Loading";

function Home() {

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


      
      <div>
        <BackgroundVideo />
      <div className="carspotting__images">
        <div className="carspotting__vitrine">
          <div className="carspotting__card">
            <img src={carspotlada} alt="" />
          </div>

          <div className="carspotting__card">
            <img src={carspotvolga} alt="" />
          </div>

          <div className="carspotting__card">
            <img src={carspotgtr} alt="" />
          </div>

          <div className="carspotting__card">
            <img src={carspot458} alt="" />
          </div>

          <div className="carspotting__card">
            <img src={carspotcls} alt="" />
          </div>

          <div className="carspotting__card">
            <img src={carspot370} alt="" />
          </div>

          <div className="carspotting__card">
            <img src={carspotaudi} alt="" />
          </div>

          <div className="carspotting__card">
            <img src={carspotbmw} alt="" />
          </div>
        </div>
      </div>
      </div>
      
}
      
    </>
  );
}

export default Home;
