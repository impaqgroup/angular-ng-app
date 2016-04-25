## Dodajemy wsparcie dla TS do projektu:
1. mpm install typescript -g
2. npm install tsd -g
Create tsconfig.js
go to app directory
tsd query angular --action install
tsd query jquery --action install
add reference:
  /// <reference path="angularjs/angular.d.ts" />

Controllers:
tsd query lodash --action install
tsd install -sr
