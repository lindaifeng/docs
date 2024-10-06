import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,f as i}from"./app-CVwXyvSk.js";const n={},l=i(`<h2 id="elk登录认证" tabindex="-1"><a class="header-anchor" href="#elk登录认证"><span>ELK登录认证</span></a></h2><blockquote><p>当我们安装好ELK后，默认是可以直接访问到kibana的，可以直接查看收集到的信息，这样很不安全。</p><p>很多人采用的是Nginx代理来做登录验证功能，这也是一种实现方式，但是我们还有另一种更加优雅的方式，kibana其实有为我们提供认证登录的方式。</p></blockquote><p>下面我将介绍通过kibana认证登录的方式访问elk</p><p>实现步骤</p><p>1、ES设置密码</p><p>2、Kibana设置连接方式</p><p>3、Logstash设置连接方式</p><h3 id="一、elasticsearch安全认证" tabindex="-1"><a class="header-anchor" href="#一、elasticsearch安全认证"><span>一、ElasticSearch安全认证</span></a></h3><p>给es加上用户名和密码（docker启动方法一致）</p><h4 id="_1、编辑-elasticsearch-配置文件" tabindex="-1"><a class="header-anchor" href="#_1、编辑-elasticsearch-配置文件"><span>1、编辑 Elasticsearch 配置文件</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#编辑 Elasticsearch 配置文件elasticsearch.yml</span></span>
<span class="line"><span>vim /etc/elasticsearch/elasticsearch.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、加上开启验证功能配置" tabindex="-1"><a class="header-anchor" href="#_2、加上开启验证功能配置"><span>2、加上开启验证功能配置</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 开启密码</span></span>
<span class="line"><span>xpack.security.transport.ssl.enabled: true</span></span>
<span class="line"><span>xpack.security.enabled: true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、保存重启-elasticsearch-服务" tabindex="-1"><a class="header-anchor" href="#_3、保存重启-elasticsearch-服务"><span>3、保存重启 Elasticsearch 服务</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>systemctl restart elasticsearch</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>docker restart xxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、设置密码" tabindex="-1"><a class="header-anchor" href="#_4、设置密码"><span>4、设置密码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1、linux版</span></span>
<span class="line"><span>sudo /usr/share/elasticsearch/bin/elasticsearch-setup-passwords interactive</span></span>
<span class="line"><span>2、docker版</span></span>
<span class="line"><span># 进入docker </span></span>
<span class="line"><span>docker exec -it elk /bin/bash</span></span>
<span class="line"><span>cd /opt/elasticsearch/bin</span></span>
<span class="line"><span># 手动设置密码</span></span>
<span class="line"><span>./elasticsearch-setup-passwords interactive</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在后面的提示中配置密码，配置密码即可, 会有很多个密码， 建议都配一样的</p><h4 id="_5、验证是否生效" tabindex="-1"><a class="header-anchor" href="#_5、验证是否生效"><span>5、验证是否生效</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> 1、直接访问浏览器是否提示需要输入认证信息</span></span>
<span class="line"><span>127.0.0.1：9200</span></span>
<span class="line"><span> 或者</span></span>
<span class="line"><span> 2、命令提示是否未认证报错</span></span>
<span class="line"><span> curl 127.0.0.1:9200</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、kibana安全认证" tabindex="-1"><a class="header-anchor" href="#二、kibana安全认证"><span>二、Kibana安全认证</span></a></h3><p>此处有两种方法：</p><h4 id="_1、方法一" tabindex="-1"><a class="header-anchor" href="#_1、方法一"><span>1、方法一</span></a></h4><p>在 <code>kibana.yml</code> 文件中填写连接ES的用户凭证，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># elk体系有很多的用户组，elastic是默认的用户组之一，可以使用默认的用户，也可以自定义用户</span></span>
<span class="line"><span>elasticsearch.username: &quot;elastic&quot; </span></span>
<span class="line"><span>elasticsearch.password: &quot;1qaz@WSX3edc&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、方法二" tabindex="-1"><a class="header-anchor" href="#_2、方法二"><span>2、方法二</span></a></h4><p>如果你不想将用户ID和密码放在kibana.yml文件中明文配置，可以将它们存储在密钥库中。运行以下命令以创建Kibana密钥库并添加配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>./bin/kibana-keystore create</span></span>
<span class="line"><span>./bin/kibana-keystore add elasticsearch.username</span></span>
<span class="line"><span>【输入elasticsearch用户名】</span></span>
<span class="line"><span>./bin/kibana-keystore add elasticsearch.password</span></span>
<span class="line"><span>【输入elasticsearch的密码】</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、重启服务" tabindex="-1"><a class="header-anchor" href="#_3、重启服务"><span>3、重启服务</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>systemctl restart kibana</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>docker restart xxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、、验证是否生效" tabindex="-1"><a class="header-anchor" href="#_4、、验证是否生效"><span>4、、验证是否生效</span></a></h4><p>浏览器中输入kibana的地址，如http://127.0.0.1:5601/，进入页面</p><h3 id="三、logstash安全认证" tabindex="-1"><a class="header-anchor" href="#三、logstash安全认证"><span>三、Logstash安全认证</span></a></h3><h4 id="_1、修改logstash配置文件" tabindex="-1"><a class="header-anchor" href="#_1、修改logstash配置文件"><span>1、修改Logstash配置文件</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vim /etc/logstash/conf.d/30-elasticsearch-output.conf </span></span>
<span class="line"><span>#有的不叫这个，具体叫啥根据事实而定</span></span>
<span class="line"><span>vim /etc/logstash/conf.d/xxx.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、添加es账号和密码" tabindex="-1"><a class="header-anchor" href="#_2、添加es账号和密码"><span>2、添加es账号和密码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>output {</span></span>
<span class="line"><span>  elasticsearch {</span></span>
<span class="line"><span>    hosts =&gt; [&quot;localhost:9200&quot;]</span></span>
<span class="line"><span>    user  =&gt; &quot;elastic&quot;</span></span>
<span class="line"><span>    password  =&gt; &quot;123456&quot;</span></span>
<span class="line"><span>    manage_template =&gt; false</span></span>
<span class="line"><span>    index =&gt; &quot;%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、重启服务-1" tabindex="-1"><a class="header-anchor" href="#_3、重启服务-1"><span>3、重启服务</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>systemctl restart logstash</span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span>docker restart xxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ELK的密码认证方式到此成功设置完毕</strong></p><h3 id="四、修改用户密码-可选" tabindex="-1"><a class="header-anchor" href="#四、修改用户密码-可选"><span>四、修改用户密码（可选）</span></a></h3><p>在 “管理” 里面可以看见多了个“安全性”</p><p>可以修改“用户/角色”的密码以及创建“新用户/角色”。</p>`,43),t=[l];function r(d,c){return e(),s("div",null,t)}const o=a(n,[["render",r],["__file","ELK登录认证配置.html.vue"]]),b=JSON.parse('{"path":"/middleware/ELK%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E6%8A%80%E6%9C%AF/ELK%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html","title":"ELK登录认证配置","lang":"zh-CN","frontmatter":{"title":"ELK登录认证配置","categories":["ELK"],"tags":["elk"],"order":1,"description":"ELK登录认证 当我们安装好ELK后，默认是可以直接访问到kibana的，可以直接查看收集到的信息，这样很不安全。 很多人采用的是Nginx代理来做登录验证功能，这也是一种实现方式，但是我们还有另一种更加优雅的方式，kibana其实有为我们提供认证登录的方式。 下面我将介绍通过kibana认证登录的方式访问elk 实现步骤 1、ES设置密码 2、Kib...","head":[["meta",{"property":"og:url","content":"https://github.com/lindaifeng/docs/docs/middleware/ELK%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E6%8A%80%E6%9C%AF/ELK%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"ELK登录认证配置"}],["meta",{"property":"og:description","content":"ELK登录认证 当我们安装好ELK后，默认是可以直接访问到kibana的，可以直接查看收集到的信息，这样很不安全。 很多人采用的是Nginx代理来做登录验证功能，这也是一种实现方式，但是我们还有另一种更加优雅的方式，kibana其实有为我们提供认证登录的方式。 下面我将介绍通过kibana认证登录的方式访问elk 实现步骤 1、ES设置密码 2、Kib..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-11T03:57:59.000Z"}],["meta",{"property":"article:author","content":"清峰"}],["meta",{"property":"article:tag","content":"elk"}],["meta",{"property":"article:modified_time","content":"2024-09-11T03:57:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ELK登录认证配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-11T03:57:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清峰\\",\\"url\\":\\"https://github.com/lindaifeng/docs\\"}]}"]]},"headers":[{"level":2,"title":"ELK登录认证","slug":"elk登录认证","link":"#elk登录认证","children":[{"level":3,"title":"一、ElasticSearch安全认证","slug":"一、elasticsearch安全认证","link":"#一、elasticsearch安全认证","children":[]},{"level":3,"title":"二、Kibana安全认证","slug":"二、kibana安全认证","link":"#二、kibana安全认证","children":[]},{"level":3,"title":"三、Logstash安全认证","slug":"三、logstash安全认证","link":"#三、logstash安全认证","children":[]},{"level":3,"title":"四、修改用户密码（可选）","slug":"四、修改用户密码-可选","link":"#四、修改用户密码-可选","children":[]}]}],"git":{"createdTime":1726027079000,"updatedTime":1726027079000,"contributors":[{"name":"ldf","email":"1305366530@qq.com","commits":1}]},"readingTime":{"minutes":2.26,"words":677},"filePathRelative":"middleware/ELK日志收集技术/ELK登录认证配置.md","localizedDate":"2024年9月11日","autoDesc":true,"excerpt":"<h2>ELK登录认证</h2>\\n<blockquote>\\n<p>当我们安装好ELK后，默认是可以直接访问到kibana的，可以直接查看收集到的信息，这样很不安全。</p>\\n<p>很多人采用的是Nginx代理来做登录验证功能，这也是一种实现方式，但是我们还有另一种更加优雅的方式，kibana其实有为我们提供认证登录的方式。</p>\\n</blockquote>\\n<p>下面我将介绍通过kibana认证登录的方式访问elk</p>\\n<p>实现步骤</p>\\n<p>1、ES设置密码</p>\\n<p>2、Kibana设置连接方式</p>\\n<p>3、Logstash设置连接方式</p>\\n<h3>一、ElasticSearch安全认证</h3>"}');export{o as comp,b as data};
