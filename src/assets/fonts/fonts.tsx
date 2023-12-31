import { createGlobalStyle } from "styled-components";
import Comfortaa from "./Comfortaa.woff";
import Nunito from "./Nunito-Regular.woff2";
import Roboto from "./Roboto-Medium.woff2";
import Playfair from "./PlayfairDisplay.ttf";
import Poppins from "./Poppins-Regular.ttf"
import Castoro from "./CastoroTitling-Regular.ttf"

export const StyledFonts = createGlobalStyle`
@font-face {
    font-family: "Comfortaa";
    src: url(${Comfortaa}) format("woff")}
@font-face{
    font-family: "Nunito";
    src: url(${Nunito}) format("woff2")}
@font-face{
    font-family: "Playfair";
    src: url(${Playfair}) format("ttf")}
@font-face{
    font-family: "Roboto";
    src: url(${Roboto}) format("woff2")}
@font-face{
    font-family: "Poppins";
    src: url(${Poppins}) format("woff2")}
@font-face{
    font-family: "Castoro";
    src: url(${Castoro}) format("ttf")}

`;
