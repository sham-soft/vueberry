/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
export default `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400background:rgb(246, 246, 246);display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">const</span> jsonBlob = <span style="color:rgb(1, 86, 146); font-weight:400;">new</span> <span class="hljs-title class_">Blob</span>([<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;{&quot;name&quot;: &quot;test&quot;}&#x27;</span>]);

<span style="color:rgb(1, 86, 146); font-weight:400;">function</span> <span class="hljs-title function_">downloadAsFile</span>(<span style="color:rgb(47, 51, 55); font-weight:400;">data, name = <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;file.json&#x27;</span>, <span style="color:rgb(1, 86, 146); font-weight:400;">type</span> = <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;application/json&#x27;</span></span>) {
  <span style="color:rgb(1, 86, 146); font-weight:400;">try</span> {
    <span style="color:rgb(1, 86, 146); font-weight:400;">let</span> linkElement = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&quot;a&quot;</span>);
    <span style="color:rgb(1, 86, 146); font-weight:400;">let</span> file = <span style="color:rgb(1, 86, 146); font-weight:400;">new</span> <span class="hljs-title class_">Blob</span>([data], { <span style="color:rgb(1, 86, 146); font-weight:400;">type</span> });
    linkElement.<span style="color:rgb(47, 51, 55); font-weight:400;">href</span> = <span class="hljs-variable constant_">URL</span>.<span class="hljs-title function_">createObjectURL</span>(file);
    linkElement.<span style="color:rgb(47, 51, 55); font-weight:400;">download</span> = name;
    linkElement.<span class="hljs-title function_">click</span>();
    linkElement.<span class="hljs-title function_">remove</span>();
  } <span style="color:rgb(1, 86, 146); font-weight:400;">catch</span> (err) {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(err);
  }
}

<span class="hljs-title function_">downloadAsFile</span>(jsonBlob);</code></pre>
`;