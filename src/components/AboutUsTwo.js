import React, { Component } from 'react';
import Datas from '../data/about-us/about-us.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import { Styles } from "./styles/aboutUsTwo.js";

class AboutUsTwo extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <Styles>
                {/* About Us */}
                <section className="about-us">
                    <Container>
                        <Row>
                            <Col md="6">
                                <h2 className='about-us-h2'>About Us</h2>
                                <div className="about-image">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/${Datas.mainImage}`} className="main-img" alt="" />
                                    <img src={process.env.PUBLIC_URL + "/assets/images/pattern.png"} className="pattern-img" alt="" />
                                    <div className="video-player" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.videoBackground})`}}>
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='uXFUl0KcIkA' onClose={() => this.setState({ isOpen: false })} />
                                        <button onClick={this.openModal} className="play-button"><i className="las la-play"></i></button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="about-content">
                                    <h4 className="about-title">{Datas.title}</h4>
                                    <p className="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                   
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default AboutUsTwo;