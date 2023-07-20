var rule = {
	title: '萌蛋蛋[V2]', // csp_AppYsV2
	host: 'http://app.mengdandan.com',
	homeUrl:'/xgapp.php/v1/index_video',
	// url: '/xgapp.php/v1/video?tid=fyclass&class=&area=&lang=&year=&limit=20&pg=fypage',
	url: '/xgapp.php/v1/video?tid=fyclassfyfilter&limit=20&pg=fypage',
	filter_url:'&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}',
	filter: {
		"2":[{"key":"class","name":"類型","value":[{"n":"全部","v":"2"},{"n":"古裝","v":"古装"},{"n":"愛情","v":"爱情"},{"n":"喜劇","v":"喜剧"},{"n":"動作","v":"动作"},{"n":"劇情","v":"剧情"},{"n":"犯罪","v":"犯罪"},{"n":"懸疑","v":"悬疑"},{"n":"奇幻","v":"奇幻"},{"n":"冒險","v":"冒险"},{"n":"都市","v":"都市"},{"n":"奇幻","v":"奇幻"},{"n":"歷史","v":"历史"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"韓国","v":"韩国"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"日本","v":"日本"},{"n":"美國","v":"美国"},{"n":"泰國","v":"泰国"},{"n":"英國","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"}]}],
		"1":[{"key":"class","name":"類型","value":[{"n":"全部","v":"1"},{"n":"喜劇","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"動作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"劇情","v":"剧情"},{"n":"戰爭","v":"战争"},{"n":"警匪","v":"警匪"},{"n":"犯罪","v":"犯罪"},{"n":"動畫","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"武俠","v":"武侠"},{"n":"冒險","v":"冒险"},{"n":"槍戰","v":"枪战"},{"n":"恐怖","v":"恐怖"},{"n":"懸疑","v":"悬疑"},{"n":"驚悚","v":"惊悚"},{"n":"經典","v":"经典"},{"n":"青春","v":"青春"},{"n":"文藝","v":"文艺"},{"n":"微電影","v":"微电影"},{"n":"古裝","v":"古装"},{"n":"歷史","v":"历史"},{"n":"運動","v":"运动"},{"n":"農村","v":"农村"},{"n":"兒童","v":"儿童"},{"n":"網路電影","v":"网络电影"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"德國","v":"德国"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"義大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"法语","v":"法语"},{"n":"德語","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"}]}],
		"3":[{"key":"class","name":"類型","value":[{"n":"全部","v":"3"},{"n":"選秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"訪談","v":"访谈"},{"n":"播報","v":"播报"},{"n":"旅遊","v":"旅游"},{"n":"音樂","v":"音乐"},{"n":"美食","v":"美食"},{"n":"紀實","v":"纪实"},{"n":"曲藝","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"遊戲互動","v":"游戏互动"},{"n":"財經","v":"财经"},{"n":"求職","v":"求职"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"港台","v":"港台"},{"n":"日韓","v":"日韩"},{"n":"歐美","v":"欧美"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"}]}],
		"4":[{"key":"class","name":"類型","value":[{"n":"全部","v":"4"},{"n":"番劇","v":"番剧"},{"n":"科幻","v":"科幻"},{"n":"熱血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒險","v":"冒险"},{"n":"蘿莉","v":"萝莉"},{"n":"校園","v":"校园"},{"n":"動作","v":"动作"},{"n":"機戰","v":"机战"},{"n":"運動","v":"运动"},{"n":"戰爭","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社會","v":"社会"},{"n":"原創","v":"原创"},{"n":"親子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"勵志","v":"励志"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"國產","v":"国产"},{"n":"日本","v":"日本"},{"n":"歐美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"}]}]
	},
	detailUrl:'/xgapp.php/v1/video_detail?id=fyid',
	searchUrl: '/xgapp.php/v1/search?text=**&pg=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable:1,//是否启用分类筛选,
	headers:{'User-Agent':'Dart/2.14 (dart:io)'},
	timeout:5000,
	class_name:'電視劇&電影&綜藝&動漫', // 分类筛选 /xgapp.php/v1/nav
	class_url:'2&1&3&4',
	play_parse:true,
	pagecount:{"20":1},
	lazy:'',
	limit:6,
	推荐:'json:data[0].vlist;*;*;*;*',
	一级:'json:data;vod_name;vod_pic;vod_remarks;vod_id',
	二级:'js:try{let html=request(input);print(html);html=JSON.parse(html);let node=html.data.vod_info;VOD={vod_id:node["vod_id"],vod_name:node["vod_name"],vod_pic:node["vod_pic"],type_name:node["vod_class"],vod_year:node["vod_year"],vod_area:node["vod_area"],vod_remarks:node["vod_remarks"],vod_actor:node["vod_actor"],vod_director:node["vod_director"],vod_content:node["vod_content"].strip()};let episodes=node.vod_url_with_player;let playMap={};if(typeof play_url==="undefined"){var play_url=""}episodes.forEach(function(ep){let source=ep["code"];if(!playMap.hasOwnProperty(source)){playMap[source]=[]}playMap[source].append(ep["url"])});let playFrom=[];let playList=[];Object.keys(playMap).forEach(function(key){playFrom.append(key);playList.append(playMap[key])});let vod_play_from=playFrom.join("$$$");let vod_play_url=playList.join("$$$");VOD["vod_play_from"]=vod_play_from;VOD["vod_play_url"]=vod_play_url}catch(e){log("获取二级详情页发生错误:"+e.message)}',
	搜索:'*',
}
