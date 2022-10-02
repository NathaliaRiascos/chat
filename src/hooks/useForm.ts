import { useState } from  'react'
import PropTypes from 'prop-types';
import useAnime from 'hooks/useAnime'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const {
        setAnime
    } = useAnime()

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

   const handleSubmit = e => {
    e.preventDefault();
    setAnime(values.anime)
   }

    return {
        values,
        handleChange,
        handleSubmit
    }

}

useForm.propTypes = {
    children: PropTypes.object
}