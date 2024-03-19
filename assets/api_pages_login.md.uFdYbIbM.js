import{_ as e,o as t,c as o,a4 as a}from"./chunks/framework.jOpZRQ8J.js";const _=JSON.parse('{"title":"Page login","description":"","frontmatter":{},"headers":[],"relativePath":"api/pages/login.md","filePath":"api/pages/login.md"}'),i={name:"api/pages/login.md"},r=a('<h1 id="page-login" tabindex="-1">Page login <a class="header-anchor" href="#page-login" aria-label="Permalink to &quot;Page login&quot;">​</a></h1><h2 id="status-query" tabindex="-1"><code>status</code> query <a class="header-anchor" href="#status-query" aria-label="Permalink to &quot;`status` query&quot;">​</a></h2><p>When redirected to the login page, the module will automatically add the <code>status</code> query to the URL to determine the current state of the login page. There are 2 possible values of <code>status</code>:</p><ul><li><code>&quot;unauthorized&quot;</code>: the state of being redirected to the login page due to 1 of 2 reasons: <ul><li>Not logged in.</li><li>Both access token and refresh token have expired.</li></ul></li><li><code>&quot;session-expired&quot;</code>: the state of being redirected to the login page due to the access token having expired, even though the refresh token is still valid, but an error occurred when refreshing the token.</li></ul>',4),s=[r];function n(l,d,c,h,u,g){return t(),o("div",null,s)}const f=e(i,[["render",n]]);export{_ as __pageData,f as default};
