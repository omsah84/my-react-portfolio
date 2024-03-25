import React from 'react'
import './portfolio.scss'
import Matnest from "../../asset/matnest.png";
import Nandu from "../../asset/nanduBanner.png";
import Om from "../../asset/omBanner.png";
import PersonalWebsite from "../../asset/PersonalWebsite.png";
import Sikendar from "../../asset/sikendarBanner.png";
import GUI from "../../asset/gui.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const data = [
  {
    id: 1,
    title: "MatNest",
    image: Matnest,
    url: "https://matnest.netlify.app/",
  },
  {
    id: 2,
    title: "GUI Calculator",
    image: GUI,
    url: "https://www.google.com",
  },
  {
    id: 3,
    title: "Omsah - Portfolio",
    image: Om,
    url: "https://omsah-portfolio.netlify.app",
  },
  {
    id: 4,
    title: "Nandu - Portfolio",
    image: Nandu,
    url: "https://omsah84.github.io/nandlal/",
  },
  {
    id: 5,
    title: "Sikendar - Portfolio",
    image: Sikendar,
    url: "https://sikendar.netlify.app/",
  },
  {
    id: 6,
    title: "Personal Website",
    image: PersonalWebsite,
    url: "https://omsah84.github.io/omsah-website/",
  },
  // {
  //   id: 7,
  //   title: "Ecommerce Website",
  //   image: "image",
  //   url: "https://www.google.com",
  // },
  // {
  //   id: 8,
  //   title: "Blogging Website",
  //   image: "image",
  //   url: "https://www.google.com",
  // },
  // {
  //   id: 9,
  //   title: "Travel Website",
  //   image: "image",
  //   url: "https://www.google.com",
  // },
  // {
  //   id: 6,
  //   title: "WordPress Responsive Website",
  //   image: "image",
  //   url: "https://www.google.com",
  // },
];

export default function Portfolio() {
  return (
    <div id='portfolio'>
      <h2 className='text-center p-2 mt-3'>MY Works</h2>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.image} alt="banner" />
              <div className="layer">
                <div className="item-list">{item.title}</div>
                <a href={item.url}><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
