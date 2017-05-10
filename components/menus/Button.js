import React from 'react'
import {
	Text,
	VrButton
} from 'react-vr'

import styles from '../../styles/styles'

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = { backgroundColor: 'black' }
	}
	enter = () => {
		if(!this.props.disabled){
			this.setState({ backgroundColor: 'red' })
		}
		
	}
	exit = () => {
		this.setState({ backgroundColor: 'black' })
	}
	click = () => {
		this.exit()
		if(!this.props.disabled){
			this.props.clickHandler()
		}
	}
	render() {
		return (
			<VrButton
				disabled={this.props.disabled}
				onClick={this.click}
				style={styles.menuButton}
				onEnter={this.enter}
				onExit={this.exit}>
				<Text style={ [ styles.menuButtonText, { backgroundColor: this.state.backgroundColor } ]}>{this.props.text}</Text>
			</VrButton>
		)
	}
}

export default Button