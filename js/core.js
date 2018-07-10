//气泡
function Bubble(scene) {
	this.scene = scene;
	var that = this;
	this.container = popup({
		titleBtns: [],
		title: '对象属性', // 标题，没有则不填，　如果有titleBtns,默认有title

		// footer: '这是脚尾', // 尾部， 没有则不填 
		width: 250,
		height: 180,
		top: 40,
		left: 100,
		contentTable: { // 列表数据格式， name, value为必须
			name: [],
			value: []
		},
		dragable: true, // 是否拖动
		isDialog: true, // 是否有下面的对话框三角形
		className: 'bubbler' // 添加class命名空间
	})
	this.container.hide();
	this.scenePosition = new Cesium.Cartesian3();
	var that = this;
	this.scene.postRender.addEventListener(function() {
		var canvasHeight = that.scene.canvas.height;
		var windowPosition = new Cesium.Cartesian2();
		Cesium.SceneTransforms.wgs84ToWindowCoordinates(that.scene, that.scenePosition, windowPosition);
		var bottom = (canvasHeight - windowPosition.y + 62) + 'px';
		var left = (windowPosition.x - 68) + 'px';
		that.container.setPosition({
			top: 'auto',
			bottom: bottom,
			left: left
		})
	});

}
//气泡内容修改另外通过获取dom对象修改
Bubble.prototype.showAt = function(position) {
	if(!position) {
		this.container.hide();
		return;
	}
	this.container.show();
	this.scenePosition = Cesium.Cartesian3.clone(position);

};