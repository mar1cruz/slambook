import React from 'react';
import st from './HeaderTable.module.css'
const HeaderTable = () => {
    return (
        <tr className={st.row}>
            <td className={st.command}>Команда</td>
            <td className={st.info}>В</td>
            <td className={st.info}>П</td>
            <td className={st.info}>%В</td>
            <td className={st.info}>ГБ</td>
            <td className={st.info}>КонФ</td>
            <td className={st.info}>Дом</td>
            <td className={st.info}>Гост</td>
            <td className={st.info}>И10</td>
            <td className={st.info}>Сер</td>
        </tr>
    );
};

export default HeaderTable;