'use strict';

console.log("Main App.js");

var app = {
	title: 'Random choice app',
	subtitle: 'Helps making better choices!',
	options: ['one item', 'two item']
};

function getItems(options) {
	if (options.length) {
		return "here are the options:";
	} else {
		return "no options";
	}
}

// <p>{getItems(app.options)}</p>

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options && app.options.length ? "here are the options:" : "no options"
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'one item'
		),
		React.createElement(
			'li',
			null,
			'two item'
		)
	)
);

// const templateTwo = (
// 	<div>
// 		<h1>Lalit Sharma</h1>
// 		<p>Age: 26</p>
// 		<p>Location: New Delhi</p>
// 	</div>
// 	);

// Topic: events 
var count = 0;
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count: ',
		count
	)
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
