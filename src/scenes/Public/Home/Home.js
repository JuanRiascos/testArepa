import React, { useEffect } from 'react'
import { Layout, Menu, Breadcrumb, Col, Row, Skeleton, Select } from 'antd'
import { UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'

import { product as productAction } from '../../../services/Product/Actions'

import Category from './components/category/Category'
import Color from './components/colors/Color'
import Price from './components/price/Price'

import icon from '../../../assets/images/icon/icon.png'

const { Header, Content, Sider } = Layout
const { Option } = Select

const FormHome = () => {
	const { getProductPage, getProductPageNext } = productAction
	const { page, product_page, loading, next } = useSelector((state) => state.product)
	const dispatch = useDispatch()
	const params = { _page: 1, _limit: 6 }

	const _handleScroll = (event) => {
		if (!loading.getProductNext && product_page.length > 0)
			dispatch(getProductPageNext({ ...params, _page: page + 1 }, product_page))
	}

	useEffect(() => {
		dispatch(getProductPage(params))
	}, [])

	return (
		<>
			<Header className='header header__content'>
				<Col span={12} className='d-flex'>
					<span>Accesorios para carros</span>
					<Menu theme='light' mode='horizontal' defaultSelectedKeys={['1']} className='header__menu'>
						<Menu.Item key='1'>Lifestyle</Menu.Item>
						<Menu.Item key='2'>Ofertas</Menu.Item>
						<Menu.Item key='3'>Novedades</Menu.Item>
					</Menu>
				</Col>
				<Col span={4} offset={8} className='header__content--left'>
					<SearchOutlined />
					<ShoppingCartOutlined />
					<UserOutlined />
					<div className='header__content icon'>
						<img src={icon} alt='' className='totalSize' />
					</div>
				</Col>
			</Header>
			<Row className='m-2'>
				<Col span={24}>
					<Breadcrumb className='m-35'>
						<Breadcrumb.Item className='breadcrumb__item'>Home</Breadcrumb.Item>
						<Breadcrumb.Item className='breadcrumb__item breadcrumb__item--principal'>
							Lifestyle
						</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
			</Row>

			<Layout className='bg-white'>
				<Sider width={200} className='site-layout-background sider__content'>
					<h1 className='sider--title'>Lifestyle</h1>
					<div className='sider__container'>
						<Category />
						<Color />
						<Price />
					</div>
				</Sider>
				<div className='content'>
					<Row className='mb-10'>
						<Col span={2}>
							<p className='product__description--category'>{product_page.length} artículos</p>
						</Col>
						<Col span={7} className='filter'>
							<p className='product__description--category'>Ordernar por:</p>
							<Select className='selectMin' placeholder='Nuevo'>
								<Option value='0'>Nuevo</Option>
								<Option value='1'>Usado</Option>
							</Select>
						</Col>
					</Row>
					<Skeleton loading={loading.getProductNext} />
					{product_page && (
						<InfiniteScroll pageStart={3} loadMore={_handleScroll} hasMore={next}>
							<Row gutter={[48, 48]}>
								{product_page.map((product, index) => (
									<Col span={8} xs={24} sm={12} lg={8} md={12} key={index}>
										<div className='product__content'>
											<div className='product__image'>
												<img src={product.image} className='totalSize' alt='' />
											</div>
											<div className='product__description'>
												<div>
													<p className='product__description--name'>{product.name}</p>
													<p className='product__description--category'>{product.category}</p>
												</div>
												<div>
													<p className='product__description--descount'>{product.discount}</p>
													<p className='product__description--price'>{product.price}</p>
												</div>
											</div>
										</div>
									</Col>
								))}
							</Row>
						</InfiniteScroll>
					)}
				</div>
			</Layout>
		</>
	)
}

export const Home = FormHome
