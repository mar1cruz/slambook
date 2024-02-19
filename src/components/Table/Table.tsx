import React, {useState} from 'react';
import ButtonWrapper from "./ButtonWrapper/ButtonWrapper";
import HeaderTable from "./HeaderTable/HeaderTable";
import Commands from "./Commands/Commands";
import {commandsInfo} from "./api";


export type FilterType = 'Eastern' | 'Western'
const Table = () => {
    const [filter, setFilter] = useState<FilterType>('Eastern')
    let filteredCommands = commandsInfo.filter(c => c.conference === filter)

    function changeFilter(filter: FilterType) {
        setFilter(filter)
    }

    return (
        <div className="wrapper">

            <ButtonWrapper changeFilter={changeFilter} filter={filter}/>

            <table>
                <HeaderTable/>
                <Commands commands={filteredCommands}/>
            </table>
        </div>
    );
};

export default Table;