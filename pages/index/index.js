var app = getApp();
var server = require('../../utils/server');
Page({
	data: {
		// img_url: 'http://appuat.huihuishenghuo.com/img/',
		filterId: 1,
		address: '定位中…',
		banners: [
			{
				id: 3,
				img: '../../imgs/index/ban1.png',
				url: '',
				name: '摇一摇'
			},
			{
				id: 1,
        img: '../../imgs/index/ban2.png',
				url: '',
				name: '净水器'
			},
			{
				id: 2,
        img: '../../imgs/index/ban3.png',
				url: '',
				name: '旅拍啦'
			}
		],
		icons: [
			{
				id: 1,
        img: '../../imgs/index/zhishi.png',
				name: '低脂芝士',
			},
			{
				id: 2,
        img: '../../imgs/index/coffee.png',
				name: '黑咖啡',
			},
			{
				id: 3,
        img: '../../imgs/index/huotui.png',
				name: '低脂火腿',
			},
			{
				id: 4,
        img: '../../imgs/index/ji.png',
				name: '鸡胸肉',
			},
			{
				id: 5,
        img: '../../imgs/index/niupai.png',
				name: '牛排',
			},
			{
				id: 6,
        img: '../../imgs/index/moyu.png',
				name: '魔芋',
			},
			{
				id: 7,
        img: '../../imgs/index/milk.png',
				name: '低脂牛奶',
			},
			{
				id: 8,
				img: '../../imgs/index/hot.png',
				name: '全套食材',
			}
		],
		shops: app.globalData.shops
	},
	onLoad: function () {
		// var self = this;
		// wx.getLocation({
		// 	type: 'gcj02',
		// 	success: function (res) {
		// 		var latitude = res.latitude;
		// 		var longitude = res.longitude;
		// 		server.getJSON('/waimai/api/location.php', {
		// 			latitude: latitude,
		// 			longitude: longitude
		// 		}, function (res) {
		// 			console.log(res)
		// 			if (res.data.status != -1) {
		// 				self.setData({
		// 					address: res.data.result.ad_info.city
		// 				});
		// 			} else {
		// 				self.setData({
		// 					address: '定位失败'
		// 				});
		// 			}
		// 		});
		// 	}
		// })
	},
	onShow: function () {
	},
	onScroll: function (e) {
		if (e.detail.scrollTop > 100 && !this.data.scrollDown) {
			this.setData({
				scrollDown: true
			});
		} else if (e.detail.scrollTop < 100 && this.data.scrollDown) {
			this.setData({
				scrollDown: false
			});
		}
	},
	tapSearch: function () {
		wx.navigateTo({ url: '../search/search' });
	},
	toNearby: function (e) {
		var id = e.currentTarget.dataset.id;
		wx.setStorage({
			key: "shop_type",
			data: id
		})
		var url = '../shop/shop';
		wx.switchTab({
			url: url,
		})
	},
	toLocation: function (e) {
		wx.navigateTo({
			url: 'location',
			success: function (res) {
				// success
			},
			fail: function () {
				// fail
			},
			complete: function () {
				// complete
			}
		})
	},
	codeTap: function () {
		wx.scanCode({
			success: (res) => {
				wx.navigateTo({
					url: '../detail/detail',
					success: function (res) {
						wx.showToast({
							title: '扫码成功',
							icon: 'success',
							duration: 1000
						})
					},
					fail: function () {
						// fail
					},
					complete: function () {
						// complete
					}
				})
			},
			fail: (re) => {
				wx.showModal({
					content: '扫码失败,该扫码只支持扫描小程序二维码',
					success: function (res) {
						if (res.confirm) {
							wx.navigateBack({
							  delta: 1, // 回退前 delta(默认为1) 页面
							  success: function(res){
								// success
							  },
							  fail: function() {
								// fail
							  },
							  complete: function() {
								// complete
							  }
							})
						}
					}
				})

			}
		})
	}
});

