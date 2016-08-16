//	スムーススクロールの処理
//	（<a href="#top">の様に記述すると滑らかにスクロールする。）
$(function() {
    $('a[href^=#]').click(function() {
        var speed = 500;　 //スクロール速度の調整
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});



// fade（マウスオーバー時にフェードしながら半透明化）
$(function() {
    $(".fade").fadeTo(0, 1.0);
    $(".fade").hover(function() {
        $(this).fadeTo(300, 0.7);
    }, function() {
        $(this).fadeTo(300, 1.2);
    });
});
$(function() {
    $(".fade").css("background", "#FFF");
});


// 一定量スクロールするとページトップに戻るが表示される（場所等の指定はcommon.cssにて）
$(function() {
    var topBtn = $('.pagetop');
    topBtn.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {　 //スクロール量の指定
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);　 //スクロールのスピードの指定
        return false;
    });
});


// rollover（_offと末尾についた画像をオンマウスで_onとついた画像に切り替える）
function smartRollover() {
    if (document.getElementsByTagName) {
        var images = document.getElementsByTagName("img");

        for (var i = 0; i < images.length; i++) {
            if (images[i].getAttribute("src").match("_off.")) {
                images[i].onmouseover = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
                }
                images[i].onmouseout = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
                }
            }
        }
    }
}

if (window.addEventListener) {
    window.addEventListener("load", smartRollover, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", smartRollover);
}

//スマートフォン時のみ電話発信できる様にする（imgタグ用、imgタグに任意のclassを指定する。）
$(function() {
    var device = navigator.userAgent;
    if ((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('iPod') > 0 || device.indexOf('Android') > 0) {
        $(".tel").wrap('<a href="tel:0000000000"></a>');
    }
});

$(function () {
    var menu = $('.slide-menu'),
        menuBtn = $('.slidemenu-btn'), // メニューボタンを指定
        body = $(document.body),
        top = 0,
        menu_open = false;

    $(window).scroll(function () {
        
    });

    // メニューボタンをクリックした時の動き
    menuBtn.on('click', function () {
        if (!menu_open) {
            top = body.scrollTop();
        }
        // body に open クラスを付与する
        body.toggleClass('open');
        menu_open = true;
        if (body.hasClass('open')) {
            // open クラスが body についていたらメニューをスライドインする
            body.css({
                'height': window.innerHeight,
                'top': -top
            });
            if (!fixed) {
                menu.css('padding-top', $('header').height()-top);
            }
            menu.animate({ 'right': 0 });
        } else {
            // open クラスが body についていなかったらスライドアウトする
            body.removeAttr('style').scrollTop(top);
            menu.animate({'right': -body.width()});
            menu_open = false;
        }
    });
});
