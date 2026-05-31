import "./Hero.css";
export default function Hero({ image, fio, prof, bio }) {
  return (
    <div className="hero">
      <img className="hero__image" src={image}></img>
      <h1 className="hero__fio">{fio}</h1>
      <p className="hero__prof">{prof}</p>
      <p className="hero__bio">{bio}</p>
    </div>
  );
}
