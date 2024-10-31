  /**
     * 动态元素调用
     */
    $(document).on("click", "a", function (event) {
        var outerURL = this.getAttribute("href");
        checkDomain(event, outerURL, {domainUrl:["www.hongshan.gov.cn"], domainName: "武汉市洪山区人民政府",domainType:0});
    });
     /**
     * <a>标签进行调用
     */
    $("a").each(function () {
          $(this).click(function (event) {
              var outerURL = this.getAttribute("href");
              checkDomain(event, outerURL, {domainUrl: ["www.hongshan.gov.cn"], domainName: "武汉市洪山区人民政府",domainType:0});
          });
      });
  /**
     * <select>标签进行调用
     * 给select标签添加一个class；eg:<select class="checkDomain">
     */
    $(".checkDomain").each(function () {
        $(this).change(function (event) {
            var outerURL = this.value;
            if (outerURL) {
                checkDomain(event, outerURL,{domainUrl: ["www.hongshan.gov.cn"], domainName: "武汉市洪山区人民政府",domainType:1});
                this.selectedIndex = 0;
            }
        });
    });
  
    function checkDomain(event, outerURL, settings) {
        if (!arguments[0]) {
            //alert("传入的参数格式有误！");
            return;
        }

        if (!arguments[1]) {
           // alert("传入的参数格式有误！");
            return;
        }

        var defaultSetting = {
            domainUrl: [window.location.host],
            domainName: window.location.host,
            domainType: 0
        }

        var extendSetting = $.extend(defaultSetting, settings);

        if (/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(outerURL)) {

            if (outerURL != "" && outerURL.toLowerCase().indexOf("javascript:") == -1) {
                var domainUrlFlag = false;
                for (var item in extendSetting.domainUrl) {
                    if (outerURL.toLowerCase().indexOf(extendSetting.domainUrl[item]) == -1) {
                        domainUrlFlag = false;
                    } else {
                        domainUrlFlag = true;
                        break;
                    }
                }

                if (!domainUrlFlag) {
                    //阻止默认事件
                    if (event.preventDefault) {
                        event.preventDefault();
                    } else {
                        event.returnValue = false;
                    }
                    document.getElementById("modalDomainName").innerHTML = extendSetting.domainName;
                    document.getElementById("modalOuterURL").value = outerURL;
 $('#myModal').removeClass("hide");

 $('#myModal').modal('show');
                    $('#myModal').modal('show');
                } else {
                    if (1 === parseInt(extendSetting.domainType)) {
                        window.open(outerURL);
                    }
                }
            }
        }
    }

    /**
     * 页面跳转
     */
    function toRedirect() {
        $('#myModal').modal('hide');
        var outerURL = document.getElementById("modalOuterURL").value;
        window.open(outerURL);
    }
