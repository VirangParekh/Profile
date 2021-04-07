//according to loftblog tut
$(".main-menu li:first").addClass("active");

var showSection = function showSection(section, isAnimate) {
  var direction = section.replace(/#/, ""),
    reqSection = $(".section").filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top - 0;

  if (isAnimate) {
    $("body, html").animate(
      {
        scrollTop: reqSectionPos,
      },
      800
    );
  } else {
    $("body, html").scrollTop(reqSectionPos);
  }
};

var checkSection = function checkSection() {
  $(".section").each(function () {
    var $this = $(this),
      topEdge = $this.offset().top - 80,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll) {
      var currentId = $this.data("section"),
        reqLink = $("a").filter("[href*=\\#" + currentId + "]");
      reqLink.closest("li").addClass("active").siblings().removeClass("active");
    }
  });
};

$(".main-menu").on("click", "a", function (e) {
  e.preventDefault();
  showSection($(this).attr("href"), true);
});

$(window).scroll(function () {
  checkSection();
});

function readModeButton1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("readMoreBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readModeButton2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("readMoreBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
