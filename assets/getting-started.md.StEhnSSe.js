import{_ as t,o as e,c as n,a4 as o}from"./chunks/framework.jOpZRQ8J.js";const _=JSON.parse('{"title":"Nuxt 3 Authentication Module","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md"}'),c={name:"getting-started.md"},a=o('<h1 id="nuxt-3-authentication-module" tabindex="-1">Nuxt 3 Authentication Module <a class="header-anchor" href="#nuxt-3-authentication-module" aria-label="Permalink to &quot;Nuxt 3 Authentication Module&quot;">​</a></h1><p>Module này được thiết kế dựa trên ý tưởng của <a href="https://auth.nuxtjs.org/" target="_blank" rel="noreferrer">nuxt/auth-module</a> nhưng hỗ trợ cho Nuxt 3.</p><p>Từ phiên bản 3 trở lên, mặc định Nuxt sử dụng <a href="https://github.com/unjs/ofetch" target="_blank" rel="noreferrer"><code>ofetch</code></a> cho việc giao tiếp với API thông qua <code>$fetch</code> và <code>useFetch</code>. Auth module cũng không ngoại lệ, sử dụng <code>$fetch</code> cho việc gọi API và <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer"><code>pinia</code></a> làm store quản lý session đăng nhập.</p><p>Ngoài ra module cũng cung cấp sẵn một middleware <code>auth</code> để kiểm tra trạng thái đăng nhập của người dùng, một component <code>Authentication</code> là form đăng nhập. Trang <code>/login</code> và <code>/logout</code> mặc định cũng được cung cấp sẵn, cùng nhiều composition api khác hỗ trợ cho việc đăng nhập, đăng xuất, lấy thông tin người dùng, refresh token, ...</p>',4),r=[a];function i(h,d,u,g,s,l){return e(),n("div",null,r)}const m=t(c,[["render",i]]);export{_ as __pageData,m as default};
