import React, { useState } from 'react'
import { Navbar, Container, Carousel, FormControl, Nav } from 'react-bootstrap'

import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";
import slider4 from "../../images/slider4.png";

const Silder = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "460px"}}
                        className="w-full object-cover"
                        src={slider1}
                        alt="first slide"
                    />
                    <div className="">
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "460px"}}
                        className="w-full object-cover"
                        src={slider2}
                        alt="second slide"
                    />
                    <div className="">
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "460px"}}
                        className="w-full object-cover"
                        src={slider3}
                        alt="third slide"
                    />
                    <div className="">
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "460px"}}
                        className="w-full object-cover"
                        src={slider4}
                        alt="fourth slide"
                    />
                    <div className="">
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Silder
