var units;

function applyThemeLook() {
    try {
        header = units.setSfTheme.header;
        setUpper(header);
    } catch (e) {}
    try {
        theme = units.setSfTheme.theme;
        set_theme_look(theme);
    } catch (e) {}

}
chrome.storage.sync.get(["setSfTheme"], function(data) {
    setImpTheme(data);
});

function set_theme_look(color) {
    if (color == '3024-day') {
        style = `<style>
		.CodeMirror { background: #f7f7f7; color: #3a3432; }
 div.CodeMirror-selected { background: #d6d5d4; }

 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: #d6d5d4; }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::selection { background: #d9d9d9; }

 .CodeMirror-gutters { background: #f7f7f7; border-right: 0px; }
 .CodeMirror-guttermarker { color: #db2d20; }
 .CodeMirror-guttermarker-subtle { color: #807d7c; }
 .CodeMirror-linenumber { color: #807d7c; }

 .CodeMirror-cursor { border-left: 1px solid #5c5855; }

 span.cm-comment { color: #cdab53; }
 span.cm-atom { color: #a16a94; }
 span.cm-number { color: #a16a94; }

 span.cm-property,  span.cm-attribute { color: #01a252; }
 span.cm-keyword { color: #db2d20; }
 span.cm-string { color: #fded02; }

 span.cm-variable { color: #01a252; }
 span.cm-variable-2 { color: #01a0e4; }
 span.cm-def { color: #e8bbd0; }
 span.cm-bracket { color: #3a3432; }
 span.cm-tag { color: #db2d20; }
 span.cm-link { color: #a16a94; }
 span.cm-error { background: #db2d20; color: #5c5855; }

 .CodeMirror-activeline-background { background: #e8f2ff; }
 .CodeMirror-matchingbracket { text-decoration: underline; color: #a16a94 !important; }

	       </style>`;
    } else if (color == '3024-night') {
        style = `<style>
		
.CodeMirror { background: #8c8184; color: #d6d5d4; }
 div.CodeMirror-selected { background: #3a3432; }
 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: rgba(58, 52, 50, .99); }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::-moz-selection { background: rgba(58, 52, 50, .99); }
 .CodeMirror-gutters { background: #090300; border-right: 0px; }
 .CodeMirror-guttermarker { color: #db2d20; }
 .CodeMirror-guttermarker-subtle { color: #5c5855; }
 .CodeMirror-linenumber { color: #5c5855; }

 .CodeMirror-cursor { border-left: 1px solid #807d7c; }

 span.cm-comment { color: #cdab53; }
 span.cm-atom { color: #a16a94; }
 span.cm-number { color: #a16a94; }

 span.cm-property,  span.cm-attribute { color: #01a252; }
 span.cm-keyword { color: #db2d20; }
 span.cm-string { color: #fded02; }

 span.cm-variable { color: #01a252; }
 span.cm-variable-2 { color: #01a0e4; }
 span.cm-def { color: #e8bbd0; }
 span.cm-bracket { color: #d6d5d4; }
 span.cm-tag { color: #db2d20; }
 span.cm-link { color: #a16a94; }
 span.cm-error { background: #db2d20; color: #807d7c; }

 .CodeMirror-activeline-background { background: #2F2F2F; }
 .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }

	       </style>`;
    } else if (color == 'abcdef') {
        style = `<style>
		.CodeMirror { background: #0f0f0f; color: #defdef; }
 div.CodeMirror-selected { background: #515151; }
 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: rgba(56, 56, 56, 0.99); }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 56, 56, 0.99); }
 .CodeMirror-gutters { background: #555; border-right: 2px solid #314151; }
 .CodeMirror-guttermarker { color: #222; }
 .CodeMirror-guttermarker-subtle { color: azure; }
 .CodeMirror-linenumber { color: #FFFFFF; }
 .CodeMirror-cursor { border-left: 1px solid #00FF00; }

 span.cm-keyword { color: darkgoldenrod; font-weight: bold; }
 span.cm-atom { color: #77F; }
 span.cm-number { color: violet; }
 span.cm-def { color: #fffabc; }
 span.cm-variable { color: #abcdef; }
 span.cm-variable-2 { color: #cacbcc; }
 span.cm-variable-3 { color: #def; }
 span.cm-property { color: #fedcba; }
 span.cm-operator { color: #ff0; }
 span.cm-comment { color: #7a7b7c; font-style: italic;}
 span.cm-string { color: #2b4; }
 span.cm-meta { color: #C9F; }
 span.cm-qualifier { color: #FFF700; }
 span.cm-builtin { color: #30aabc; }
 span.cm-bracket { color: #8a8a8a; }
 span.cm-tag { color: #FFDD44; }
 span.cm-attribute { color: #DDFF00; }
 span.cm-error { color: #FF0000; }
 span.cm-header { color: aquamarine; font-weight: bold; }
 span.cm-link { color: blueviolet; }

 .CodeMirror-activeline-background { background: #314151; }

	       </style>`;
    } else if (color == 'ambiance') {
        style = `<style>
		 .cm-header { color: blue; }
 .cm-quote { color: #24C2C7; }

 .cm-keyword { color: #cda869; }
 .cm-atom { color: #CF7EA9; }
 .cm-number { color: #78CF8A; }
 .cm-def { color: #aac6e3; }
 .cm-variable { color: #ffb795; }
 .cm-variable-2 { color: #eed1b3; }
 .cm-variable-3 { color: #faded3; }
 .cm-property { color: #eed1b3; }
 .cm-operator { color: #fa8d6a; }
 .cm-comment { color: #555; font-style:italic; }
 .cm-string { color: #8f9d6a; }
 .cm-string-2 { color: #9d937c; }
 .cm-meta { color: #D2A8A1; }
 .cm-qualifier { color: yellow; }
 .cm-builtin { color: #9999cc; }
 .cm-bracket { color: #24C2C7; }
 .cm-tag { color: #fee4ff; }
 .cm-attribute { color: #9B859D; }
 .cm-hr { color: pink; }
 .cm-link { color: #F4C20B; }
 .cm-special { color: #FF9D00; }
 .cm-error { color: #AF2018; }

 .CodeMirror-matchingbracket { color: #0f0; }
 .CodeMirror-nonmatchingbracket { color: #f22; }

 div.CodeMirror-selected { background: rgba(255, 255, 255, 0.15); }
.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }

/* Editor styling */

.CodeMirror {
  line-height: 1.40em;
  color: #E6E1DC;
  background-color: #202020;
  -webkit-box-shadow: inset 0 0 10px black;
  -moz-box-shadow: inset 0 0 10px black;
  box-shadow: inset 0 0 10px black;
}

 .CodeMirror-gutters {
  background: #3D3D3D;
  border-right: 1px solid #4D4D4D;
  box-shadow: 0 10px 20px black;
}

 .CodeMirror-linenumber {
  text-shadow: 0px 1px 1px #4d4d4d;
  color: #111;
  padding: 0 5px;
}

 .CodeMirror-guttermarker { color: #aaa; }
 .CodeMirror-guttermarker-subtle { color: #111; }

 .CodeMirror-cursor { border-left: 1px solid #7991E8; }

 .CodeMirror-activeline-background {
  background: none repeat scroll 0% 0% rgba(255, 255, 255, 0.031);
}

.CodeMirror,
 .CodeMirror-gutters {
  background-image: url("data:image/png;base64,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");
}

	       </style>`;
    } else if (color == 'base16-dark') {
        style = `<style>
		.CodeMirror { background: #151515; color: #e0e0e0; }
 div.CodeMirror-selected { background: #303030; }
 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }
 .CodeMirror-gutters { background: #151515; border-right: 0px; }
 .CodeMirror-guttermarker { color: #ac4142; }
 .CodeMirror-guttermarker-subtle { color: #505050; }
 .CodeMirror-linenumber { color: #505050; }
 .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }

 span.cm-comment { color: #8f5536; }
 span.cm-atom { color: #aa759f; }
 span.cm-number { color: #aa759f; }

 span.cm-property,  span.cm-attribute { color: #90a959; }
 span.cm-keyword { color: #ac4142; }
 span.cm-string { color: #f4bf75; }

 span.cm-variable { color: #90a959; }
 span.cm-variable-2 { color: #6a9fb5; }
 span.cm-def { color: #d28445; }
 span.cm-bracket { color: #e0e0e0; }
 span.cm-tag { color: #ac4142; }
 span.cm-link { color: #aa759f; }
 span.cm-error { background: #ac4142; color: #b0b0b0; }

 .CodeMirror-activeline-background { background: #202020; }
 .CodeMirror-matchingbracket { text-decoration: underline; color: green !important; }

	       </style>`;
    } else if (color == 'base16-light') {
        style = `<style>
		.CodeMirror { background: #f5f5f5; color: #202020; }
 div.CodeMirror-selected { background: #e0e0e0; }
 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: #e0e0e0; }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::-moz-selection { background: #e0e0e0; }
 .CodeMirror-gutters { background: #f5f5f5; border-right: 0px; }
 .CodeMirror-guttermarker { color: #ac4142; }
 .CodeMirror-guttermarker-subtle { color: #b0b0b0; }
 .CodeMirror-linenumber { color: #b0b0b0; }
 .CodeMirror-cursor { border-left: 1px solid #505050; }

 span.cm-comment { color: #8f5536; }
 span.cm-atom { color: #aa759f; }
 span.cm-number { color: #aa759f; }

 span.cm-property,  span.cm-attribute { color: #90a959; }
 span.cm-keyword { color: #ac4142; }
 span.cm-string { color: #f4bf75; }

 span.cm-variable { color: #90a959; }
 span.cm-variable-2 { color: #6a9fb5; }
 span.cm-def { color: #d28445; }
 span.cm-bracket { color: #202020; }
 span.cm-tag { color: #ac4142; }
 span.cm-link { color: #aa759f; }
 span.cm-error { background: #ac4142; color: #505050; }

 .CodeMirror-activeline-background { background: #DDDCDC; }
 .CodeMirror-matchingbracket { text-decoration: underline; color: green !important; }
	       </style>`;
    } else if (color == 'bespin') {
        style = `<style>
		.CodeMirror {background: #28211c; color: #9d9b97;}
 div.CodeMirror-selected {background: #36312e !important;}
 .CodeMirror-gutters {background: #28211c; border-right: 0px;}
 .CodeMirror-linenumber {color: #666666;}
 .CodeMirror-cursor {border-left: 1px solid #797977 !important;}

 span.cm-comment {color: #937121;}
 span.cm-atom {color: #9b859d;}
 span.cm-number {color: #9b859d;}

 span.cm-property,  span.cm-attribute {color: #54be0d;}
 span.cm-keyword {color: #cf6a4c;}
 span.cm-string {color: #f9ee98;}

 span.cm-variable {color: #54be0d;}
 span.cm-variable-2 {color: #5ea6ea;}
 span.cm-def {color: #cf7d34;}
 span.cm-error {background: #cf6a4c; color: #797977;}
 span.cm-bracket {color: #9d9b97;}
 span.cm-tag {color: #cf6a4c;}
 span.cm-link {color: #9b859d;}

 .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}
 .CodeMirror-activeline-background { background: #404040; }

	       </style>`;
    } else if (color == 'blackboard') {
        style = `<style>
		.CodeMirror { background: #0C1021; color: #F8F8F8; }
 div.CodeMirror-selected { background: #253B76; }
 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }
 .CodeMirror-gutters { background: #0C1021; border-right: 0; }
 .CodeMirror-guttermarker { color: #FBDE2D; }
 .CodeMirror-guttermarker-subtle { color: #888; }
 .CodeMirror-linenumber { color: #888; }
 .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }

 .cm-keyword { color: #FBDE2D; }
 .cm-atom { color: #D8FA3C; }
 .cm-number { color: #D8FA3C; }
 .cm-def { color: #8DA6CE; }
 .cm-variable { color: #FF6400; }
 .cm-operator { color: #FBDE2D; }
 .cm-comment { color: #AEAEAE; }
 .cm-string { color: #61CE3C; }
 .cm-string-2 { color: #61CE3C; }
 .cm-meta { color: #D8FA3C; }
 .cm-builtin { color: #8DA6CE; }
 .cm-tag { color: #8DA6CE; }
 .cm-attribute { color: #8DA6CE; }
 .cm-header { color: #FF6400; }
 .cm-hr { color: #AEAEAE; }
 .cm-link { color: #8DA6CE; }
 .cm-error { background: #9D1E15; color: #F8F8F8; }

 .CodeMirror-activeline-background { background: #3C3636; }
 .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }

	       </style>`;
    } else if (color == 'cobalt') {
        style = `<style>
		.CodeMirror { background: #002240; color: white; }
 div.CodeMirror-selected { background: #b36539; }
 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }
 .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }
 .CodeMirror-guttermarker { color: #ffee80; }
 .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
 .CodeMirror-linenumber { color: #d0d0d0; }
 .CodeMirror-cursor { border-left: 1px solid white; }

 span.cm-comment { color: #08f; }
 span.cm-atom { color: #845dc4; }
 span.cm-number,  span.cm-attribute { color: #ff80e1; }
 span.cm-keyword { color: #ffee80; }
 span.cm-string { color: #3ad900; }
 span.cm-meta { color: #ff9d00; }
 span.cm-variable-2,  span.cm-tag { color: #9effff; }
 span.cm-variable-3,  span.cm-def { color: white; }
 span.cm-bracket { color: #d8d8d8; }
 span.cm-builtin,  span.cm-special { color: #ff9e59; }
 span.cm-link { color: #845dc4; }
 span.cm-error { color: #9d1e15; }

 .CodeMirror-activeline-background { background: #002D57; }
 .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }

	       </style>`;
    } else if (color == 'colorforth') {
        style = `<style>
		.CodeMirror { background: #a9a9a9; color: #f8f8f8; }
 .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }
 .CodeMirror-guttermarker { color: #FFBD40; }
 .CodeMirror-guttermarker-subtle { color: #78846f; }
 .CodeMirror-linenumber { color: #bababa; }
 .CodeMirror-cursor { border-left: 1px solid white; }

 span.cm-comment     { color: #ededed; }
 span.cm-def         { color: #ff1c1c; font-weight:bold; }
 span.cm-keyword     { color: #ffd900; }
 span.cm-builtin     { color: #00d95a; }
 span.cm-variable    { color: #73ff00; }
 span.cm-string      { color: #007bff; }
 span.cm-number      { color: #00c4ff; }
 span.cm-atom        { color: #606060; }

 span.cm-variable-2  { color: #EEE; }
 span.cm-variable-3  { color: #DDD; }
 span.cm-property    {}
 span.cm-operator    {}

 span.cm-meta        { color: yellow; }
 span.cm-qualifier   { color: #FFF700; }
 span.cm-bracket     { color: #cc7; }
 span.cm-tag         { color: #FFBD40; }
 span.cm-attribute   { color: #FFF700; }
 span.cm-error       { color: #f00; }

 div.CodeMirror-selected { background: #333d53; }

 span.cm-compilation { background: rgba(255, 255, 255, 0.12); }

 .CodeMirror-activeline-background { background: #253540; }

	       </style>`;
    } else if (color == 'dracula') {
        style = `<style>
		 .CodeMirror-gutters {
  background-color: #282a36 !important;
  color: #f8f8f2 !important;
  border: none;
}
 .CodeMirror-gutters { color: #282a36; }
 .CodeMirror-cursor { border-left: solid thin #f8f8f0; }
 .CodeMirror-linenumber { color: #6D8A88; }
 .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }
 span.cm-comment { color: #6272a4; }
 span.cm-string,  span.cm-string-2 { color: #f1fa8c; }
 span.cm-number { color: #bd93f9; }
 span.cm-variable { color: #50fa7b; }
 span.cm-variable-2 { color: white; }
 span.cm-def { color: #ffb86c; }
 span.cm-keyword { color: #ff79c6; }
 span.cm-operator { color: #ff79c6; }
 span.cm-keyword { color: #ff79c6; }
 span.cm-atom { color: #bd93f9; }
 span.cm-meta { color: #f8f8f2; }
 span.cm-tag { color: #ff79c6; }
 span.cm-attribute { color: #50fa7b; }
 span.cm-qualifier { color: #50fa7b; }
 span.cm-property { color: #66d9ef; }
 span.cm-builtin { color: #50fa7b; }
 span.cm-variable-3 { color: #50fa7b; }

 .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }
 .CodeMirror-matchingbracket { text-decoration: underline; color: black !important; }

	       </style>`;
    } else if (color == 'duotone-dark') {
        style = `<style>
		.CodeMirror { background: #2a2734; color: #6c6783; }
 div.CodeMirror-selected { background: #545167!important; }
 .CodeMirror-gutters { background: #2a2734; border-right: 0px; }
 .CodeMirror-linenumber { color: #545167; }


 .CodeMirror-cursor { border-left: 1px solid #ffad5c;  border-right: .5em solid #ffad5c;  opacity: .5; }
 .CodeMirror-activeline-background { background: #363342;  opacity: .5;}
 .cm-fat-cursor .CodeMirror-cursor { background: #ffad5c;  opacity: .5;}


 span.cm-atom,  span.cm-number,  span.cm-keyword,  span.cm-variable,  span.cm-attribute,  span.cm-quote,  span.cm-hr,  span.cm-link { color: #ffcc99; }

 span.cm-property { color: #9a86fd; }
 span.cm-punctuation,  span.cm-unit,  span.cm-negative { color: #e09142; }
 span.cm-string { color: #ffb870; }
 span.cm-operator { color: #ffad5c; }
 span.cm-positive { color: #6a51e6; }

 span.cm-variable-2,  span.cm-variable-3,  span.cm-string-2,  span.cm-url { color: #7a63ee; }
 span.cm-def,  span.cm-tag,  span.cm-builtin,  span.cm-qualifier,  span.cm-header,  span.cm-em { color: #eeebff; }
 span.cm-bracket,  span.cm-comment { color: #6c6783; }


 span.cm-error,  span.cm-invalidchar { color: #f00; }

 span.cm-header { font-weight: normal; }
 .CodeMirror-matchingbracket { text-decoration: underline; color: #eeebff !important; } 

	       </style>`;
    } else if (color == 'duotone-light') {
        style = `<style>
		

.CodeMirror { background: #faf8f5; color: #b29762; }
 div.CodeMirror-selected { background: #e3dcce !important; }
 .CodeMirror-gutters { background: #faf8f5; border-right: 0px; }
 .CodeMirror-linenumber { color: #cdc4b1; }


 .CodeMirror-cursor { border-left: 1px solid #93abdc;  border-right: .5em solid #93abdc; opacity: .5; }
 .CodeMirror-activeline-background { background: #e3dcce;   opacity: .5; }
 .cm-fat-cursor .CodeMirror-cursor { background: #93abdc;  opacity: .5; }


 span.cm-atom,  span.cm-number,  span.cm-keyword,  span.cm-variable,  span.cm-attribute,  span.cm-quote, -light span.cm-hr, -light span.cm-link { color: #063289; }

 span.cm-property { color: #b29762; }
 span.cm-punctuation,  span.cm-unit,  span.cm-negative { color: #063289; }
 span.cm-string,  span.cm-operator { color: #1659df; }
 span.cm-positive { color: #896724; }

 span.cm-variable-2,  span.cm-variable-3,  span.cm-string-2,  span.cm-url { color: #896724; }
 span.cm-def,  span.cm-tag,  span.cm-builtin,  span.cm-qualifier,  span.cm-header,  span.cm-em { color: #2d2006; }
 span.cm-bracket,  span.cm-comment { color: #b6ad9a; }


 span.cm-error,  span.cm-invalidchar { color: #f00; }

 span.cm-header { font-weight: normal; }
 .CodeMirror-matchingbracket { text-decoration: underline; color: black !important; }


	       </style>`;
    } else if (color == 'eclipse') {
        style = `<style>
		 span.cm-meta { color: #FF1717; }
 span.cm-keyword { line-height: 1em; font-weight: bold; color: #7F0055; }
 span.cm-atom { color: #219; }
 span.cm-number { color: #164; }
 span.cm-def { color: #00f; }
 span.cm-variable { color: black; }
 span.cm-variable-2 { color: #0000C0; }
 span.cm-variable-3 { color: #0000C0; }
 span.cm-property { color: black; }
 span.cm-operator { color: black; }
 span.cm-comment { color: #3F7F5F; }
 span.cm-string { color: #2A00FF; }
 span.cm-string-2 { color: #f50; }
 span.cm-qualifier { color: #555; }
 span.cm-builtin { color: #30a; }
 span.cm-bracket { color: #cc7; }
 span.cm-tag { color: #170; }
 span.cm-attribute { color: #00c; }
 span.cm-link { color: #219; }
 span.cm-error { color: #f00; }

 .CodeMirror-activeline-background { background: #e8f2ff; }
 .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }

	       </style>`;
    } else if (color == 'elegant') {
        style = `<style>
		 span.cm-number,  span.cm-string,  span.cm-atom { color: #762; }
 span.cm-comment { color: #262; font-style: italic; line-height: 1em; }
 span.cm-meta { color: #555; font-style: italic; line-height: 1em; }
 span.cm-variable { color: black; }
 span.cm-variable-2 { color: #b11; }
 span.cm-qualifier { color: #555; }
 span.cm-keyword { color: #730; }
 span.cm-builtin { color: #30a; }
 span.cm-link { color: #762; }
 span.cm-error { background-color: #fdd; }

 .CodeMirror-activeline-background { background: #e8f2ff; }
 .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }
	       </style>`;
    } else if (color == 'erlang-dark') {
        style = `<style>
		.CodeMirror { background: #002240; color: white; }
 div.CodeMirror-selected { background: #b36539; }
 .CodeMirror-line::selection,  .CodeMirror-line > span::selection,  .CodeMirror-line > span > span::selection { background: rgba(179, 101, 57, .99); }
 .CodeMirror-line::-moz-selection,  .CodeMirror-line > span::-moz-selection,  .CodeMirror-line > span > span::-moz-selection { background: rgba(179, 101, 57, .99); }
 .CodeMirror-gutters { background: #002240; border-right: 1px solid #aaa; }
 .CodeMirror-guttermarker { color: white; }
 .CodeMirror-guttermarker-subtle { color: #d0d0d0; }
 .CodeMirror-linenumber { color: #d0d0d0; }
 .CodeMirror-cursor { border-left: 1px solid white; }

 span.cm-quote      { color: #ccc; }
 span.cm-atom       { color: #f133f1; }
 span.cm-attribute  { color: #ff80e1; }
 span.cm-bracket    { color: #ff9d00; }
 span.cm-builtin    { color: #eaa; }
 span.cm-comment    { color: #77f; }
 span.cm-def        { color: #e7a; }
 span.cm-keyword    { color: #ffee80; }
 span.cm-meta       { color: #50fefe; }
 span.cm-number     { color: #ffd0d0; }
 span.cm-operator   { color: #d55; }
 span.cm-property   { color: #ccc; }
 span.cm-qualifier  { color: #ccc; }
 span.cm-special    { color: #ffbbbb; }
 span.cm-string     { color: #3ad900; }
 span.cm-string-2   { color: #ccc; }
 span.cm-tag        { color: #9effff; }
 span.cm-variable   { color: #50fe50; }
 span.cm-variable-2 { color: #e0e; }
 span.cm-variable-3 { color: #ccc; }
 span.cm-error      { color: #9d1e15; }

 .CodeMirror-activeline-background { background: #013461; }
 .CodeMirror-matchingbracket { outline:1px solid grey; color:white !important; }

	       </style>`;
    } else if (color == 'hopscotch') {
        style = `<style>
		.CodeMirror {background: #322931; color: #d5d3d5;}
 div.CodeMirror-selected {background: #433b42 !important;}
 .CodeMirror-gutters {background: #322931; border-right: 0px;}
 .CodeMirror-linenumber {color: #797379;}
 .CodeMirror-cursor {border-left: 1px solid #989498 !important;}

 span.cm-comment {color: #b33508;}
 span.cm-atom {color: #c85e7c;}
 span.cm-number {color: #c85e7c;}

 span.cm-property,  span.cm-attribute {color: #8fc13e;}
 span.cm-keyword {color: #dd464c;}
 span.cm-string {color: #fdcc59;}

 span.cm-variable {color: #8fc13e;}
 span.cm-variable-2 {color: #1290bf;}
 span.cm-def {color: #fd8b19;}
 span.cm-error {background: #dd464c; color: #989498;}
 span.cm-bracket {color: #d5d3d5;}
 span.cm-tag {color: #dd464c;}
 span.cm-link {color: #c85e7c;}

 .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}
 .CodeMirror-activeline-background { background: #302020; }

	       </style>`;
    } else if (color == 'isotope') {
        style = `<style>
		.CodeMirror {background: lightslategrey; color: #e0e0e0;}
 div.CodeMirror-selected {background: #404040 !important;}
 .CodeMirror-gutters {background: #000000; border-right: 0px;}
 .CodeMirror-linenumber {color: #808080;}
 .CodeMirror-cursor {border-left: 1px solid #c0c0c0 !important;}

 span.cm-comment {color: #3300ff;}
 span.cm-atom {color: #cc00ff;}
 span.cm-number {color: #cc00ff;}

 span.cm-property,  span.cm-attribute {color: #33ff00;}
 span.cm-keyword {color: #ff0000;}
 span.cm-string {color: #ff0099;}

 span.cm-variable {color: #33ff00;}
 span.cm-variable-2 {color: #0066ff;}
 span.cm-def {color: #ff9900;}
 span.cm-error {background: #ff0000; color: #c0c0c0;}
 span.cm-bracket {color: #e0e0e0;}
 span.cm-tag {color: #ff0000;}
 span.cm-link {color: #cc00ff;}

 .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}
 .CodeMirror-activeline-background { background: #202020; }

	       </style>`;
    } else {
        console.log('boom');
    }
    attachBodyTag("set_theme_look", style);
}
chrome.runtime.onMessage.addListener(function(request, sender, brodResponse) {
    if (request.function === "setUpper") {
        setUpper(request.color);
    } else if (request.function === "set_theme_look") {
        set_theme_look(request.color);
    } else if (request.function === "save_data") {
        setSaveInfo(request.key, request.data);
    } else if (request.function === "getInfo") {
        brodResponse(units);
    }
});
/*i'm working on christmas eve. omg! i need serious help*/
function attachBodyTag(infos, style) {
    brodStyle = style;
    $("head").append(brodStyle);
}

function returnSaveInfo() {}

function setSaveInfo(key, data) {
    var passInfo = {};
    passInfo[key] = data;
    units = passInfo;
    chrome.storage.sync.set(passInfo, function() {});
}

function setImpTheme(data) {
    units = data;
    applyThemeLook();
    setTimeout(function() {
        applyThemeLook();
    }, 1500);
    setTimeout(function() {
        applyThemeLook();
    }, 3000);
}