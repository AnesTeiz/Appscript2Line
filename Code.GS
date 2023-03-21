//Token
var tokenOA = 'xxxxx'; //บอทแว่นเท่
var tokenOA_AMR = 'xxxxx';
var tokenOA_Bot = 'xxxx';
var token_AppSheet_Notify = 'xxxx'; //AppSheet
var token_AppSheet_lady_amr = 'xxxx'; //เลขาอัมรินทร์

var token_amr1 = 'xxxx'//อัมรินทร์ @ระบบอัมรินทร์
var token_news_amr = 'xxxx'//ข่าวอัมรินทร์ @ระบบแจ้งข่าวอัมรินทร์
var token_officeAMR = 'xxxx'//ผู้ช่วยอัมรินทร์ @officeฝ่ายการสื่อสาร

var token_arrayAMR1 = [token_AppSheet_lady_amr, token_amr1, token_officeAMR] //กลุ่มส่งรายวัน
// var token_arrayAMR2 = [token_AppSheet_lady_amr, token_amr1] //กลุ่มส่งรายสัปดาห์

var timenow = Utilities.formatDate(new Date(), "GMT+7", "HH.mm")
var today = new Date();
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayOfWeek = daysOfWeek[today.getDay()];

//เรียกใช้ OA 
// function callFunctionPM() {
//   sendPushMessage();
//   sendPushMessage2();
//   sendPushMessage3()
// }


//ส่งทุกเช้าประมาณ 09.00 น. For วน Array token
function sendDaily_Group1() {
  var time1 = '09.00'
  // Logger.log(timenow)
  if (timenow == time1) {
    for (i = 0; i < token_arrayAMR1.length; i++) {
      var token_in = token_arrayAMR1[i];
      ResultAmarin_Daily(token_in);
      // Logger.log(token_in)
    }
  }
}

//ส่งทุกวันจันทร์ พุธ ศุกร์ ประมาณ 10.00 น. (รายสัปดาห์) ใช้ for Loop วน Array Token ไม่ได้ ต้องใช้แบบบ้านๆ
function sendWeek_GroupAdd() {
  var time1 = '10.00'
  var send_day1 = 'Monday'
  var send_day2 = 'Wednesday'
  var send_day3 = 'Friday'

  // Logger.log(send_day1 + "/" + dayOfWeek)
  if (send_day1 == dayOfWeek && timenow == time1) {
    SendWeekMessageJobnonSuccess(token_AppSheet_lady_amr,"1");
    SendWeekMessageJobnonSuccess(token_amr1,"1");
    SendWeekMessageJobnonSuccess(token_officeAMR,"1");
  } else if(send_day2 == dayOfWeek && timenow == time1) {
    SendWeekMessageJobnonSuccess(token_AppSheet_lady_amr,"2");
    SendWeekMessageJobnonSuccess(token_amr1,"2");
    SendWeekMessageJobnonSuccess(token_officeAMR,"2");
  } else if(send_day3 == dayOfWeek && timenow == time1) {
    SendWeekMessageJobnonSuccess(token_AppSheet_lady_amr,"3");
    SendWeekMessageJobnonSuccess(token_amr1,"3");
    SendWeekMessageJobnonSuccess(token_officeAMR,"3");
  }
}

