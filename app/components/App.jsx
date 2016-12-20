
import React, {Component} from 'react'
import ProductsContainer from '../containers/products.jsx'
export default class App extends React.Component {
	render() {
		return(
				<div>
					<h1> Welcome to our shop </h1>
					<ProductsContainer />
				</div>
		      )
	}
}
