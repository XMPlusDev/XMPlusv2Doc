import{_ as s,o as a,c as n,S as l}from"./chunks/framework.f15d8f8c.js";const q=JSON.parse('{"title":"XrayR","description":"","frontmatter":{},"headers":[],"relativePath":"server/xrayr.md","filePath":"server/xrayr.md"}'),o={name:"server/xrayr.md"},e=l(`<h1 id="xrayr" tabindex="-1">XrayR <a class="header-anchor" href="#xrayr" aria-label="Permalink to &quot;XrayR&quot;">​</a></h1><p>XrayR v0.9.3</p><h3 id="etc-xrayr-config-yml" tabindex="-1">/etc/XrayR/config.yml <a class="header-anchor" href="#etc-xrayr-config-yml" aria-label="Permalink to &quot;/etc/XrayR/config.yml&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">Log:</span></span>
<span class="line"><span style="color:#A6ACCD;">  Level: warning # Log level: none, error, warning, info, debug</span></span>
<span class="line"><span style="color:#A6ACCD;">  AccessPath: # /etc/XrayR/access.Log</span></span>
<span class="line"><span style="color:#A6ACCD;">  ErrorPath: # /etc/XrayR/error.log</span></span>
<span class="line"><span style="color:#A6ACCD;">DnsConfigPath: # /etc/XrayR/dns.json # Path to dns config, check https://xtls.github.io/config/dns.html for help</span></span>
<span class="line"><span style="color:#A6ACCD;">RouteConfigPath: # /etc/XrayR/route.json # Path to route config, check https://xtls.github.io/config/routing.html for help</span></span>
<span class="line"><span style="color:#A6ACCD;">InboundConfigPath: # /etc/XrayR/custom_inbound.json # Path to custom inbound config, check https://xtls.github.io/config/inbound.html for help</span></span>
<span class="line"><span style="color:#A6ACCD;">OutboundConfigPath: # /etc/XrayR/custom_outbound.json # Path to custom outbound config, check https://xtls.github.io/config/outbound.html for help</span></span>
<span class="line"><span style="color:#A6ACCD;">ConnectionConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">  Handshake: 4 # Handshake time limit, Second</span></span>
<span class="line"><span style="color:#A6ACCD;">  ConnIdle: 30 # Connection idle time limit, Second</span></span>
<span class="line"><span style="color:#A6ACCD;">  UplinkOnly: 2 # Time limit when the connection downstream is closed, Second</span></span>
<span class="line"><span style="color:#A6ACCD;">  DownlinkOnly: 4 # Time limit when the connection is closed after the uplink is closed, Second</span></span>
<span class="line"><span style="color:#A6ACCD;">  BufferSize: 64 # The internal cache size of each connection, kB</span></span>
<span class="line"><span style="color:#A6ACCD;">Nodes:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - PanelType: &quot;SSpanel&quot; # Panel type: SSpanel, NewV2board, PMpanel, Proxypanel, V2RaySocks, GoV2Panel, BunPanel</span></span>
<span class="line"><span style="color:#A6ACCD;">    ApiConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">      ApiHost: &quot;http://127.0.0.1:667&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ApiKey: &quot;123&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      NodeID: 41</span></span>
<span class="line"><span style="color:#A6ACCD;">      NodeType: V2ray # Node type: V2ray, Vmess, Vless, Shadowsocks, Trojan, Shadowsocks-Plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">      Timeout: 30 # Timeout for the api request</span></span>
<span class="line"><span style="color:#A6ACCD;">      EnableVless: false # Enable Vless for V2ray Type</span></span>
<span class="line"><span style="color:#A6ACCD;">      VlessFlow: &quot;xtls-rprx-vision&quot; # Only support vless</span></span>
<span class="line"><span style="color:#A6ACCD;">      SpeedLimit: 0 # Mbps, Local settings will replace remote settings, 0 means disable</span></span>
<span class="line"><span style="color:#A6ACCD;">      DeviceLimit: 0 # Local settings will replace remote settings, 0 means disable</span></span>
<span class="line"><span style="color:#A6ACCD;">      RuleListPath: # /etc/XrayR/rulelist Path to local rulelist file</span></span>
<span class="line"><span style="color:#A6ACCD;">      DisableCustomConfig: false # disable custom config for sspanel</span></span>
<span class="line"><span style="color:#A6ACCD;">    ControllerConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">      ListenIP: 0.0.0.0 # IP address you want to listen</span></span>
<span class="line"><span style="color:#A6ACCD;">      SendIP: 0.0.0.0 # IP address you want to send pacakage</span></span>
<span class="line"><span style="color:#A6ACCD;">      UpdatePeriodic: 60 # Time to update the nodeinfo, how many sec.</span></span>
<span class="line"><span style="color:#A6ACCD;">      EnableDNS: false # Use custom DNS config, Please ensure that you set the dns.json well</span></span>
<span class="line"><span style="color:#A6ACCD;">      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS strategy</span></span>
<span class="line"><span style="color:#A6ACCD;">      EnableProxyProtocol: false # Only works for WebSocket and TCP</span></span>
<span class="line"><span style="color:#A6ACCD;">      AutoSpeedLimitConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Limit: 0 # Warned speed. Set to 0 to disable AutoSpeedLimit (mbps)</span></span>
<span class="line"><span style="color:#A6ACCD;">        WarnTimes: 0 # After (WarnTimes) consecutive warnings, the user will be limited. Set to 0 to punish overspeed user immediately.</span></span>
<span class="line"><span style="color:#A6ACCD;">        LimitSpeed: 0 # The speedlimit of a limited user (unit: mbps)</span></span>
<span class="line"><span style="color:#A6ACCD;">        LimitDuration: 0 # How many minutes will the limiting last (unit: minute)</span></span>
<span class="line"><span style="color:#A6ACCD;">      GlobalDeviceLimitConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Enable: false # Enable the global device limit of a user</span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisNetwork: tcp # Redis protocol, tcp or unix</span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisAddr: 127.0.0.1:6379 # Redis server address, or unix socket path</span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisUsername: # Redis username</span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisPassword: YOUR PASSWORD # Redis password</span></span>
<span class="line"><span style="color:#A6ACCD;">        RedisDB: 0 # Redis DB</span></span>
<span class="line"><span style="color:#A6ACCD;">        Timeout: 5 # Timeout for redis request</span></span>
<span class="line"><span style="color:#A6ACCD;">        Expiry: 60 # Expiry time (second)</span></span>
<span class="line"><span style="color:#A6ACCD;">      EnableFallback: false # Only support for Trojan and Vless</span></span>
<span class="line"><span style="color:#A6ACCD;">      FallBackConfigs:  # Support multiple fallbacks</span></span>
<span class="line"><span style="color:#A6ACCD;">        - SNI: # TLS SNI(Server Name Indication), Empty for any</span></span>
<span class="line"><span style="color:#A6ACCD;">          Alpn: # Alpn, Empty for any</span></span>
<span class="line"><span style="color:#A6ACCD;">          Path: # HTTP PATH, Empty for any</span></span>
<span class="line"><span style="color:#A6ACCD;">          Dest: 80 # Required, Destination of fallback, check https://xtls.github.io/config/features/fallback.html for details.</span></span>
<span class="line"><span style="color:#A6ACCD;">          ProxyProtocolVer: 0 # Send PROXY protocol version, 0 for disable</span></span>
<span class="line"><span style="color:#A6ACCD;">      DisableLocalREALITYConfig: true  # disable local reality config</span></span>
<span class="line"><span style="color:#A6ACCD;">      EnableREALITY: false # Enable REALITY</span></span>
<span class="line"><span style="color:#A6ACCD;">      REALITYConfigs:</span></span>
<span class="line"><span style="color:#A6ACCD;">        Show: true # Show REALITY debug</span></span>
<span class="line"><span style="color:#A6ACCD;">        Dest: www.amazon.com:443 # Required, Same as fallback</span></span>
<span class="line"><span style="color:#A6ACCD;">        ProxyProtocolVer: 0 # Send PROXY protocol version, 0 for disable</span></span>
<span class="line"><span style="color:#A6ACCD;">        ServerNames: # Required, list of available serverNames for the client, * wildcard is not supported at the moment.</span></span>
<span class="line"><span style="color:#A6ACCD;">          - www.amazon.com</span></span>
<span class="line"><span style="color:#A6ACCD;">        PrivateKey: YOUR_PRIVATE_KEY # Required, execute &#39;./XrayR x25519&#39; to generate.</span></span>
<span class="line"><span style="color:#A6ACCD;">        MinClientVer: # Optional, minimum version of Xray client, format is x.y.z.</span></span>
<span class="line"><span style="color:#A6ACCD;">        MaxClientVer: # Optional, maximum version of Xray client, format is x.y.z.</span></span>
<span class="line"><span style="color:#A6ACCD;">        MaxTimeDiff: 0 # Optional, maximum allowed time difference, unit is in milliseconds.</span></span>
<span class="line"><span style="color:#A6ACCD;">        ShortIds: # Required, list of available shortIds for the client, can be used to differentiate between different clients.</span></span>
<span class="line"><span style="color:#A6ACCD;">          - &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          - 0123456789abcdef</span></span>
<span class="line"><span style="color:#A6ACCD;">      CertConfig:</span></span>
<span class="line"><span style="color:#A6ACCD;">        CertMode: dns # Option about how to get certificate: none, file, http, tls, dns. Choose &quot;none&quot; will forcedly disable the tls config.</span></span>
<span class="line"><span style="color:#A6ACCD;">        CertDomain: &quot;node1.test.com&quot; # Domain to cert</span></span>
<span class="line"><span style="color:#A6ACCD;">        CertFile: /etc/XrayR/cert/node1.test.com.cert # Provided if the CertMode is file</span></span>
<span class="line"><span style="color:#A6ACCD;">        KeyFile: /etc/XrayR/cert/node1.test.com.key</span></span>
<span class="line"><span style="color:#A6ACCD;">        Provider: alidns # DNS cert provider, Get the full support list here: https://go-acme.github.io/lego/dns/</span></span>
<span class="line"><span style="color:#A6ACCD;">        Email: test@me.com</span></span>
<span class="line"><span style="color:#A6ACCD;">        DNSEnv: # DNS ENV option used by DNS provider</span></span>
<span class="line"><span style="color:#A6ACCD;">          ALICLOUD_ACCESS_KEY: aaa</span></span>
<span class="line"><span style="color:#A6ACCD;">          ALICLOUD_SECRET_KEY: bbb</span></span></code></pre></div><h2 id="panel-server-configuration" tabindex="-1">Panel Server configuration <a class="header-anchor" href="#panel-server-configuration" aria-label="Permalink to &quot;Panel Server configuration&quot;">​</a></h2><h3 id="network-settings" tabindex="-1">Network Settings <a class="header-anchor" href="#network-settings" aria-label="Permalink to &quot;Network Settings&quot;">​</a></h3><h4 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  &quot;headers&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;host&quot;: &quot;hk1.xyz.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="h2" tabindex="-1">H2 <a class="header-anchor" href="#h2" aria-label="Permalink to &quot;H2&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;h2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;acceptProxyProtocol&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;host&quot;: &quot;hk1.xyz.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;path&quot;: &quot;/&quot;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">  &quot;headers&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;host&quot;: &quot;hk1.xyz.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="splithttp" tabindex="-1">SPLITHTTP <a class="header-anchor" href="#splithttp" aria-label="Permalink to &quot;SPLITHTTP&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;transport&quot; : &quot;splithttp&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;host&quot;: &quot;hk1.xyz.com&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;path&quot;: &quot;/&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;headers&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;host&quot;: &quot;hk1.xyz.com&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;maxUploadSize&quot;: 1000000,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;maxConcurrentUploads&quot;: 10 </span></span>
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
<span class="line"><span style="color:#A6ACCD;">  &quot;sni&quot; : &quot;xmplus.dev&quot;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,30),t=[e];function p(c,i,r,C,u,A){return a(),n("div",null,t)}const d=s(o,[["render",p]]);export{q as __pageData,d as default};
