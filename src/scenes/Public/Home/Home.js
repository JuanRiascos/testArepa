import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Col, Row, Skeleton, Select, Button } from 'antd'
import { UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import { product as productAction } from '../../../services/Product/Actions'
import { categories as categoriesActions } from '../../../services/Category/Actions'
import { colors as colorsActions } from '../../../services/Color/Actions'

import Category from './components/category/Category'
import Color from './components/colors/Color'
import Price from './components/price/Price'
import Infinity from './components/infinity/Infinity'

import icon from '../../../assets/images/icon/Icon.png'

const { Header, Sider } = Layout
const { Option } = Select

const FormHome = () => {
	const params = { _page: 1, _limit: 6 }

	const { getProductPage, getProductPageFilter, getProductPageReset } = productAction
	const { putSelectReset } = categoriesActions
	const { putSelectColorReset } = colorsActions
	const { product_page, loading, product_page_filter } = useSelector((state) => state.product)
	const dispatch = useDispatch()

	const [dataFilter, setDataFilter] = useState({})

	const _handleFilter = (filter, type) => {
		const paramsFilter = { ...dataFilter, [type]: filter }
		setDataFilter(paramsFilter)
		dispatch(getProductPageFilter(paramsFilter))
	}

	const _handleFilterPrice = (filter) => {
		const paramsFilter = { ...dataFilter, filter }
		setDataFilter(paramsFilter)
		dispatch(getProductPageFilter(paramsFilter))
	}

	const _handleResetFilter = () => {
		setDataFilter({})
		dispatch(getProductPageReset())
		dispatch(getProductPage(params))
		dispatch(putSelectReset())
		dispatch(putSelectColorReset())
	}

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
							Lifestyles
						</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
			</Row>

			<Layout className='bg-white'>
				<Sider width={200} className='site-layout-background sider__content'>
					<h1 className='sider--title'>Lifestyle</h1>
					<div className='sider__container'>
						<Category getProductFilter={_handleFilter} />
						<Color getProductFilter={_handleFilter} />
						<Price getProductFilter={_handleFilterPrice} />
						<div className='item__content'>
							<Button disabled={Object.keys(dataFilter).length === 0} onClick={_handleResetFilter}>
								Borrar Filtro
							</Button>
						</div>
					</div>
				</Sider>
				<div className='content'>
					<Row className='mb-10'>
						<Col span={2}>
							<p className='product__description--category'>
								{product_page.length > 0 ? product_page.length : product_page_filter.length} artículos
							</p>
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
					<Infinity />
				</div>
			</Layout>
		</>
	)
}

export const Home = FormHome
