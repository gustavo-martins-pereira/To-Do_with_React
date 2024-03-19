import styled, { createGlobalStyle } from "styled-components";

import "reset-css";
import "normalize.css";

import Logo from "@/images/logo-todo.svg";

const GlobalStyles = createGlobalStyle`
    /*============================== Configurations ==============================*/
    :root {
        /*=============== COLORS ===============*/
        --black-25-color: hsl(0, 0%, 0%);
        --outrageous-orange-color: hsl(12, 100%, 61%);
        --outrageous-orange-50-color: hsla(12, 100%, 61%, 0.5);
        --crowshead-color: hsl(37, 57%, 2%);
        --early-dawn-color: hsl(41, 100%, 95%);
        --gunsmoke-color: hsl(180, 0%, 48%);
        --blue-zodiac-color: hsl(222, 69%, 21%);
        --bay-of-mayn-color: hsl(223, 61%, 30%);
        --athens-gray-color: hsl(224, 11%, 92%);
        --gravel-color: hsl(280, 1%, 33%);
        --scarlet-gum-color: hsl(283, 66%, 23%);
        --tutu-color: hsl(300, 100%, 99%);
    
        /*=============== BACKGROUNDS ===============*/
        --page-gradient: linear-gradient(135deg, var(--bay-of-mayn-color), var(--scarlet-gum-color));
        --main-background: var(--tutu-color);
        --input-background: var(--athens-gray-color);
        --add-background: var(--outrageous-orange-color);

    
        /*=============== BORDERS ===============*/
    
    
        /*=============== TEXT COLORS ===============*/
        --title-text-color: var(--blue-zodiac-color);
        --input-placeholder-text-color: var(--gunsmoke-color);
        --add-text-color: var(--early-dawn-color);

    
        /*=============== FONTS ===============*/
        --default-font: "Poppins", "Arial", "Helvetica", sans-serif;
    }
    
    /*============================== GENERIC ELEMENTS ==============================*/
    html,
    body {
        font-size: 16px;
    }
    
    body {
        background-image: var(--page-gradient);

        width: 100vw;
        height: 100vh;

        font-family: var(--default-font);
    }
`;

const Main = styled.main`
    background-color: var(--main-background);

    width: 40vw;
    max-width: 30rem;

    margin: auto;
    margin-top: 10rem;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px var(--black-25-color);
    padding: 2rem 2rem 4rem;
`;

const Title = styled.h1`
    color: var(--title-text-color);
    font-weight: bold;
`;

const LogoStyled = styled.img`
    margin-left: 1rem;
`;

const AddTask = styled.div`
    position: relative;

    margin-top: 2rem;
    border-radius: 50px;

    & * {
        border: none;
        border-radius: 50px;
        padding: 1.5rem 2rem;
    }
`;

const TaskInput = styled.input`
    background-color: var(--input-background);

    width: 100%;

    padding-right: 40%;
    box-sizing: border-box;

    outline: none;

    &::placeholder {
        color: var(--input-placeholder-text-color);
    }

    &:focus {
        outline: 3px solid var(--outrageous-orange-50-color);
    }
`;

const Add = styled.button`
    background-color: var(--add-background);

    width: 7.5rem;

    position: absolute;
    top: 0;
    right: 0;

    color: var(--add-text-color);

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: color-mix(in srgb, var(--add-background) 90%, black);
    }

    &:active {
        background-color: color-mix(in srgb, var(--add-background) 80%, black);
    }
`;

export function App() {
    return (
        <>
            <GlobalStyles />
            
            <Main>
                <Title>To-Do List <LogoStyled src={Logo} alt="Logotipo do To-Do" /></Title>

                <AddTask>
                    <TaskInput type="text" placeholder="Add your text" />
                    <Add>Add</Add>
                </AddTask>

                <ul>

                </ul>
            </Main>
        </>
    );
}
