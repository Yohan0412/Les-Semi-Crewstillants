import React, { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./BurgerMenu.css";

export default function App() {
  const [showAnimated, setShowAnimated] = useState(false);

  return (
    <section className="">
      <MDBNavbar className="bgLink">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            className="first-button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowAnimated(!showAnimated)}
          >
            <div className={`animated-icon1 ${showAnimated && "open"}`}>
              <span />
              <span />
              <span />
            </div>
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showAnimated}>
        <div className="bgLink shadow-3 p-4">
          <MDBBtn block className="burger m-0" color="link">
            Accueil
          </MDBBtn>
          <MDBBtn block className="burger m-0" color="link">
            Plats du monde
          </MDBBtn>
          <MDBBtn block className="burger m-0" color="link">
            Les recettes en details
          </MDBBtn>
        </div>
      </MDBCollapse>
    </section>
  );
}
