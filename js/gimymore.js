var rule = {
            title:'劇迷more',
            host:'https://www.gimy.moe',
            url:'/show/id/fyfilter',
            searchUrl:'/search/page/fypage/?wd=**',
            filterable: 1,//是否启用分类筛选,
            filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}/page/fypage{{fl.year}}',
            filter: {
            	 "1":[
               		{"key":"cateId","name":"類型","value":[{"n":"全部","v":"1"},{"n":"動作片","v":"101"},{"n":"喜劇片","v":"102"},{"n":"愛情片","v":"103"},{"n":"科幻片","v":"104"},{"n":"劇情片","v":"105"},{"n":"恐怖片","v":"108"},{"n":"戰爭片","v":"114"},{"n":"動畫電影","v":"115"}]},
            	        {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"中國大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/香港"},{"n":"中國香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"中國臺灣","v":"/area/中国台湾"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"英國","v":"/area/英国"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/马来西亚"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄罗斯"},{"n":"其它","v":"/area/其它"}]},
            	        {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},
               		{"key":"by","name":"排序","value":[{"n":"按更新","v":"/by/time"},{"n":"週人氣","v":"/by/hits_week"},{"n":"月人氣","v":"/by/hits_month"}]}],
            	"2":[
            		{"key":"cateId","name":"類型","value":[{"n":"全部","v":"2"},{"n":"陸劇","v":"201"},{"n":"港劇","v":"202"},{"n":"台劇","v":"203"},{"n":"韓劇","v":"204"},{"n":"日劇","v":"205"},{"n":"歐美劇","v":"206"},{"n":"泰劇劇","v":"207"},{"n":"海外劇","v":"208"}]},
            	        {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"中國大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/香港"},{"n":"中國香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"中國臺灣","v":"/area/中国台湾"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"英國","v":"/area/英国"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/马来西亚"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄罗斯"},{"n":"其它","v":"/area/其它"}]},
            	        {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},
            		{"key":"by","name":"排序","value":[{"n":"按更新","v":"/by/time"},{"n":"週人氣","v":"/by/hits_week"},{"n":"月人氣","v":"/by/hits_month"}]}],
               	"3":[
               		{"key":"cateId","name":"類型","value":[{"n":"全部","v":"3"},{"n":"國產動漫","v":"301"},{"n":"日韓動漫","v":"302"},{"n":"港台動漫","v":"304"},{"n":"歐美動漫","v":"306"},{"n":"海外動漫","v":"308"}]},
            	        {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"中國大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/香港"},{"n":"中國香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"中國臺灣","v":"/area/中国台湾"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"英國","v":"/area/英国"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/马来西亚"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄罗斯"},{"n":"其它","v":"/area/其它"}]},
            	        {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},
               		{"key":"by","name":"排序","value":[{"n":"按更新","v":"/by/time"},{"n":"週人氣","v":"/by/hits_week"},{"n":"月人氣","v":"/by/hits_month"}]}],
               	"4":[
               		{"key":"cateId","name":"類型","value":[{"n":"全部","v":"4"},{"n":"國產綜藝","v":"401"},{"n":"日韓綜藝","v":"402"},{"n":"港台綜藝","v":"404"},{"n":"歐美綜藝","v":"406"}]},
            	        {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"中國大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/香港"},{"n":"中國香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"中國臺灣","v":"/area/中国台湾"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"英國","v":"/area/英国"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/马来西亚"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄罗斯"},{"n":"其它","v":"/area/其它"}]},
            	        {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},
               		{"key":"by","name":"排序","value":[{"n":"按更新","v":"/by/time"},{"n":"週人氣","v":"/by/hits_week"},{"n":"月人氣","v":"/by/hits_month"}]}],
               	"6":[
            	        {"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/大陆"},{"n":"中國大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/香港"},{"n":"中國香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/台湾"},{"n":"中國臺灣","v":"/area/中国台湾"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"英國","v":"/area/英国"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"新加坡","v":"/area/新加坡"},{"n":"馬來西亞","v":"/area/马来西亚"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄羅斯","v":"/area/俄罗斯"},{"n":"其它","v":"/area/其它"}]},
            	        {"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},
               		{"key":"by","name":"排序","value":[{"n":"按更新","v":"/by/time"},{"n":"週人氣","v":"/by/hits_week"},{"n":"月人氣","v":"/by/hits_month"}]}]
               		},
               		
            filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
	        4:{cateId:'4'},
	        6:{cateId:'6'}
	},
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA',
                // "Cookie": "searchneed=ok"
            },
            class_name:'電影&電視劇&綜藝&動漫&紀錄片', 
            class_url:'1&2&3&4&6',
            //class_parse: 'ul.myui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级:'.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
            二级: {
                "title": "h1&&Text;p.data:eq(0)&&Text",
                "img": ".myui-content__thumb .lazyload&&data-original",
                "desc": "p.data--span:eq(3)&&Text;;;p.data--span:eq(1)&&Text;p.data--span:eq(2)&&Text",
                "content": ".content&&Text",
                "tabs": ".myui-panel__head.bottom-line h3",
                "lists": ".myui-content__list:eq(#id) li"
            },
            搜索: '#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
        }