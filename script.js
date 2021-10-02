function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 27.047280532145635,
			lng: 88.25108190257384,
            
		},
		zoom: 18,
		mapId: '95323486ab1465f3',
		
	});

	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			'House',
			27.66669734177897,
			88.4309054875526,
			'pic1.svg',
			38,
			31
		],
		[
			'You Are Here',
			27.66767112713121,
			88.4297887322531,
			'pic2.svg',
			30,
			47.8
		],
		[
			'Ghost House',
			27.66832715150856,
			88.43292762674864,
			'pic2.svg',
			40,
			48
		],
		['Castle', 27.66775608022106, 88.43139547897843, 'pic3.svg', 40, 53],
		['Warp Pipe', 27.66739738878135, 88.43225049775214, 'pic4.svg', 38, 42.5],
		['Star World', 27.667959023359266, 88.42866400953733, 'pic5.svg', 38, 38]
		
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}