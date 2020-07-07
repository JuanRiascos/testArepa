import React, { useState, useEffect } from 'react'
import { Row, Col, Slider, InputNumber } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { prices as pricesActions } from '../../../../../services/Price/Actions'

const Price = ({ getProductFilter }) => {
	const [inputValue, setInputValue] = useState([])

	const { get } = pricesActions
	const { prices } = useSelector((state) => state.prices)
	const dispatch = useDispatch()

	const onChange = (value) => {
		setInputValue(value)
	}

	const onChangeMin = (value) => {
		setInputValue([value, inputValue[1]])
	}

	const onChangeMax = (value) => {
		setInputValue([inputValue[0], value])
		getProductFilter({ price_gte: inputValue[0] ? inputValue[0] : 0, price_lte: value })
	}

	useEffect(() => {
		dispatch(get())
	}, [])

	return (
		<div className='item__content'>
			<h2 className='item__content--title'>Precios</h2>
			<Row className='mt'>
				<Col span={24}>
					{prices &&
						prices.map((item, index) => {
							const [min, max] = item.price
							return (
								<Slider
									key={index}
									range
									defaultValue={[min, max]}
									onChange={onChange}
									value={inputValue}
									max={max}
								/>
							)
						})}
				</Col>
			</Row>
			<Row className='mt' gutter={[24, 8]}>
				<Col span={12}>
					<InputNumber value={inputValue[0]} onChange={onChangeMin} placeholder='Mínimo' />
				</Col>
				<Col span={12}>
					<InputNumber value={inputValue[1]} onChange={onChangeMax} placeholder='Maximo' />
				</Col>
			</Row>
		</div>
	)
}

export default Price
