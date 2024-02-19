import React from 'react';
import st from './ButtonWrapper.module.css'
import {FilterType} from "../Table";

type ButtonWrapperType = {
    changeFilter: (filter: FilterType) => void
    filter: FilterType
}
const ButtonWrapper = ({filter,changeFilter}: ButtonWrapperType) => {
    return (
        <div className={st.btn_wrapper}>
            <button onClick={() => changeFilter('Eastern')} className={filter === 'Eastern' ? st.active : ''}>Восточная конференция</button>
            <button onClick={() => changeFilter('Western')} className={filter === 'Western' ? st.active : ''}>Западная конференция</button>
        </div>
    );
};

export default ButtonWrapper;