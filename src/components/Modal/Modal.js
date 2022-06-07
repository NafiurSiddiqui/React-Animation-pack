import React from 'react';
import Transition from 'react-transition-group/transition';

import './Modal.css';

//--------------------------------------------------------------------------------------------------------------stage 1

// const modal = (props) => {
// 	const cssClasses = [
// 		'Modal',
// 		props.show === 'entering'
// 			? 'ModalOpen'
// 			: props.show === 'exiting'
// 			? 'ModalClosed'
// 			: null,
// 	];

// 	return (
// 		<div className={cssClasses.join(' ')}>
// 			<h1>A Modal</h1>
// 			<button className="Button" onClick={props.closed}>
// 				Dismiss
// 			</button>
// 		</div>
// 	);
// };

// export default modal;

//--------------------------------------------------------------------------------------------------------------stage 2 ( Transition placed here for clean code)

const modal = (props) => {
	return (
		<Transition in={props.show} timeout={400} mountOnEnter unmountOnExit>
			{(state) => {
				const cssClasses = [
					'Modal',
					state === 'entering'
						? 'ModalOpen'
						: state === 'exiting'
						? 'ModalClosed'
						: null,
				];
				return (
					<div className={cssClasses.join(' ')}>
						<h1>A Modal</h1>
						<button className="Button" onClick={props.closed}>
							Dismiss
						</button>
					</div>
				);
			}}
		</Transition>
	);
};

export default modal;
