import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";


const AboutPage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-1 container-fluid">
            {/* <Col md={12}> */}
            <Row className="d-flex flex-column align-items-center m-3">
                <h1 className='d-flex flex-column text-center m-5'>Le Studio de l'âme</h1>
            </Row>
            <Row className='d-flex flex-column text-center justify-content-center ml-10 mb-3 pl-5 pr-5'>
                
                Soul Studio, a division of Friendship Circle, is a studio art program for adults with special needs
                that responds to each participant’s unique physical and cognitive conditions.

                Our goal is to encourage the creative growth of artists
                who attend Soul Studio by helping to shape individualized paths to success in the world.
                Artwork made by Soul Studio artists is exhibited in the Soul gallery
                and in outside curated exhibitions.
                
            </Row>
           
            <Row>
                <Image src={require('./About.jpg').default} className="img-fluid m-3"></Image>
            </Row>
            <Row className="d-flex flex-column align-items-center mt-5 ml-0 mr-0 mb-3 container-fluid">
                <h1>A Project of Friendship Circle Montreal</h1>
            </Row>    
            <Row className="d-flex flex-column align-items-center justify-content-center m-10 mt-3 mb-3">
                <a class="btn btn-primary col-3" href="https://www.friendshipcircle.ca/" role="button">More details about us</a>
            </Row>
            <Row> 
                <div className='d-flex flex-column text-center justify-content-center m-10 mt-5 bg-light p-5'>
                Soul Studio, a division of Friendship Circle, is a studio art program for adults with special needs
                that responds to each participant’s unique physical and cognitive conditions.

                Our goal is to encourage the creative growth of artists
                who attend Soul Studio by helping to shape individualized paths to success in the world.
                Artwork made by Soul Studio artists is exhibited in the Soul gallery
                and in outside curated exhibitions.
                </div>
            </Row>
            <Row className="d-flex flex-column align-items-center mt-5 m-6">
                <h3>Customer reviews</h3>
            </Row>
            <Row className="d-flex flex-column align-items-center mt-5 m-6">
            <div class="row justify-content-around mb-5 ">
                <div class="col-3 bg-light p-4">
                This is absolutely beautiful!
                Great project and great artists.
                Susan L.
                </div>
                <div class="col-3 ml-1 bg-light p-4">
                You guys are the best!
                This painting adds so much to my Living room. So gorgeous !!!
                Sarah K.
                </div>
                <div class="col-3 ml-1 bg-light p-4">
                My favourite tshirt from now on!
                So stunning and comfy.
                Way to go!
                Emily N.
                </div>
            </div>
            <Row className="d-flex flex-column align-items-center mt-5 m-6 bg-primary tc-white container-fluid">
                <h2 class="d-flex flex-column align-items-center mt-5 m-6 p-6 pb-5 color-light " style={{color:'white'}}>Supported by</h2>
            </Row>

            <Row>
                <Image src={require('./supported-3.png').default} className="img-fluid m-3"></Image>
            </Row>
            <Row className="d-flex flex-column align-items-center mt-5 m-6 bg-secondary tc-white container-fluid">
                <h2 class="d-flex flex-column align-items-center mt-5 m-6 p-6 pb-5 color-light " style={{color:'white'}}>IN COLLABORATION WITH</h2>
            </Row>
            </Row>
            <Row>
                <Image src={require('./collab.png').default} className="img-fluid m-3"></Image>
            </Row>

            
        </Container>
    );
};

export default AboutPage;
