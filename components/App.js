import React from 'react'
import {
	AppRegistry,
	asset,
	Pano,
	View,
	VrButton,
	Text,
	PointLight,
	AmbientLight
} from 'react-vr'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import StaticMenu from './menus/StaticMenu'
import DataMenu from './menus/DataMenu'
import DataPanel from './details/DataPanel'

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'https://swapi.apis.guru/'
	})
})

const categories = [
	{ name: 'People', type: 'People', d: 'person' },
	{ name: 'Planets', type: 'Planets', d: 'planet' },
	{ name: 'Species', type: 'Species', d: 'species' },
	{ name: 'Starships', type: 'Starships', d: 'starship' },
	{ name: 'Vehicles', type: 'Vehicles', d: 'vehicle' }
]


class learn_react_vr extends React.Component {
	constructor() {
		super()
		this.state = {
			z: [ -5, 10, 25 ],
			type: null,
			d: null,
			id: null
		}
	}
	openHandler = () => {
		//this.setState({ z1: this.state.z1 - 15, z2: this.state.z2 - 15, z3: this.state.z3 - 15 })
		this.setState({ z: this.state.z.map(n => n-15) })
	}
	closeHandler = () => {
		//this.setState({ z1: this.state.z1 + 15, z2: this.state.z2 + 15, z3: this.state.z3 + 15 })
		this.setState({ z: this.state.z.map(n => n+15) })
	}
	selectCategory = (type) => {
		this.setState({ type })
		this.openHandler()
	}
	selectDetail = (type, id) => {
		this.setState({ id, d: categories.find((c) => c.type === type).d })

		this.openHandler()
	}
	render() {
		return (
			<ApolloProvider client={client}>
				<View>
					<Pano
						source={{
							uri: [
								'../static_assets/purplenebula_rt.jpg',
								'../static_assets/purplenebula_lf.jpg',
								'../static_assets/purplenebula_up.jpg',
								'../static_assets/purplenebula_dn.jpg',
								'../static_assets/purplenebula_bk.jpg',
								'../static_assets/purplenebula_ft.jpg'
							]
						}} />
					<StaticMenu
						z={this.state.z[0]}
						buttons={categories}
						openHandler={this.selectCategory}
						closeHandler={this.closeHandler}
						disabled={this.state.z[0] !== -5} />
					<DataMenu
						showClose z={this.state.z[1]}
						type={this.state.type}
						openHandler={this.selectDetail}
						closeHandler={this.closeHandler}
						disabled={this.state.z[1] !== -5} />
					<DataPanel
						z={this.state.z[2]}
						d={this.state.d}
						id={this.state.id}
						closeHandler={this.closeHandler} />
				</View>
			</ApolloProvider>
		)
	}
}

export default learn_react_vr