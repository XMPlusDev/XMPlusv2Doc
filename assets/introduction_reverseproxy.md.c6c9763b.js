import{_ as s,o as n,c as a,S as e}from"./chunks/framework.f15d8f8c.js";const D=JSON.parse('{"title":"Reverse proxy website","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/reverseproxy.md","filePath":"introduction/reverseproxy.md"}'),l={name:"introduction/reverseproxy.md"},p=e(`<h1 id="reverse-proxy-website" tabindex="-1">Reverse proxy website <a class="header-anchor" href="#reverse-proxy-website" aria-label="Permalink to &quot;Reverse proxy website&quot;">​</a></h1><h2 id="install-nginx-on-server" tabindex="-1">Install Nginx on server <a class="header-anchor" href="#install-nginx-on-server" aria-label="Permalink to &quot;Install Nginx on server&quot;">​</a></h2><p>CentOS：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">epel-release</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><p>Ubuntu/Debian:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span></code></pre></div><h2 id="create-sublink-conf-for-nginx-etc-nginx-conf-d-sublink-conf" tabindex="-1">Create sublink conf for nginx <code>/etc/nginx/conf.d/sublink.conf</code> <a class="header-anchor" href="#create-sublink-conf-for-nginx-etc-nginx-conf-d-sublink-conf" aria-label="Permalink to &quot;Create sublink conf for nginx \`\`\`/etc/nginx/conf.d/sublink.conf\`\`\`&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">	listen 443 ssl http2 so_keepalive=on; </span></span>
<span class="line"><span style="color:#A6ACCD;">    listen [::]:443 ssl http2;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  domain.tld; # change this domain</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /var/www/html;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	ssl_certificate /your/cert/domain.tld.crt; #change cert path</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key /your/key/domain.tld.key; #change cert key path</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_ciphers   ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location ^~ / {</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_ssl_server_name on;</span></span>
<span class="line"><span style="color:#A6ACCD;">		#proxy_ssl_protocols TLSv1.3;</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_pass https://www.xmplus.dev;  #Authorize domain website</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_set_header Host www.xmplus.dev; #Authorize domain </span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_set_header X-Forwarded-Host $host;</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_hide_header Upgrade;</span></span>
<span class="line"><span style="color:#A6ACCD;">		#add_header X-Cache $upstream_cache_status;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status nginx</span></span></code></pre></div>`,9),o=[p];function t(r,c,i,C,A,y){return n(),a("div",null,o)}const _=s(l,[["render",t]]);export{D as __pageData,_ as default};
