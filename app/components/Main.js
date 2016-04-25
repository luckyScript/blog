var React = require('react');

var Main = React.createClass({
	getInitialState: function() {
		return {
			dateString: "Date: "+(new Date().getMonth()+1)+"-"+new Date().getDate(),
			height: 500,
			title: 'Luckyscript',
		}
	},
	handleClick: function() {
		this.state.height == 150?this.setState({height: 500,dateString:"Date: "+(new Date().getMonth()+1)+"-"+new Date().getDate(),title:'Luckyscript'}):this.setState({height: 150,dateString:'',title:''});
	},
	render: function() {
		var headerStyle = {
			height: this.state.height
		};
		return (
			<div> 
				<header style={headerStyle} onClick = {this.handleClick}>
					<div className="top-bar"></div>
					<div className="left-bar side-bar">
						<div></div>
					</div>
					<div className="right-bar side-bar">
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className="bottom-bar">
						<div id="star-five"></div>
					</div>
					<p className="title">{this.state.title}</p>
					<p className="date">{this.state.dateString}</p>
				</header>
				<div className="container">
					
	                    {this.props.children}
					
	            </div>
			</div>
		);
	}
})

module.exports = Main;