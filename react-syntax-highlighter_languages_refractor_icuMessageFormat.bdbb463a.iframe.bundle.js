"use strict";(self.webpackChunkmaison_components_storybook=self.webpackChunkmaison_components_storybook||[]).push([[9603],{"../../node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/icu-message-format.js":module=>{function icuMessageFormat(Prism){!function(Prism){function nested(source,level){return level<=0?/[]/.source:source.replace(/<SELF>/g,(function(){return nested(source,level-1)}))}var stringPattern=/'[{}:=,](?:[^']|'')*'(?!')/,escape={pattern:/''/,greedy:!0,alias:"operator"},string={pattern:stringPattern,greedy:!0,inside:{escape}},argumentSource=nested(/\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source.replace(/<STR>/g,(function(){return stringPattern.source})),8),nestedMessage={pattern:RegExp(argumentSource),inside:{message:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:null},"message-delimiter":{pattern:/./,alias:"punctuation"}}};Prism.languages["icu-message-format"]={argument:{pattern:RegExp(argumentSource),greedy:!0,inside:{content:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:{"argument-name":{pattern:/^(\s*)[^{}:=,\s]+/,lookbehind:!0},"choice-style":{pattern:/^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{punctuation:/\|/,range:{pattern:/^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,lookbehind:!0,inside:{operator:/[<#\u2264]/,number:/\S+/}},rest:null}},"plural-style":{pattern:/^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{offset:/^offset:\s*\d+/,"nested-message":nestedMessage,selector:{pattern:/=\d+|[^{}:=,\s]+/,inside:{keyword:/^(?:few|many|one|other|two|zero)$/}}}},"select-style":{pattern:/^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{"nested-message":nestedMessage,selector:{pattern:/[^{}:=,\s]+/,inside:{keyword:/^other$/}}}},keyword:/\b(?:choice|plural|select|selectordinal)\b/,"arg-type":{pattern:/\b(?:date|duration|number|ordinal|spellout|time)\b/,alias:"keyword"},"arg-skeleton":{pattern:/(,\s*)::[^{}:=,\s]+/,lookbehind:!0},"arg-style":{pattern:/(,\s*)(?:currency|full|integer|long|medium|percent|short)(?=\s*$)/,lookbehind:!0},"arg-style-text":{pattern:RegExp(/(^\s*,\s*(?=\S))/.source+nested(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source,8)+"$"),lookbehind:!0,alias:"string"},punctuation:/,/}},"argument-delimiter":{pattern:/./,alias:"operator"}}},escape,string},nestedMessage.inside.message.inside=Prism.languages["icu-message-format"],Prism.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest=Prism.languages["icu-message-format"]}(Prism)}module.exports=icuMessageFormat,icuMessageFormat.displayName="icuMessageFormat",icuMessageFormat.aliases=[]}}]);