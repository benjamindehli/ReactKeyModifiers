import React, { Component } from 'react';

import style from './ViewTab.scss';

class ViewTab extends Component {
	render() {
		const className = this.props.active ? style.viewTab + ' active' : style.viewTab;

		return (
			<div className={className} onClick={this.props.onClick}>
			<span>[{this.props.view.character}] </span>
			<span>{this.props.view.name}</span>
			</div>
			);
	}
}

export default ViewTab;
