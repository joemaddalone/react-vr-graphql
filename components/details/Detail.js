import React from 'react'
import { View, Text, VrButton } from 'react-vr'
import { graphql } from 'react-apollo'
import ZPanel from '../containers/ZPanel'
import styles from '../../styles/styles'

const camelToSentence = (str) => (
	str.replace(/([A-Z])/g, ' $1')
		.replace(/^./, (str) => str.toUpperCase())
)

const stringify = (el) => {
	if (el && el.constructor === Array) {
		return el.join(',')
	}
	return el

}

const Detail = ({ data, fields, type, closeHandler }) => {
	if (!data || data.loading) {
		return <View><Text>Loading...</Text></View>
	}
	return (
		<View style={styles.detailPanel}>
			<VrButton
				onClick={closeHandler}
				style={styles.closeButton}>
				<Text style={styles.closeButtonText}>Back</Text>
			</VrButton>
			<View style={styles.dataItems}>
				{fields.map((f, i) => (
					<View style={styles.detailPanelView} key={i}>
						<Text style={styles.dataLabel}>{camelToSentence(f)}</Text>
						<Text style={styles.dataValue}>
							{stringify(data[type][f])}
						</Text>
					</View>
				)
				)}
			</View>

		</View>
	)
}

export default Detail