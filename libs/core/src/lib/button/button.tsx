import styles from './button.module.css'

/* eslint-disable-next-line */
export interface ButtonProps {}

export const Button = () => {
	return (
		<div className={styles.container}>
			<h1 className='text-orange-600'>Welcome to Button!</h1>
		</div>
	)
}

export default Button
