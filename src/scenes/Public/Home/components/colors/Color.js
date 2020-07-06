import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { colors as colorsActions } from '../../../../../services/Color/Actions'

const Color = () => {
	const { getAll } = colorsActions
	const { colors } = useSelector((state) => state.colors)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAll())
	}, [])
	return (
		<div className='item__content'>
			<h2 className='item__content--title color--title'>Colores</h2>
			<Row className='color__content' gutter={[8, 8]}>
				{colors.map((color, index) => (
					<Col key={index} span={4}>
						<div
							className='color__container'
							style={{
								background: color.codige,
								border: color.codige === '#fff' && 'solid 1px gray',
							}}
						/>
					</Col>
				))}
			</Row>
		</div>
	)
}

export default Color
