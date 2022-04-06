import React, { useState, useEffect } from 'react';
import MunroList from '../components/MunroList';
import './MunroContainer.css';
import MunroDetail from '../components/MunroDetail';
import MunroSelect from '../components/MunroSelect';

const MunroContainer = () => {
    const [munros, setMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
        getMunros();
    }, [])

    const getMunros = function(){
        fetch('https://munroapi.herokuapp.com/munros')
        .then(res => res.json())
        .then(munros => setMunros(munros))
    }

    const onMunroSelect = function(index) {
        const munro = munros[index]
        setSelectedMunro(munro);
    }

    return (
        <div className="main-container">
            {/* <MunroList munros={munros} onMunroClick={onMunroClick}/> */}
            <MunroSelect munros={munros} onMunroSelect={onMunroSelect}/>
            { selectedMunro ? <MunroDetail munro={selectedMunro}/> : null}

        </div>
    )
}

export default MunroContainer;
