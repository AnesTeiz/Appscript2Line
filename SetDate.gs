function setDate() {
  var time1 = '07.00'
  var send_day = 'Monday'

  var ss = SpreadsheetApp.openById('1BVFwf9inKqUN6eyYtx6HF0rbKaIjmo6dnXzgPtYskkg')
  var sh = ss.getSheetByName('BOT2')
  var today = new Date();
  var sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  var dateFormat = "d/M/yyyy";
  var todayFormatted = Utilities.formatDate(today, Session.getScriptTimeZone(), dateFormat);
  var sevenDaysAgoFormatted = Utilities.formatDate(sevenDaysAgo, Session.getScriptTimeZone(), dateFormat);

  // Logger.log(timenow + "/" + time1)
  // Logger.log(send_day + "/" + dayOfWeek)

  if (send_day == dayOfWeek && timenow == time1) {
    sh.getRange("B2").setValue(sevenDaysAgoFormatted);
    sh.getRange("D2").setValue(todayFormatted);
  }
}
