export default function Collapse({ content }) {
  return (
    <section className="collapse">
      <div className="module_container">
        <div className="collapse__item">
          <img src={content.collapse1img} alt="Création de Site Internet" />
          <p>{content.collapse1text}</p>
        </div>
        <div className="collapse__item">
          <img src={content.collapse2img} alt="Création graphique" />
          <p>{content.collapse2text}</p>
        </div>
        <div className="collapse__item collapse_active">
          <img src={content.collapse3img} alt="Création d'illustration" />
          <p>{content.collapse3text}</p>
        </div>
        <div className="collapse__item">
          <img src={content.collapse4img} alt="Création de maquette web et mobile" />
          <p>{content.collapse4text}</p>
        </div>
        <div className="collapse__item">
          <img src={content.collapse5img} alt="Création et gestion réseaux sociaux" />
          <p>{content.collapse5text}</p>
        </div>
      </div>
    </section>
  );
}
