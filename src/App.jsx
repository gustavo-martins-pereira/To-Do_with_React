import styled, { createGlobalStyle } from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { ImRadioUnchecked } from "react-icons/im";

import "reset-css";
import "normalize.css";

import Logo from "@/images/logo-todo.svg";
import { useEffect, useState } from "react";

const GlobalStyles = createGlobalStyle`
    /*============================== Configurations ==============================*/
    :root {
        /*=============== COLORS ===============*/
        --black-25-color: hsl(0, 0%, 0%);
        --alto-color: hsl(0, 0%, 93%);
        --alto-60-color: hsla(0, 0%, 93%, 0.6);
        --red-25-orange-color: hsla(0, 97%, 59%, 0.25);
        --red-50-orange-color: hsla(0, 97%, 59%, 0.5);
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
        --close-hover-background: var(--red-25-orange-color);
        --close-active-background: var(--red-50-orange-color);
        
        
        /*=============== BORDERS ===============*/
        
        
        /*=============== TEXT COLORS ===============*/
        --title-text-color: var(--blue-zodiac-color);
        --input-placeholder-text-color: var(--gunsmoke-color);
        --add-text-color: var(--early-dawn-color);
        --checked-icon-text-color: var(--outrageous-orange-color);
        --unchecked-icon-text-color: var(--athens-gray-color);
        --checked-name-text-color: var(--gravel-color);

    
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

        min-height: 100vh;

        border-top: 1px solid transparent;
        box-sizing: border-box;

        font-family: var(--default-font);
    }
`;

const Main = styled.main`
    background-color: var(--main-background);

    width: 40vw;
    max-width: 30rem;

    margin: 10rem auto;
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

const TasksList = styled.ul`
    margin-top: 2rem;
`;

const Task = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    &:not(:first-child) {
        margin-top: 1rem;
    }
`;

const TaskTextWrapper = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;

    flex-grow: 1;

    border-radius: 20px;
    padding: 0.25rem;

    cursor: pointer;

    &:hover {
        background-color: var(--alto-60-color);
    }

    &:active {
        background-color: var(--alto-color);
    }
`;

const CheckedIcon = styled(BsFillCheckCircleFill)`
    color: var(--checked-icon-text-color);
    font-size: 2rem;
    `;

const UncheckedIcon = styled(ImRadioUnchecked)`
    color: var(--unchecked-icon-text-color);
    font-size: 2rem;
`;

const TaskName = styled.span`
    color: ${props => props.$isChecked ? "var(--checked-name-text-color)" : "inherit"};
    text-decoration: ${props => props.$isChecked ? "line-through" : "initial"};
`;

const CloseTask = styled(IoIosClose)`
    border-radius: 5px;
    
    font-size: 2rem;

    cursor: pointer;

    &:hover {
        background-color: var(--close-hover-background);
    }

    &:active {
        background-color: var(--close-active-background);
    }
`;

export function App() {
    const [tasks, setTasks] = useState(() => {
        const tasks = localStorage.getItem("tasks");
        console.log(JSON.parse(tasks));
        if(tasks) return JSON.parse(tasks);
        
        return [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    
    function handleCheckUncheckTask(id) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    isChecked: !task.isChecked,
                };
            }

            return task;
        });

        setTasks(updatedTasks);
    }

    function handleDeleteTask(id) {
        const updatedTasks = tasks.filter(task => task.id !== id);

        setTasks(updatedTasks);
    }

    return (
        <>
            <GlobalStyles />
            
            <Main>
                <Title>To-Do List <LogoStyled src={Logo} alt="Logotipo do To-Do" /></Title>

                <AddTask>
                    <TaskInput type="text" placeholder="Add your text" />
                    <Add>Add</Add>
                </AddTask>

                <TasksList>
                    {tasks.map(task => {
                        return (
                            <Task key={task.id}>
                                <TaskTextWrapper onClick={() => handleCheckUncheckTask(task.id)}>
                                    {task.isChecked ? <CheckedIcon /> : <UncheckedIcon />}
                                    <TaskName $isChecked={task.isChecked}>{task.name}</TaskName>
                                </TaskTextWrapper>

                                <CloseTask onClick={() => handleDeleteTask(task.id)} />
                            </Task>
                        );
                    })}
                </TasksList>
            </Main>
        </>
    );
}
