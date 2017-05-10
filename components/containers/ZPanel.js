import React from 'react'
import { Animated } from 'react-vr'
import styles from '../../styles/styles'

class ZPanel extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.animatedValue = new Animated.Value(this.props.z)
		this.move()
	}
	componentDidUpdate() {
		this.move()
	}
	move = () => {
		Animated.spring(this.animatedValue, {
			toValue: this.props.z,
			friction: 10,
			tension: 25
		}).start()
	}
	render() {
		const animatedStyle = {
			transform: [ { translateX: -2 }, { translateY: 1 }, { translateZ: this.animatedValue } ]
		}
		return (
			<Animated.View style={[ styles.zpanel, animatedStyle ]}>
				{this.props.children}
			</Animated.View>
		)
	}
}

export default ZPanel