       var rule={
            title: '奈飛中文',
            host: 'https://www.naifei.io',
            url: '/vodshow/id/fyfilter',
            //searchUrl: '/vodsearch/**----------fypage---.html',
            //searchUrl:'https://www.naifei.io/index.php/ajax/suggest?mid=1&wd={wd}&limit=10',
            searchUrl:'/vodsearch/-------------.html?wd=**&submit=',
	    headers:{'User-Agent':'Dart/2.14 (dart:io)'},
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 1,//是否启用分类筛选,
            filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
            filter: {"dy":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":""},{"n":"動作","v":"dongzuopian"},{"n":"喜劇","v":"xijupian"},{"n":"愛情","v":"aiqingpian"},{"n":"科幻","v":"kehuanpian"},{"n":"恐怖","v":"kongbupian"},{"n":"劇情","v":"juqingpian"},{"n":"戰爭","v":"zhanzhengpian"},{"n":"懸疑","v":"xuanyipian"},{"n":"動畫","v":"donghuapian"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"喜劇","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"動作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"劇情","v":"剧情"},{"n":"戰爭","v":"战争"},{"n":"警匪","v":"警匪"},{"n":"犯罪","v":"犯罪"},{"n":"動畫","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"武俠","v":"武侠"},{"n":"冒險","v":"冒险"},{"n":"槍戰","v":"枪战"},{"n":"懸疑","v":"悬疑"},{"n":"驚悚","v":"惊悚"},{"n":"經典","v":"经典"},{"n":"青春","v":"青春"},{"n":"文藝","v":"文艺"},{"n":"微電影","v":"微电影"},{"n":"古裝","v":"古装"},{"n":"歷史","v":"历史"},{"n":"運動","v":"运动"},{"n":"農村","v":"农村"},{"n":"兒童","v":"儿童"},{"n":"網路電影","v":"网络电影"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"內地","v":"/area/內地"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"by/time"},{"n":"人氣","v":"by/hits"},{"n":"評分","v":"by/score"}]}],"juji":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":""},{"n":"國產劇","v":"guochanju"},{"n":"香港劇","v":"xianggangju"},{"n":"台灣劇","v":"taiwanju"},{"n":"韓劇","v":"hanguoju"},{"n":"日劇","v":"ribenju"},{"n":"歐美劇","v":"oumeiju"},{"n":"東南亞","v":"dongnanya"},{"n":"其他","v":"qitaju"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"愛情","v":"爱情"},{"n":"古裝","v":"古装"},{"n":"戰爭","v":"战争"},{"n":"青春","v":"青春"},{"n":"偶像","v":"偶像"},{"n":"喜劇","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"動作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"劇情","v":"剧情"},{"n":"歷史","v":"历史"},{"n":"經典","v":"经典"},{"n":"鄉村","v":"乡村"},{"n":"情景","v":"情景"},{"n":"商戰","v":"商战"},{"n":"犯罪","v":"犯罪"},{"n":"網劇","v":"网剧"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"內地","v":"/area/內地"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"by/time"},{"n":"人氣","v":"by/hits"},{"n":"評分","v":"by/score"}]}],"zongyi":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":""},{"n":"大陸綜藝","v":"daluzongyi"},{"n":"港台綜藝","v":"gangtaizongyi"},{"n":"日韓綜藝","v":"rihanzongyi"},{"n":"歐美綜藝","v":"oumeizongyi"},{"n":"其他","v":"qitazongyi"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"選秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"訪談","v":"访谈"},{"n":"播報","v":"播报"},{"n":"旅遊","v":"旅游"},{"n":"音樂","v":"音乐"},{"n":"美食","v":"美食"},{"n":"紀實","v":"纪实"},{"n":"曲藝","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"遊戲互動","v":"游戏互动"},{"n":"財經","v":"财经"},{"n":"求職","v":"求职"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"內地","v":"/area/內地"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"by/time"},{"n":"人氣","v":"by/hits"},{"n":"評分","v":"by/score"}]}],"dongman":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":""},{"n":"國產動漫","v":"guochandongman"},{"n":"日韓動漫","v":"rihandongman"},{"n":"歐美動漫","v":"oumeidongman"},{"n":"其他動漫","v":"qitadongman"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"情感","v":"情感"},{"n":"科幻","v":"科幻"},{"n":"熱血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒險","v":"冒险"},{"n":"蘿莉","v":"萝莉"},{"n":"校園","v":"校园"},{"n":"動作","v":"动作"},{"n":"機戰","v":"机战"},{"n":"運動","v":"运动"},{"n":"戰爭","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社會","v":"社会"},{"n":"原創","v":"原创"},{"n":"親子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"勵志","v":"励志"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"內地","v":"/area/內地"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"by/time"},{"n":"人氣","v":"by/hits"},{"n":"評分","v":"by/score"}]}],"jilupian":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"人物","v":"人物"},{"n":"軍事","v":"军事"},{"n":"歷史","v":"历史"},{"n":"文化","v":"文化"},{"n":"探索","v":"探索"},{"n":"科技","v":"科技"},{"n":"自然","v":"自然"},{"n":"解密","v":"解密"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"內地","v":"/area/內地"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v":"/lang/国语"},{"n":"英語","v":"/lang/英语"},{"n":"粤語","v":"/lang/粤语"},{"n":"閩南語","v":"/lang/闽南语"},{"n":"韓語","v":"/lang/韩语"},{"n":"日語","v":"/lang/日语"},{"n":"法語","v":"/lang/法语"},{"n":"德語","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"by/time"},{"n":"人氣","v":"by/hits"},{"n":"評分","v":"by/score"}]}]},
	filter_def:{
		dy:{cateId:'dy'},
		juji:{cateId:'juji'},
		zongyi:{cateId:'zongyi'},
	        dongman:{cateId:'dongman'},
	        jilupian:{cateId:'jilupian'}
	},
            class_name:'電影&電視劇&綜藝&動漫&紀錄片', 
	    class_url:'dy&juji&zongyi&dongman&jilupian',
	    //class_parse: '.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: '.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
            二级: {
                "title":"h1&&Text;.tag-link&&Text",
                "img":".module-item-pic&&img&&data-src",
                "desc":".video-info-aux&&.tag-link&&Text;.video-info-aux&&a:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(5)&&Text",
                "content":".vod_content&&Text",
                "tabs":".module-tab-item",
                "lists":".module-player-list:eq(#id)&&.scroll-content&&a"
            },
            搜索: '.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
        }
