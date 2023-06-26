var rule = {
	title: '555影视[V2]', // csp_AppYsV2
	host: 'https://55dy5.vip',
	homeUrl:'/api.php/app/index_video',
	// url: '/api.php/app/video?tid=fyclass&class=&area=&lang=&year=&limit=20&pg=fypage',
	url: '/api.php/app/video?tid=fyclassfyfilter&limit=20&pg=fypage',
	filter_url:'&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}',
	filter: {
		"1":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"仙俠","v":"仙侠"},{"n":"劇情","v":"剧情"},{"n":"科幻","v":"科幻"},{"n":"動作","v":"动作"},{"n":"喜剧","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"冒險","v":"冒险"},{"n":"兒童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"音樂","v":"音乐"},{"n":"奇幻","v":"奇幻"},{"n":"動畫","v":"动画"},{"n":"恐怖","v":"恐怖"},{"n":"驚悚","v":"惊悚"},{"n":"喪屍","v":"丧尸"},{"n":"戰爭","v":"战争"},{"n":"傳記","v":"传记"},{"n":"紀錄","v":"纪录"},{"n":"犯罪","v":"犯罪"},{"n":"懸疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"災難","v":"灾难"},{"n":"古裝","v":"古装"},{"n":"武俠","v":"武侠"},{"n":"家庭","v":"家庭"},{"n":"短片","v":"短片"},{"n":"校園","v":"校园"},{"n":"文藝","v":"文艺"},{"n":"運動","v":"运动"},{"n":"青春","v":"青春"},{"n":"同性","v":"同性"},{"n":"勵志","v":"励志"},{"n":"人性","v":"人性"},{"n":"美食","v":"美食"},{"n":"女性","v":"女性"},{"n":"治癒","v":"治愈"},{"n":"歷史","v":"历史"},{"n":"真人秀","v":"真人秀"},{"n":"脫口秀","v":"脱口秀"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"日本","v":"日本"},{"n":"韓國","v":"韩国"},{"n":"英國","v":"英国"},{"n":"法國","v":"法国"},{"n":"德國","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰國","v":"泰国"},{"n":"丹麥","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄羅斯","v":"俄罗斯"},{"n":"義大利","v":"意大利"},{"n":"比利時","v":"比利时"},{"n":"愛爾蘭","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亞","v":"澳大利亚"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"英語","v":"英语"},{"n":"法語","v":"法语"},{"n":"國語","v":"国语"},{"n":"粤語","v":"粤语"},{"n":"日語","v":"日语"},{"n":"韓語","v":"韩语"},{"n":"泰語","v":"泰语"},{"n":"德語","v":"德语"},{"n":"俄語","v":"俄语"},{"n":"閩南語","v":"闽南语"},{"n":"丹麥語","v":"丹麦语"},{"n":"波蘭語","v":"波兰语"},{"n":"瑞典語","v":"瑞典语"},{"n":"印地語","v":"印地语"},{"n":"挪威語","v":"挪威语"},{"n":"義大利語","v":"意大利语"},{"n":"西班牙語","v":"西班牙语"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間排序","v":"time"},{"n":"人氣排序","v":"hits"},{"n":"評分排序","v":"score"}]}],
		"2":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"劇情","v":"剧情"},{"n":"喪屍","v":"丧尸"},{"n":"仙俠","v":"仙侠"},{"n":"穿越","v":"穿越"},{"n":"驚悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"言情","v":"言情"},{"n":"科幻","v":"科幻"},{"n":"動作","v":"动作"},{"n":"喜剧","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"偶像","v":"偶像"},{"n":"都市","v":"都市"},{"n":"軍旅","v":"军旅"},{"n":"諜戰","v":"谍战"},{"n":"罪案","v":"罪案"},{"n":"宫廷","v":"宫廷"},{"n":"冒險","v":"冒险"},{"n":"兒童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"音樂","v":"音乐"},{"n":"奇幻","v":"奇幻"},{"n":"动画","v":"动画"},{"n":"戰爭","v":"战争"},{"n":"傳記","v":"传记"},{"n":"紀錄","v":"记录"},{"n":"犯罪","v":"犯罪"},{"n":"懸疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"災難","v":"灾难"},{"n":"古裝","v":"古装"},{"n":"武俠","v":"武侠"},{"n":"家庭","v":"家庭"},{"n":"短片","v":"短片"},{"n":"校園","v":"校园"},{"n":"文藝","v":"文艺"},{"n":"運動","v":"运动"},{"n":"青春","v":"青春"},{"n":"同性","v":"同性"},{"n":"勵志","v":"励志"},{"n":"人性","v":"人性"},{"n":"美食","v":"美食"},{"n":"女性","v":"女性"},{"n":"治癒","v":"治愈"},{"n":"歷史","v":"历史"},{"n":"真人秀","v":"真人秀"},{"n":"脫口秀","v":"脱口秀"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"香港","v":"香港"},{"n":"韓國","v":"韩国"},{"n":"美國","v":"美国"},{"n":"日本","v":"日本"},{"n":"法國","v":"法国"},{"n":"英國","v":"英国"},{"n":"德國","v":"德国"},{"n":"臺灣","v":"台湾"},{"n":"泰國","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間排序","v":"time"},{"n":"人氣排序","v":"hits"},{"n":"評分排序","v":"score"}]}],
		"3":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"YouTube","v":"YouTube"},{"n":"脫口秀","v":"脱口秀"},{"n":"真人秀","v":"真人秀"},{"n":"選秀","v":"选秀"},{"n":"八卦","v":"八卦"},{"n":"訪談","v":"访谈"},{"n":"情感","v":"情感"},{"n":"生活","v":"生活"},{"n":"晚會","v":"晚会"},{"n":"搞笑","v":"搞笑"},{"n":"音樂","v":"音乐"},{"n":"時尚","v":"时尚"},{"n":"遊戲","v":"游戏"},{"n":"少兒","v":"少儿"},{"n":"體育","v":"体育"},{"n":"紀實","v":"纪实"},{"n":"科教","v":"科教"},{"n":"曲藝","v":"曲艺"},{"n":"歌舞","v":"歌舞"},{"n":"財經","v":"财经"},{"n":"汽車","v":"汽车"},{"n":"播報","v":"播报"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"韓國","v":"韩国"},{"n":"香港","v":"香港"},{"n":"臺灣","v":"台湾"},{"n":"美國","v":"美国"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間排序","v":"time"},{"n":"人氣排序","v":"hits"},{"n":"評分排序","v":"score"}]}],
		"4":[{"key":"class","name":"類型","value":[{"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"熱血","v":"热血"},{"n":"科幻","v":"科幻"},{"n":"美少女","v":"美少女"},{"n":"魔幻","v":"魔幻"},{"n":"經典","v":"经典"},{"n":"勵志","v":"励志"},{"n":"少兒","v":"少儿"},{"n":"冒險","v":"冒险"},{"n":"搞笑","v":"搞笑"},{"n":"推理","v":"推理"},{"n":"戀愛","v":"恋爱"},{"n":"治癒","v":"治愈"},{"n":"幻想","v":"幻想"},{"n":"校園","v":"校园"},{"n":"動物","v":"动物"},{"n":"機戰","v":"机战"},{"n":"親子","v":"亲子"},{"n":"兒歌","v":"儿歌"},{"n":"運動","v":"运动"},{"n":"懸疑","v":"悬疑"},{"n":"怪物","v":"怪物"},{"n":"戰爭","v":"战争"},{"n":"益智","v":"益智"},{"n":"青春","v":"青春"},{"n":"童话","v":"童话"},{"n":"競技","v":"竞技"},{"n":"動作","v":"动作"},{"n":"社會","v":"社会"},{"n":"友情","v":"友情"},{"n":"真人版","v":"真人版"},{"n":"電影版","v":"电影版"},{"n":"OVA版","v":"OVA版"},{"n":"TV版","v":"TV版"},{"n":"新番動畫","v":"新番动画"},{"n":"完結動畫","v":"完结动画"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"大陆"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"国语"},{"n":"英語","v":"英语"},{"n":"粤語","v":"粤语"},{"n":"閩南語","v":"闽南语"},{"n":"韓語","v":"韩语"},{"n":"日語","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"更早","v":"更早"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間排序","v":"time"},{"n":"人氣排序","v":"hits"},{"n":"評分排序","v":"score"}]}]
	          },
	detailUrl:'/api.php/app/video_detail?id=fyid',
	searchUrl: '/api.php/app/search?text=**&pg=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable:1,//是否启用分类筛选,
	headers:{'User-Agent':'Dart/2.14 (dart:io)'},
	timeout:5000,
	class_name:'電影&連續劇&綜藝&動漫', 
	class_url:'1&2&3&4',
	play_parse:true,
	lazy:'js:input=/ddvod/.test(input)?"http://jhsj.manduhu.com/?url="+input:input',
	limit:6,
	推荐:'json:list[0].vlist;*;*;*;*',
	一级:'json:list;vod_name;vod_pic;vod_remarks;vod_id',
	二级:'js:try{let html=request(input);print(html);html=JSON.parse(html);let node=html.data;VOD={vod_id:node["vod_id"],vod_name:node["vod_name"],vod_pic:node["vod_pic"],type_name:node["vod_class"],vod_year:node["vod_year"],vod_area:node["vod_area"],vod_remarks:node["vod_remarks"],vod_actor:node["vod_actor"],vod_director:node["vod_director"],vod_content:node["vod_content"].strip()};let episodes=node.vod_url_with_player;let playMap={};if(typeof play_url==="undefined"){var play_url=""}episodes.forEach(function(ep){let source=ep["name"];if(!playMap.hasOwnProperty(source)){playMap[source]=[]}playMap[source].append(ep["url"])});let playFrom=[];let playList=[];Object.keys(playMap).forEach(function(key){playFrom.append(key);playList.append(playMap[key])});let vod_play_from=playFrom.join("$$$");let vod_play_url=playList.join("$$$");VOD["vod_play_from"]=vod_play_from;VOD["vod_play_url"]=vod_play_url}catch(e){log("获取二级详情页发生错误:"+e.message)}',
	搜索:'*',
}