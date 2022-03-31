import styles from './form.module.css';

import iconArrow from '../../assets/images/icon-arrow.svg';
import iconError from '../../assets/images/icon-error.svg'
import useFormSubmit from '../../hooks/useFormSubmit';

function Form() {

  const {inputValue, validEmail , handdleOnChange, handdleSubmit} = useFormSubmit()

	return (
		<form onSubmit={handdleSubmit} className={styles.formCont}>
			<div className={styles.form}>
				<input placeholder='Email Address' onChange={handdleOnChange} value={inputValue} type="text" className={styles.inputEmail} />
        { (inputValue.length > 2 && validEmail == false) ? <img src={iconError} alt='error' className={styles.iconError}/> : '' }
        <button className={styles.submitBtn}>
					<img src={iconArrow} alt="icon arrow" className={styles.icon} />
				</button>
			</div>
      <span className={styles.warn}>{ (inputValue.length > 2 && validEmail == false) ? 'Please provide a valid email' : '' }</span>
		</form>
	);
}

export default Form;
