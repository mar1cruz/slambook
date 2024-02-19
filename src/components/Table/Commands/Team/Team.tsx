import React from 'react';
import st from "../Commands.module.css";
import {CommandsType} from "../../api";

type TeamPropsType = {
    command: CommandsType
    id: number
}

export const Team = ({command, id}: TeamPropsType) => {
    return (
        <tr className={st.commandRow}>
            <td className={st.command}>
                <div className={st.wrapperCommand}>
                    <div className={st.id}>{id + 1}</div>
                    <div className={st.icon}><img src={command.logo} alt=""/></div>
                    <div>{command.name}</div>
                </div>
            </td>
            <td>{command.wins}</td>
            <td>{command.losses}</td>
            <td>{command.winRate}</td>
            <td>{command.gamesBack}</td>
            <td style={{width: "50px"}}>{
                command.confRecord
            }</td>
            <td style={{width: "50px"}}>{
                command.homeRecord
            }</td>
            <td style={{width: "50px"}}>{command.awayRecord}</td>
            <td>{command.recordLastTenGames}</td>
            <td>{command.currentStreak}</td>
        </tr>
    );
};

