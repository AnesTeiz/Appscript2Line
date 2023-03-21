//สรุปงานค้างประจำสัปดาห์
function SendWeekMessageJobnonSuccess(token_in, msgNumber) {
  var token = token_in;
  var ss = SpreadsheetApp.openById('1BVFwf9inKqUN6eyYtx6HF0rbKaIjmo6dnXzgPtYskkg')
  var sh = ss.getSheetByName('BOT2')
  var row = sh.getLastRow();
  var date1 = sh.getRange(2, 2).getValue()
  var date2 = sh.getRange(2, 4).getValue()
  var day1 = LanguageApp.translate(Utilities.formatDate(date1, "GMT+7", "d MMM yyyy"), 'en', 'th')
  var day2 = LanguageApp.translate(Utilities.formatDate(date2, "GMT+7", "d MMM yyyy"), 'en', 'th')

  var message1 = sh.getRange(2, 6).getValue()
  var saowapaTT = sh.getRange(2, 10).getValue()
  var aonnuchTT = sh.getRange(2, 15).getValue()
  var petkasemTT = sh.getRange(2, 20).getValue()
  var amrTT = sh.getRange(2, 25).getValue()

  //เสาวภา
  var saowapa = []
  saowapa[0] = '   ☕ ไม่มีงานค้าง  \n'
  for (i = 0; i <= row && sh.getRange(i + 5, 8).getValue() != "" && saowapa.length != 0; i++) {
    saowapa[i] = '   ▪️ ' + sh.getRange(i + 5, 8).getValue() + '\n'
  }
  var saowapaMsg = Array.prototype.join.call(saowapa, "")

  //อ่อนนุช
  var aonnuch = []
  aonnuch[0] = '   ☕ ไม่มีงานค้าง  \n'
  for (j = 0; j <= row && sh.getRange(j + 5, 13).getValue() != ""; j++) {
    aonnuch[j] = '   ▪️ ' + sh.getRange(j + 5, 13).getValue() + '\n'
  }
  var aonnuchMsg = Array.prototype.join.call(aonnuch, "")

  //เพชรเกษม
  var petkasem = []
  petkasem[0] = '   ☕ ไม่มีงานค้าง  \n'
  for (k = 0; k <= row && sh.getRange(k + 5, 18).getValue() != ""; k++) {
    petkasem[k] = '   ▪️ ' + sh.getRange(k + 5, 18).getValue() + '\n'
  }
  var petkasemMsg = Array.prototype.join.call(petkasem, "")

  //หน่วยงานอื่น ให้อัมรินทร์ตาม
  var amr = []
  amr[0] = '   ☕ ไม่มีงานค้าง  \n'
  for (a = 0; a <= row && sh.getRange(a + 5, 23).getValue() != ""; a++) {
    amr[a] = '   ▪️ ' + sh.getRange(a + 5, 23).getValue() + ' (' + sh.getRange(a + 5, 24).getValue() + ')\n'
  }
  var amrMsg = Array.prototype.join.call(amr, "")


  var message = '\n📢 รายงานประจำสัปดาห์ 📝' + '\n\n'
    + '🔰 ครั้งที่ ' + msgNumber + '\n'
    + '❌งานที่ยังไม่ดำเนินการ❌' + '\n'
    + '🔅ตั้งแต่วันที่ ' + day1 + '\n'
    + '🔆ถึงวันที่ ' + day2 + '\n'
    + '⚠️ จำนวนทั้งหมด ' + message1 + ' เหตุ ⚠️' + '\n\n'
    + '⚡ ศูนย์อัมรินทร์(' + amrTT + ')\n'
    + amrMsg + '\n'
    + '🔔 ศูนย์เสาวภา(' + saowapaTT + ')\n'
    + saowapaMsg + '\n'
    + '🔔 ศูนย์อ่อนนุช(' + aonnuchTT + ')\n'
    + aonnuchMsg + '\n'
    + '🔔 ศูนย์เพชรเกษม(' + petkasemTT + ')\n'
    + petkasemMsg + '\n'
    + '📣 ขอให้เจ้าหน้าที่วิทยุประจำศูนย์\n'
    + 'ติดตามผลดำเนินการแล้วแจ้งผล\n'
    + 'ให้ศูนย์อัมรินทร์และผู้ช่วยเวรประจำวันทราบด้วยจ้า😊'

  // Logger.log(message)
  sendLineNotify(message, token)
}

//สรุปเวรประจำวัน
function ResultAmarin_Daily(token_in) {
  var token = token_in;
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

  var message = '\n📢 สรุปเวรประจำวัน 📝' + '\n'
    + '🔅 ประจำวันที่ ' + todayTH + ' 🔅\n\n'
    + '📌 วันที่ ' + afterdayTH + '\n'
    + '🔔 จำนวนทั้งหมด ' + data3 + ' เหตุ 🔔' + '\n\n'
    + '✔️ ดำเนินการแล้ว จำนวน ' + data4 + ' เหตุ\n'
    + '🛠️ อยู่ระหว่างดำเนินการ จำนวน ' + data5 + ' เหตุ\n'
    + '⭕ ไม่พบเหตุ จำนวน ' + data6 + ' เหตุ\n'
    + '❌ ยกเลิก จำนวน ' + data7 + ' เหตุ\n'
    + '☑️ อื่นๆ จำนวน ' + data8 + ' เหตุ\n\n'
    + '💠 ฝ่ายการสื่อสาร สำนักเทศกิจ'


  // Logger.log(message)
  sendLineNotify(message, token)
}
