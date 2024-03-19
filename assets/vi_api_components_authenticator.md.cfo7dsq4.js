import{_ as t,o as d,c as e,a4 as o,a5 as c}from"./chunks/framework.jOpZRQ8J.js";const f=JSON.parse('{"title":"Authenticator","description":"","frontmatter":{},"headers":[],"relativePath":"vi/api/components/authenticator.md","filePath":"vi/api/components/authenticator.md"}'),n={name:"vi/api/components/authenticator.md"},r=o('<h1 id="authenticator" tabindex="-1">Authenticator <a class="header-anchor" href="#authenticator" aria-label="Permalink to &quot;Authenticator&quot;">​</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>title</code></td><td><code>string | undefined</code></td><td><code>&#39;&#39;</code></td><td>Tiêu đề của form</td></tr><tr><td><code>labelEmail</code></td><td><code>string | undefined</code></td><td><code>&#39;Email&#39;</code></td><td></td></tr><tr><td><code>labelPassword</code></td><td><code>string | undefined</code></td><td><code>&#39;Password&#39;</code></td><td></td></tr><tr><td><code>placeholderEmail</code></td><td><code>string | undefined</code></td><td><code>&#39;Enter your email&#39;</code></td><td></td></tr><tr><td><code>placeholderPassword</code></td><td><code>string | undefined</code></td><td><code>&#39;Enter your password&#39;</code></td><td></td></tr><tr><td><code>invalidErrorMessage</code></td><td><code>string | undefined</code></td><td><code>&#39;Invalid login credentials&#39;</code></td><td>Error message dùng để hiển thị trong trường hợp login không thành công.</td></tr><tr><td><code>otherErrorMessage</code></td><td><code>string | undefined</code></td><td><code>&#39;An error has occurred&#39;</code></td><td>Error message dùng để hiển thị trong trường hợp lỗi khác không xác định được.</td></tr><tr><td><code>feedbackSessionExpiredMessage</code></td><td><code>string | undefined</code></td><td><code>&#39;Login session has expired.\\nPlease login again to continue.&#39;</code></td><td>Message hiển thị khi login session bị hết hạn.</td></tr><tr><td><code>feedbackUnauthorizedMessage</code></td><td><code>string | undefined</code></td><td><code>&#39;Please login to continue.&#39;</code></td><td>Message hiển thị khi bị chuyển hướng đến trang login.</td></tr><tr><td><code>btnSubmit</code></td><td><code>string | undefined</code></td><td><code>&#39;Login&#39;</code></td><td></td></tr><tr><td><code>credentials</code></td><td><code>any | undefined</code></td><td><code>() =&gt; ({})</code></td><td>Giá trị khởi tạo của object <a href="/vi/api/$auth.html#login"><code>credentials</code></a> chứa thông tin đăng nhập.</td></tr><tr><td><code>css</code></td><td><code>boolean | undefined</code></td><td><code>true</code></td><td>Bật CSS mặc định trên form login hay không. Set <code>false</code> để tắt CSS và tự custom CSS riêng.</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><p><img src="'+c+'" alt=""></p><table><thead><tr><th>Name</th><th>Props</th><th>Description</th></tr></thead><tbody><tr><td><code>title</code></td><td><code>undefined</code></td><td>Tiêu đề của form</td></tr><tr><td><code>feedback</code></td><td><code>undefined</code></td><td>Hiển thị message lỗi</td></tr><tr><td><code>append</code></td><td><code>{ credentials: any }</code></td><td>Vị trí cuối form, hữu ích trong trường hợp bạn muốn thêm checkbox &quot;Ghi nhớ đăng nhập&quot;</td></tr><tr><td><code>submit</code></td><td><code>{ pending: boolean }</code></td><td>Button submit của form</td></tr></tbody></table>',6),a=[r];function i(s,h,l,u,g,p){return d(),e("div",null,a)}const b=t(n,[["render",i]]);export{f as __pageData,b as default};
