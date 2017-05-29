angular.module("wisata_tobasa", ["ngCordova","ionic","ionMdInput","ionic-material","ion-datetime-picker","ionic.rating","utf8-base64","angular-md5","ionicLazyLoad","ngMap","wisata_tobasa.controllers", "wisata_tobasa.services"])
	.run(function($ionicPlatform,$window,$interval,$timeout,$ionicHistory,$ionicPopup,$state,$rootScope){

		$rootScope.appName = "Wisata Tobasa" ;
		$rootScope.appLogo = "data/images/wt/logo-512x512.png" ;
		$rootScope.appVersion = "1.0" ;

		$ionicPlatform.ready(function() {
			//required: cordova plugin add ionic-plugin-keyboard --save
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			//required: cordova plugin add cordova-plugin-statusbar --save
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			localforage.config({
				driver : [localforage.WEBSQL,localforage.INDEXEDDB,localforage.LOCALSTORAGE],
				name : "wisata_tobasa",
				storeName : "wisata_tobasa",
				description : "The offline datastore for Wisata Tobasa app"
			});



		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("trustJs", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsJs(text);
		};
	}])

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})
	.filter("strUnscape", ["$sce", function($sce) {
		var div = document.createElement("div");
		return function(text) {
			div.innerHTML = text;
			return $sce.trustAsHtml(div.textContent);
		};
	}])





.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$httpProvider,$ionicConfigProvider){
	try{
		// Domain Whitelist
		$sceDelegateProvider.resourceUrlWhitelist([
			"self",
			new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
			new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
		]);
	}catch(err){
		console.log("%cerror: %cdomain whitelist","color:blue;font-size:16px;","color:red;font-size:16px;");
	}
	$stateProvider
	.state("wisata_tobasa",{
		url: "/wisata_tobasa",
			abstract: true,
			templateUrl: "templates/wisata_tobasa-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("wisata_tobasa.about_us", {
		url: "/about_us",
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-about_us.html",
						controller: "about_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.cafe", {
		url: "/cafe",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-cafe.html",
						controller: "cafeCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.culture", {
		url: "/culture",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-culture.html",
						controller: "cultureCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.dashboard", {
		url: "/dashboard",
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.destinasi", {
		url: "/destinasi",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-destinasi.html",
						controller: "destinasiCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.event", {
		url: "/event",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-event.html",
						controller: "eventCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.fasilitas", {
		url: "/fasilitas",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-fasilitas.html",
						controller: "fasilitasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.fdcafe_singles", {
		url: "/fdcafe_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-fdcafe_singles.html",
						controller: "fdcafe_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.fdhotel_singles", {
		url: "/fdhotel_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-fdhotel_singles.html",
						controller: "fdhotel_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.fdrmakan_singles", {
		url: "/fdrmakan_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-fdrmakan_singles.html",
						controller: "fdrmakan_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.fdtravel_singles", {
		url: "/fdtravel_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-fdtravel_singles.html",
						controller: "fdtravel_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.geopark", {
		url: "/geopark",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-geopark.html",
						controller: "geoparkCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.hnews_singles", {
		url: "/hnews_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-hnews_singles.html",
						controller: "hnews_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.home", {
		url: "/home",
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-home.html",
						controller: "homeCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.hotel", {
		url: "/hotel",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-hotel.html",
						controller: "hotelCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.hpromo_singles", {
		url: "/hpromo_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-hpromo_singles.html",
						controller: "hpromo_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.inbudaya_singles", {
		url: "/inbudaya_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-inbudaya_singles.html",
						controller: "inbudaya_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.indestinasi_singles", {
		url: "/indestinasi_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-indestinasi_singles.html",
						controller: "indestinasi_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.inevent_singles", {
		url: "/inevent_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-inevent_singles.html",
						controller: "inevent_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.ingeopark_singles", {
		url: "/ingeopark_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-ingeopark_singles.html",
						controller: "ingeopark_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.inkuliner_singles", {
		url: "/inkuliner_singles/:id",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-inkuliner_singles.html",
						controller: "inkuliner_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.kuliner", {
		url: "/kuliner",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-kuliner.html",
						controller: "kulinerCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.news", {
		url: "/news",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-news.html",
						controller: "newsCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.potret_tobasa", {
		url: "/potret_tobasa",
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-potret_tobasa.html",
						controller: "potret_tobasaCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.promo", {
		url: "/promo",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-promo.html",
						controller: "promoCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.rm", {
		url: "/rm",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-rm.html",
						controller: "rmCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.slide_tab_menu", {
		url: "/slide_tab_menu",
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-slide_tab_menu.html",
						controller: "slide_tab_menuCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.travel", {
		url: "/travel",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-travel.html",
						controller: "travelCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("wisata_tobasa.wisata", {
		url: "/wisata",
		cache:false,
		views: {
			"wisata_tobasa-side_menus" : {
						templateUrl:"templates/wisata_tobasa-wisata.html",
						controller: "wisataCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/wisata_tobasa/home");
});
