import "./Footer.css";
export default function Footer({ contacts }) {
  return (
    <div className="footer">
      <h2 className="footer__name">Связь</h2>
      <ul className="footer__contacts">
        <li className="footer__telegram">{contacts.telegram}</li>
        <li className="footer__email">{contacts.email}</li>
        <li className="footer__phone">{contacts.phone}</li>
      </ul>
    </div>
  );
}
