import React, { useEffect, useState } from 'react'
import { Row, Col, Tooltip } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import { ShoppingCartOutlined, PlusOutlined } from '@ant-design/icons'

import { product as productAction } from '../../../../../services/Product/Actions'
import Modal from '../../../../../assets/components/Modal/Modal'

const Infinity = () => {
	const { getProductPage, getProductPageNext } = productAction
	const { product_page, page, next, loading, product_page_filter } = useSelector((state) => state.product)
	const dispatch = useDispatch()
	const params = { _page: 1, _limit: 6 }
	const [visibleModal, setVisibleModal] = useState(false)
	const [productSelect, setProductSelect] = useState({})

	const _handleScroll = (event) => {
		if (!loading.getProductNext && product_page.length > 0)
			dispatch(getProductPageNext({ ...params, _page: page + 1 }, product_page))
	}

	const _handleVisibleModal = (item) => {
		setProductSelect(item)
    setVisibleModal(!visibleModal)
  }
  const _handleIsVisible =()=>{
    setVisibleModal(!visibleModal)
  }

	const getData = () => {
		const products = product_page_filter.length > 0 ? product_page_filter : product_page
		return products.map((product, index) => (
			<Col span={8} xs={24} sm={12} lg={8} md={12} key={index}>
				<div className='product__content'>
					<div className='product__image'>
						<img src={product.image} className='totalSize' alt='' />
					</div>
					<div className='product__description'>
						<div>
							<p className='product__description--name'>{product.name}</p>
							<p className='product__description--category'>{product.category}</p>
							<p className='product__description--descount'>{product.discount}</p>
							<p className='product__description--price'>${product.price}</p>
						</div>
						<Tooltip placement='top' title={`Storage: ${product.storage}`} color='#2db7f5'>
							<div
								className='infinity__right'
								onClick={() => _handleVisibleModal(product)}
								style={{
									opacity: product.storage == 0 && 0.7,
									background: product.storage == 0 && '#c4c4c4',
								}}>
								<ShoppingCartOutlined className='infinity__icon--shoping' />
								<PlusOutlined className='infinity__icon--plus' />
							</div>
						</Tooltip>
					</div>
				</div>
			</Col>
		))
	}

	useEffect(() => {
		dispatch(getProductPage(params))
	}, [loading.getProductPage])

	return (
		<>
			{visibleModal && <Modal visibleModal onVisible={_handleIsVisible} item={productSelect} />}
			<InfiniteScroll pageStart={3} loadMore={_handleScroll} hasMore={next}>
				<Row gutter={[48, 48]}>{getData()}</Row>
			</InfiniteScroll>
		</>
	)
}

export default Infinity
