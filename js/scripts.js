function mailCheck(){var a=$("#email");$(".email-box").hide(),$(".thanks").fadeIn(500),$.post("/thankyou/mail.php",{email:a.val()}),setTimeout((function(){document.location.href="/"}),2e3)}