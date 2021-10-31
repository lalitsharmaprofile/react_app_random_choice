console.log("hello2");

var app = {
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

var template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options && app.options.length?"here are the options:":"no options"}</p>
	</div>
	);

var templateTwo = (
	<div>
		<h1>Lalit Sharma</h1>
		<p>Age: 26</p>
		<p>Location: New Delhi</p>
	</div>
	);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);