window.onload = function () {
    CaiDan();
}

$("hr")
    .css("width", "100%")

// 切换主题
var frequency = 0;
$("#ChangePageColor").click(function () {
    if (frequency == 0) {
        InAnimate();
        frequency = frequency + 1;
        console.log(frequency)
    }
    else {
        OutAnimate()
        // frequency = frequency + 1;
        frequency = 0;
        console.log(frequency)
    }
});

function InAnimate() {
    $("#blue").fadeIn(180);
    $("#white").fadeIn(150);
    $("#pink").fadeIn(120);
    $("#black").fadeIn(90);
    $("#defind").fadeIn(60);
}

function OutAnimate() {
    $("#blue").fadeOut(180);
    $("#white").fadeOut(150);
    $("#pink").fadeOut(120);
    $("#black").fadeOut(90);
    $("#defind").fadeOut(60);
}

function Blue() {
    $(".BgMask").css("background-color", "rgba(135, 206, 250,0.5)");
    $(".copy").css("background-color", "rgba(135, 206, 250,0.658)");
    $(".item").css("background-color", "rgba(135, 206, 250,0.5)");
    $("input").css("background-color", "rgba(135, 206, 250,0.733)");
    $("#ChangePageColor").css("fill", "White");
    $(".subbtn").css("background-color", "rgba(255, 53, 147, 0.712)");
    $(".panel").css("background-color", "rgba(135,206,250, 0.76)");
    $(".font,label").css("color", "#ffffff");
    $(".Method,.CallMe").css("color", "rgba(255,255,255,0.623)");
    $("hr").css("background-color", "rgb(135,206,250)");
    $(".panel").css("borderColor", "rgb(135,206,250)");
    $(".item input").css({
        borderBottomColor: "#ffffff",
        color: "#ffffff"
    });
    $("#qiehuan li:last-child").css("color", "white")
}
function White() {
    $(".BgMask").css("background-color", "rgba(255, 255, 255, 0.5)");
    $(".copy").css("background-color", "rgba(255, 255, 255, 0.658)");
    $(".font,label").css("color", "#000000");
    $(".item").css("background-color", "rgba(255, 255, 255, 0.5)");
    $(".item input").css({
        backgroundColor: "rgba(255, 255, 255, 0.733)",
        borderBottom: "rgba(0, 0, 0, 0.678) solid 2px",
        color: "#000000"
    });
    $("#ChangePageColor").css("fill", "#000000");
    $(".panel").css("background-color", "rgba(202, 202, 202, 0.76)");
    $(".Method,.CallMe").css("color", "#000000");
    $("hr").css("background-color", "#000000");
    $(".panel").css("border-color", "#000000");
    $("#defind").css("background-color", "rgba(0,0,0,0.3)")
}
function Pink() {
    $(".BgMask").css("background-color", "rgba(255, 228, 225,0.5)");
    $(".copy").css("background-color", "rgba(255, 228, 225,0.658)");
    $(".item").css("background-color", "rgba(255, 228, 225,0.5)");
    $("input").css("background-color", "rgba(255, 228, 225,0.733)");
    $("#ChangePageColor").css("fill", "White");
    $(".subbtn").css("background-color", "rgba(255, 53, 147, 0.712)");
    $(".panel").css("background-color", "rgba(255, 228, 225, 0.76)");
    $(".font,label").css("color", "#000000");
    $(".Method,.CallMe").css("color", "rgba(0,0,0,0.623)");
    $("hr").css("background-color", "rgb(255, 228, 225)");
    $(".panel").css("borderColor", "rgb(255, 228, 225)");
    $("#qiehuan li:last-child").css("color", "black")
}
function Black() {
    $(".BgMask").css("background-color", "rgba(0,0,0,0.3)");
    $(".copy").css("background-color", "rgba(0,0,0,0.658)");
    $(".item").css("background-color", "rgba(0,0,0,0.5)");
    $("input").css("background-color", "rgba(0,0,0,0.733)");
    $(".item input").css({
        borderBottomColor: "#ffffff",
        color: "#ffffff"
    });
    $("#ChangePageColor").css("fill", "White");
    $(".subbtn").css("background-color", "rgba(255, 53, 147, 0.712)");
    $(".panel").css("background-color", "rgba(0,0,0, 0.76)");
    $(".font,label").css("color", "#ffffff");
    $(".Method,.CallMe").css("color", "rgba(255,255,255,0.623)");
    $("#qiehuan li:last-child").css("color", "white")
}

$("li").click(function () {
    var num = $(this).attr("value");
    if (num == 1) {
        $("body").css("background-image", "url('./img/notebook.jpg')")
        Blue();
        OutAnimate();
        console.log("蓝色");
    }
    if (num == 2) {
        White();
        $("body").css("background-image", "url('./img/bg.jpg')")
        OutAnimate();
        console.log("白色");
    }
    if (num == 3) {
        Pink();
        $("body").css("background-image", "url('./img/blueWall.jpg')")
        OutAnimate();
        console.log("粉色");
    }
    if (num == 4) {
        Black();
        $("body").css("background-image", "url('./img/program.jpg')")
        OutAnimate();
        console.log("黑色");
    }
});
function defindColor() {
    $("#defind").blur(function () {
        let a = document.getElementById("defind").value;
        $(".BgMask").css("background-color", a);
    });
}

window.onkeydown = function (e) {
    if (e.keyCode == 13) {
        let a = docuument.getElementById("defind").value;
        $(".BgMask").css("background-color", a);
    }
}
// 彩蛋
function CaiDan() {
    let jishu = 0;
    $("#ChangePageColor").click(function () {
        if (frequency == 0) {
            $("#CaiDanText").hide();
        }
        else {
            $("#CaiDanText").show();
        }
        if (jishu < 12) {
            jishu = jishu + 1;
        }
        else {
            document.getElementById("CaiDanText").innerHTML = "<a href='surprise.html' style='text-decoration:none;color:white'>恭喜你发现了彩蛋</a>"
        }
    });
}

// 获取Dev信息

$('#Close').click(function () {
    alert(localMin)
})
$('#subbtn').click(function () {
    if ($('#usrname').val() == 'DevMode') {
        $('#Close').show();
        $('#DevToggle').show();
        $('#Close').click(function () {
            $('#Close,#Info,#DevToggle').hide();
        })
        $('#DevToggle').click(function () {
            $('#Info').toggle();
        })
        // 获取时间
        setInterval(function getTime() {
            // 把变量声明为窗口变量（全局变量）
            // 获取屏幕宽度
            var ScreenInfo = new Object();
            ScreenInfo = $(window)
            ScWidth = ScreenInfo.width();
            ScHeight = ScreenInfo.height();
            ScInnerWidth = ScreenInfo.innerWidth();
            ScInnerHeight = ScreenInfo.innerHeight();
            ScOuterWidth = ScreenInfo.outerWidth();
            ScOuterHeight = ScreenInfo.outerHeight();

            //显示系统平台信息
            var SysInfo = new Object();
            SysInfo = navigator;
            platFromAppName = SysInfo.appName;
            platFromAppVersion = SysInfo.appVersion;
            platUA = SysInfo.userAgent;

            var time = new Date();
            LocalTime = time.getFullYear();
            LocalMonth = time.getMonth();
            LocalDay = time.getDay();
            LocalHour = time.getHours();
            localMin = time.getMinutes();
            localSec = time.getSeconds();
            // 显示信息
            window.ScreenInfo = '屏幕信息:<br/>' + 'Width:' + ScWidth + ',&nbsp;&nbsp;&nbsp;' + 'Height:' + ScHeight + '<br/>' +
                'InnerWidth:' + ScInnerWidth + ',&nbsp;&nbsp;&nbsp;' + 'InnerHeight:' + ScInnerHeight + '<br/>' +
                'OuterWidth:' + ScOuterWidth + ',&nbsp;&nbsp;' + 'OuterHeight:' + ScOuterHeight + '<br/>';
            window.SysInfo = '系统信息:<br/>AppName:' + platFromAppName + '<br/>AppVersion:' + platFromAppVersion + '<br/>plartUA:'
                + platUA;
            $('#Info').html(window.ScreenInfo + '<br/>' + window.TimeInfo + '<br/>' + window.SysInfo);
            window.TimeInfo = '时间:<br/>' + LocalTime + '-' + LocalMonth +
                '-' + LocalDay + '&nbsp;&nbsp;' + LocalHour + ':' + localMin + ':' + localSec + '<br/>';
            $('#devVerInfo').html(window.TimeInfo);
        }, 10);
    }
});

