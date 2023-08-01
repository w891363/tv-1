var 二级=`js:
try {
    VOD={};
    let html1 = request(input);
    pdfh = jsp.pdfh;
    VOD.vod_id = pdfh(html1, "#current_id&&value");
    VOD.vod_name = pdfh(html1, "h2&&Text");
  	// VOD.vod_pic = pdfh(html1, ".item-root&&img&&src");
  	VOD.vod_pic = pdfh(html1, ".item-root&&img&&data-src");
  	// VOD.vod_actor = pdfh(html1, ".celebrity&&Text");
  	VOD.vod_actor = pdfh(html1, ".meta:eq(4)&&Text");
  	// VOD.vod_area = pdfh(html1, ".country&&Text");
  	VOD.vod_area = pdfh(html1, ".meta:eq(3)&&Text");
  	// VOD.vod_year = pdfh(html1, ".year&&Text");
  	VOD.vod_year = pdfh(html1, ".meta:eq(2)&&Text");
    VOD.vod_remarks = "";
    VOD.vod_director = "";
    VOD.vod_content = "";
    log(VOD);
    input = "https://www.ikanbot.com/api/getResN?videoId=" + input.split("/").pop() + "&mtype=2";
    let html = request(input);
    print(html);
    html = JSON.parse(html);
    let episodes = html.data.list;
    let playMap = {};
    if (typeof play_url === "undefined") {
        var play_url = ""
    }
    let map = {}
    let arr = []
    episodes.forEach(function(ep) {
        let data = JSON.parse(ep["resData"]);
        data.map(val => {
            
            if(!map[val.flag]){
                map[val.flag] = [val.url]
      } else {
        map[val.flag].push(val.url)
      }
    })
    });
    
    for(var key in map){
        if('kuaikan'==key){
            arr.push({
        flag: '快看',
        url: map[key],
            sort:1
      })}

        else if('bfzym3u8'==key){
            arr.push({
        flag: '暴风',
        url: map[key],
            sort:2
      })}

        else if('ffm3u8'==key){
            arr.push({
        flag: '非凡',
        url: map[key],
            sort:3
      })}
      
        else if('lzm3u8'==key){
            arr.push({
        flag: '量子',
        url: map[key],
            sort:4
      })}

        else{
            arr.push({
        flag: key,
        url: map[key],
            sort:5
      })}

  }
    arr.sort((a, b) => a.sort - b.sort);
    
    let playFrom = [];
    let playList = [];

    arr.map(val => {
        playFrom.push(val.flag);
        playList.push(val.url);
    })
    let vod_play_from = playFrom.join("$$$");
    let vod_play_url = playList.join("$$$");
    VOD["vod_play_from"] = vod_play_from;
    VOD["vod_play_url"] = vod_play_url;
    log(VOD);
} catch (e) {
    log("获取二级详情页发生错误:" + e.message)
}
`;

var rule = {
    title:'爱看机器人3',
    host:'https://www.ikanbot.com',
    url:'/hot/index-fyclass-fyfilter-p-fypage.html[/hot/index-fyclass-fyfilter.html]',
    //https://www.ikanbot.com/search?q=%E6%96%97%E7%BD%97%E5%A4%A7&p=2
    searchUrl:'/search?q=**&p=fypage',
    searchable:2,
    quickSearch:0,
    filterable:1,
    filter_url:'{{fl.tag}}',
    // 图片来源:'@Referer=https://api.douban.com/@User-Agent=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36',
	  图片来源:'@Referer=https://www.ikanbot.com/@User-Agent=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36',
    filter:{
        "movie":[{"key":"tag","name":"標籤","value":[{"n":"熱門","v":"热门"},{"n":"最新","v":"最新"},{"n":"經典","v":"经典"},{"n":"豆瓣高分","v":"豆瓣高分"},{"n":"冷門佳片","v":"冷门佳片"},{"n":"華語","v":"华语"},{"n":"歐美","v":"欧美"},{"n":"韓國","v":"韩国"},{"n":"日本","v":"日本"},{"n":"動作","v":"动作"},{"n":"喜劇","v":"喜剧"},{"n":"愛情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"懸疑","v":"悬疑"},{"n":"恐怖","v":"恐怖"},{"n":"治癒","v":"治愈"},{"n":"成長","v":"成长"},{"n":"豆瓣top250","v":"豆瓣top250"}]}]
        ,"tv":[{"key":"tag","name":"標籤","value":[{"n":"熱門","v":"热门"},{"n":"美劇","v":"美剧"},{"n":"英劇","v":"英剧"},{"n":"韓劇","v":"韩剧"},{"n":"日劇","v":"日剧"},{"n":"國產劇","v":"国产剧"},{"n":"港劇","v":"港剧"},{"n":"日本動畫","v":"日本动画"},{"n":"綜藝","v":"综艺"},{"n":"紀錄片","v":"纪录片"}]}]
    },
    filter_def:{
		movie:{tag:'热门'},
		tv:{tag:'国产剧'},
	},
    filter获取方法:`
    let value = [];
    $('ul').eq(2).find('li').each(function() {
      // console.log($(this).text());
      let n = $(this).text().trim();
      value.push({
      'n': n, 'v': n
      });
    });
    // 电影执行:
    let data = {'movie': [{'key': 'tag', 'name': '標籤', 'value': value}]};
    console.log(JSON.stringify(data));
    
    //剧集执行:
    let data = {'tv': [{'key': 'tag', 'name': '標籤', 'value': value}]};
    console.log(JSON.stringify(data));
    `,
    headers:{'User-Agent':'PC_UA',},
    class_name:'電影&電視劇',
    class_url:'movie&tv',
  	play_parse:true,
	  double:true,
    推荐:'.v-list;div.item;*;*;*;*', //这里可以为空，这样点播不会有内容
    // 一级:'.v-list&&div.item;p&&Text;img&&src;;a&&href', //一级的内容是推荐或者点播时候的一级匹配
	  一级:'.v-list&&div.item;p&&Text;img&&data-src;;a&&href', //一级的内容是推荐或者点播时候的一级匹配
    二级:二级,
    // 搜索:'#search-result&&.media;h5&&a&&Text;a&&img&&data-src;.label&&Text;a&&href',//第三个是描述，一般显示更新或者完结
	搜索:'.col-md-8&&.media;h5&&a&&Text;a&&img&&data-src;.label&&Text;a&&href',//第三个是描述，一般显示更新或者完结
}