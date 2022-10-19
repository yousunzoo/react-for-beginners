import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <section className="navigator">
      <ul className="nav">
        <li>
          <Link to="/react-for-beginners">Home</Link>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
