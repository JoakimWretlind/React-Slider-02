import styled from 'styled-components';
import { FaQuoteRight } from 'react-icons/fa';

export const QuoteIcon = styled(FaQuoteRight)`
  font-size: 4.8rem;
  margin-top: 1.6rem;
  color: #ba5d2c;
`;

export const Section = styled.section`
  padding: 2rem 0 0;
  background: linear-gradient(#fdfeff, #ffffff);
  width: 90vw;
  margin: 8% auto;
  max-width: 120rem;
  box-shadow: 0 .4rem .8rem rgba(175, 210, 255,.2);
  @media screen and (min-width: 992px) { 
    width: 95vw;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  font-weight: 500;
  color: #617D98;
  span{
    font-size: 1.4em;
    color: #c86a37;
    margin-right: 1.6rem;
    font-weight: 700;
  }
`;

export const TitleP = styled.p`
  text-align: center;
  margin-bottom: 3.2rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: .1rem;
`;

export const TextP = styled.p`
  max-width: 35em;
  margin: 2rem auto 0;
  line-height: 1.6;
  color: #617d98;
  @media screen and (min-width: 800px){
      max-width: 40em;
  }
`;

export const SectionCenter = styled.div`
  margin: 0 auto;
  margin-top: 6.4rem;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const Article = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all .3s linear;
  &.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
&.lastSlide {
  transform: translateX(-100%);
}
&.nextSlide {
  transform: translateX(100%);
}
`;

export const PersonImg = styled.img`
  border-radius: 50%;
  margin-bottom: 1.6rem;
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border: .4rem solid #bcccdc;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 20rem;
  transform: translateY(-50%);
  background: #617d98;
  color: #ffffff;
  width: 2.4rem;
  height: 2.4rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1.4rem;
  border-radius: .4rem;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
      background: #ba5d2c;
  }
  &.prev {
  left: 0;
}
&.next {
  right: 0;
}
@media (min-width: 800px) {
    .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}
`;