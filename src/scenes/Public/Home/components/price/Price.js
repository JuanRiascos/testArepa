import React, { useState, useEffect } from 'react'
import { Row, Col, Slider, InputNumber } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { prices as pricesActions } from '../../../../../services/Price/Actions'

const Price = () => {
	const [inputValue, setInputValue] = useState([])

	const { get } = pricesActions
	const { prices, succes } = useSelector((state) => state.prices)
	const [visible, setViseible] = useState(false)
	const dispatch = useDispatch()

	const onChange = (value) => {
		setInputValue(value)
	}
	const onChangeMin = (value) => {
		setInputValue([value, inputValue[1]])
	}
	const onChangeMax = (value) => {
		setInputValue([inputValue[0], value])
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
