/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
export default {
    number: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span class="hljs-title function_">number</span>(<span style="color:rgb(47, 51, 55); font-weight:400;">value</span>) {
    <span style="color:rgb(1, 86, 146); font-weight:400;">return</span> value.<span class="hljs-title function_">replace</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">/[^\d.,]*/g</span>, <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;&#x27;</span>);
}</code></pre>
`,
    letter: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span class="hljs-title function_">letter</span>(<span style="color:rgb(47, 51, 55); font-weight:400;">value</span>) {
    <span style="color:rgb(1, 86, 146); font-weight:400;">return</span> value.<span class="hljs-title function_">replace</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">/[^a-zA-ZА-Яа-яЁё\s-]/gi</span>, <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;&#x27;</span>);
},</code></pre>
`,
    latin: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span class="hljs-title function_">latin</span>(<span style="color:rgb(47, 51, 55); font-weight:400;">value</span>) {
    <span style="color:rgb(1, 86, 146); font-weight:400;">return</span> value.<span class="hljs-title function_">replace</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">/[^a-z\s-]/gi</span>, <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;&#x27;</span>);
},</code></pre>
`,
    cyrillic: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span class="hljs-title function_">cyrillic</span>(<span style="color:rgb(47, 51, 55); font-weight:400;">value</span>) {
    <span style="color:rgb(1, 86, 146); font-weight:400;">return</span> value.<span class="hljs-title function_">replace</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">/[^а-яё\s-]/gi</span>, <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;&#x27;</span>);
},</code></pre>
`,
    date: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span class="hljs-title function_">date</span>(<span style="color:rgb(47, 51, 55); font-weight:400;">value</span>) {
    value = formatters.<span class="hljs-title function_">number</span>(value);

    <span style="color:rgb(1, 86, 146); font-weight:400;">const</span> <span class="hljs-variable constant_">DAYS_IN_MONTH</span> = <span style="color:rgb(183, 85, 1); font-weight:400;">31</span>;
    <span style="color:rgb(1, 86, 146); font-weight:400;">const</span> <span class="hljs-variable constant_">MONTHS_IN_YEAR</span> = <span style="color:rgb(183, 85, 1); font-weight:400;">12</span>;

    <span style="color:rgb(1, 86, 146); font-weight:400;">const</span> day = value.<span class="hljs-title function_">slice</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">0</span>, <span style="color:rgb(183, 85, 1); font-weight:400;">2</span>);
    <span style="color:rgb(1, 86, 146); font-weight:400;">const</span> month = value.<span class="hljs-title function_">slice</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">3</span>, <span style="color:rgb(183, 85, 1); font-weight:400;">5</span>);

    <span style="color:rgb(1, 86, 146); font-weight:400;">if</span> (<span class="hljs-title class_">Number</span>(day) &gt; <span class="hljs-variable constant_">DAYS_IN_MONTH</span>) {
        value = <span class="hljs-variable constant_">DAYS_IN_MONTH</span> + value.<span class="hljs-title function_">slice</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">2</span>);
    }
    <span style="color:rgb(1, 86, 146); font-weight:400;">if</span> (<span class="hljs-title class_">Number</span>(month) &gt; <span class="hljs-variable constant_">MONTHS_IN_YEAR</span>) {
        value = day + <span class="hljs-variable constant_">MONTHS_IN_YEAR</span> + value.<span class="hljs-title function_">slice</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">5</span>);
    }

    <span style="color:rgb(1, 86, 146); font-weight:400;">if</span> (value.<span style="color:rgb(47, 51, 55); font-weight:400;">length</span> &gt; <span style="color:rgb(183, 85, 1); font-weight:400;">2</span> &amp;&amp; value.<span class="hljs-title function_">charAt</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">2</span>) !== <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;.&#x27;</span>) {
        value = day + <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;.&#x27;</span> + value.<span class="hljs-title function_">slice</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">2</span>);
    }
    <span style="color:rgb(1, 86, 146); font-weight:400;">if</span> (value.<span style="color:rgb(47, 51, 55); font-weight:400;">length</span> &gt; <span style="color:rgb(183, 85, 1); font-weight:400;">5</span> &amp;&amp; value.<span class="hljs-title function_">charAt</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">5</span>) !== <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;.&#x27;</span>) {
        value = value.<span class="hljs-title function_">slice</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">0</span>, <span style="color:rgb(183, 85, 1); font-weight:400;">5</span>) + <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;.&#x27;</span> + value.<span class="hljs-title function_">slice</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">5</span>);
    }
    <span style="color:rgb(1, 86, 146); font-weight:400;">if</span> (value.<span style="color:rgb(47, 51, 55); font-weight:400;">length</span> &gt; <span style="color:rgb(183, 85, 1); font-weight:400;">10</span>) {
        value = value.<span class="hljs-title function_">slice</span>(<span style="color:rgb(183, 85, 1); font-weight:400;">0</span>, <span style="color:rgb(183, 85, 1); font-weight:400;">10</span>);
    }

    <span style="color:rgb(1, 86, 146); font-weight:400;">return</span> value;
},</code></pre>
`,
};