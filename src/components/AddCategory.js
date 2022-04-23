import React,{useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {    
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); //evita que se recargue la pagina

        //Validacion
        if(inputValue.trim().length > 2){ // borrar los espacios en blancos y mayor a dos letras
            setCategory(categories => [inputValue,...categories, ]); // categories tiene el estado anterior por lo que recibe un callback    
            setInputValue('');
        }

    }

    return(
        <form onSubmit = {handleSubmit}> 
            <input 
                type="text" 
                className='inpt'
                placeholder="Add new Category"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}


AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory;
