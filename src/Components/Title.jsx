import React from 'react';

class Title extends React.Component{
	render(){
		return (
			<div>
				<h1 className="app_heading">Weather App</h1>
				<p className="sub_heading">Find the current weather based on the location</p>
			</div>
		);
	}
}

export default Title;