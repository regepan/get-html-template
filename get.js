if (-1 < location.search.indexOf("seminar_master_id")) {
  var $link = $(".menu ul a:contains('キャンペーンテンプレート変更')");

  console.log($link.attr("href"));
  window.location.href = $link.attr("href");
}

if (-1 < location.pathname.indexOf("seminartemplate/list")) {

  $downloadLink = $(".hotListElement table.list tr.listRow:first a:contains('ダウンロード')");

  console.log($downloadLink);

  window.location.href = $downloadLink.attr("href");
}
