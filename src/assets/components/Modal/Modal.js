import React, { useEffect, useState } from 'react'
import { Modal as ModalForm, InputNumber, Row, Col } from 'antd'

const Modal = ({ visibleModal, item, onVisible }) => {
	return (
		<ModalForm
			style={{ top: 20 }}
			visible={visibleModal}
			cancelText={'Cancelar'}
			okText={'Agregar al carrito'}
			closable={false}
			onCancel={onVisible}
			onOk={onVisible}>
			<Row>
				<Col md={12} className='p'>
					<img className='modal--image' src={item.image} alt='' />
				</Col>
				<Col md={12} className='modal__content'>
					<h3 className='modal--title'>{item.name}</h3>
					<Row>
						<Col md={12}>
							<p className='product__description--price'>
								Storage: <span className='product__description--category'>{item.storage}</span>
							</p>
							<p className='product__description--price'>
								Categoría: <span className='product__description--category'>{item.category}</span>
							</p>
						</Col>
						<Col md={12}>
							<p className='product__description--price text--left'>
								Descuento: <span className='product__description--descount'>{item.discount}</span>
							</p>
							<p className='product__description--price text--left'>
								Precio: <span className='product__description--category'>{item.price}</span>
							</p>
						</Col>
					</Row>
					<Row>
						<InputNumber placeholder='Cantidad' />
					</Row>
				</Col>
			</Row>
		</ModalForm>
	)
}

export default Modal
