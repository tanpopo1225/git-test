const SP_FIXED = false;
const SP_WIDTH = 769;
const SPEED = 500;

const TEL = '0000000000';

const UA = navigator.userAgent.toLowerCase();
// iPhone
const isiPhone = (UA.indexOf('iphone') > -1);
// Android
const isAndroid = (UA.indexOf('android') > -1) && (UA.indexOf('mobile') > -1);

const scroll = position => {
  if ($(window).width() < SP_WIDTH) {
    position -= SP_FIXED ? $('header').height() : 0;
  }
  $('html, body').animate({
    scrollTop: position
  }, SPEED);
}

//	（<a href="#top">の様に記述すると滑らかにスクロールする。）
$(function () {
  $('a[href^="#"]').click(function () {
    let position = $(this.hash).length > 0 ? $(this.hash).offset().top : 0;
    scroll(position);
    return false;
  });
});


// 一定量スクロールするとページトップに戻るが表示される（場所等の指定はcommon.scssにて）
$(function () {
  let top_btn = $('.pagetop');
  top_btn.hide();
  $(window).scroll(function () {
    $(this).scrollTop() > 100 ? top_btn.fadeIn() : top_btn.fadeOut();
  });

  top_btn.click(function () {
    scrollPosition(0);
    return false;
  });
});

// rollover（_offと末尾についた画像をオンマウスで_onとついた画像に切り替える）
$(function () {
  $('img').hover(
    function () {
      $(this).attr('src', $(this).attr('src').replace('_off.', '_on.'));
    },
    function () {
      $(this).attr('src', $(this).attr('src').replace('_on.', '_off.'));
    }
  );
});

//スマートフォン時のみ電話発信できる様にする（imgタグ用、imgタグに任意のclassを指定する。）
$(function () {
  let device = navigator.userAgent;
  if (isiPhone || isAndroid) {
    $(".tel").wrap(`<a href="tel:${TEL}"></a>`);
  }
});

//スライドメニューの動き
$(function () {
  let  menu_btn = $('.slidemenu-btn');
  let body = $(document.body);
  let top = 0;
  let menu_open = false;

  menu_btn.on('click', function () {
    if (!menu_open) {
      top = body.scrollTop();
    }
    body.toggleClass('open');
    menu_btn.toggleClass('active');
    menu_open = true;
    if (body.hasClass('open')) {
      body.css({
        'height': window.innerHeight,
        'top': -top
      });
    } else {
      body.removeAttr('style').scrollTop(top);
      menu_open = false;
    }
  });
});
