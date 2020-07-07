import React, { useEffect, useState } from 'react'
import { List, Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import { categories as categoriesActions } from '../../../../../services/Category/Actions'

const Category = ({ getProductFilter }) => {
	const { getAll, putSelect } = categoriesActions
	const { categories } = useSelector((state) => state.category)
	const dispatch = useDispatch()

	const _handleSetFilter = (name, index) => {
		getProductFilter(name, 'category')
		dispatch(putSelect(index))
	}

	useEffect(() => {
		dispatch(getAll())
	}, [])

	return (
		<List className='category__content'>
			<List.Item className='category--title'>Categorias</List.Item>
			{categories.map((category, index) => (
				<List.Item
					key={index}
					onClick={() => _handleSetFilter(category.name, index)}
					actions={[<LeftOutlined />]}
					className='category--item'>
					<a style={{ color: category.isSelected && 'blue' }}>{category.name}</a>
				</List.Item>
			))}
		</List>
	)
}

export default Category
