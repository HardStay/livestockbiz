import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButton';
import useEmblaCarousel from 'embla-carousel-react';

const EmblaCarousel = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla bg-gray-200">
            <h6 className="text-4xl font-semibold mb-4 mt-20 text-center">Lorem ipsum dolor sit amet consectetur.</h6>
            <div className="embla__viewport" ref={emblaRef} style={{ overflowX: 'auto', height: '100%' }}>
                <div className="embla__container flex gap-4 bg-gray-200 mb-6">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-md">
                                <img className="w-full h-56 object-cover object-center" src={slide.imgSrc} alt={slide.imgAlt} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{slide.title}</div>
                                    <p className="text-gray-700 text-base">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls mb-24">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot text-gray-900'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EmblaCarousel;
