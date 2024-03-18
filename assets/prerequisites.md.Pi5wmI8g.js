import{_ as e,o as t,c as r,a4 as n}from"./chunks/framework.jOpZRQ8J.js";const g=JSON.parse('{"title":"Prerequisites","description":"","frontmatter":{},"headers":[],"relativePath":"prerequisites.md","filePath":"prerequisites.md"}'),i={name:"prerequisites.md"},s=n('<h1 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h1><h2 id="api-server" tabindex="-1">API server <a class="header-anchor" href="#api-server" aria-label="Permalink to &quot;API server&quot;">​</a></h2><p>Hiện tại module này hỗ trợ việc đăng nhập thông qua API, do đó bạn cần phải có một API server để xử lý việc đăng nhập đáp ứng các yêu cầu sau:</p><ul><li>Có API login, response trả về access token và refresh token.</li><li>Có API refresh token, response trả về access token mới và refresh token mới.</li><li>Có API logout, xóa access token và refresh token.</li><li>Có API lấy thông tin user, response trả về thông tin user.</li><li>Access token và Refresh token là JWT tokens.</li></ul><h2 id="nuxt-app" tabindex="-1">Nuxt App <a class="header-anchor" href="#nuxt-app" aria-label="Permalink to &quot;Nuxt App&quot;">​</a></h2><p>Có một số yếu tố khác bạn cần cân nhắc khi sử dụng module này trong dự án của mình:</p><ul><li>Tokens được lưu trữ trong cookie.</li><li>Phiên đăng nhập và thông tin người dùng được lưu trữ trong store Pinia.</li><li>Module này sử dụng <a href="https://github.com/unjs/ofetch" target="_blank" rel="noreferrer"><code>ofetch</code></a> cho việc giao tiếp với API (mặc định trên Nuxt 3), do đó các interceptor đang được gắn cho <code>$fetch</code> một cách mặc định. Nếu bạn xử dụng axios hoặc một thư viện khác cho việc gọi API, bạn cần phải tự thêm các interceptor tương ứng cho thư viện đó.</li></ul>',7),o=[s];function c(a,h,l,u,p,d){return t(),r("div",null,o)}const m=e(i,[["render",c]]);export{g as __pageData,m as default};
