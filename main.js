// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

let AUTH_KEY = "7Q1cUm8svTijxdO7o2IpXM1BwabawohEV8mHz9uG";
function get() {
	const url = new URL(
		"https://courses.ianapplebaum.com/api/syllabus/1"
	);

	const headers = {
		"Authorization": `Bearer ${AUTH_KEY}`,
		"Content-Type": "application/json",
		"Accept": "application/json",
	};

	fetch(url, { method: "GET", headers, })
		.then(response => response.json())
		.then( res => {
			let events = res.events.map ( ev => ( { id: ev.id, content:ev.event_name, start:ev.event_date }));
	
			var items = new vis.DataSet(events);

			// Configuration for the Timeline
			var options = {
			};

			// Create a Timeline
			var timeline = new vis.Timeline(container, items, options);

			})
	// 		var items = new vis.DataSet([
	// 	{id: 1, content: 'item 1', start: '2014-04-20'},
	// 	{id: 2, content: 'item 2', start: '2014-04-14'},
	// 	{id: 3, content: 'item 3', start: '2014-04-18'},
	// 	{id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
	// 	{id: 5, content: 'item 5', start: '2014-04-25'},
	// 	{id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
	// ]);
	//



	}

get()
