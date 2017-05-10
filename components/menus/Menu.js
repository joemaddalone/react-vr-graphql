import React from 'react'
import {
	View,
	VrButton,
	Text
} from 'react-vr'

import Button from './Button'
import ZPanel from '../containers/ZPanel'
import styles from '../../styles/styles'

const Menu = ({ z, disabled, closeHandler, openHandler, buttons, showClose, data, type }) => {
	if (data && !data.loading) {
		buttons = data[`all${type}`][type.toLowerCase()]
	}

	return (
		<View style={styles.menu}>
			{showClose && buttons && (
				<VrButton
					disabled={disabled}
					onClick={closeHandler}
					style={styles.closeButton}>
					<Text style={styles.closeButtonText}>Back</Text>
				</VrButton>
			)}
			{buttons && buttons.map((b, i) => (
				<Button
					key={i}
					disabled={disabled}
					clickHandler={openHandler.bind(null, b.type || type, b.id)}
					text={b.name || b.title}>
				</Button>))
			}
		</View>
	)
}

export default Menu