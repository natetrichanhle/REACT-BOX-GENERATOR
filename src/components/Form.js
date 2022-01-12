import React, {useState} from 'react';

const Form = (props) => {
    const{inputs, setInputs} = props;
    const[color, setColor] = useState('');
    const[size, setSize] = useState('');

    const generateBox = (e) => {
        e.preventDefault();

        const newBox = {
            color: color,
            size: size
        }
        setInputs([...inputs, newBox]);

        setColor('');
        setSize('');
    }
    return(
        <form onSubmit={generateBox}>
            <div>
                <label>Color</label>
                <input onChange={(e)=> setColor(e.target.value)} type = 'text' value = {color}/>
            </div>
            <div>
                <label>Width/Height</label>
                <input onChange={(e)=> setSize(e.target.value)} type = 'text' value = {size}/>
            </div>
            <input type = 'submit' value = 'Add'/>
        </form>
    );
}

export default Form;