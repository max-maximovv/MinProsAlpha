import "./mainSlider.css";
import { getData } from "../../../hooks/fetchData";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function MainSlider() {
  {
    /**const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData(
      "http://localhost:1337/api/glavnyj-slajder-glavnoj-straniczies?fields[0]=title&fields[1]=text&populate[Img][fields][0]=name&populate[Img][fields][1]=url"
    ).then((res) => {
      let newData = res.data.slice(-6);
      setData(newData);
    });
  }, []);**/
  }
  return (
    <>
      <article className="main-slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/**{data ? (
            <ul>
              {data.map((itm, index) => {
                return (
                  <SwiperSlide>
                    <div className="main-slide" id={index}>
                      <div className="main-slide-text-container">
                        <h2>ГЛАВНЫЕ НОВОСТИ</h2>
                        <div>
                          <h3>{itm.attributes.title}</h3>
                          <p>{itm.attributes.text}</p>
                        </div>
                      </div>
                      <div className="main-slide-img-shadow">
                        <img
                          src={
                            "http://localhost:1337" +
                            itm.attributes.Img.data[0].attributes.url
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </ul>
          ) : (
            "Загрузка..."
          )}**/}
          <SwiperSlide>
            <div className="main-slide">
              <div className="main-slide-text-container">
                <h2>ГЛАВНЫЕ НОВОСТИ</h2>
                <div>
                  <h3>Проверочный заголовок слайда на первой карусели</h3>
                  <p>
                    Проверочный текст слайда на первой карусели Проверочный
                    текст слайда на первой карусели
                  </p>
                </div>
              </div>
              <div className="main-slide-img-shadow">
                <img
                  src="/imgs/main-page/slider/photo_2024-03-15_17-13-59.jpg"
                  alt="slide"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="main-slide">
              <div className="main-slide-text-container">
                <h2>ГЛАВНЫЕ НОВОСТИ</h2>
                <div>
                  <h3>Проверочный заголовок слайда на первой карусели</h3>
                  <p>
                    Проверочный текст слайда на первой карусели Проверочный
                    текст слайда на первой карусели
                  </p>
                </div>
              </div>
              <div className="main-slide-img-shadow">
                <img
                  src="/imgs/main-page/slider/main_cIRRZQl.jpg"
                  alt="slide"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="main-slide">
              <div className="main-slide-text-container">
                <h2>ГЛАВНЫЕ НОВОСТИ</h2>
                <div>
                  <h3>Проверочный заголовок слайда на первой карусели</h3>
                  <p>
                    Проверочный текст слайда на первой карусели Проверочный
                    текст слайда на первой карусели
                  </p>
                </div>
              </div>
              <div className="main-slide-img-shadow">
                <img
                  src="/imgs/main-page/slider/photo_2024-02-15_10-44-01_2.jpg"
                  alt="slide"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="main-slide">
              <div className="main-slide-text-container">
                <h2>ГЛАВНЫЕ НОВОСТИ</h2>
                <div>
                  <h3>Проверочный заголовок слайда на первой карусели</h3>
                  <p>
                    Проверочный текст слайда на первой карусели Проверочный
                    текст слайда на первой карусели
                  </p>
                </div>
              </div>
              <div className="main-slide-img-shadow">
                <img
                  src="/imgs/main-page/slider/photo_2024-03-13_14-19-56.jpg"
                  alt="slide"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>
    </>
  );
}
