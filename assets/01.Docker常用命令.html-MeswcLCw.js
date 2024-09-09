import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,f as e}from"./app-BBHf8-6T.js";const l={},n=e(`<h3 id="docker容器内下载vim" tabindex="-1"><a class="header-anchor" href="#docker容器内下载vim"><span>docker容器内下载vim</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1）apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2）yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">3）apk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看docker容器日志" tabindex="-1"><a class="header-anchor" href="#查看docker容器日志"><span>查看docker容器日志</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> id</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> logs</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器间数据相互拷贝" tabindex="-1"><a class="header-anchor" href="#容器间数据相互拷贝"><span>容器间数据相互拷贝</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 目录数据</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  容器id:目录数据</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器id:目录数据</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	目录数据</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器构建" tabindex="-1"><a class="header-anchor" href="#容器构建"><span>容器构建</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker build -f 文件名 -t 容器名 .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="容器打包成一个镜像" tabindex="-1"><a class="header-anchor" href="#容器打包成一个镜像"><span>容器打包成一个镜像</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;描述信息&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;作者&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 目标镜像名:[TAG]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;badaodechengxvyuan&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;addgeoserver&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 39f5b723d1b8</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tomcatwithgeoserver:1.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像重命名" tabindex="-1"><a class="header-anchor" href="#镜像重命名"><span>镜像重命名</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 原始镜像名</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 新的镜像名:版本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> centos</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> centos:v1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hub：docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 镜像id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 你的账户名/镜像仓库名:tag名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">harbor:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 镜像id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip+端口+仓库名+镜像名：版本</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭自动重启" tabindex="-1"><a class="header-anchor" href="#关闭自动重启"><span>关闭自动重启</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --restart=no</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">禁用所有自动重启（守护程序）容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --restart=no</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -q</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker登录" tabindex="-1"><a class="header-anchor" href="#docker登录"><span>docker登录</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> login</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip+port</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> admin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="docker镜像导入导出" tabindex="-1"><a class="header-anchor" href="#docker镜像导入导出"><span>docker镜像导入导出</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">文件会保存到当前的</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 终端目录（当前文件夹下）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> save</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 0fdf2b4c26d3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hangge_server.tar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> load</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hangge_server.tar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">或者</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> export</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> f299f501774c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hangger_server.tar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> new_hangger_server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">hangger_server.tar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker镜像拉取与推送" tabindex="-1"><a class="header-anchor" href="#docker镜像拉取与推送"><span>docker镜像拉取与推送</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">拉取</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 192.168.179.188:8080/common/nacos-server:2.0.2</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">推送（1、改成仓库地址+仓库名+镜像名+版本号</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2、推送）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SOURCE_IMAGE[:TAG]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 192.168.179.188:8080/trade-dev2/IMAGE[:TAG]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 192.168.179.188:8080/trade-dev2/IMAGE[:TAG]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看镜像架构" tabindex="-1"><a class="header-anchor" href="#查看镜像架构"><span>查看镜像架构</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker inspect 镜像id</span></span>
<span class="line"><span>查看系统架构 uname -a</span></span>
<span class="line"><span>指定下载镜像架构(x86用amd64，m1用arm64) --platform=amd64/arm64</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="磁盘镜像满了-删除镜像" tabindex="-1"><a class="header-anchor" href="#磁盘镜像满了-删除镜像"><span>磁盘镜像满了，删除镜像</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker rmi -f $(docker images -qa)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="清理所有无用镜像" tabindex="-1"><a class="header-anchor" href="#清理所有无用镜像"><span>清理所有无用镜像</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker system prune -a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="重新加载daemon-json配置" tabindex="-1"><a class="header-anchor" href="#重新加载daemon-json配置"><span>重新加载daemon.json配置</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon-reload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="重启docker服务" tabindex="-1"><a class="header-anchor" href="#重启docker服务"><span>重启docker服务</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="查看docker服务状态" tabindex="-1"><a class="header-anchor" href="#查看docker服务状态"><span>查看docker服务状态</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="查看容器ip信息" tabindex="-1"><a class="header-anchor" href="#查看容器ip信息"><span>查看容器ip信息</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">查看容器的</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> inspect</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建网桥" tabindex="-1"><a class="header-anchor" href="#创建网桥"><span>创建网桥</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  MYname</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="查看k8s详细信息" tabindex="-1"><a class="header-anchor" href="#查看k8s详细信息"><span>查看k8s详细信息</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> describe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pods/pod_name</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --namespace</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> namespace</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">kubectl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> describe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pods/devops-validator-v1-5f8f5b6f9f-vl9p4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --namespace</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test12</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看-docker-在-linux-中占用了多少内存" tabindex="-1"><a class="header-anchor" href="#查看-docker-在-linux-中占用了多少内存"><span>查看 Docker 在 Linux 中占用了多少内存</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stats</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --no-stream</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">该命令将显示所有正在运行的容器的内存使用情况，包括以下信息：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CONTAINER:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器的</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ID。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">CPU</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器使用的</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> CPU</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 百分比。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">MEM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LIMIT:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器当前使用的内存量和内存限制。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">MEM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器当前使用的内存占总内存的百分比。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">NET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> I/O:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器的网络</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> I/O。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">BLOCK</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> I/O:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器的块</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> I/O。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">PIDS:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 容器中的进程数量。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实时查看容器的资源使用情况" tabindex="-1"><a class="header-anchor" href="#实时查看容器的资源使用情况"><span>实时查看容器的资源使用情况</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stats</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="显示docker容器和物理主机挂载目录信息" tabindex="-1"><a class="header-anchor" href="#显示docker容器和物理主机挂载目录信息"><span>显示Docker容器和物理主机挂载目录信息</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">方法一</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> inspect</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;{{.Mounts}}&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 369a1376f78c</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">方法二</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> inspect</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 369a1376f78c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Mounts</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -A</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 50</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),h=[n];function t(k,d){return a(),s("div",null,h)}const c=i(l,[["render",t],["__file","01.Docker常用命令.html.vue"]]),g=JSON.parse('{"path":"/commands/Docker%E5%91%BD%E4%BB%A4/01.Docker%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"Docker常用命令","lang":"zh-CN","frontmatter":{"order":1,"title":"Docker常用命令","description":"docker容器内下载vim 查看docker容器日志 容器间数据相互拷贝 容器构建 容器打包成一个镜像 镜像重命名 关闭自动重启 docker登录 docker镜像导入导出 docker镜像拉取与推送 查看镜像架构 磁盘镜像满了，删除镜像 清理所有无用镜像 重新加载daemon.json配置 重启docker服务 查看docker服务状态 查看容器i...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/commands/Docker%E5%91%BD%E4%BB%A4/01.Docker%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"Docker常用命令"}],["meta",{"property":"og:description","content":"docker容器内下载vim 查看docker容器日志 容器间数据相互拷贝 容器构建 容器打包成一个镜像 镜像重命名 关闭自动重启 docker登录 docker镜像导入导出 docker镜像拉取与推送 查看镜像架构 磁盘镜像满了，删除镜像 清理所有无用镜像 重新加载daemon.json配置 重启docker服务 查看docker服务状态 查看容器i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-09T09:59:13.000Z"}],["meta",{"property":"article:author","content":"清峰"}],["meta",{"property":"article:modified_time","content":"2024-09-09T09:59:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-09T09:59:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清峰\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"docker容器内下载vim","slug":"docker容器内下载vim","link":"#docker容器内下载vim","children":[]},{"level":3,"title":"查看docker容器日志","slug":"查看docker容器日志","link":"#查看docker容器日志","children":[]},{"level":3,"title":"容器间数据相互拷贝","slug":"容器间数据相互拷贝","link":"#容器间数据相互拷贝","children":[]},{"level":3,"title":"容器构建","slug":"容器构建","link":"#容器构建","children":[]},{"level":3,"title":"容器打包成一个镜像","slug":"容器打包成一个镜像","link":"#容器打包成一个镜像","children":[]},{"level":3,"title":"镜像重命名","slug":"镜像重命名","link":"#镜像重命名","children":[]},{"level":3,"title":"关闭自动重启","slug":"关闭自动重启","link":"#关闭自动重启","children":[]},{"level":3,"title":"docker登录","slug":"docker登录","link":"#docker登录","children":[]},{"level":3,"title":"docker镜像导入导出","slug":"docker镜像导入导出","link":"#docker镜像导入导出","children":[]},{"level":3,"title":"docker镜像拉取与推送","slug":"docker镜像拉取与推送","link":"#docker镜像拉取与推送","children":[]},{"level":3,"title":"查看镜像架构","slug":"查看镜像架构","link":"#查看镜像架构","children":[]},{"level":3,"title":"磁盘镜像满了，删除镜像","slug":"磁盘镜像满了-删除镜像","link":"#磁盘镜像满了-删除镜像","children":[]},{"level":3,"title":"清理所有无用镜像","slug":"清理所有无用镜像","link":"#清理所有无用镜像","children":[]},{"level":3,"title":"重新加载daemon.json配置","slug":"重新加载daemon-json配置","link":"#重新加载daemon-json配置","children":[]},{"level":3,"title":"重启docker服务","slug":"重启docker服务","link":"#重启docker服务","children":[]},{"level":3,"title":"查看docker服务状态","slug":"查看docker服务状态","link":"#查看docker服务状态","children":[]},{"level":3,"title":"查看容器ip信息","slug":"查看容器ip信息","link":"#查看容器ip信息","children":[]},{"level":3,"title":"创建网桥","slug":"创建网桥","link":"#创建网桥","children":[]},{"level":3,"title":"查看k8s详细信息","slug":"查看k8s详细信息","link":"#查看k8s详细信息","children":[]},{"level":3,"title":"查看 Docker 在 Linux 中占用了多少内存","slug":"查看-docker-在-linux-中占用了多少内存","link":"#查看-docker-在-linux-中占用了多少内存","children":[]},{"level":3,"title":"实时查看容器的资源使用情况","slug":"实时查看容器的资源使用情况","link":"#实时查看容器的资源使用情况","children":[]},{"level":3,"title":"显示Docker容器和物理主机挂载目录信息","slug":"显示docker容器和物理主机挂载目录信息","link":"#显示docker容器和物理主机挂载目录信息","children":[]}],"git":{"createdTime":1725875953000,"updatedTime":1725875953000,"contributors":[{"name":"ldf","email":"1305366530@qq.com","commits":1}]},"readingTime":{"minutes":2.21,"words":663},"filePathRelative":"commands/Docker命令/01.Docker常用命令.md","localizedDate":"2024年9月9日","autoDesc":true,"excerpt":"<h3>docker容器内下载vim</h3>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">1）apt-get</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> update</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">apt-get</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> vim</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">2）yum</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> vim</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">3）apk</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> update</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">apk</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> add</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> vim</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,g as data};
