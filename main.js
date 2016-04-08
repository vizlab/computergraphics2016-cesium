var viewer = new Cesium.Viewer('cesiumContainer');

d3.csv("data.csv", function(error, data) {
  data.forEach(function (item) {
    viewer.entities.add({
      name : 'Citizens Bank Park',
      position : Cesium.Cartesian3.fromDegrees(item.lat, item.lon, item.height),
      point : {
        pixelSize : 5,
      	color : Cesium.Color.RED,
      	outlineColor : Cesium.Color.WHITE,
      	outlineWidth : 2
      }
    });
  });
  viewer.zoomTo(viewer.entities);
});

