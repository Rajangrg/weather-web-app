import React from 'react'
import { List } from 'semantic-ui-react'

class Weather extends React.Component {
	render() {
		return (
			<div>
				<List >
					<List.Item className="list_font">{this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}</List.Item>
					<List.Item className="list_font">	{this.props.temperature && <p>	Temperatute: {this.props.temperature}</p>}</List.Item>
					<List.Item className="list_font">		{this.props.humidity && <p>	Humidity: {this.props.humidity}</p>}</List.Item>
					<List.Item className="list_font">	{this.props.description && <p>	Condition: {this.props.description}</p>}</List.Item>
					<List.Item className="list_font">		{this.props.error && <p>	Error: {this.props.error}</p>}</List.Item>
				</List>
			</div>
		);
	}
}

export default Weather;

