export const common = {
    created() {
       
    },
		
		
    methods: {
       // 获取当前日期
         //return: 2018-01-01 
        getNowDate(){
           let now = new Date();
		   let year = now.getFullYear();
		   let month = now.getMonth() + 1;
		   let date = now.getDate();
		   if(month<10){
			   month = "0"+month;
		   }
		   if(date<10){
			   date = "0"+date;
		   }
            return year + "-" + month + "-" + date;
        },
         //在给定年份上增加一年
        addYear(time,count){
             var date=new Date(time);
             var interval=parseInt(count);
             var year=date.getFullYear()+interval;
             var month=date.getMonth()+1<10?'0'+(date.getMonth()+1):(date.getMonth()+1);
             var day = date.getDate()<10?'0'+date.getDate():date.getDate();
             return year+"-"+month+"-"+day;
        },
         //获取到年月日，数组形式
         //return [年，月，日]
        getYMD(){
             let arr=[];
             let date = new Date();
             arr[0] = date.getFullYear();
             arr[1] = date.getMonth() + 1;
             arr[2] = date.getDate()
             return arr;
        },
         // json对象转字符串
        obj_string(obj){
           let string = JSON.stringify(obj);
           return string;
        },
         // json字符串转对象
        string_obj(string){
           let obj = JSON.parse(string);
           return obj;
        },
        
         /**
          * [verifyTel 手机号码验证]
          * @param  {[number]} tel [手机号码]
          * @return {[boolean]}    
          */
        verifyTel(tel){
           let userTel = /^[1][3,4,5,7,8][0-9]{9}$/;
           let isTelNum=userTel.test(tel);
           let isTel = false;
           if(isTelNum){
             isTel = true;
           }
           return isTel;
        },
       /**
        * [compare 数组内对象排序]
        * @param  {[string]} prop [需要排序的属性]
        * @param  {[number]} num  [正数则为大的在前面，负数就是小的在前面]
        * @return {[arr]}      [排序后的数组]
        * 数据排序后调用排序：arr.sort( compare('primary',1));
        */
       compare(prop,num) {
         return function (obj1, obj2) {
             var val1 = obj1[prop];
             var val2 = obj2[prop];
             if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                 val1 = Number(val1);
                 val2 = Number(val2);
             }
             if (val1 < val2) {
                 return num;
             } else if (val1 > val2) {
                 return -num;
             } else {
                 return 0;
             }            
         } 
       },
	  // day=0 是当天
	   getDay(day){
		   let weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
	   　　let today = new Date();
	   　　let targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
	   　　today.setTime(targetday_milliseconds); 
	   　　let tMonth = today.getMonth();
	   　　let tDate = today.getDate(); 
		   let tDay = today.getDay();	
	   　　tMonth = this.doHandleMonth(tMonth + 1);
	   　　tDate = this.doHandleMonth(tDate);
	   　　return tMonth+"月"+tDate +'日('+weeks[tDay]+')';
	   },
	   // 不足10补0
	   doHandleMonth(month){
	   　　var m = month;
	   　　if(month.toString().length == 1){
	   　　　　m = "0" + month;
	   　　}
	   　　return m;
	   },
	   // 获取日期
	   getWeek(){
		   let arr = [];
		   for(let i =0;i<7;i++){
			   arr.push(this.getDay(i))
		   }
		   return arr;
	   },
	   // 获取预约时间数组
	   getOrderTime(){
		   let hour = [];
		   for(let i =8;i<=23;i++){
			   hour.push(i+'点')
		   }
		   let min = ['00分','30分'];
		   return [this.getWeek(),hour,min];
	   }
    }
};
