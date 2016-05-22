(function ($) {
    'use strict';

    $(function () {
        //http://www.chicagoveg.org/rss/g/new
        //feed to parse
       var url =  "http://www.chicagoveg.org/rss/g/new";  //"http://feeds.feedburner.com/raymondcamdensblog?format=xml";

       // from: http://stackoverflow.com/a/4673990/178550
       Date.prototype.customFormat = function(formatString){
         var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
         YY = ((YYYY=this.getFullYear())+"").slice(-2);
         MM = (M=this.getMonth()+1)<10?('0'+M):M;
         MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
         DD = (D=this.getDate())<10?('0'+D):D;
         DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
         th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
         formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
         h=(hhh=this.getHours());
         if (h==0) h=24;
         if (h>12) h-=12;
         hh = h<10?('0'+h):h;
         hhhh = h<10?('0'+hhh):hhh;
         AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
         mm=(m=this.getMinutes())<10?('0'+m):m;
         ss=(s=this.getSeconds())<10?('0'+s):s;
         return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
       };

       Date.prototype.getMonthFromNumber = function(month) {
            if (isNaN(month) || month < 0 || month > 11) {
                if (!!window.console && !!window.console.log) {
                    window.console.log('Input is not a number');
                }
                return "";
            }

            switch(month) {
                case 0:
                    return 'January';
                    break;
                case 1:
                    return 'February';
                    break;
                    case 2:
                        return 'March';
                        break;
                        case 3:
                            return 'April';
                            break;
                            case 4:
                                return 'May';
                                break;
                                case 5:
                                    return 'June';
                                    break;
                                    case 6:
                                        return 'July';
                                        break;
                                        case 7:
                                            return 'August';
                                            break;
                                            case 8:
                                                return 'September';
                                                break;
                                                case 9:
                                                    return 'October';
                                                    break;
                                                    case 10:
                                                        return 'November';
                                                        break;
                                                        case 11:
                                                            return 'December';
                                                            break;
                                        default:
                                            'December';
            }
       }

       feednami.load(url,function(result){
         if(result.error) {
             console.log(result.error);
         } else {
             var entries = result.feed.entries;
             for(var i = 0; i < entries.length; i++){
                 var entry = entries[i];
                 console.dir(entry);


                           var feedcontainer=document.getElementById("feeddiv")
                           var feedlimit=16
                           var rssoutput= '<ul class="subtext">'; 
                           var theDate ='';
                           var thefeeds=result.feed.entries
                                     for (var i=0; i<thefeeds.length; i++) {
                                         theDate = new Date(thefeeds[i].date_ms); //.customFormat('#MM# #DD#  #YYYY#    #hh#:#mm#"');



 rssoutput+="<li> " +  theDate.getMonthFromNumber(theDate.getMonth()) + " " + theDate.getDate() + ','  + ' ' + theDate.getFullYear() +  ": <a href='" + thefeeds[i].link + "' target='_new'>" + thefeeds[i].title + "</a></li>"
                                         //rssoutput+="<li> " + thefeeds[i].date.substr(0,16) + ": <a href='" + thefeeds[i].link + "' target='_new'>" + thefeeds[i].title + "</a></li>"
                                 }
                                     rssoutput+="</ul>"
                                     feedcontainer.innerHTML=rssoutput



             }
         }
     });

          });
})(window.jQuery);





//(function () {
//      'use strict';
//      $(function () {
//
//
//
//          google.load("feeds", "1") //Load Google Ajax Feed API (version 1)
//
//          function rssfeedsetup(){
//          var feedpointer=new google.feeds.Feed(feedurl) //Google Feed API method
//          feedpointer.setNumEntries(feedlimit) //Google Feed API method
//          feedpointer.load(displayfeed) //Google Feed API method
//          }
//
//          function displayfeed(result){
//          if (!result.error){
//          var thefeeds=result.feed.entries
//          for (var i=0; i<thefeeds.length; i++)
//          rssoutput+="<li> " + thefeeds[i].publishedDate.substr(0,16) + ": <a href='" + thefeeds[i].link + "' target='_new'>" + thefeeds[i].title + "</a></li>"
//          rssoutput+="</ul>"
//          feedcontainer.innerHTML=rssoutput
//          }
//          else
//          alert("Error fetching feeds!")
//          }
//
//          window.onload=function(){
//          rssfeedsetup()
//          }
//
//      });
//
//})();


//
//(function ($) {
//        $(function () {
//            $.ajax({
//                url: 'http://www.chicagoveg.org/rss/g/new',
//                dataType: 'xml',
//                success: function () {
//                    alert('success');
//                },
//                error: function () {
//                    alert('error');
//                },
//                complete: function () {
//
//                }
//            });
//
//            /*
//            $.get('http://www.chicagoveg.org/rss/g/new', function (data) {
//    $(data).find("entry").each(function () { // or "item" or whatever suits your feed
//        var el = $(this);
//
//        console.log("------------------------");
//        console.log("title      : " + el.find("title").text());
//        console.log("author     : " + el.find("author").text());
//        console.log("description: " + el.find("description").text());
//    });
//});
//*/
//        });
//})(window.jQuery);
//
