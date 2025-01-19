$(function () {
  // ハンバーガーメニュー
  $(".toggle-btn").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $(".header-list a").on("click", function () {
    $("header").toggleClass("open");
  });


  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  $(window).scroll(function () {
    $(".line-1").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("fade1");
      }
    });
  });

  $(window).scroll(function () {
    $(".line-2").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + 300) {
        $(this).addClass("fade2");
      }
    });
  });

  $(window).scroll(function () {
    $(".about-1").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("fadein1");
      }
    });
  });

  $(window).scroll(function () {
    $(".about-2").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("fadein11");
      }
    });
  });


  $(window).scroll(function () {
    $(".about-1").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("fadein2");
      }
    });
  });

  $(window).scroll(function () {
    $(".about-2").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("fadein22");
      }
    });
  });


  $(window).scroll(function () {
    $(".drink-img").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()-250) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("fadein-3");
      }
    });
  });


  // $(window).scroll(function () {
  //   $(".user-right").each(function () {

  //     var scroll = $(window).scrollTop();

  //     var target = $(this).offset().top;

  //     var windowHeight = $(window).height();

  //     if (scroll > target - windowHeight + $(this).outerHeight()) {
  //       // outerHeight()はpaddingを含めた高さを取得する
  //       $(this).addClass("fadein");
  //     }
  //   });
  // });

});
