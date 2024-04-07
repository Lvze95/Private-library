import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>&copy; {new Date().getFullYear()} teletabichi</span>
      </div>
    </footer>
  );
};

export default Footer;
