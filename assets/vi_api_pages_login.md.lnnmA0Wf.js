import{_ as e,o as t,c as n,a4 as a}from"./chunks/framework.jOpZRQ8J.js";const p=JSON.parse('{"title":"Page login","description":"","frontmatter":{},"headers":[],"relativePath":"vi/api/pages/login.md","filePath":"vi/api/pages/login.md"}'),o={name:"vi/api/pages/login.md"},i=a('<h1 id="page-login" tabindex="-1">Page login <a class="header-anchor" href="#page-login" aria-label="Permalink to &quot;Page login&quot;">​</a></h1><h2 id="status-query" tabindex="-1"><code>status</code> query <a class="header-anchor" href="#status-query" aria-label="Permalink to &quot;`status` query&quot;">​</a></h2><p>Khi bị chuyển hướng tới trang login, module sẽ tự động thêm query <code>status</code> vào URL để xác định trạng thái hiện tại của trang login. Có 2 giá trị có thể của <code>status</code>:</p><ul><li><code>&quot;unauthorized&quot;</code>: trạng thái bị chuyển hướng đến trang login do 1 trong 2 nguyên nhân sau: <ul><li>Chưa đăng nhập.</li><li>Cả access token và refresh token đều đã hết hạn.</li></ul></li><li><code>&quot;session-expired&quot;</code>: trạng thái bị chuyển hướng đến trang login do access token đã hết hạn, mặc dù refresh token vẫn còn hạn sử dụng nhưng có lỗi xảy ra khi thực hiện refresh token.</li></ul>',4),s=[i];function r(c,h,l,g,u,d){return t(),n("div",null,s)}const m=e(o,[["render",r]]);export{p as __pageData,m as default};
