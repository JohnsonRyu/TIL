import React from 'react';
import classNames from 'classnames';

import { IComponentProps } from '../../../types';
import './Button.scss';

interface IButtonProps extends IComponentProps {
	className?: string;
	gray?: boolean;
	red?: boolean;
}

export const Button = (props: IButtonProps) => {
	return (
		<button
			className={classNames('Button', props.className, {
				'Button--gray': props.gray,
				'Button--red': props.red,
			})}
		>
			{props.children}
		</button>
	);
};
