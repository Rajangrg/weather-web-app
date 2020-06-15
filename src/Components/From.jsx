import React from 'react'
import { Input, Button } from 'semantic-ui-react'


class Form extends React.Component {
	render() {
		return (
			<div >
				<form onSubmit={this.props.getWeather}>
					<Input type="text" name="city" placeholder="City..." required className="button_space"/>
					<Input type="text" name="country" placeholder="Country..." required className="button_space"/>
					<Button color='red' >Search </Button>
				</form>
			</div>
		);
	}
}

export default Form;

