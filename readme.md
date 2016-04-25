## Dodajemy wsparcie dla TS do projektu:
1. mpm install typescript -g
2. npm install tsd -g
3. rename js to ts

## Clean up errors:

1. Declare project as TS project by adding tsconfig.js file:
{
  "version": "v4",
  "repo": "borisyankov/DefinitelyTyped",
  "ref": "master",
  "path": "typings",
  "bundle": "typings/tsd.d.ts",
  "installed": {
    "lodash/lodash-3.10.d.ts": {
      "commit": "717a5fdb079f8dd7c19f1b22f7f656dd990f0ccf"
    },
    "angularjs/angular.d.ts": {
      "commit": "717a5fdb079f8dd7c19f1b22f7f656dd990f0ccf"
    },
    "jquery/jquery.d.ts": {
      "commit": "717a5fdb079f8dd7c19f1b22f7f656dd990f0ccf"
    }
  }
}

2. Add file tsd.json
{
    "filesGlob": [
        "**/*.ts"
    ],
    "compilerOptions": {
        "module": "commonjs",
        "noImplicitAny": false,
        "preserveConstEnums": true,
        "experimentalDecorators": true,
        "target": "ES5",
        "sourceMap": true
    },
    "atom": {
        "rewriteTsconfig": true
    },
    "compilerOptions": {},
    "files": [
        "app.ts",
        "list/list.controller.ts",
        "list/list.ts",
        "list/products.controller.ts",
        "list/products.service.ts",
        "typings/angularjs/angular.d.ts",
        "typings/jquery/jquery.d.ts",
        "typings/lodash/lodash-3.10.d.ts",
        "typings/tsd.d.ts"
    ]
}

3. Install Type Definitions by 
 $ tsd install -sr
