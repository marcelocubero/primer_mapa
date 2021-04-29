// Mapa Leaflet
	var mapa = L.map('mapid').setView([10, -84], 7);

	// Capa base
	var osm = L.tileLayer(
	  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', 
	  {
	    maxZoom: 19,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  }
	).addTo(mapa);		
	    
	// Otra capa base
        var esri = L.tileLayer(
	  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
	  {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	  }
	).addTo(mapa);

	var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
	}).addTo(mapa);
	
	var topo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
	}).addTo(mapa);
	    
	// Marcadores
	liberia = L.marker([10.633333, -85.433333]);
	liberia.bindTooltip("Liberia").openTooltip();
	liberia.bindPopup("Más información: <a href='https://es.wikipedia.org/wiki/Liberia_(Costa_Rica)'>Liberia</a>").openPopup();
	liberia.addTo(mapa);
	    
	limon = L.marker([10.002216, -83.084037]);
	limon.bindTooltip("Limón").openTooltip();
	limon.bindPopup("Más información: <a href='https://es.wikipedia.org/wiki/Lim%C3%B3n_(Costa_Rica)'>Limón</a>").openPopup();
	limon.addTo(mapa);	   
	    
	puntarenas = L.marker([9.966667, -84.833333]);
	puntarenas.bindTooltip("Puntarenas").openTooltip();
	puntarenas.bindPopup("Más información: <a href='https://es.wikipedia.org/wiki/Puntarenas_(ciudad)'>Puntarenas</a>").openPopup();
	puntarenas.addTo(mapa);	    

	casa = L.marker([9.934350, -84.184410]);
	casa.bindTooltip("Mi casa").openTooltip();
	casa.addTo(mapa);
	
	sanjose = L.marker([9.932880703633609, -84.07957422777136]);
	sanjose.bindTooltip("San José").openTooltip();
	sanjose.bindPopup("Más información: <a href='https://es.wikipedia.org/wiki/San_Jos%C3%A9_(Costa_Rica)'>San José</a>").openPopup();
	sanjose.addTo(mapa);
	        
	// Conjunto de capas base
	var mapasBase = {
	    "ESRI": esri,		
	    "OSM": osm,
		"DARK": dark,
		"TOPOGRAFICO" : topo
	};	    

		
	// Control de capas
        L.control.layers(mapasBase).addTo(mapa);	
		L.control.scale({position: 'topright', imperial: false}).addTo(mapa);