function sendPushMessage() { //Group Notify By โอ
  // var sheet = SpreadsheetApp.getActiveSheet();
  // var data = sheet.getDataRange().getValues();

  // for (var i = 0; i < data.length; i++) {
  // var row = data[i];
  var ss = SpreadsheetApp.openById('1BVFwf9inKqUN6eyYtx6HF0rbKaIjmo6dnXzgPtYskkg')
  var sh = ss.getSheetByName('BOT')

  var data1 = sh.getRange(2, 1).getDisplayValue();
  var data2 = sh.getRange(5, 1).getDisplayValue();
  var data3 = sh.getRange(2, 3).getDisplayValue();
  var data4 = sh.getRange(2, 4).getDisplayValue();
  var data5 = sh.getRange(2, 5).getDisplayValue();
  var data6 = sh.getRange(2, 6).getDisplayValue();
  var data7 = sh.getRange(2, 7).getDisplayValue();
  var data8 = sh.getRange(2, 8).getDisplayValue();

  var todayTH = LanguageApp.translate(Utilities.formatDate(new Date(), "GMT+7", "d MMMM yyyy"), 'en', 'th')
  var afterdayTH = LanguageApp.translate(Utilities.formatDate(sh.getRange(5, 1).getValue(), "GMT+7", "d MMMM yyyy"), 'en', 'th')

  var message = {
    "to": "C3cd45e43f9d88129029b757c859a1715", //Group Notify By โอ
    "messages": [
      // {
      //   "type":"text",
      //   "text":"test"
      // }

      //////////////////////////////

      {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://builk-wp.s3.ap-southeast-1.amazonaws.com/Blog/AmTAE2NY/Blog%20%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%20%E0%B8%9A%E0%B8%99%E0%B8%9A%E0%B8%B4%E0%B8%A5%E0%B8%84%E0%B9%8C/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99%E0%B8%87%E0%B8%B2%E0%B8%99.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [
              {
                "type": "text",
                "text": "รายงานประจำวันที่",
                "wrap": true,
                "weight": "bold",
                "gravity": "center",
                "align": "center",
                "size": "xl"
              },
              {
                "type": "text",
                "text": todayTH,
                "wrap": true,
                "weight": "bold",
                "gravity": "center",
                "align": "center",
                "size": "lg"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "lg",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "วันที่",
                        "color": "#aaaaaa",
                        "size": "sm"
                      },
                      {
                        "type": "text",
                        "text": afterdayTH,
                        "wrap": true,
                        "size": "sm",
                        "color": "#666666"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "จำนวนเหตุทั้งหมด",
                        "color": "#aaaaaa",
                        "size": "sm"
                      },
                      {
                        "type": "text",
                        "text": data3 + " เหตุ",
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ดำเนินการแล้ว",
                        "color": "#aaaaaa",
                        "size": "sm"
                      },
                      {
                        "type": "text",
                        "text": data4 + " เหตุ",
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "อยู่ระหว่างดำเนินการ",
                        "color": "#aaaaaa",
                        "size": "sm"
                      },
                      {
                        "type": "text",
                        "text": data5 + " เหตุ",
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ไม่พบเหตุ",
                        "color": "#aaaaaa",
                        "size": "sm"
                      },
                      {
                        "type": "text",
                        "text": data6 + " เหตุ",
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ยกเลิกดำเนินการ",
                        "color": "#aaaaaa",
                        "size": "sm"
                      },
                      {
                        "type": "text",
                        "text": data7 + " เหตุ",
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "อื่นๆ",
                        "color": "#aaaaaa",
                        "size": "sm"
                      },
                      {
                        "type": "text",
                        "text": data8 + " เหตุ",
                        "wrap": true,
                        "color": "#666666",
                        "size": "sm"
                      }
                    ]
                  },

                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xxl",
                "contents": [
                  {
                    "type": "text",
                    "text": "ศูนย์สื่อสารกรุงเทพมหานคร สำนักเทศกิจ",
                    "color": "#aaaaaa",
                    "wrap": true,
                    "margin": "xxl",
                    "size": "xs"
                  }
                ]
              }
            ]
          }
        }
      }


      /////////////////////////////
    ]
  };

  var options = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenOA_Bot
    },
    "payload": JSON.stringify(message)
  };

  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", options);
}
