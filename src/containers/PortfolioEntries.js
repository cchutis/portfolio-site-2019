import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class PortfolioEntries extends Component {

    renderProjects = () => {
        return this.props.projects.map(project => {
            return <Slide index={project.index - 1}><h2>{project.name}</h2></Slide>
        })
    }

    render() {
        return (
            <div className="">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={9}>
                    <ButtonBack className="back-button">Back</ButtonBack>
                    <Slider>
                        {this.renderProjects()}
                    </Slider>
                <ButtonNext className="next-button">Next</ButtonNext>
                </CarouselProvider>
            </div>
        );
    }
}

