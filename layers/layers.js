var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nearest_1 = new ol.format.GeoJSON();
var features_Nearest_1 = format_Nearest_1.readFeatures(json_Nearest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nearest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nearest_1.addFeatures(features_Nearest_1);
var lyr_Nearest_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nearest_1, 
                style: style_Nearest_1,
                popuplayertitle: 'Nearest',
                interactive: true,
                title: '<img src="styles/legend/Nearest_1.png" /> Nearest'
            });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_Distance_3 = new ol.format.GeoJSON();
var features_Distance_3 = format_Distance_3.readFeatures(json_Distance_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distance_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distance_3.addFeatures(features_Distance_3);
var lyr_Distance_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distance_3, 
                style: style_Distance_3,
                popuplayertitle: 'Distance',
                interactive: true,
                title: '<img src="styles/legend/Distance_3.png" /> Distance'
            });
var format_Shortestpath_4 = new ol.format.GeoJSON();
var features_Shortestpath_4 = format_Shortestpath_4.readFeatures(json_Shortestpath_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shortestpath_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shortestpath_4.addFeatures(features_Shortestpath_4);
var lyr_Shortestpath_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shortestpath_4, 
                style: style_Shortestpath_4,
                popuplayertitle: 'Shortest path',
                interactive: true,
                title: '<img src="styles/legend/Shortestpath_4.png" /> Shortest path'
            });
var format_Customer_Requests_5 = new ol.format.GeoJSON();
var features_Customer_Requests_5 = format_Customer_Requests_5.readFeatures(json_Customer_Requests_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Customer_Requests_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Customer_Requests_5.addFeatures(features_Customer_Requests_5);
var lyr_Customer_Requests_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Customer_Requests_5, 
                style: style_Customer_Requests_5,
                popuplayertitle: 'Customer_Requests',
                interactive: true,
                title: '<img src="styles/legend/Customer_Requests_5.png" /> Customer_Requests'
            });
var format_Riders_6 = new ol.format.GeoJSON();
var features_Riders_6 = format_Riders_6.readFeatures(json_Riders_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riders_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riders_6.addFeatures(features_Riders_6);
var lyr_Riders_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riders_6, 
                style: style_Riders_6,
                popuplayertitle: 'Riders',
                interactive: true,
                title: '<img src="styles/legend/Riders_6.png" /> Riders'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Nearest_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_Distance_3.setVisible(true);lyr_Shortestpath_4.setVisible(true);lyr_Customer_Requests_5.setVisible(true);lyr_Riders_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Nearest_1,lyr_highway_2,lyr_Distance_3,lyr_Shortestpath_4,lyr_Customer_Requests_5,lyr_Riders_6];
lyr_Nearest_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'id': 'id', 'Cust_ID': 'Cust_ID', });
lyr_highway_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'informal': 'informal', 'construction': 'construction', 'smoothness': 'smoothness', 'check_date:surface': 'check_date:surface', 'motor_vehicle': 'motor_vehicle', 'ford': 'ford', 'footway': 'footway', 'cycleway': 'cycleway', 'ramp': 'ramp', 'handrail:right': 'handrail:right', 'handrail:left': 'handrail:left', 'handrail': 'handrail', 'bicycle': 'bicycle', 'is_in': 'is_in', 'service': 'service', 'maxspeed': 'maxspeed', 'bridge': 'bridge', 'layer': 'layer', 'lanes:forward': 'lanes:forward', 'sidewalk': 'sidewalk', 'lane_markings': 'lane_markings', 'alt_name': 'alt_name', 'toll': 'toll', 'vehicle': 'vehicle', 'maxheight:signed': 'maxheight:signed', 'lit': 'lit', 'lanes:backward': 'lanes:backward', 'lanes': 'lanes', 'horse': 'horse', 'foot': 'foot', 'access': 'access', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name:en': 'name:en', 'name:bn': 'name:bn', 'name': 'name', 'int_ref': 'int_ref', });
lyr_Distance_3.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', });
lyr_Shortestpath_4.set('fieldAliases', {'id': 'id', 'Cust_ID': 'Cust_ID', 'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_Customer_Requests_5.set('fieldAliases', {'id': 'id', 'Cust_ID': 'Cust_ID', });
lyr_Riders_6.set('fieldAliases', {'id': 'id', 'Rider_ID': 'Rider_ID', });
lyr_Nearest_1.set('fieldImages', {'fid': '', 'cat': '', 'id': '', 'Cust_ID': '', });
lyr_highway_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'informal': 'TextEdit', 'construction': 'TextEdit', 'smoothness': 'TextEdit', 'check_date:surface': 'TextEdit', 'motor_vehicle': 'TextEdit', 'ford': 'TextEdit', 'footway': 'TextEdit', 'cycleway': 'TextEdit', 'ramp': 'TextEdit', 'handrail:right': 'TextEdit', 'handrail:left': 'TextEdit', 'handrail': 'TextEdit', 'bicycle': 'TextEdit', 'is_in': 'TextEdit', 'service': 'TextEdit', 'maxspeed': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'lanes:forward': 'TextEdit', 'sidewalk': 'TextEdit', 'lane_markings': 'TextEdit', 'alt_name': 'TextEdit', 'toll': 'TextEdit', 'vehicle': 'TextEdit', 'maxheight:signed': 'TextEdit', 'lit': 'TextEdit', 'lanes:backward': 'TextEdit', 'lanes': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'access': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'name:en': 'TextEdit', 'name:bn': 'TextEdit', 'name': 'TextEdit', 'int_ref': 'TextEdit', });
lyr_Distance_3.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', });
lyr_Shortestpath_4.set('fieldImages', {'id': 'TextEdit', 'Cust_ID': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_Customer_Requests_5.set('fieldImages', {'id': 'TextEdit', 'Cust_ID': 'TextEdit', });
lyr_Riders_6.set('fieldImages', {'id': 'TextEdit', 'Rider_ID': 'TextEdit', });
lyr_Nearest_1.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'id': 'no label', 'Cust_ID': 'inline label - visible with data', });
lyr_highway_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'inline label - visible with data', 'wikipedia': 'no label', 'wikidata': 'no label', 'informal': 'no label', 'construction': 'no label', 'smoothness': 'no label', 'check_date:surface': 'no label', 'motor_vehicle': 'no label', 'ford': 'no label', 'footway': 'no label', 'cycleway': 'no label', 'ramp': 'no label', 'handrail:right': 'no label', 'handrail:left': 'no label', 'handrail': 'no label', 'bicycle': 'no label', 'is_in': 'no label', 'service': 'no label', 'maxspeed': 'no label', 'bridge': 'no label', 'layer': 'no label', 'lanes:forward': 'no label', 'sidewalk': 'no label', 'lane_markings': 'no label', 'alt_name': 'no label', 'toll': 'no label', 'vehicle': 'no label', 'maxheight:signed': 'no label', 'lit': 'no label', 'lanes:backward': 'no label', 'lanes': 'no label', 'horse': 'no label', 'foot': 'no label', 'access': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name:en': 'no label', 'name:bn': 'no label', 'name': 'no label', 'int_ref': 'no label', });
lyr_Distance_3.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', });
lyr_Shortestpath_4.set('fieldLabels', {'id': 'no label', 'Cust_ID': 'inline label - visible with data', 'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_Customer_Requests_5.set('fieldLabels', {'id': 'no label', 'Cust_ID': 'inline label - visible with data', });
lyr_Riders_6.set('fieldLabels', {'id': 'no label', 'Rider_ID': 'inline label - visible with data', });
lyr_Riders_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});