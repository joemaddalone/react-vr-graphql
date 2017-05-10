import React from 'react'
import {
	View,
	VrButton,
	Text
} from 'react-vr'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Models from './models'
import ZPanel from '../containers/ZPanel'
import Detail from './Detail'
import styles from '../../styles/styles'

const getQuery = (type, id) => {
	return gql`query {
		${type}(id: "${id}") {
			${Models[type].fields.join(',')}
		}
	}`
}

const DataPanel = (props) => {
	let fields = props.d ? Models[props.d].fields : []
	let DetailWithData = props.d ? graphql(getQuery(props.d, props.id))(Detail) : Detail
	return (
		<ZPanel {...props}>
			<DetailWithData {...props} fields={fields} type={props.d} />
		</ZPanel>
	)
}

export default DataPanel