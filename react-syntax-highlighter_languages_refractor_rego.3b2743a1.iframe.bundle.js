"use strict";(self.webpackChunkmaison_components_storybook=self.webpackChunkmaison_components_storybook||[]).push([[869],{"../../node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rego.js":module=>{function rego(Prism){Prism.languages.rego={comment:/#.*/,property:{pattern:/(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,boolean:/\b(?:false|true)\b/,function:{pattern:/\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,inside:{namespace:/\b\w+\b(?=\s*\.)/,punctuation:/\./}},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,operator:/[-+*/%|&]|[<>:=]=?|!=|\b_\b/,punctuation:/[,;.\[\]{}()]/}}module.exports=rego,rego.displayName="rego",rego.aliases=[]}}]);