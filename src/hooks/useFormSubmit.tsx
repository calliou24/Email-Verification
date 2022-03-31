

import {useState} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useFormSubmit() {
  const [ inputValue, setInputValue ] = useState('');
	const [ validEmail, setValidEmail ] = useState(false);
  
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const handdleSubmit = (e: any) => {
		e.preventDefault();
		if (regex.test(inputValue)) {
			setValidEmail(true);
			toast.success('Thank You!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
			setInputValue('');
		}
		return;
	};
	const handdleOnChange = (e: any) => {
		const { value } = e.target;
    setInputValue(value);
    if(regex.test(inputValue)) return setValidEmail(true)
    return setValidEmail(false)
	};
  
  return { inputValue, validEmail, handdleOnChange, handdleSubmit}
}

export default useFormSubmit