console.log("Main App.js");

let app = {
	title: 'Random choice app',
	subtitle: 'Helps making better choices!',
	options: [
		'one item',
		'two item'
		]
}

function getItems(options){
	if (options.length){
		return "here are the options:"
	}
	else{
		return "no options"
	}
}

// <p>{getItems(app.options)}</p>

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options && app.options.length?"here are the options:":"no options"}</p>
		<ol>
			<li>one item</li>
			<li>two item</li>
		</ol>
	</div>
	);

// const templateTwo = (
// 	<div>
// 		<h1>Lalit Sharma</h1>
// 		<p>Age: 26</p>
// 		<p>Location: New Delhi</p>
// 	</div>
// 	);

// Topic: events 
let count = 0;
const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
	</div>
	);

const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);