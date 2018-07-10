var startPosition = [parseFloat(airport['PEK'][0]), parseFloat(airport['PEK'][1])];

var CreatlinePoints = function(startPosition, endPositions, baseHeight, num) {

	if(endPositions.length > 0) {
		var backLinePoints = [];
		endPositions.forEach(function(Position) {
			var pointObj = {
				points: [],
				length: undefined
			}
			var origin = [parseFloat(startPosition[0]), parseFloat(startPosition[1])];
			var destination = [parseFloat(Position[0]), parseFloat(Position[1])];
			var dis = getGreatCircleDistance(origin[1], origin[0], destination[1], destination[0]);
			pointObj.points.push(origin[0]);
			pointObj.points.push(origin[1]);
			pointObj.points.push(0);
			pointObj.points.push(destination[0]);
			pointObj.points.push(destination[1]);
			pointObj.points.push(0);
			pointObj.length = dis
			//var pntArray = addBezier(origin, destination, baseHeight, dis / 7, num);
			backLinePoints.push(pointObj);

		})
		return backLinePoints;
	} else {
		return undefined;
	}
}

function addBezier(pointA, pointB, baseHeight, height, num) {
	var earth = Cesium.Ellipsoid.WGS84;
	var startPoint = earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(parseFloat(pointA[0]), parseFloat(pointA[1]), baseHeight));
	var endPoint = earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(parseFloat(pointB[0]), parseFloat(pointB[1]), baseHeight));
	// determine the midpoint (point will be inside the earth)
	var addCartesian = startPoint.clone();
	Cesium.Cartesian3.add(startPoint, endPoint, addCartesian);
	var midpointCartesian = addCartesian.clone();
	Cesium.Cartesian3.divideByScalar(addCartesian, 2, midpointCartesian);
	// move the midpoint to the surface of the earth
	earth.scaleToGeodeticSurface(midpointCartesian);
	// add some altitude if you want (1000 km in this case)
	var midpointCartographic = earth.cartesianToCartographic(midpointCartesian);
	midpointCartographic.height = height + baseHeight;
	midpointCartesian = earth.cartographicToCartesian(midpointCartographic);
	var spline = new Cesium.CatmullRomSpline({
		times: [0.0, 0.5, 1.0],
		points: [
			startPoint,
			midpointCartesian,
			endPoint
		],
	});
	var polylinePoints = [];
	for(var ii = 0; ii < num; ++ii) {

		var positionCartographic = Cesium.Cartographic.fromCartesian(spline.evaluate(ii / num));
		var longitude = Cesium.Math.toDegrees(positionCartographic.longitude);
		var latitude = Cesium.Math.toDegrees(positionCartographic.latitude);
		var height = positionCartographic.height;
		polylinePoints.push(longitude, latitude, height);

	}
	polylinePoints.push(parseFloat(pointB[0]), parseFloat(pointB[1]), baseHeight)
	return polylinePoints;
}

/////////
var EARTH_RADIUS = 6378137.0; //单位M
var PI = Math.PI;

function getRad(d) {
	return d * PI / 180.0;
}

function getGreatCircleDistance(lat1, lng1, lat2, lng2) {
	var radLat1 = getRad(lat1);
	var radLat2 = getRad(lat2);

	var a = radLat1 - radLat2;
	var b = getRad(lng1) - getRad(lng2);

	var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
	s = s * EARTH_RADIUS;
	s = Math.round(s * 10000) / 10000.0;
	return s;
}
var DrawLines = function(pointsArr) {
	if(pointsArr.length > 0) {
		var lines = [];
		pointsArr.forEach(function(pointObj) {
			//			var line = viewer.entities.add({
			//				polyline: {
			//					positions: Cesium.Cartesian3.fromDegreesArrayHeights(points),
			//					width: 15,
			//					material: new Cesium.PolylineGlowMaterialProperty({
			//						glowPower: 0.2,
			//						color: Cesium.Color.CYAN 
			//					})
			//				},
			//
			//			});
			//			lines.push(line)
			var points = pointObj.points;
			var maxheight = pointObj.length/10;
			var lineitem = {
				baseline: undefined,
				trailline: []
			}
			var baselineitem = viewer.entities.add({ // 用于打底的线
				polyline: {
					positions: Cesium.Cartesian3.fromDegreesArrayHeights(points),
					width: 2, // 线的宽度，像素为单位
					material: Cesium.Color.fromCssColorString("rgba(118, 233, 241, 0.2)"),
					hMax: maxheight
				}
			});
			lineitem.baseline = baselineitem
			var traillineitem1 = viewer.entities.add({ // 尾迹线
				polyline: {
					positions: Cesium.Cartesian3.fromDegreesArrayHeights(points),
					width: 3, // 线的宽度，像素为单位
					material: new Cesium.PolylineTrailMaterialProperty({ // 尾迹线材质
						color: Cesium.Color.fromCssColorString("rgba(118, 233, 241, 1.0)"),
						trailLength: 0.02,
						period: 20.0
					}),
					hMax: maxheight
				}
			});
			lineitem.trailline.push(traillineitem1)
			var traillineitem2 = viewer.entities.add({ // 尾迹线
				polyline: {
					positions: Cesium.Cartesian3.fromDegreesArrayHeights(points),
					width: 3, // 线的宽度，像素为单位
					material: new Cesium.PolylineTrailMaterialProperty({ // 尾迹线材质
						color: Cesium.Color.fromCssColorString("rgba(118, 233, 241, 1.0)"),
						trailLength: 0.03,
						period: 40.0
					}),
					hMax: maxheight
				}
			});
			lineitem.trailline.push(traillineitem2)
			var traillineitem3 = viewer.entities.add({ // 尾迹线
				polyline: {
					positions: Cesium.Cartesian3.fromDegreesArrayHeights(points),
					width: 3, // 线的宽度，像素为单位
					material: new Cesium.PolylineTrailMaterialProperty({ // 尾迹线材质
						color: Cesium.Color.fromCssColorString("rgba(118, 233, 241, 1.0)"),
						trailLength: 0.03,
						period: 60.0
					}),
					hMax: maxheight
				}
			});
			lineitem.trailline.push(traillineitem3)
			var traillineitem4 = viewer.entities.add({ // 尾迹线
				polyline: {
					positions: Cesium.Cartesian3.fromDegreesArrayHeights(points),
					width: 3, // 线的宽度，像素为单位
					material: new Cesium.PolylineTrailMaterialProperty({ // 尾迹线材质
						color: Cesium.Color.fromCssColorString("rgba(118, 233, 241, 1.0)"),
						trailLength: 0.03,
						period: 80.0
					}),
					hMax: maxheight
				}
			});
			lineitem.trailline.push(traillineitem4)
			//			var traillineitem5=viewer.entities.add({ // 尾迹线
			//				polyline: {
			//					positions: Cesium.Cartesian3.fromDegreesArrayHeights(points),
			//					width: 5, // 线的宽度，像素为单位
			//					material: new Cesium.PolylineTrailMaterialProperty({ // 尾迹线材质
			//						color: Cesium.Color.fromCssColorString("rgba(118, 233, 241, 1.0)"),
			//						trailLength: 0.03,
			//						period: 100.0
			//					})
			//				}
			//			});
			//			lineitem.trailline.push(traillineitem5)
			lines.push(lineitem)
		})
		return lines;
	} else {
		return undefined;
	}
}