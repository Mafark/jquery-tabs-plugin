Plug in the plugin:

$(document).ready(function () {
  $('tabs selector').lightTabs('content selector', number of the active menu item)
})



Example:

$(document).ready(function () {
  $('.tabs').lightTabs('.tabs-content', 0)
})

<ul class="tabs">
  <li class="active">
    <a href="#tab-1">tab-1</a>
  </li>
  <li><a href=".tab-2">tab-2</a></li>
  <li><a href="#tab-3">.tab-3</a></li>
</ul>
...
<div class='tabs-content'>
  <div id='tab-1'>
    tab number 1
  </div>
  <div class='tab-2'>
    tab number 2
  </div>
  <div id='tab-3'>
    tab number 3
  </div>
</div>