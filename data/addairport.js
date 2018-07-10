//var airport = {
//	PEK: ["116.5871", "40.078537", "北京首都", 2, "CN"],
//	CTU: ["103.9568", "30.581135", "成都双流", 2, "CN"],
//	PVG: ["121.799805", "31.151825", "上海浦东", 2, "CN"],
//	SHA: ["121.33347", "31.19779", "上海虹桥", 3, "CN"],
//	HKG: ["113.93649", "22.315248", "香港赤鱲角", 2, "HK"],
//	ORD: ["-87.90488", "41.976913", "芝加哥奥黑尔", 2, "US"],
//	ATL: ["-84.44403", "33.640068", "亚特兰大", 2, "US"],
//	JFK: ["-73.78817", "40.642334", "肯尼迪", 2, "US"],
//	LHR: ["-0.453566", "51.469604", "伦敦希思罗机场", 2, "GB"],
//	NRT: ["140.38744", "35.773212", "东京成田", 3, "JP"],
//	CDG: ["2.567023", "49.003197", "戴高乐", 2, "FR"],
//	LAX: ["-118.40828", "33.943398", "洛杉矶", 2, "US"],
//	FRA: ["8.573678", "50.04895", "法兰克福", 2, "DE"],
//	AMS: ["4.763385", "52.30907", "荷兰阿姆斯特丹斯史基浦(西霍普)", 2, "NL"],
//	SYD: ["151.1799", "-33.932922", "悉尼金斯福德·史密斯", 2, "AU"],
//	GRU: ["-46.481926", "-23.425669", "圣保罗", 3, "BR"],
//	JNB: ["28.231314", "-26.132664", "约翰内斯堡", 4, "ZA"]
//}
//var airPoints = [
//	["116.5871", "40.078537", "北京首都", 2, "CN"],
//	["103.9568", "30.581135", "成都双流", 2, "CN"],
//	["121.799805", "31.151825", "上海浦东", 2, "CN"],
//	["121.33347", "31.19779", "上海虹桥", 3, "CN"],
//	["113.93649", "22.315248", "香港赤鱲角", 2, "HK"],
//	["-87.90488", "41.976913", "芝加哥奥黑尔", 2, "US"],
//	["-84.44403", "33.640068", "亚特兰大", 2, "US"],
//	["-73.78817", "40.642334", "肯尼迪", 2, "US"],
//	["-0.453566", "51.469604", "伦敦希思罗机场", 2, "GB"],
//	["140.38744", "35.773212", "东京成田", 3, "JP"],
//	["2.567023", "49.003197", "戴高乐", 2, "FR"],
//	["-118.40828", "33.943398", "洛杉矶", 2, "US"],
//	["8.573678", "50.04895", "法兰克福", 2, "DE"],
//	["4.763385", "52.30907", "荷兰阿姆斯特丹斯史基浦(西霍普)", 2, "NL"],
//	["151.1799", "-33.932922", "悉尼金斯福德·史密斯", 2, "AU"],
//	["-46.481926", "-23.425669", "圣保罗", 3, "BR"],
//	["28.231314", "-26.132664", "约翰内斯堡", 4, "ZA"]
//]
var airport = {
	PEK: ["116.5871", "40.078537", "北京首都", 2, "CN"],
	ORD: ["-87.90488", "41.976913", "芝加哥奥黑尔", 2, "US"],
	ATL: ["-84.44403", "33.640068", "亚特兰大", 2, "US"],
	JFK: ["-73.78817", "40.642334", "肯尼迪", 2, "US"],
	LHR: ["-0.453566", "51.469604", "伦敦希思罗机场", 2, "GB"],
	CDG: ["2.567023", "49.003197", "戴高乐", 2, "FR"],
	LAX: ["-118.40828", "33.943398", "洛杉矶", 2, "US"],
	FRA: ["8.573678", "50.04895", "法兰克福", 2, "DE"],
	AMS: ["4.763385", "52.30907", "荷兰阿姆斯特丹斯史基浦(西霍普)", 2, "NL"],
	SYD: ["151.1799", "-33.932922", "悉尼金斯福德·史密斯", 2, "AU"],
	GRU: ["-46.481926", "-23.425669", "圣保罗", 3, "BR"],
	JNB: ["28.231314", "-26.132664", "约翰内斯堡", 4, "ZA"]
}

//var airPoints = [
//	["116.5871", "40.078537", "北京首都", 2, "CN"],
//	["-87.90488", "41.976913", "芝加哥奥黑尔", 2, "US"],
//	["-84.44403", "33.640068", "亚特兰大", 2, "US"],
//	["-73.78817", "40.642334", "肯尼迪", 2, "US"],
//	["-0.453566", "51.469604", "伦敦希思罗机场", 2, "GB"],
//	["2.567023", "49.003197", "戴高乐", 2, "FR"],
//	["-118.40828", "33.943398", "洛杉矶", 2, "US"],
//	["8.573678", "50.04895", "法兰克福", 2, "DE"],
//	["4.763385", "52.30907", "荷兰阿姆斯特丹斯史基浦(西霍普)", 2, "NL"],
//	["151.1799", "-33.932922", "悉尼金斯福德·史密斯", 2, "AU"],
//	["-46.481926", "-23.425669", "圣保罗", 3, "BR"],
//	["28.231314", "-26.132664", "约翰内斯堡", 4, "ZA"]
//]
//1red，2blue，3green
var airPoints = [
	[116.5871, 40.078537, "北京首都", 1, "CN"],
	[-87.90488, 41.976913, "芝加哥奥黑尔", 2, "US"],
	[-84.44403, 33.640068, "亚特兰大", 3, "US"],
	[-73.78817, 40.642334, "肯尼迪", 1, "US"],
	[-0.453566, 51.469604, "伦敦希思罗机场", 2, "GB"],
	[2.567023, 49.003197, "戴高乐", 2, "FR"],
	[-118.40828, 33.943398, "洛杉矶", 2, "US"],
	[8.573678, 50.04895, "法兰克福", 1, "DE"],
	[4.763385, 52.30907, "荷兰阿姆斯特丹斯史基浦(西霍普)", 1, "NL"],
	[151.1799, -33.932922, "悉尼金斯福德·史密斯", 3, "AU"],
	[-46.481926, -23.425669, "圣保罗", 1, "BR"],
	[28.231314, -26.132664, "约翰内斯堡", 3, "ZA"]
]

var POIPoints = [
	[116.5871, 40.078537, "北京首都", 2, "CN"],
	[103.9568, 30.581135, "成都双流", 2, "CN"],
	[121.799805, 31.151825, "上海浦东", 2, "CN"]
]