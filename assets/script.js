$(function () {

  // menuハンバーガースライド
  $(".menu").hide();
  $(".hamburger").on("click", function () {
    if ($(".menu").is(":hidden")) {
      $(".menu").slideDown(200);
    } else if ($("#language-menu").is(":visible")) {
      $("#language-menu").slideUp(100, function () {
        $(".menu").slideUp(200);
      });
    } else {
      $(".menu").slideUp(200);
    }
  });

  // languageハンバーガースライド
  $("#language-menu").hide();
  $("#language").on("click", function () {
    if ($("#language-menu").is(":hidden")) {
      $("#language-menu").slideDown(100);
    } else {
      $("#language-menu").slideUp(100);
    }
  });

  $("main").on("click", function () {
    if ($("#language-menu").is(":visible")) {
      $("#language-menu").slideUp(100, function () {
        $(".menu").slideUp(200);
      });
    } else {
      $(".menu").slideUp(200);
    }
  });

  $("#top").on("click", function () {
    $("#top h1").toggleClass("move");
    $("#top h2").toggleClass("move2");
    $(".airplane").toggleClass("moveA");
    $(".airplane2").toggleClass("moveA2");
    $(".japan").toggleClass("moveJ");
    $(".sweden").toggleClass("moveS");
    $(".love").toggleClass("moveL");
  });

  // ---------------------------------------------------------------------
  //  日本語へ言語切り替え
  $("#Japanese").on("click", function () {
    $("#aTop1").text("トップ");
    $("#aMessage1").text("メッセージ");
    $("#aIntroduction1").text("自己紹介");
    $("#aInformation1").text("情報");
    $("#aExplanation1").text("回答フォーム");

    $("#message p").html("拝啓<br><br>\
    時下ますますご清栄のことと<br>\
    お慶び申し上げます。<br><br>\
    さて、このたび私たちは<br>\
    Hiromu YukimasaとBeata Dahlborg<br>\
    の結婚式を挙げることになりましたことを、<br>\
    心よりご報告申し上げます。<br><br>\
    つきましては、皆様におかれましては、<br>\
    ぜひにぎやかな披露宴にご出席いただけますよう、<br>\
    お願い申し上げます。<br>\
    お祝いの言葉をいただけますと、<br>\
    大変嬉しく思います。 <br><br>\
    敬具");

    $("#groom-infomation h3").text("新郎");
    $("#groom-infomation p").html("新郎○○は、<br>\
    笑顔が素敵で優しい心を持った方です。<br>\
    新しい家庭を築くため、<br>\
    愛する人と共に歩む人生の<br>\
    新たなステージに立ちます。");

    $("#bride-infomation h3").text("新婦");
    $("#bride-infomation p").html("新婦○○は、<br>\
    明るく優しく、誰からも愛される方です。<br>\
    新しい家庭を築くため、<br>\
    愛する人と共に歩む人生の<br>\
    新たなステージに立ちます。");

    $(".wedding-informationJ p").html("【日時】<br><br>\
      日付：2024年5月5日(日)<br>\
      挙式：15時30分(受付 15時00分)<br>\
      披露宴：16時30分<br><br>\
      【場所】<br><br>\
      挙式：羽田空港第1ターミナル6F GALAXY HALL<br>\
      披露宴：羽田空港第1ターミナル5F LDH Kitchen");
    $(".wedding-informationS p").html("【日時】<br><br>\
    日付：2024年4月28日(日)<br>\
      挙式：15時30分(受付 15時00分)<br>\
      披露宴：16時30分<br><br>\
      【場所】<br><br>\
      挙式：Nääs Fabriker<br>\
      披露宴：Nääs Fabriker");
    $("#expalain").html("お手数ではございますが、<br>\
      ご都合の程を3月1日迄に<br>\
      ご一報賜りますようお願い申し上げます");
    $("#form-button a").text("招待状に回答する");
    $("#language-menu").hide();
    $(".menu").hide();
    $("html, body").animate({scrollTop: 0}, 0);
    $(".introduction-comment h3, #form-button").css("font-family", "HiraMinProN-W3");
  });


  // 英語へ言語切り替え
  $("#English").on("click", function () {
    $("#aTop1").text("Top");
    $("#aMessage1").text("Message");
    $("#aIntroduction1").text("Introduction");
    $("#aInformation1").text("Information");
    $("#aExplanation1").text("Form");

    $("#message p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ipsa sint culpa reprehenderit. Illo totam facilis deleniti odio dicta esse quaerat, perspiciatis illum minus voluptates, inventore neque, quas fuga");

    $("#groom-infomation h3").text("Groom");
    $("#groom-infomation p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ipsa sint culpa reprehenderit. Illo totam facilis deleniti odio dicta esse quaerat");

    $("#bride-infomation h3").text("Bride");
    $("#bride-infomation p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ipsa sint culpa reprehenderit. Illo totam facilis deleniti odio dicta esse quaerat");

    $("#information p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ipsa sint culpa reprehenderit.");
    $("#expalain").text("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
    $("#form-button a").text("Answer");
    $("#language-menu").hide();
    $(".menu").hide();
    $("html, body").animate({scrollTop: 0}, 0);
    $("h2, h3, button").css("font-family", "cursive");
  });

  // スウェーデン語へ言語切り替え
  $("#Swedish").on("click", function () {
    $("#aTop1").text("Top");
    $("#aMessage1").text("Message");
    $("#aIntroduction1").text("Introduction");
    $("#aInformation1").text("Information");
    $("#aExplanation1").text("Form");

    $("#message p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ipsa sint culpa reprehenderit. Illo totam facilis deleniti odio dicta esse quaerat, perspiciatis illum minus voluptates, inventore neque, quas fuga");

    $("#groom-infomation h3").text("Groom");
    $("#groom-infomation p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ipsa sint culpa reprehenderit. Illo totam facilis deleniti odio dicta esse quaerat");

    $("#bride-infomation h3").text("Bride");
    $("#bride-infomation p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ipsa sint culpa reprehenderit. Illo totam facilis deleniti odio dicta esse quaerat");

    $("#information p").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ipsa sint culpa reprehenderit.");
    $("#expalain").text("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
    $("#form-button a").text("Answer");
    $("#language-menu").hide();
    $(".menu").hide();
    $("html, body").animate({scrollTop: 0}, 0);
    $("h2, h3, button").css("font-family", "cursive");
  });

  // ---------------------------------------------------------------------




});
