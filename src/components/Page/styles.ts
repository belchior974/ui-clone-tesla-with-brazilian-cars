import styled from "styled-components";

import imgFusca from "../../assets/fusca-brabo-laranja.jpg";

import imgPasati from "../../assets/passati-quadrado.jpg";

import imgUno from "../../assets/uno-mille-quadrado.jpg";

import imgCorcel from "../../assets/ford-corcel-amarelo.jpg"

import imgMarea from "../../assets/fiat-marea-turbo.jpg"

import imgOpala from "../../assets/chevrolet-opala.jpg"

import imgBrasilia from "../../assets/brasilia-amarela.jpg"

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${imgFusca});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background-image: url(${imgBrasilia});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
    
  .colored:nth-child(3) {
    background-image: url(${imgCorcel});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(4) {
    background-image: url(${imgPasati});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background-image: url(${imgUno});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background-image: url(${imgMarea});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background-image: url(${imgOpala});
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #77e68c;
`;
