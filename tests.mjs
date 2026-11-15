import test from "node:test";import assert from "node:assert/strict";import {gradientCss} from "./app.mjs";
test("builds a three-stop linear gradient",()=>{assert.equal(gradientCss(90,[{color:"#000000",position:0},{color:"#ffffff",position:100}]),"linear-gradient(90deg, #000000 0%, #ffffff 100%)")});
test("rejects invalid angles and colors",()=>{assert.throws(()=>gradientCss(361,[{color:"#000000",position:0},{color:"#ffffff",position:100}]));assert.throws(()=>gradientCss(0,[{color:"red",position:0},{color:"#ffffff",position:100}]))});
test("requires at least two stops",()=>{assert.throws(()=>gradientCss(0,[{color:"#000000",position:0}]))});
