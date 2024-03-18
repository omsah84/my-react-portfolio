import React from 'react'
import './testimonials.scss'
import Slider from "react-slick";
import image from './homeImage.png'

const data = [
  {
    img: `homeImage.png`,
    name: "omsah",
    paragraph: "This guys is realy wosome yara;ldjkf;alkdjs;alkdjfa;ldkfj;lakdjsf;aldkjsl;l"
  },
  {
    img: "image",
    name: "omsah",
    paragraph: "This guys is realy wosome yara;ldjkf;alkdjs;alkdjfa;ldkfj;lakdjsf;aldkjsl;l"
  },
  {
    img: "image",
    name: "omsah",
    paragraph: "This guys is realy wosome yara;ldjkf;alkdjs;alkdjfa;ldkfj;lakdjsf;aldkjsl;l"
  },
  {
    img: "image",
    name: "omsah",
    paragraph: "This guys is realy wosome yara;ldjkf;alkdjs;alkdjfa;ldkfj;lakdjsf;aldkjsl;l"
  },
  {
    img: "image",
    name: "omsah",
    paragraph: "This guys is realy wosome yara;ldjkf;alkdjs;alkdjfa;ldkfj;lakdjsf;aldkjsl;l"
  },
  {
    img: "image",
    name: "omsah",
    paragraph: "This guys is realy wosome yara;ldjkf;alkdjs;alkdjfa;ldkfj;lakdjsf;aldkjsl;l"
  },
  {
    img: "image",
    name: "omsah",
    paragraph: "This guys is realadfasdfasdfasdffffffy wosome yara;ldjkf;alkdjs;alkdjfa;ldkfj;lakdjsf;aldkjsl;l"
  },


];




export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      
    ]
  };
  return (
    <div id='testimonials'>
      <div className="container h-100 p-3">
        <div className="heading text-center">
          <h1>Testimonials</h1>
        </div>
        <div className="testimonials-items">
          <Slider {...settings} className='slidera m-1'>
            {data.map((data) => (
              <div className='testimonials-item p-5 m-4 text-center'>
                <img src={image} alt='imag' className='image' />
                <h5>{data.name}</h5>
                <p>{data.paragraph}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
