/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
export default {
    func: `
<pre>
<code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">function</span> <span class="hljs-title function_">createNotification</span>(<span style="color:rgb(47, 51, 55); font-weight:400;">message</span>) {
    <span style="color:rgb(1, 86, 146); font-weight:400;">let</span> notification = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;div&#x27;</span>);

    notification.<span style="color:rgb(47, 51, 55); font-weight:400;">classList</span>.<span class="hljs-title function_">add</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;notification&#x27;</span>);
    notification.<span style="color:rgb(47, 51, 55); font-weight:400;">classList</span>.<span class="hljs-title function_">add</span>(message.<span style="color:rgb(47, 51, 55); font-weight:400;">status</span>);
    notification.<span style="color:rgb(47, 51, 55); font-weight:400;">innerText</span> = message.<span style="color:rgb(47, 51, 55); font-weight:400;">text</span>;

    <span style="color:rgb(1, 86, 146); font-weight:400;">if</span> (!<span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;#notification-field&#x27;</span>)) {
        <span style="color:rgb(1, 86, 146); font-weight:400;">let</span> notificationField = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;div&#x27;</span>);
        notificationField.<span style="color:rgb(47, 51, 55); font-weight:400;">id</span> = <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;notification-field&#x27;</span>;
        <span class="hljs-variable language_">document</span>.<span style="color:rgb(47, 51, 55); font-weight:400;">body</span>.<span class="hljs-title function_">appendChild</span>(notificationField);
    }

    <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;#notification-field&#x27;</span>).<span class="hljs-title function_">appendChild</span>(notification);

    <span style="color:rgb(183, 85, 1); font-weight:400;">setTimeout</span>(<span style="color:rgb(47, 51, 55); font-weight:400;">() =&gt;</span> {
        notification.<span class="hljs-title function_">remove</span>();
        <span class="hljs-title function_">removeNotificationField</span>();
    }, <span style="color:rgb(183, 85, 1); font-weight:400;">6000</span>);
}

<span style="color:rgb(1, 86, 146); font-weight:400;">function</span> <span class="hljs-title function_">removeNotificationField</span>(<span style="color:rgb(47, 51, 55); font-weight:400;"></span>) {
    <span style="color:rgb(1, 86, 146); font-weight:400;">let</span> notification = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelectorAll</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;#notification-field .chips&#x27;</span>);

    <span style="color:rgb(1, 86, 146); font-weight:400;">if</span> (notification.<span style="color:rgb(47, 51, 55); font-weight:400;">length</span> === <span style="color:rgb(183, 85, 1); font-weight:400;">0</span>) {
        <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;#notification-field&#x27;</span>).<span class="hljs-title function_">remove</span>();
    }
}

<span class="hljs-title function_">createNotification</span>({ <span style="color:rgb(1, 86, 146); font-weight:400;">status</span>: <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;warning&#x27;</span>, <span style="color:rgb(1, 86, 146); font-weight:400;">text</span>: <span style="color:rgb(84, 121, 13); font-weight:400;">&#x27;Внимание!&#x27;</span>})</code></pre>
`,
    styles: `
<pre>
 <code id="htmlViewer" style="color:rgb(47, 51, 55); font-weight:400;display:block;padding: .5em;"><span style="color:rgb(1, 86, 146); font-weight:400;">.notification</span> {
  <span style="color:rgb(128, 51, 120); font-weight:400;">display</span>: flex;
  <span style="color:rgb(128, 51, 120); font-weight:400;">justify-content</span>: space-between;
  <span style="color:rgb(128, 51, 120); font-weight:400;">align-items</span>: center;
  <span style="color:rgb(128, 51, 120); font-weight:400;">height</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">50px</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">padding</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">16px</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">border-radius</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">4px</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">color</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">#ffffff</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">font-size</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">16px</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">margin-bottom</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">16px</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">background</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">#219653</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">animation</span>: anim <span style="color:rgb(183, 85, 1); font-weight:400;">1s</span> linear forwards;
}

<span style="color:rgb(1, 86, 146); font-weight:400;">.error</span> {
  <span style="color:rgb(128, 51, 120); font-weight:400;">background</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">#da2337</span>;
}

<span style="color:rgb(1, 86, 146); font-weight:400;">.warning</span> {
  <span style="color:rgb(128, 51, 120); font-weight:400;">background</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">#c29136</span>;
}

<span style="color:rgb(1, 86, 146); font-weight:400;">.success</span> {
  <span style="color:rgb(128, 51, 120); font-weight:400;">background</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">#219653</span>;
}

<span style="color:rgb(183, 85, 1); font-weight:400;">#notification-field</span> {
  <span style="color:rgb(128, 51, 120); font-weight:400;">position</span>: fixed;
  <span style="color:rgb(128, 51, 120); font-weight:400;">top</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">80px</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">right</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">16px</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">width</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">400px</span>;
  <span style="color:rgb(128, 51, 120); font-weight:400;">z-index</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">10</span>;
}

<span style="color:rgb(1, 86, 146); font-weight:400;">@keyframes</span> anim {
  <span style="color:rgb(183, 85, 1); font-weight:400;">0%</span> {
    <span style="color:rgb(128, 51, 120); font-weight:400;">opacity</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">0</span>;
  }
  <span style="color:rgb(183, 85, 1); font-weight:400;">100%</span> {
    <span style="color:rgb(128, 51, 120); font-weight:400;">opacity</span>: <span style="color:rgb(183, 85, 1); font-weight:400;">1</span>;
  }
}</code></pre>
`,
};