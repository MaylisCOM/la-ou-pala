export default function Carousel({ content }) {
  return (
    <section className="carousel-section">
      <div className="carousel-intro">
        <h2>{content.carouselTitle}</h2>
        <p>{content.carouselText}</p>
        <div id="carousel-button-container"> </div>
      </div>
      <div id="snap-carousel">
        <ul className="carousel">
          <li className="carousel-item"><img src={content.carousel1img} alt={content.carousel1alt} /></li>
          <li className="carousel-item"><img src={content.carousel2img} alt={content.carousel2alt} /></li>
          <li className="carousel-item"><img src={content.carousel3img} alt={content.carousel3alt} /></li>
          <li className="carousel-item"><img src={content.carousel4img} alt={content.carousel4alt} /></li>
          <li className="carousel-item"><img src={content.carousel5img} alt={content.carousel5alt} /></li>
          <li className="carousel-item"><img src={content.carousel6img} alt={content.carousel6alt} /></li>
          <li className="carousel-item"><img src={content.carousel7img} alt={content.carousel7alt} /></li>
        </ul>
      </div>
    </section>
  );
}
