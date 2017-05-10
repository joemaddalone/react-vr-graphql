import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Menu from './Menu'
import ZPanel from '../containers/ZPanel'

const DataMenu = (props) => {
	const queryBuilder = (type) => {
		return gql`query {
            all${type}(first: 15) {
                ${type.toLowerCase()} {
                name
                id
            }
        }
    }`
	}
	const MenuWithData = props.type ? graphql(queryBuilder(props.type))(Menu) : Menu
	return (
		<ZPanel {...props}>
			<MenuWithData {...props} />
		</ZPanel>
	)
}
export default DataMenu