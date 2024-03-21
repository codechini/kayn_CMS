// import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <>
      <p className='text-base'>Footer section</p>
      <div className="flex flex-col px-12">
        <div className="flex flex-row">
          <div className="flex-col">
            <Button>Logo</Button>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum molestiae dicta id quis natus ea atque!</p>
          </div>

        </div>
        <div className="flex flex-row">
          row2
          <FontAwesomeIcon className="text-gray-800" size="2xl" icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="flex flex-row">row3
          <div className="flex flex-col">col1
            <a href="">link1</a>
            <a href="">link2</a>
            <a href="">link3</a>
            <a href="">link4</a>
          </div>
          <div className="flex flex-col">col2
            <a href="">link1</a>
            <a href="">link2</a>
            <a href="">link3</a>
            <a href="">link4</a>
          </div>
          <div className="flex flex-col">col3
            <a href="">link1</a>
            <a href="">link2</a>
            <a href="">link3</a>
            <a href="">link4</a>
          </div>
          <div className="flex flex-col">col4
            <a href="">link1</a>
            <a href="">link2</a>
            <a href="">link3</a>
            <a href="">link4</a>
          </div>
        </div>
        <div className="flex flex-row">row4</div>
      </div>
    </>
  )
}
export default Footer;