"use strict";(self.webpackChunkmaison_components_storybook=self.webpackChunkmaison_components_storybook||[]).push([[2051],{"../../node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/docker.js":module=>{function docker(Prism){!function(Prism){var spaceAfterBackSlash=/\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,space=/(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g,(function(){return spaceAfterBackSlash})),string=/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,option=/--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g,(function(){return string})),stringRule={pattern:RegExp(string),greedy:!0},commentRule={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function re(source,flags){return source=source.replace(/<OPT>/g,(function(){return option})).replace(/<SP>/g,(function(){return space})),RegExp(source,flags)}Prism.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:re(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source,"i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[stringRule,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:re(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source,"i"),lookbehind:!0,greedy:!0},{pattern:re(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source,"i"),lookbehind:!0,greedy:!0},{pattern:re(/(^ONBUILD<SP>)\w+/.source,"i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:commentRule,string:stringRule,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:commentRule},Prism.languages.dockerfile=Prism.languages.docker}(Prism)}module.exports=docker,docker.displayName="docker",docker.aliases=["dockerfile"]}}]);