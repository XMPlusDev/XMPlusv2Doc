import{_ as s,o as n,c as a,S as l}from"./chunks/framework.f15d8f8c.js";const D=JSON.parse('{"title":"Using CDN for server address","description":"","frontmatter":{},"headers":[],"relativePath":"backend/proxy.md","filePath":"backend/proxy.md"}'),p={name:"backend/proxy.md"},e=l(`<h1 id="using-cdn-for-server-address" tabindex="-1">Using CDN for server address <a class="header-anchor" href="#using-cdn-for-server-address" aria-label="Permalink to &quot;Using CDN for server address&quot;">​</a></h1><h2 id="install-nginx-on-backend-server" tabindex="-1">Install Nginx on backend server <a class="header-anchor" href="#install-nginx-on-backend-server" aria-label="Permalink to &quot;Install Nginx on backend server&quot;">​</a></h2><p>Ubuntu/Debian(Recommended):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span></code></pre></div><p>CentOS：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">epel-release</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><p>If using cloudflare cdn, login to Cloudflare &gt; Network &gt; Enable websocket and grpc</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># HTTP(NO TLS) ports supported by Cloudflare for nginx server</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">80</span></span>
<span class="line"><span style="color:#A6ACCD;">8080</span></span>
<span class="line"><span style="color:#A6ACCD;">8880</span></span>
<span class="line"><span style="color:#A6ACCD;">2052</span></span>
<span class="line"><span style="color:#A6ACCD;">2082</span></span>
<span class="line"><span style="color:#A6ACCD;">2086</span></span>
<span class="line"><span style="color:#A6ACCD;">2095</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># HTTPS(TLS) ports supported by Cloudflare for nginx server</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">443</span></span>
<span class="line"><span style="color:#A6ACCD;">2053</span></span>
<span class="line"><span style="color:#A6ACCD;">2083</span></span>
<span class="line"><span style="color:#A6ACCD;">2087</span></span>
<span class="line"><span style="color:#A6ACCD;">2096</span></span>
<span class="line"><span style="color:#A6ACCD;">8443</span></span></code></pre></div><p>Create a custom config file and put in /etc/nginx/conf.d/ directory. Example <code>/etc/nginx/conf.d/cdn.conf</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">	#listen 443 ssl http2 so_keepalive=on;  #if using tls can enable http2, with cdn acceptable port</span></span>
<span class="line"><span style="color:#A6ACCD;">    #listen [::]:443 ssl http2;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    listen 8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen [::]:8080; # cdn acceptable port</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  x.tld.com; # XMPlus cdn server(node) address</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /var/www/html;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	#If using tls</span></span>
<span class="line"><span style="color:#A6ACCD;">	ssl_certificate /your/cert/x.tld.com.crt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key /your/key/x.tld.com.key;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_ciphers           ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    client_header_timeout 52w;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout 52w;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	#tls config ends</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# cloudflare cdn ip ranges</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 103.21.244.0/22;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 103.22.200.0/22;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 103.31.4.0/22;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 104.16.0.0/12;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 108.162.192.0/18;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 131.0.72.0/22;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 141.101.64.0/18;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 162.158.0.0/15;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 172.64.0.0/13;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 173.245.48.0/20;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 188.114.96.0/20;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 190.93.240.0/20;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 197.234.240.0/22;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 198.41.128.0/17;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 2400:cb00::/32;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 2606:4700::/32;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 2803:f800::/32;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 2405:b500::/32;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 2405:8100::/32;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 2c0f:f248::/32;</span></span>
<span class="line"><span style="color:#A6ACCD;">    set_real_ip_from 2a06:98c0::/29;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    real_ip_header CF-Connecting-IP;    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	# GRPC configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    location /grpc/Tun { #Your server GRPC ServiceName. Example if your ServiceName is xmplus must be  /xmplus</span></span>
<span class="line"><span style="color:#A6ACCD;">        if ($content_type !~ &quot;application/grpc&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        client_max_body_size 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        client_body_timeout 60m;</span></span>
<span class="line"><span style="color:#A6ACCD;">        send_timeout 60m;</span></span>
<span class="line"><span style="color:#A6ACCD;">        lingering_close always;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        grpc_read_timeout 3m;</span></span>
<span class="line"><span style="color:#A6ACCD;">        grpc_send_timeout 2m;</span></span>
<span class="line"><span style="color:#A6ACCD;">        grpc_set_header Host $host;</span></span>
<span class="line"><span style="color:#A6ACCD;">        grpc_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">        grpc_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">        grpc_pass grpc://127.0.0.1:Listening Port;  #Example if your 8888 must set  grpc_pass grpc://127.0.0.1:8888</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	Websocket configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    location /xmplus {  #Your server Websocket Path</span></span>
<span class="line"><span style="color:#A6ACCD;">        if ($http_upgrade != &quot;websocket&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_redirect off;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://127.0.0.1:Listening Port; #Example if your 8888 must set proxy_pass http://127.0.0.1:8888</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>Enable and restart nginx</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl enable nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop nginx</span></span></code></pre></div><h2 id="arvancloud-cdn-only-support-ws-ip-range" tabindex="-1">Arvancloud CDN (Only support WS) IP Range <a class="header-anchor" href="#arvancloud-cdn-only-support-ws-ip-range" aria-label="Permalink to &quot;Arvancloud CDN (Only support WS) IP Range&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">set_real_ip_from 185.143.232.0/22;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 92.114.16.80/28;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 2.146.0.0/28;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 46.224.2.32/29;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 83.123.255.56/31;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 188.229.116.16/29;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 164.138.128.28/31;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 94.182.182.28/30;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 185.17.115.176/30;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 5.213.255.36/31;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 185.228.238.0/28;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 94.182.153.24/29;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 94.101.182.0/27;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 158.255.77.238/31;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 81.12.28.16/29;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 176.65.192.202/31;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 2.144.3.128/28;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 89.45.48.64/28;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 37.32.16.0/27;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 37.32.17.0/27;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 37.32.18.0/27;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 37.32.19.0/27;</span></span>
<span class="line"><span style="color:#A6ACCD;">set_real_ip_from 185.215.232.0/22;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">real_ip_header ar-real-ip;</span></span></code></pre></div>`,14),o=[e];function r(t,c,C,i,A,_){return n(),a("div",null,o)}const d=s(p,[["render",r]]);export{D as __pageData,d as default};
