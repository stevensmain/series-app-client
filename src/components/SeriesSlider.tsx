import { useEffect, useState } from "react";
import Slider from "react-slick";

import { getSeries } from "../services/series";
import { Serie } from "../interfaces/series";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SeriesSlider() {
  const [series, setSeries] = useState<Serie[]>([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  useEffect(() => {
    getSeries().then((data) => setSeries(data));
  }, []);

  return (
    <Slider {...settings}>
      {series.map(({ id, title, gender, channel, schedules }) => (
        <div
          key={id}
          className="relative bg-white rounded-2xl shadow-md text-black text-center p-4"
        >
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{title}</span>
            <span className="">{gender}</span>
            <p className="">{channel}</p>

            <span className="text-sm text-slate-800">Schedules:</span>
            {schedules.map(({ id, week_day, show_time }) => {
              return (
                <span key={id}>
                  {week_day} - {show_time}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </Slider>
  );
}
