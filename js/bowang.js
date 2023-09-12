var rule = {
            title: '播王',
            host: 'https://bowang.su',
            url: '/index.php/show/fyfilter',
	    headers:{'User-Agent':'Dart/2.14 (dart:io)'},
            searchable:2,//是否启用全局搜索,
            quickSearch:0,//是否启用快速搜索,
            filterable:1,//是否启用分类筛选,
            //filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
            filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
            filter:{"1":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"1"},{"n":"動作","v":"6"},{"n":"喜劇","v":"7"},{"n":"愛情","v":"8"},{"n":"科幻","v":"9"},{"n":"恐怖","v":"10"},{"n":"劇情","v":"11"},{"n":"戰爭","v":"12"},{"n":"紀錄片","v":"20"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"驚悚","v":"/class/驚悚"},{"n":"懸疑","v":"/class/懸疑"},{"n":"魔幻","v":"/class/魔幻"},{"n":"罪案","v":"/class/罪案"},{"n":"災難","v":"/class/災難"},{"n":"動畫","v":"/class/動畫"},{"n":"古裝","v":"/class/古裝"},{"n":"青春","v":"/class/青春"},{"n":"歌舞","v":"/class/歌舞"},{"n":"文藝","v":"/class/文藝"},{"n":"生活","v":"/class/生活"},{"n":"歷史","v":"/class/歷史"},{"n":"勵志","v":"/class/勵志"},{"n":"預告片","v":"/class/預告片"},{"n":"搞笑","v":"/class/搞笑"},{"n":"愛情","v":"/class/愛情"},{"n":"喜劇","v":"/class/喜劇"},{"n":"恐怖","v":"/class/恐怖"},{"n":"動作","v":"/class/動作"},{"n":"科幻","v":"/class/科幻"},{"n":"劇情","v":"/class/劇情"},{"n":"戰爭","v":"/class/戰爭"},{"n":"犯罪","v":"/class/犯罪"},{"n":"奇幻","v":"/class/奇幻"},{"n":"武俠","v":"/class/武俠"},{"n":"冒險","v":"/class/冒險"},{"n":"經典","v":"/class/經典"},{"n":"微電影","v":"/class/微電影"},{"n":"運動","v":"/class/運動"},{"n":"兒童","v":"/class/兒童"},{"n":"網絡電影","v":"/class/網絡電影"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v ":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"美國","v":"/area/美國"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":" /area/韓國"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area /其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v ":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],"2":[{"key":"cateId","name":"類型","value":[{"n":"全部","v":"2"},{"n":"陸劇","v":"13"},{"n":"港劇","v":"14"},{"n":"台劇","v":"15"},{"n":"日劇","v":"16"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"言情","v":"/class/言情"},{"n":"都市","v":"/class/都市"},{"n":"家庭","v":"/class/家庭"},{"n":"生活","v":"/class/生活"},{"n":"偶像","v":"/class/偶像"},{"n":"喜劇","v":"/class/喜劇"},{"n":"歷史","v":"/class/歷史"},{"n":"古裝","v":"/class/古裝"},{"n":"武俠","v":"/class/武俠"},{"n":"刑偵","v":"/class/刑偵"},{"n":"戰爭","v":"/class/戰爭"},{"n":"神話","v":"/class/神話"},{"n":"軍旅","v":"/class/軍旅"},{"n":"諜戰","v":"/class/諜戰"},{"n":"商戰","v":"/class/商戰"},{"n":"校園","v":"/class/校園"},{"n":"穿越","v":"/class/穿越"},{"n":"懸疑","v":"/class/懸疑"},{"n":"犯罪","v":"/class/犯罪"},{"n":"科幻","v":"/class/科幻"},{"n":"預告片","v":"/class/預告片"},{"n":"愛情","v":"/class/愛情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"驚悚","v":"/class/驚悚"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v ":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"美國","v":"/area/美國"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":" /area/韓國"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area /其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v ":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],"3":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v ":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"美國","v":"/area/美國"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":" /area/韓國"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area /其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v ":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}],"4":[{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v ":"/area/大陸"},{"n":"香港","v":"/area/香港"},{"n":"臺灣","v":"/area/臺灣"},{"n":"美國","v":"/area/美國"},{"n":"法國","v":"/area/法國"},{"n":"英國","v":"/area/英國"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":" /area/韓國"},{"n":"德國","v":"/area/德國"},{"n":"泰國","v":"/area/泰國"},{"n":"印度","v":"/area/印度"},{"n":"義大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area /其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"/year/2025"},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"語言","value":[{"n":"全部","v":""},{"n":"國語","v ":"/lang/國語"},{"n":"英語","v":"/lang/英語"},{"n":"粵語","v":"/lang/粵語"},{"n":"閩南語","v":"/lang/閩南語"},{"n":"韓語","v":"/lang/韓語"},{"n":"日語","v":"/lang/日語"},{"n":"法語","v":"/lang/法語"},{"n":"德語","v":"/lang/德語"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"時間","v":"/by/time"},{"n":"人氣","v":"/by/hits"},{"n":"評分","v":"/by/score"}]}]},
	    filter_def:{1:{cateId:'1'},2:{cateId:'2'},3:{cateId:'3'},4:{cateId:'4'}},
            class_name:'電影&電視劇&動漫&綜藝',
	    class_url:'1&2&3&4',
	    //class_parse: '.navbar-left&&li;a&&Text;a&&href;/(\\d+).html',
            play_parse: true,
            lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
            limit: 6,
            推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级:'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
            二级:{
                "title":"h1&&Text;.module-info-tag&&Text",
                "img":".lazyload&&data-original",
                "desc":".module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text",
                "content":".module-info-introduction&&Text",
                "tabs":"#y-playList&&.module-tab-item",
                "lists":".module-play-list:eq(#id) a"
            },
             searchUrl: '/search/page/fypage/wd/**.html',
            搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
}