import "./Skills.css";
export default function Skills({ skills }) {
  return (
    <div className="skills">
      <h2 className="skills__title">Мои навыки</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
