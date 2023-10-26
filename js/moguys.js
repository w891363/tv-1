/*
永久地址发布 https://www.gvideo.me/label/web.html (失效)
域名1：https://www.moguys.xyz
域名2：https://www.gvideo.me (维护中)
域名3：https://www.movie4k.pro (失效)
*/
var rule = {
                 title: '蘑菇',
                 host:'https://www.moguys.xyz',
                 url:'/vodshow/fyclassfyfilter.html',
                 filterable:1,//是否启用分类筛选,
                 filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
                filter: {
                         "tv":[{"key":"class：","name":"剧情","value":[{"n":"全部","v":""},{"n":"古装","v":"古装"},{"n":"奇幻","v":"奇幻"},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"喜剧","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"战争","v":"战争"},{"n":"武侠","v":"武侠"},{"n":"惊悚","v":"惊悚"},{"n":"悬疑","v":"悬疑"},{"n":"冒险","v":"冒险"},{"n":"犯罪","v":"犯罪"}]},{"key":"area：","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"}]},{"key":"year：","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"}]},{"key":"lang：","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"by：","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
                         "movie":[{"key":"class：","name":"剧情","value":[{"n":"全部","v":""},{"n":"动作","v":"动作"},{"n":"爱情","v":"爱情"},{"n":"喜剧","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"恐怖","v":"恐怖"},{"n":"战争","v":"战争"},{"n":"武侠","v":"武侠"},{"n":"剧情","v":"剧情"},{"n":"动画","v":"动画"},{"n":"惊悚","v":"惊悚"},{"n":"灾难","v":"灾难"},{"n":"悬疑","v":"悬疑"},{"n":"冒险","v":"冒险"},{"n":"犯罪","v":"犯罪"},{"n":"纪录","v":"纪录"},{"n":"古装","v":"古装"},{"n":"奇幻","v":"奇幻"}]},{"key":"area：","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"英国","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"year：","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang：","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"by：","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
                         "cartoon":[{"key":"class：","name":"剧情","value":[{"n":"全部","v":""},{"n":"选秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"访谈","v":"访谈"},{"n":"播报","v":"播报"},{"n":"旅游","v":"旅游"},{"n":"音乐","v":"音乐"},{"n":"美食","v":"美食"},{"n":"纪实","v":"纪实"},{"n":"曲艺","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"游戏互动","v":"游戏互动"},{"n":"财经","v":"财经"},{"n":"求职","v":"求职"}]},{"key":"area：","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"英国","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"year：","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"}]},{"key":"lang：","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"by：","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
                         "variety":[{"key":"class：","name":"剧情","value":[{"n":"全部","v":""},{"n":"情感","v":"情感"},{"n":"科幻","v":"科幻"},{"n":"热血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒险","v":"冒险"},{"n":"萝莉","v":"萝莉"},{"n":"校园","v":"校园"},{"n":"动作","v":"动作"},{"n":"机战","v":"机战"},{"n":"运动","v":"运动"},{"n":"战争","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社会","v":"社会"},{"n":"原创","v":"原创"},{"n":"亲子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"励志","v":"励志"},{"n":"其他","v":"其他"}]},{"key":"area：","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"英国","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"year：","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"}]},{"key":"lang：","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"by：","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]
                        },
    headers:{
             'User-Agent':'PC_UA'
    },
                 class_name:'電影&電視劇&動漫&綜藝',
                 class_url:'movie&tv&cartoon&variety',
                 //class_parse:'.stui-header__menu&&li:lt(5);a&&Text;a&&href;/(\\w+).html',
                 play_parse: true,
                 lazy:`js:
                              var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
                              var url = html.url;
                              if (html.encrypt == '1') {
                                   url = unescape(url)
                               } else if (html.encrypt == '2') {
                                  url = unescape(base64Decode(url))
                              }
                              if (/m3u8|mp4/.test(url)) {
                               input = url
                              } else {
                               input
                             }
                            `,
                 limit: 6,
                 推荐: 'ul.stui-vodlist.clearfix;li;a&&title;.lazyload&&data-original;.pic-text&&Text;a&&href',
                 double: true, // 推荐内容是否双层定位
                 一级: '.stui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
                 二级: {
                          "title": "h1&&Text;.data:eq(0)&&a:eq(0)&&Text",
                          "img": ".stui-content__thumb .lazyload&&data-original",
                          "desc": ".data:eq(4)&&Text;.data:eq(0)&&a:eq(2)&&Text;.data:eq(0)&&a:eq(1)&&Text;.data:eq(1)&&Text;.data:eq(2)&&Text",
                          "content": ".detail&&Text",
                          "tabs": ".stui-pannel__head h3",
                          "lists": ".stui-content__playlist:eq(#id) li"
                 },
                // searchUrl:'/vodsearch/**----------fypage---.html',
               searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
               detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
	       搜索:'json:list;name;pic;;id',
	       搜索1:'ul.stui-vodlist&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
               搜索2:'ul.stui-vodlist__media&&li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
             }
