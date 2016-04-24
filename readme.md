*Dodajemy TS do projeltu
mpm install typescript -g
npm install tsd -g
Create tsconfig.js
go to app directory
tsd query angular --action install
tsd query jquery --action install
add reference:
  /// <reference path="angularjs/angular.d.ts" />
