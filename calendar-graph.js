function addCalendarGraph($) {
  bindContributionSettingHandler($);
  if ($('.js-calendar-graph').html().trim().length > 0) return;

  var calendarGraphSVG = $('<svg width="676" height="104" class="js-calendar-graph-svg"></svg>');
  var graphG = $('<g transform="translate(16, 20)"></g>')

  var squareX = 13;
  var squareY = 0;
  for (var i=0; i<=676; i+=13) {
    var columnG = $(`<g transform="translate(${i}, 0)"></g>`)

    for (; squareY<=72; squareY+=12) {
      var square = $(`<rect class="day" width="10" height="10" x="${squareX}" y="${squareY}" fill="#ebedf0"></rect>`);
      columnG.append(square);
    }

    squareX--;
    squareY = 0;
    graphG.append(columnG);
  }
  graphG.append($('<text x="13" y="-10" class="month">Nov</text> <text x="61" y="-10" class="month">Dec</text> <text x="109" y="-10" class="month">Jan</text> <text x="169" y="-10" class="month">Feb</text> <text x="217" y="-10" class="month">Mar</text> <text x="265" y="-10" class="month">Apr</text> <text x="325" y="-10" class="month">May</text> <text x="373" y="-10" class="month">Jun</text> <text x="421" y="-10" class="month">Jul</text> <text x="481" y="-10" class="month">Aug</text> <text x="529" y="-10" class="month">Sep</text> <text x="577" y="-10" class="month">Oct</text> <text text-anchor="start" class="wday" dx="-14" dy="8" style="display: none;">Sun</text> <text text-anchor="start" class="wday" dx="-14" dy="20">Mon</text> <text text-anchor="start" class="wday" dx="-14" dy="32" style="display: none;">Tue</text> <text text-anchor="start" class="wday" dx="-14" dy="44">Wed</text> <text text-anchor="start" class="wday" dx="-14" dy="57" style="display: none;">Thu</text> <text text-anchor="start" class="wday" dx="-14" dy="69">Fri</text> <text text-anchor="start" class="wday" dx="-14" dy="81" style="display: none;">Sat</text>'));
  calendarGraphSVG.append(graphG)

  $('.js-calendar-graph').last().append(calendarGraphSVG);
  $("body").html($("body").html());
}
var hoveringRect = {
  hovering: false,
  which: null
}
function addHoverListener($) {
  $('.js-calendar-graph rect').hover(
    function(event) {
      hoveringRect.hovering = true;
      hoveringRect.which = this;
    }, function(event) {
      hoveringRect.hovering = false;
      hoveringRect.which = null;
    }
  )
  $(document).on('keypress', function(e) {
    if (hoveringRect.hovering) {
      $(hoveringRect.which).attr('fill', '#7bc96f')
    }
  })
}
function bindContributionSettingHandler($) {
  $('.contributions-setting-link').click(function(e) {

    //$('.js-calendar-graph').html(defaultContributionGraph)
  });

}
