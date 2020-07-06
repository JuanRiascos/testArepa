import React, { useEffect } from 'react'
import { List } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import { categorys as categorysActions } from '../../../../../services/Category/Actions'

const Category = () => {
	const { getAll } = categorysActions
	const { categorys } = useSelector((state) => state.category)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAll())
	}, [])

	return (
		<List className='category__content'>
			<List.Item className='category--title'>Categorias</List.Item>
			{categorys.map((category, index) => (
				<List.Item key={index} actions={[<LeftOutlined />]} className='category--item'>
					{category.name}
				</List.Item>
			))}
		</List>
	)
}

export default Category
