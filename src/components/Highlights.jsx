import HighlightPhoto from "/highlight-photo.jpg";
import "../styles/Highlights.css";

export const Highlights = () => {
  const highlights = [
    { label: "Virtuali klasė", image: HighlightPhoto },
    { label: "GameOn 2019", image: HighlightPhoto },
    { label: "Riga", image: HighlightPhoto },
  ];

  return (
    <>
      <section className="highlights-section">
        {highlights.map((highlight, index) => (
          <div className="highlight" key={index}>
            <div className="highlight-image">
              <img src={highlight.image} alt="image" />
            </div>
            <p>{highlight.label}</p>
          </div>
        ))}
      </section>
      <hr />
    </>
  );
};
