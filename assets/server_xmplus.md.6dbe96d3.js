import{_ as s,o as a,c as n,S as l}from"./chunks/framework.f15d8f8c.js";const y=JSON.parse('{"title":"XMPlus","description":"","frontmatter":{},"headers":[],"relativePath":"server/xmplus.md","filePath":"server/xmplus.md"}'),o={name:"server/xmplus.md"},e=l(`<h1 id="xmplus" tabindex="-1">XMPlus <a class="header-anchor" href="#xmplus" aria-label="Permalink to &quot;XMPlus&quot;">​</a></h1><p>XMPlus v1.0.8</p><h3 id="etc-xmplus-config-yml" tabindex="-1">/etc/XMPlus/config.yml <a class="header-anchor" href="#etc-xmplus-config-yml" aria-label="Permalink to &quot;/etc/XMPlus/config.yml&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Log:</span></span>
<span class="line"><span style="color:#A6ACCD;">  Level: warning # Log level: none, error, warning, info, debug </span></span>
<span class="line"><span style="color:#A6ACCD;">  AccessPath: # /etc/XMPlus/access.Log</span></span>
<span class="line"><span style="color:#A6ACCD;">  ErrorPath: # /etc/XMPlus/error.log</span></span>
<span class="line"><span style="color:#A6ACCD;">DnsConfigPath:  #/etc/XMPlus/dns.json</span></span>
<span class="line"><span style="color:#A6ACCD;">RouteConfigPath: # /etc/XMPlus/route.json</span></span>
<span class="line"><span style="color:#A6ACCD;">InboundConfigPath: # /etc/XMPlus/inbound.json</span></span>
<span class="line"><span style="color:#A6ACCD;">OutboundConfigPath: # /etc/XMPlus/outbound.json</span></span>
<span class="line"><span style="color:#A6ACCD;">ConnectionConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">  Handshake: 8 </span></span>
<span class="line"><span style="color:#A6ACCD;">  ConnIdle: 300 </span></span>
<span class="line"><span style="color:#A6ACCD;">  UplinkOnly: 0 </span></span>
<span class="line"><span style="color:#A6ACCD;">  DownlinkOnly: 0 </span></span>
<span class="line"><span style="color:#A6ACCD;">  BufferSize: 64</span></span>
<span class="line"><span style="color:#A6ACCD;">Nodes:</span></span>
<span class="line"><span style="color:#A6ACCD;">  -</span></span>
<span class="line"><span style="color:#A6ACCD;">    ApiConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">      ApiHost: &quot;https://www.xyz.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ApiKey: &quot;123&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      NodeID: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">      Timeout: 30 </span></span>
<span class="line"><span style="color:#A6ACCD;">      RuleListPath: # /etc/XMPlus/rulelist Path to local rulelist file</span></span>
<span class="line"><span style="color:#A6ACCD;">    ControllerConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">      EnableDNS: false # Use custom DNS config, Please ensure that you set the dns.json well</span></span>
<span class="line"><span style="color:#A6ACCD;">      DNSStrategy: AsIs # AsIs, UseIP, UseIPv4, UseIPv6</span></span>
<span class="line"><span style="color:#A6ACCD;">      CertConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Email: author@xmplus.dev                    # Required when Cert Mode is not none</span></span>
<span class="line"><span style="color:#A6ACCD;">        CertFile: /etc/XMPlus/node1.xmplus.dev.crt  # Required when Cert Mode is file</span></span>
<span class="line"><span style="color:#A6ACCD;">        KeyFile: /etc/XMPlus/node1.xmplus.dev.key   # Required when Cert Mode is file</span></span>
<span class="line"><span style="color:#A6ACCD;">        Provider: cloudflare                        # Required when Cert Mode is dns</span></span>
<span class="line"><span style="color:#A6ACCD;">        CertEnv:                                    # Required when Cert Mode is dns</span></span>
<span class="line"><span style="color:#A6ACCD;">          CLOUDFLARE_EMAIL:                         # Required when Cert Mode is dns</span></span>
<span class="line"><span style="color:#A6ACCD;">          CLOUDFLARE_API_KEY:                       # Required when Cert Mode is dns</span></span>
<span class="line"><span style="color:#A6ACCD;">      EnableFallback: false # Only support for Trojan and Vless</span></span>
<span class="line"><span style="color:#A6ACCD;">      FallBackConfigs:  # Support multiple fallbacks</span></span>
<span class="line"><span style="color:#A6ACCD;">        - SNI: # TLS SNI(Server Name Indication), Empty for any</span></span>
<span class="line"><span style="color:#A6ACCD;">          Alpn: # Alpn, Empty for any</span></span>
<span class="line"><span style="color:#A6ACCD;">          Path: # HTTP PATH, Empty for any</span></span>
<span class="line"><span style="color:#A6ACCD;">          Dest: 80 # Required, Destination of fallback, check https://xtls.github.io/config/features/fallback.html for details.</span></span>
<span class="line"><span style="color:#A6ACCD;">          ProxyProtocolVer: 0 # Send PROXY protocol version, 0 for disable</span></span>
<span class="line"><span style="color:#A6ACCD;">      IPLimit:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Enable: false # Enable the global ip limit of a user </span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisNetwork: tcp # Redis protocol, tcp or unix</span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisAddr: 127.0.0.1:6379 # Redis server address, or unix socket path</span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisUsername: default # Redis username</span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisPassword: YOURPASSWORD # Redis password</span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisDB: 0 # Redis DB</span></span>
<span class="line"><span style="color:#A6ACCD;">        Timeout: 5 # Timeout for redis request</span></span>
<span class="line"><span style="color:#A6ACCD;">        Expiry: 60 # Expiry time (second)</span></span></code></pre></div><h2 id="panel-server-configuration" tabindex="-1">Panel Server configuration <a class="header-anchor" href="#panel-server-configuration" aria-label="Permalink to &quot;Panel Server configuration&quot;">​</a></h2><h3 id="network-settings" tabindex="-1">Network Settings <a class="header-anchor" href="#network-settings" aria-label="Permalink to &quot;Network Settings&quot;">​</a></h3><h4 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;tcp&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;acceptProxyProtocol&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;flow&quot;: &quot;xtls-rprx-vision&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;header&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;type&quot;: &quot;none&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="tcp-http" tabindex="-1">TCP + HTTP <a class="header-anchor" href="#tcp-http" aria-label="Permalink to &quot;TCP + HTTP&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;tcp&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;acceptProxyProtocol&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;header&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;type&quot;: &quot;http&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;request&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;path&quot;: &quot;/xmplus&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;headers&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;Host&quot;: [&quot;www.baidu.com&quot;, &quot;www.taobao.com&quot;, &quot;www.cloudflare.com&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="ws" tabindex="-1">WS <a class="header-anchor" href="#ws" aria-label="Permalink to &quot;WS&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot;: &quot;ws&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;acceptProxyProtocol&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;path&quot;: &quot;/xmplus?ed=2560&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;host&quot;: &quot;hk1.xyz.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;cdn_host&quot;: &quot;www.cloudflare.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="h2" tabindex="-1">H2 <a class="header-anchor" href="#h2" aria-label="Permalink to &quot;H2&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;h2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;acceptProxyProtocol&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;host&quot;: &quot;hk1.xyz.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;path&quot;: &quot;/&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;cdn_host&quot;: &quot;www.cloudflare.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="grpc" tabindex="-1">GRPC <a class="header-anchor" href="#grpc" aria-label="Permalink to &quot;GRPC&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;grpc&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;acceptProxyProtocol&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;serviceName&quot;: &quot;xmplus&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;authority&quot;: &quot;hk1.xyz.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="httpupgrade" tabindex="-1">HTTPUPGRADE <a class="header-anchor" href="#httpupgrade" aria-label="Permalink to &quot;HTTPUPGRADE&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;httpupgrade&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;acceptProxyProtocol&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;host&quot;: &quot;hk1.xyz.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;path&quot;: &quot;/xmplus?ed=2560&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;cdn_host&quot;: &quot;www.cloudflare.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="splithttp" tabindex="-1">SPLITHTTP <a class="header-anchor" href="#splithttp" aria-label="Permalink to &quot;SPLITHTTP&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;splithttp&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;host&quot;: &quot;hk1.xyz.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;cdn_host&quot;: &quot;www.cloudflare.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;path&quot;: &quot;/&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scMaxEachPostBytes&quot;: 1000000,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scMaxConcurrentPosts&quot;: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scMinPostsIntervalMs&quot;: 30,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;noSSEHeader&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="quic" tabindex="-1">QUIC <a class="header-anchor" href="#quic" aria-label="Permalink to &quot;QUIC&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;quic&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;acceptProxyProtocol&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;security&quot;: &quot;none&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;key&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;header&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;type&quot;: &quot;none&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="kcp" tabindex="-1">KCP <a class="header-anchor" href="#kcp" aria-label="Permalink to &quot;KCP&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;kcp&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;acceptProxyProtocol&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;congestion&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;header&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;type&quot;: &quot;none&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;seed&quot;: &quot;password&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="security-settings" tabindex="-1">Security Settings <a class="header-anchor" href="#security-settings" aria-label="Permalink to &quot;Security Settings&quot;">​</a></h3><h4 id="tls" tabindex="-1">TLS <a class="header-anchor" href="#tls" aria-label="Permalink to &quot;TLS&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;serverName&quot;: &quot;xmplus.dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;rejectUnknownSni&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;allowInsecure&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;fingerprint&quot;: &quot;chrome&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;sni&quot; : &quot;xmplus.dev&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;alpn&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;http/1.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;h2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="reality" tabindex="-1">REALITY <a class="header-anchor" href="#reality" aria-label="Permalink to &quot;REALITY&quot;">​</a></h4><p><a href="https://go.dev/play/p/N5kQhIjtye7" target="_blank" rel="noreferrer">Generate Private and Public Keys Here</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;show&quot; : false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;dest&quot;: &quot;www.lovelive-anime.jp:443&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;privatekey&quot; : &quot;yBaw532IIUNuQWDTncozoBaLJmcd1JZzvsHUgVPxMk8&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;minclientver&quot;:&quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;maxclientver&quot;:&quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;maxtimediff&quot;:0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;proxyprotocol&quot;:0,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;shortids&quot; : [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;6ba85179e30d4fc2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;serverNames&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;www.lovelive-anime.jp&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;www.cloudflare.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;fingerprint&quot;: &quot;chrome&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;spiderx&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;publickey&quot;: &quot;7xhH4b_VkliBxGulljcyPOH-bYUA2dl-XAdZAsfhk04&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,30),t=[e];function p(c,r,i,u,C,A){return a(),n("div",null,t)}const d=s(o,[["render",p]]);export{y as __pageData,d as default};
