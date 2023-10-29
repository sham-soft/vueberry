/* eslint-disable max-len */
export const codeVariableStyles = `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(101, 110, 119); font-weight:400;">// Переопределение переменных</span>
<span style="color:rgb(84, 121, 13); font-weight:400;">$sh</span>-color-dark-<span style="color:rgb(183, 85, 1); font-weight:400;">1</span>: <span style="color:rgb(101, 110, 119); font-weight:400;">#000;</span>
<span style="color:rgb(84, 121, 13); font-weight:400;">$sh</span>-color-gray-<span style="color:rgb(183, 85, 1); font-weight:400;">2</span>: <span style="color:rgb(101, 110, 119); font-weight:400;">#111;</span>

<span style="color:rgb(101, 110, 119); font-weight:400;">// Затем импортируйте файлы ShamUI SASS (важен порядок)</span>
@import <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;node_modules/sham-ui-vue/src/sass/main.scss&#x27;</span>;</code></pre>
`;

export const codeClassStyles = `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(101, 110, 119); font-weight:400;">// Переопределение стилей компонента</span>
.sh-button
    padding: <span style="color:rgb(183, 85, 1); font-weight:400;">14</span>px
    background: green
    color: black

<span style="color:rgb(101, 110, 119); font-weight:400;">// Затем импортируйте файлы ShamUI SASS</span>
@<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;node_modules/sham-ui-vue/src/sass/main.scss&#x27;</span>;</code></pre>
`;

export const codeImport = `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span class="hljs-title class_">Vue</span> <span style="color:rgb(1, 86, 146); font-weight:400;">from</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;vue&#x27;</span>
<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span class="hljs-title class_">ShamUI</span> <span style="color:rgb(1, 86, 146); font-weight:400;">from</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;sham-ui-vue&#x27;</span>

<span style="color:rgb(1, 86, 146); font-weight:400;">import</span> <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;./main.scss&#x27;</span>

<span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ShamUI</span>)</code></pre>
`;