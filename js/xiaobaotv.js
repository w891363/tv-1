var rule={
	title:'小宝影院[飞]',
	host:'https://xiaobaotv.net',
	url:'/index.php/vod/show/id/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}/page/fypage{{fl.year}}',
	filter: {
		"7":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"7"},{"n":"喜劇片","v":"24"},{"n":"冒險片","v":"25"},{"n":"劇情片","v":"26"},{"n":"動作片","v":"27"},{"n":"網路電影","v":"39"},{"n":"同性片","v":"29"},{"n":"奇幻片","v":"30"},{"n":"恐怖片","v":"31"},{"n":"懸疑片","v":"32"},{"n":"驚悚片","v":"50"},{"n":"歌舞片","v":"33"},{"n":"災難片","v":"34"},{"n":"愛情片","v":"35"},{"n":"犯罪片","v":"36"},{"n":"科幻片","v":"37"},{"n":"經典片","v":"38"},{"n":"動畫電影","v":"28"},{"n":"戰爭片","v":"40"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"歐美","v":"/area/欧美"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粵語","v":"/lang/粤语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"西班牙","v":"/lang/西班牙"},{"n":"意大利","v":"/lang/意大利"},{"n":"泰語","v":"/lang/泰国语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"6":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"6"},{"n":"國產劇","v":"41"},{"n":"港劇","v":"42"},{"n":"台劇","v":"43"},{"n":"日劇","v":"44"},{"n":"韓劇","v":"45"},{"n":"欧美劇","v":"46"},{"n":"泰劇","v":"47"},{"n":"新馬劇","v":"48"},{"n":"其他劇","v":"49"}]},{"key":"class","name":"分類","value":[{"n":"全部","v":""},{"n":"偶像","v":"/class/电视剧-偶像"},{"n":"爱情","v":"/class/电视剧-爱情"},{"n":"言情","v":"/class/电视剧-言情"},{"n":"古裝","v":"/class/电视剧-古装"},{"n":"歷史","v":"/class/电视剧-历史"},{"n":"玄幻","v":"/class/电视剧-玄幻"},{"n":"諜戰","v":"/class/电视剧-谍战"},{"n":"歷險","v":"/class/电视剧-历险"},{"n":"都市","v":"/class/电视剧-都市"},{"n":"科幻","v":"/class/电视剧-科幻"},{"n":"軍旅","v":"/class/电视剧-军旅"},{"n":"喜劇","v":"/class/电视剧-喜剧"},{"n":"武俠","v":"/class/电视剧-武侠"},{"n":"江湖","v":"/class/电视剧-江湖"},{"n":"罪案","v":"/class/电视剧-罪案"},{"n":"青春","v":"/class/电视剧-青春"},{"n":"家庭","v":"/class/电视剧-家庭"},{"n":"戰爭","v":"/class/电视剧-战争"},{"n":"懸疑","v":"/class/电视剧-悬疑"},{"n":"穿越","v":"/class/电视剧-穿越"},{"n":"宫廷","v":"/class/电视剧-宫廷"},{"n":"神話","v":"/class/电视剧-神话"},{"n":"商戰","v":"/class/电视剧-商战"},{"n":"警匪","v":"/class/电视剧-警匪"},{"n":"动作","v":"/class/电视剧-动作"},{"n":"驚悚","v":"/class/电视剧-惊悚"},{"n":"劇情","v":"/class/电视剧-剧情"},{"n":"同性","v":"/class/电视剧-同性"},{"n":"奇幻","v":"/class/电视剧-奇幻"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"粵語","v":"/lang/粤语"},{"n":"英語","v":"/lang/英语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"西班牙","v":"/lang/西班牙"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"意大利","v":"/lang/意大利"},{"n":"泰語","v":"/lang/泰国语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"3":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"3"},{"n":"國產綜藝","v":"57"},{"n":"港台綜藝","v":"58"},{"n":"日本綜藝","v":"59"},{"n":"韓國綜藝","v":"60"},{"n":"歐美綜藝","v":"61"},{"n":"新馬泰綜藝","v":"62"},{"n":"其他綜藝","v":"63"}]},{"key":"class","name":"分類","value":[{"n":"全部","v":""},{"n":"真人秀","v":"综艺-真人秀"},{"n":"選秀","v":"综艺-选秀"},{"n":"網綜","v":"综艺-网综"},{"n":"脱口秀","v":"综艺-脱口秀"},{"n":"搞笑","v":"综艺-搞笑"},{"n":"競技","v":"综艺-竞技"},{"n":"情感","v":"综艺-情感"},{"n":"訪談","v":"综艺-访谈"},{"n":"演唱會","v":"综艺-演唱会"},{"n":"晚會","v":"综艺-晚会"},{"n":"其它","v":"综艺-其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"粵語","v":"/lang/粤语"},{"n":"英語","v":"/lang/英语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"西班牙","v":"/lang/西班牙"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"意大利","v":"/lang/意大利"},{"n":"泰語","v":"/lang/泰国语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"5":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"5"},{"n":"國產動漫","v":"51"},{"n":"日本動漫","v":"52"},{"n":"港台動漫","v":"53"},{"n":"歐美動漫","v":"54"},{"n":"韓國動漫","v":"55"},{"n":"新馬泰動漫","v":"56"}]},{"key":"class","name":"分類","value":[{"n":"全部","v":""},{"n":"熱血","v":"动漫-热血"},{"n":"格鬥","v":"动漫-格斗"},{"n":"機戰","v":"动漫-机战"},{"n":"少女","v":"动漫-少女"},{"n":"竞技","v":"动漫-竞技"},{"n":"科幻","v":"动漫-科幻"},{"n":"魔幻","v":"动漫-魔幻"},{"n":"爆笑","v":"动漫-爆笑"},{"n":"推理","v":"动漫-推理"},{"n":"冒險","v":"动漫-冒险"},{"n":"戀愛","v":"动漫-恋爱"},{"n":"校園","v":"动漫-校园"},{"n":"治愈","v":"动漫-治愈"},{"n":"泡麵","v":"动漫-泡面"},{"n":"穿越","v":"动漫-穿越"},{"n":"靈異","v":"动漫-灵异"},{"n":"耽美","v":"动漫-耽美"},{"n":"動畫電影","v":"动漫-动画电影"},{"n":"其它","v":"动漫-其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"粵語","v":"/lang/粤语"},{"n":"英語","v":"/lang/英语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"西班牙","v":"/lang/西班牙"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"意大利","v":"/lang/意大利"},{"n":"泰語","v":"/lang/泰国语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],
		"21":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"歐美","v":"/area/欧美"},{"n":"泰國","v":"/area/泰国"},{"n":"新馬","v":"/area/新马"},{"n":"其它","v":"/area/其它"}]},{"key":"class","name":"分類","value":[{"n":"全部","v":""},{"n":"文化","v":"纪录片-文化"},{"n":"探索","v":"纪录片-探索"},{"n":"軍事","v":"纪录片-军事"},{"n":"解密","v":"纪录片-解密"},{"n":"科技","v":"纪录片-科技"},{"n":"歷史","v":"纪录片-历史"},{"n":"人物","v":"纪录片-人物"},{"n":"自然","v":"纪录片-自然"},{"n":"其它","v":"纪录片-其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"粵語","v":"/lang/粤语"},{"n":"英語","v":"/lang/英语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"西班牙","v":"/lang/西班牙"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"意大利","v":"/lang/意大利"},{"n":"泰語","v":"/lang/泰国语"},{"n":"其它","v":"/lang/其它"}]},{"key":"by","name":"排序","value":[{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}]
	},
	filter_def:{
		7:{cateId:'7',by:'/by/time'},
		6:{cateId:'6',by:'/by/time'},
		3:{cateId:'3',by:'/by/time'},
		5:{cateId:'5',by:'/by/time'},
		21:{cateId:'21',by:'/by/time'}
	},
	searchUrl:'/index.php/vod/search.html?wd=**',
	class_name:'電影&電視劇&綜藝&動漫&紀錄片',
	class_url:'7&6&3&5&21',
	//class_parse:'.myui-header__menu&&li.hidden-xs:gt(0):lt(7);a&&Text;a&&href;./(\\d+).html',
	play_parse: true,
            lazy: '',
            limit: 6,
            推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            二级: {
                "title": "h1&&Text;.data--span:eq(0)&&Text",
                "img": ".myui-content__thumb .lazyload&&data-original",
                "desc": "#score&&Text;;;.data--span:eq(2)&&Text;.data--span:eq(3)&&Text",
                "content": ".content&&Text",
                "tabs": ".nav-tabs:eq(0) li",
                "lists": ".myui-content__list:eq(#id) li"
            },
            搜索: '#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
}