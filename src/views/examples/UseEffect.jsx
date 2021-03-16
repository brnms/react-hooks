import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n;
}

function CalcParOuImpar(n) {
    if(parseInt(n) % 2 === 0){
        return 'Par';
    }else{
        return 'Ímpar';
    }
}

const UseEffect = (props) => {
    const [ number, setNumber ] = useState(1);
    const [ fatorial, setFatorial ] = useState(1);
    const [ parOuImpar, setParOuImpar ] = useState('Ímpar');

    // Ex 01
    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number]);

    // Ex02
    useEffect(function () {
        setParOuImpar(CalcParOuImpar(number));
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>

                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
                
            </div>

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div className="center">
                    <div>
                        <span className="text">Par ou Ímpar:</span>
                    <span className="text red">{parOuImpar}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
