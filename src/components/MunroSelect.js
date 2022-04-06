import React from 'react';

const MunroSelect = ({munros, onMunroSelect}) => {

    const munroItems = munros.map((munro, index) => {
        return(
        <option key={index} value={index}>{munro.name}</option>
    )
    })


    return(
        <div>
        <select onChange={(event)=> {onMunroSelect(event.target.value)}}>
            <option value="">Pick a Munro</option>
            {munroItems}
        </select>
        </div>
    );
}

export default MunroSelect;