import "./resultsSlider.css";

import { getData } from "../../../../hooks/fetchData";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function ResultsSlider() {
  {
    /**const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData(
      "http://localhost:1337/api/vtoroj-slajder-glavnoj-straniczies?fields[0]=title&fields[1]=text&populate[Img][fields][0]=name&populate[Img][fields][1]=url"
    ).then((res) => {
      let newData = res.data.slice(-6);
      setData(newData);
    });
  }, []);**/
  }
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="ResultsSwiper"
    >
      {/**{data ? (
        <ul>
          {data.map((itm, index) => {
            return (
              <SwiperSlide>
                <div className="results-slide" id={index}>
                  <div className="results-slide-text-container">
                    <div>
                      <h3>{itm.attributes.title}</h3>
                      <p>{itm.attributes.text}</p>
                    </div>
                  </div>
                  <div className="results-slide-img-shadow">
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
        <div className="results-slide">
          <div className="results-slide-text-container">
            <div>
              <h3>Проверочный заголовок слайда на второй карусели</h3>
              <p>
                Проверочный текст слайда на второй карусели Проверочный текст
                слайда на второй карусели
              </p>
            </div>
          </div>
          <div className="results-slide-img-shadow">
            <img
              src="/imgs/main-page/slider/photo_2024-04-05_15-29-26.jpg"
              alt="slide"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="results-slide">
          <div className="results-slide-text-container">
            <div>
              <h3>Проверочный заголовок слайда на второй карусели</h3>
              <p>
                Проверочный текст слайда на второй карусели Проверочный текст
                слайда на второй карусели
              </p>
            </div>
          </div>
          <div className="results-slide-img-shadow">
            <img
              src="/imgs/main-page/slider/photo_2024-04-11_14-16-55.jpg"
              alt="slide"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="results-slide">
          <div className="results-slide-text-container">
            <div>
              <h3>Проверочный заголовок слайда на второй карусели</h3>
              <p>
                Проверочный текст слайда на второй карусели Проверочный текст
                слайда на второй карусели
              </p>
            </div>
          </div>
          <div className="results-slide-img-shadow">
            <img
              src="/imgs/main-page/slider/photo_2024-03-22_14-54-32.jpg"
              alt="slide"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
