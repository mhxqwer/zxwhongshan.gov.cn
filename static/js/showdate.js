function showDate() {
            var today = new Date();
            date = today.getDate();
            month = today.getMonth();
            month = month + 1;
            if (month <= 9)
                month = "0" + month;
            year = today.getYear();
            if (year < 1900) {
                year = year + 1900;
            }
            var nowDate = year + '-' + month + '-' + date;
//Firefox下的兼容处理
            var nowDate = year + '-' + month + '-' + date;
            document.write( year + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日");
            switch (today.getDay()) {
                case 0:
                    document.write("  星期日");
                    break;
                case 1:
                    document.write("  星期一");
                    break;
                case 2:
                    document.write("  星期二");
                    break;
                case 3:
                    document.write("  星期三");
                    break;
                case 4:
                    document.write("  星期四");
                    break;
                case 5:
                    document.write("  星期五");
                    break;
                case 6:
                    document.write("  星期六");
                    break;
            }
            document.write("");
        }