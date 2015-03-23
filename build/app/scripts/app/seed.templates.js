angular.module('templates-app', ['app/scripts/core/components/blade/blade.directive.view.html', 'app/scripts/core/components/menu/menu.directive.view.html', 'app/scripts/pages/mobile/menu.view.html', 'app/scripts/pages/mobile/mobile.view.html', 'app/scripts/pages/promo/promo.view.html', 'app/scripts/pages/viewport/viewport.view.html']);

angular.module("app/scripts/core/components/blade/blade.directive.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/core/components/blade/blade.directive.view.html",
    "<div class=\"content\" ng-class=\"{expanded: expanded, collapsed: !expanded}\">\n" +
    "\n" +
    "</div>");
}]);

angular.module("app/scripts/core/components/menu/menu.directive.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/core/components/menu/menu.directive.view.html",
    "<ul>\n" +
    "    <li ng-repeat=\"item in items\">\n" +
    "        {{item.name}}\n" +
    "    </li>\n" +
    "</ul>");
}]);

angular.module("app/scripts/pages/mobile/menu.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/pages/mobile/menu.view.html",
    "<div ng-controller=\"MenuBladeController\">\n" +
    "    <seed-menu seed-config=\"seedMenuConfiguration\"></seed-menu>\n" +
    "</div>");
}]);

angular.module("app/scripts/pages/mobile/mobile.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/pages/mobile/mobile.view.html",
    "<div>this is mobile</div>\n" +
    "\n" +
    "<seed-blade seed-config=\"_leftBladeConfig\"></seed-blade>\n" +
    "<!--<seed-blade seed-config=\"_rightBladeConfig\"></seed-blade>-->\n" +
    "\n" +
    "<ui-view></ui-view>");
}]);

angular.module("app/scripts/pages/promo/promo.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/pages/promo/promo.view.html",
    "<div>\n" +
    "    <p>SVG external use</p>\n" +
    "    <svg class=\"svg-icon-address-book\">\n" +
    "        <use xlink:href=\"assets/svg/symbol/svg-sprite.svg#svg-icon-address-book\"></use>\n" +
    "    </svg>\n" +
    "</div>\n" +
    "\n" +
    "<br/>\n" +
    "\n" +
    "<div>\n" +
    "    <p>SVG into IMG</p>\n" +
    "    <img src=\"assets/svg/items/svg-icon-accessibility.svg\" alt=\"\"/>\n" +
    "</div>\n" +
    "\n" +
    "<br/>\n" +
    "\n" +
    "<div>\n" +
    "    <p>PNG icon</p>\n" +
    "    <i class=\"icon-test\"></i>\n" +
    "</div>");
}]);

angular.module("app/scripts/pages/viewport/viewport.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/scripts/pages/viewport/viewport.view.html",
    "<ui-view></ui-view>");
}]);
