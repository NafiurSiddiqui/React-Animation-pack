import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

//--------------------------------------------------------------------------------------------------------------stage 1

// class App extends Component {
// 	state = {
// 		modalIsOpen: false,
// 		showBlock: false,
// 	};

// 	showModal = () => {
// 		this.setState({ modalIsOpen: true });
// 	};

// 	closeModal = () => {
// 		this.setState({ modalIsOpen: false });
// 	};

// 	render() {
// 		return (
// 			<div className="App">
// 				<h1>React Animations</h1>
// 				<button
// 					className="Button"
// 					onClick={() => {
// 						this.setState((prevState) => ({
// 							showBlock: !prevState.showBlock,
// 						}));
// 					}}
// 				>
// 					Toggle
// 				</button>
// 				<br />
// 				<Transition
// 					in={this.state.showBlock}
// 					timeout={300}
// 					mountOnEnter
// 					unmountOnExit
// 				>
// 					{/* {(state) => <p>{state}</p>} */}
// 					{(state) => (
// 						<div
// 							style={{
// 								backgroundColor: 'orange',
// 								width: 100,
// 								height: 100,
// 								margin: 'auto',
// 								transition: 'opacity 0.3s ease-out',
// 								opacity: state === 'exiting' ? 0 : 1,
// 							}}
// 						></div>
// 					)}
// 				</Transition>
// 				{/**
// 				 * @Transition -
// 				 * imported from the third-party package we installed
// 				 * wrap around the element that should have transition.
// 				 * @in - to set the base in state
// 				 * @timeout - how long the animation should be played
// 				 * @function - with any function, inside transition, we have our state there, and this is how we can manipulate the animation.
// 				 * REMEMBER how react does not know about your animation, henace it will just suddenly entered or exit before your animation take place. This is how we can deal with that.
// 				 * @mountonenter - place it in the DOM
// 				 * @unmountonexit - remove it from the DOM (Good for accessiblity.)
// 				 */}

// 				<Transition
// 					in={this.state.modalIsOpen}
// 					timeout={300}
// 					mountOnEnter
// 					unmountOnExit
// 				>
// 					{(state) => <Modal show={state} closed={this.closeModal} />}
// 				</Transition>

// 				{this.state.modalIsOpen ? <Backdrop show /> : null}

// 				<button className="Button" onClick={this.showModal}>
// 					Open Modal
// 				</button>
// 				<h3>Animating Lists</h3>
// 				<List />
// 			</div>
// 		);
// 	}
// }

// export default App;

//--------------------------------------------------------------------------------------------------------------stage 2 (Transition placed in the component itself- Clena code)

// class App extends Component {
// 	state = {
// 		modalIsOpen: false,
// 		showBlock: false,
// 	};

// 	showModal = () => {
// 		this.setState({ modalIsOpen: true });
// 	};

// 	closeModal = () => {
// 		this.setState({ modalIsOpen: false });
// 	};

// 	render() {
// 		return (
// 			<div className="App">
// 				<h1>React Animations</h1>
// 				<button
// 					className="Button"
// 					onClick={() => {
// 						this.setState((prevState) => ({
// 							showBlock: !prevState.showBlock,
// 						}));
// 					}}
// 				>
// 					Toggle
// 				</button>
// 				<br />
// 				<Transition
// 					in={this.state.showBlock}
// 					timeout={300}
// 					mountOnEnter
// 					unmountOnExit
// 				>
// 					{/* {(state) => <p>{state}</p>} */}
// 					{(state) => (
// 						<div
// 							style={{
// 								backgroundColor: 'orange',
// 								width: 100,
// 								height: 100,
// 								margin: 'auto',
// 								transition: 'opacity 0.3s ease-out',
// 								opacity: state === 'exiting' ? 0 : 1,
// 							}}
// 						></div>
// 					)}
// 				</Transition>

// 				<Modal show={this.state.modalIsOpen} closed={this.closeModal} />

// 				{this.state.modalIsOpen ? <Backdrop show /> : null}

// 				<button className="Button" onClick={this.showModal}>
// 					Open Modal
// 				</button>
// 				<h3>Animating Lists</h3>
// 				<List />
// 			</div>
// 		);
// 	}
// }

// export default App;

//--------------------------------------------------------------------------------------------------------------stage 3 (alternative classing and extra props)

class App extends Component {
	state = {
		modalIsOpen: false,
		showBlock: false,
	};

	showModal = () => {
		this.setState({ modalIsOpen: true });
	};

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	};

	render() {
		return (
			<div className="App">
				<h1>React Animations</h1>
				<button
					className="Button"
					onClick={() =>
						this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
					}
				>
					Toggle
				</button>
				<br />
				<Transition
					in={this.state.showBlock}
					timeout={1000}
					mountOnEnter
					unmountOnExit
					onEnter={() => console.log('onEnter')}
					onEntering={() => console.log('onEntering')}
					onEntered={() => console.log('onEntered')}
					onExit={() => console.log('onExit')}
					onExiting={() => console.log('onExiting')}
					onExited={() => console.log('onExited')}
				>
					{(state) => (
						<div
							style={{
								backgroundColor: 'red',
								width: 100,
								height: 100,
								margin: 'auto',
								transition: 'opacity 1s ease-out',
								opacity: state === 'exiting' ? 0 : 1,
							}}
						/>
					)}
				</Transition>
				<Modal show={this.state.modalIsOpen} closed={this.closeModal} />
				{this.state.modalIsOpen ? <Backdrop show /> : null}
				<button className="Button" onClick={this.showModal}>
					Open Modal
				</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;
