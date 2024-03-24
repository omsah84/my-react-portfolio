import React from 'react'
import './testimonials.scss'
import Slider from "react-slick";
import Elon from "../../asset/Elon.png";
import Bill from "../../asset/Bill Gates.png";
import Bill1 from "../../asset/Bill Gates1.png";
import Galileo from "../../asset/Galileo Galilei.png";
import Galieo1 from "../../asset/Galileo Galilei1.png";
import Jeff from "../../asset/Jeff Bezos.png";
import Martindainguyen from "../../asset/Martindainguyen.png";
import Richard from "../../asset/Richard Branson.png";
import Sundar from "../../asset/Sundar Pichai.png";
import Sundar1 from "../../asset/Sundar Pichai1.png";

const data = [
  {
    id: 1,
    img: Bill1,
    name: "Bill Gates",
  },
  {
    id: 2,
    img:Elon,
    name: "Elon Musk",
  },
  {
    id: 3,
    img: Bill,
    name: "Bill Gates",
  },
  {
    id: 4,
    img: Sundar,
    name: "Sundar Pichai",
  },
  {
    id: 5,
    img: Galieo1,
    name: "Galileo Galilei",
  },
  {
    id: 6,
    img: Bill,
    name: "Bill Gates",

  },
  {
    id: 7,
    img: Sundar1,
    name: "Sundar Pichai",
  },
  {
    id: 8,
    img: Galileo,
    name: "Galileo Galilei",
  },
  {
    id: 9,
    img: Jeff,
    name: "Jeff Bezos",
  },
  {
    id: 10,
    img: Martindainguyen,
    name: "Martindainguyen",
  },
  {
    id: 11,
    img: Richard,
    name: "Richard Branson",
  },
];

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },

    ]
  };
  return (
    <div id='testimonials'>
      <Slider {...settings}>
        {data.map((data) => (
          <div className='testimonials-item ' key={data.id}>
            <img src={data.img} alt='imag' className='image' />
            <h5>{data.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  )
}
