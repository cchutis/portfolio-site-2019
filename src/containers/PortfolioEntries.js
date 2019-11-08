import React, { Component } from 'react';
import ProjectTile from '../components/ProjectTile';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class PortfolioEntries extends Component {

    renderProjects = () => {
        return this.props.projects.map(project => {
            return <Slide index={project.index - 1}>
                <ProjectTile key={project.id} project={project} />
            </Slide>
        })
    }

    render() {
        return (
            <div className="">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={8}>
                    <ButtonBack className="back-button">BACK</ButtonBack>
                    <Slider>
                        {this.renderProjects()}
                    </Slider>
                <ButtonNext className="next-button">NEXT</ButtonNext>
                </CarouselProvider>
            </div>
        );
    }
}

