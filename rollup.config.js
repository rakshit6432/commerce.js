import babel from"rollup-plugin-babel";import rollupNodeResolve from"rollup-plugin-node-resolve";import rollupJson from"rollup-plugin-json";import rollupCommonJs from"rollup-plugin-commonjs";import{terser}from"rollup-plugin-terser";export default[{input:"./src/index.js",output:{file:"./lib/index.js",format:"cjs",name:"bundle"},plugins:[babel({runtimeHelpers:!0,plugins:["@babel/plugin-transform-runtime"]}),terser({format:{comments:!1},compress:{module:!0}})]},{input:"./src/index.js",output:{file:"./lib/commerce.js",format:"iife",name:"Commerce"},plugins:[rollupCommonJs({include:"node_modules/**"}),rollupNodeResolve({browser:!0}),rollupJson(),babel({runtimeHelpers:!0,plugins:["@babel/plugin-transform-runtime"]}),terser({mangle:{properties:{builtins:!1}},format:{comments:!1},compress:!1})]}];
