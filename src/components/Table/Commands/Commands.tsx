import React from 'react';
import {CommandsType} from "../api";
import {Team} from "./Team/Team";

type CommandsPropsType = {
    commands: CommandsType[]
}

const Commands = (props: CommandsPropsType) => {

    return (
        <>
            {props.commands.map((command, i) => {
                return <Team command={command} id={i}/>
            })}
        </>
    );
};

export default Commands;