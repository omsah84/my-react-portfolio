import React from 'react'
import './portfolio.scss'
import Matnest from "../../asset/matnest.png";
import Nandu from "../../asset/nanduBanner.png";
import Om from "../../asset/omBanner.png";
import PersonalWebsite from "../../asset/PersonalWebsite.png";
import Sikendar from "../../asset/sikendarBanner.png";
import GUI from "../../asset/gui.png";
import Via from "../../asset/Via.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Omsah from "../../asset/omsah.png";


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
  {
    id: 7,
    title: "Virtual Interview Assistant",
    image: Via,
    url: "https://vinterview.netlify.app/",
  },
  {
    id: 8,
    title: "Omsah Latest - Portfolio",
    image: Omsah,
    url: "https://omsah.netlify.app/",
  },
 
];

export default function Portfolio() {
  return (
    <div id='portfolio'>
      <h2 className='text-center mt-4'>MY WORKS</h2>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.image} alt="banner" />
              <div className="layer">
                <div className="item-list text-center">{item.title}</div>
                <a href={item.url}><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
