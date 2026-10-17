import{_ as s,o as a,c as n,S as e}from"./chunks/framework.f15d8f8c.js";const _=JSON.parse('{"title":"HestiaCP Reverse proxy website","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/hestia-reverse-proxy.md","filePath":"introduction/hestia-reverse-proxy.md"}'),p={name:"introduction/hestia-reverse-proxy.md"},l=e(`<h1 id="hestiacp-reverse-proxy-website" tabindex="-1">HestiaCP Reverse proxy website <a class="header-anchor" href="#hestiacp-reverse-proxy-website" aria-label="Permalink to &quot;HestiaCP Reverse proxy website&quot;">​</a></h1><p>Add a new domian (website) you want to use for website or subscription address.</p><p>Edit the domain and Enable SSL for the domain</p><p>Select Use Let&#39;s Encrypt to obtain SSL certificate</p><p>Click on Advance option and Backend Template PHP-FPM select PHP-8_1</p><p>Click On SAVE to get certificate</p><h3 id="add-a-reverse-proxy" tabindex="-1">Add a reverse proxy <a class="header-anchor" href="#add-a-reverse-proxy" aria-label="Permalink to &quot;Add a reverse proxy&quot;">​</a></h3><p>Now login VPS with any FTP software like WinSCP</p><p>Edit your domain nginx ssl conf</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/home/user/conf/web/domain.com/nginx.ssl.conf</span></span></code></pre></div><p>Add this to your config. Replace www.xmplus.dev with your main website you install XMPlus on address</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location ^~ / {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">	}</span></span></code></pre></div><p>Delete below lines</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_pass https://172.26.7.119:8443;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">		location ~* ^.+\\.(css|htm|html|js|json|xml|apng|avif|bmp|cur|gif|ico|jfif|jpg|jpeg|pjp|pjpeg|png|svg|tif|tiff|webp|aac|caf|flac|m4a|midi|mp3|ogg|opus|wav|3gp|av1|avi|m4v|mkv|mov|mpg|mpeg|mp4|mp4v|webm|otf|ttf|woff|woff2|doc|docx|odf|odp|ods|odt|pdf|ppt|pptx|rtf|txt|xls|xlsx|7z|bz2|gz|rar|tar|tgz|zip|apk|appx|bin|dmg|exe|img|iso|jar|msi)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">			try_files  $uri @fallback;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">			root       /home/user/web/domain.com/public_html;</span></span>
<span class="line"><span style="color:#A6ACCD;">			access_log /var/log/apache2/domains/domain.com.log combined;</span></span>
<span class="line"><span style="color:#A6ACCD;">			access_log /var/log/apache2/domains/domain.com.bytes bytes;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">			expires    max;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	location @fallback {</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy_pass https://172.26.7.119:8443;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span></code></pre></div><h3 id="full-reverse-proxy-config" tabindex="-1">Full reverse proxy config <a class="header-anchor" href="#full-reverse-proxy-config" aria-label="Permalink to &quot;Full reverse proxy config&quot;">​</a></h3><p>/home/user/conf/web/sub.xmplus.dev/nginx.ssl.conf</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">	listen      8.8.8.8:443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">	server_name sub.xmplus.dev ;</span></span>
<span class="line"><span style="color:#A6ACCD;">	error_log   /var/log/apache2/domains/tld.com.error.log error;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	ssl_certificate     /home/user/conf/web/sub.xmplus.dev/ssl/sub.xmplus.dev.pem;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ssl_certificate_key /home/user/conf/web/sub.xmplus.dev/ssl/sub.xmplus.dev.key;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ssl_stapling        on;</span></span>
<span class="line"><span style="color:#A6ACCD;">	ssl_stapling_verify on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	# TLS 1.3 0-RTT anti-replay</span></span>
<span class="line"><span style="color:#A6ACCD;">	if ($anti_replay = 307) { return 307 https://$host$request_uri; }</span></span>
<span class="line"><span style="color:#A6ACCD;">	if ($anti_replay = 425) { return 425; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	include /home/user/conf/web/sub.xmplus.dev/nginx.hsts.conf*;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	location ~ /\\.(?!well-known\\/|file) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		deny all;</span></span>
<span class="line"><span style="color:#A6ACCD;">		return 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	location ^~ / {</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	location /error/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">		alias /home/user/web/tld.com/document_errors/;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	proxy_hide_header Upgrade;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	include /home/user/conf/web/tld.com/nginx.ssl.conf_*;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>Save and restart nginx</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span></code></pre></div><p>To set it as SubUrl address, edit your XMPlus config in <code>/home/user/web/domain.com/public_html/config/config.php</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># Subscription address; without http:// or https://</span></span>
<span class="line"><span style="color:#A6ACCD;">$_ENV[&#39;SubUrl&#39;] = &quot;sub.xmplus.dev&quot;;</span></span></code></pre></div>`,21),o=[l];function t(r,c,i,d,C,A){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{_ as __pageData,h as default};
