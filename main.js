// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// TODO: REMOVE THIS KEY
let AUTH_KEY = "7Q1cUm8svTijxdO7o2IpXM1BwabawohEV8mHz9uG";
function get() {
	const url = new URL(
		"https://courses.ianapplebaum.com/api/syllabus/4"
	);

	const headers = {
		"Authorization": `Bearer ${AUTH_KEY}`,
		"Content-Type": "application/json",
		"Accept": "application/json",
	};

	fetch(url, { method: "GET", headers, })
		.then(response => response.json())
		.then( res => {
			let events = res.events.map ( ev => ( { id: ev.id, content:ev.event_name, start:ev.event_date, description: ev.event_description }));
	
			var items = new vis.DataSet(events);

			// Configuration for the Timeline
			var options = {
			};

			// Create a Timeline
			var timeline = new vis.Timeline(container, items, options);

			})

	}


get()
