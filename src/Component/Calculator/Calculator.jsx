import { useState } from "react";

import style from "./Calculator.module.css";

function Calculator(){
    const [result,setResult] = useState(0);
    const [expression , setexpression] = useState('');

    const [value1, setvalue1] = useState(0);
    const [value2,setvalue2] = useState(0);

    const [isset1, setisset1] = useState(false);
    const [isset2, setisset2] = useState(false);

    const handleevent = ()=>{

        setResult(10);
        setvalue1(0);
        setvalue2(0);
        setisset1(false);
        setisset2(false);
    }

    const clear = () =>{
        setResult(0);
        setexpression('');

    }

    const divideoperation = ()=>{

    }

    const multiplyoperation = () =>{

    }

    const additionevent = () =>{

    }

    const subtractoperation = () =>{

    }

    const addvalue = (value) =>{

    }

    const pointadd = () =>{

    }
    return (
        <div className={style.box}>
            <div className={style.container}>
                <input className= {style.input} value={result}/>
            </div>
            <div className={style.number}>
                <button className={style.num}
                onClick={clear}
                >Clear</button>
                <button className={style.num}
                onClick={divideoperation}
                >/</button>
                <button className={style.num}
                onClick={multiplyoperation}
                >*</button>
                <button className={style.num}
                onClick={subtractoperation}
                >-</button>
                <button className={style.num} value={7}
                onClick={addvalue}
                >7</button>
                <button className={style.num} value={8}
                onClick={addvalue}
                >8</button>
                <button className={style.num} value={9}
                onClick={addvalue}
                >9</button>
                <button className={style.num} value={4}
                onClick={addvalue}
                >4</button>
                <button className={style.num} value={5}
                onClick={addvalue}
                >5</button>
                <button className={style.num} value={6}
                onClick={addvalue}
                >6</button>
                <button className={style.num} value={3}
                onClick={addvalue}
                >3</button>
                <button className={style.num} value={2}
                onClick={addvalue}
                >2</button>
                <button className={style.num} value = {1}
                onClick={addvalue}
                >1</button>
                <button className={style.num} value={0}
                onClick={addvalue}
                >0</button>
                <button className={style.num}
                onClick={additionevent}
                >+</button>
                <button className={style.num}
                onClick={pointadd}
                >.</button>
                <button className={style.num} onClick={handleevent}>Enter</button>
            </div>

    
        </div>
    )
}

export default Calculator;