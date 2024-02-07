import React from 'react';
import styles from './input.module.scss';

interface Props {
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	defaultValue?: string;
}

export default function Input(props: Props) {
	const { placeholder, onChange, value, defaultValue } = props;

	return (
		<input
			type='text'
			className={`form-control ${styles.input}`}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
			defaultValue={defaultValue}
		/>
	);
}
