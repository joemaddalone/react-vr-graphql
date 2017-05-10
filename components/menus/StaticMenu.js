import React from 'react'
import Menu from './Menu'
import ZPanel from '../containers/ZPanel'

const StaticMenu = (props) => (
	<ZPanel z={props.z}>
		<Menu {...props} />
	</ZPanel>
)
export default StaticMenu