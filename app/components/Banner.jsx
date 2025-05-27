export default function Banner({ title, subtitle, video }) {
    return (
      <div id="Banner">
        <div className="title">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
  
        <div className="photobanner">
          <video autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>
      </div>
    );
  }
  