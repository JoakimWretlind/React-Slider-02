import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './data';
import {
    QuoteIcon,
    Section,
    SectionCenter,
    Title,
    Article,
    PersonImg,
    TitleP,
    TextP,
    SliderButton
} from './SliderStyling'

function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 3000);
        return () => clearInterval(slider);
    }, [index])

    return (
        <Section>
            < Title>
                <h2>
                    <span>/</span>reviews
                </h2>
            </Title>
            <SectionCenter>
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide';
                    }
                    return (
                        <Article className={position} key={id}>
                            <PersonImg src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <TitleP>{title}</TitleP>
                            <TextP >{quote}</TextP >
                            <QuoteIcon />
                        </Article>
                    )
                })}
                <SliderButton className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </SliderButton>
                <SliderButton className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </SliderButton>
            </SectionCenter>
        </Section>
    );
}

export default App;
