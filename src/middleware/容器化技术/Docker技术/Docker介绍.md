---
title: Docker介绍
category:
  - Docker指南
tag:
  - Docker
order: 1
---

> 更新中....

# 一、docker安装

1、yum 包更新到最新 

```
yum update
```

2、安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的 

```
yum install -y yum-utils device-mapper-persistent-data lvm2
```

3、 设置yum源

```
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

4、 安装docker，出现输入的界面都按 y 

```
yum install -y docker-ce
```

5、 查看docker版本，验证是否验证成功

```
docker -v
```

虚拟机，镜像，容器

虚拟机：以操作系统为内核创建的一个虚拟的操作系统

镜像：类似于安装包。

容器：类似于进程，运行在虚拟机里的一个个app。

# 二、docker常用命令

```
查询所有容器
docker ps -a
查看运行中的容器
docker ps
停止容器
docker stop 容器id
删除容器
docker rm -f id
启动容器(前台运行)
docker run -p 80:80 nginx
后台运行
docker run -d -p 80:80 nginx
启动容器并进入交互式模式(默认加sh)
docker run -it 镜像id sh
进入容器内部
docker exec -it 容器id sh
删除镜像
docker rmi 镜像id(id一致时用名称:标签删docker rmi ubuntu13:v2)
查看镜像版本
docker search 镜像名

批量停止所有容器
docker stop $(docker ps -qa)
删除容器
docker rm -f id
查看所有容器id
docker pa -aq

后台容器在线运行
docker attach id
打印后台运行容器日志 （动态打印跟踪 -f）
docker logs id

查看容器进程
docker top id

快速清理所有退出的容器
docker system prune -f
快速清理所有没有使用的镜像
docker image prune -f

容器自动重启
docker run --restart=always
已经启动了则可以使用
docker update --restart=always <CONTAINER ID>

关闭自动重启
docker update --restart=no <CONTAINER ID>
```

> docker run -d -p 80:80 --name 容器名 镜像名
>
> 背后发生了什么：
>
> 1、在本地查找是否有该镜像
>
> 2、没有则去远程仓库找该镜像，默认docker hub仓库
>
> 3、下载最新镜像
>
> 4、基于该镜像创建一个容器，并且准备运行
>
> 5、docker engine分配给这个容器一个虚拟的ip地址
>
> 6、在宿主机上打开80端口并把端口转发到宿主机上
>
> 7、启动容器，运行指令（这里是一个shell脚本去启动命令）

## 1）镜像导入导出

·导出成镜像文件

docker image save 镜像名 -o 导出镜像文件名

docker image save nginx:v1 -o nginx.image

·导入镜像文件

docker image load -i 当前文件夹下的镜像文件名

docker image load -i ./nginx.image

# 三、docker file镜像构建

一、镜像获取

> 1、registry拉取（公有、私有）
>
> 2、dockfile在线构建
>
> 3、file文件离线导入



二、构建dockerfile的基本结构

> From 以什么为基础（基础镜像）
>
> Run 运行一些linux命令安装软件（运行环境）
>
> Add 添加一些文件
>
> Cmd 执行一些文件命令
>
> env 引用变量
>
> copy 复制文件到进行中
>
> entrypoint 与cmd作用相同，但该指令必定执行，多个cmd执行做后一个

| 关键字      | 作用                     | 备注                                                         |
| ----------- | ------------------------ | ------------------------------------------------------------ |
| FROM        | 指定父镜像               | 指定dockerfile基于那个image构建                              |
| MAINTAINER  | 作者信息                 | 用来标明这个dockerfile谁写的                                 |
| LABEL       | 标签                     | 用来标明dockerfile的标签 可以使用Label代替Maintainer 最终都是在docker image基本信息中可以查看 |
| RUN         | 执行命令                 | 执行一段命令 默认是/bin/sh 格式: RUN command 或者 RUN ["command" , "param1","param2"] |
| CMD         | 容器启动命令             | 提供启动容器时候的默认命令 和ENTRYPOINT配合使用.格式 CMD command param1 param2 或者 CMD ["command" , "param1","param2"] |
| ENTRYPOINT  | 入口                     | 一般在制作一些执行就关闭的容器中会使用                       |
| COPY        | 复制文件                 | build的时候复制文件到image中                                 |
| ADD         | 添加文件                 | build的时候添加文件到image中 不仅仅局限于当前build上下文 可以来源于远程服务 |
| ENV         | 环境变量                 | 指定build时候的环境变量 可以在启动的容器的时候 通过-e覆盖 格式ENV name=value |
| ARG         | 构建参数                 | 构建参数 只在构建的时候使用的参数 如果有ENV 那么ENV的相同名字的值始终覆盖arg的参数 |
| VOLUME      | 定义外部可以挂载的数据卷 | 指定build的image那些目录可以启动的时候挂载到文件系统中 启动容器的时候使用 -v 绑定 格式 VOLUME ["目录"] |
| EXPOSE      | 暴露端口                 | 定义容器运行的时候监听的端口 启动容器的使用-p来绑定暴露端口 格式: EXPOSE 8080 或者 EXPOSE 8080/udp |
| WORKDIR     | 工作目录                 | 指定容器内部的工作目录 如果没有创建则自动创建 如果指定/ 使用的是绝对地址 如果不是/开头那么是在上一条workdir的路径的相对路径 |
| USER        | 指定执行用户             | 指定build或者启动的时候 用户 在RUN CMD ENTRYPONT执行的时候的用户 |
| HEALTHCHECK | 健康检查                 | 指定监测当前容器的健康监测的命令 基本上没用 因为很多时候 应用本身有健康监测机制 |
| ONBUILD     | 触发器                   | 当存在ONBUILD关键字的镜像作为基础镜像的时候 当执行FROM完成之后 会执行 ONBUILD的命令 但是不影响当前镜像 用处也不怎么大 |
| STOPSIGNAL  | 发送信号量到宿主机       | 该STOPSIGNAL指令设置将发送到容器的系统调用信号以退出。       |
| SHELL       | 指定执行脚本的shell      | 指定RUN CMD ENTRYPOINT 执行命令的时候 使用的shell            |

三、构建命令：

```
Hello名称名 .当前文件位置
Docker image build -t hello .
```

四、构建示例

```
示例1:构建一个ubuntu镜像，启动时打印出hello dockerName
1、创建Dockerfile目录
2、编辑文件 vim docker-ubuntu
FROM ubuntu:21.04
RUN apt-get update  && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz && \
    tar zxf ipinfo_2.0.1_linux_amd64.tar.gz && \
    mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_2.0.1_linux_amd64.tar.gz

env NAME=dockerName
cmd echo "hello $NAME"

3、构建镜像文件
docker build -f 文件名 -t 镜像名:版本 .当前目录路径
docker build -f docker-ubuntu -t ubuntu:v1 .

打包容器成镜像
docker commit 容器ID 镜像名称
4、执行容器
Docker	run -it ubuntu:v1 	启动一个交互式容器
Docker	run —rm -it ubuntu:v1 执行后容器停止删除容器
Docker	run —rm -it ubuntu:v1 echo “打印语句”

5、上传镜像
登录远程仓库（用户名密码）
docker login/logout
容器命名（跟镜像仓库名保持一致）
docker image tag 原镜像名 新镜像名
docker image tag ubuntu:v1 1305366530/ubuntu:v1
docker push 路径/镜像名
docker push 1305366530/ubuntu:v1

修改文件
Echo “修改内容” 文件名
查看文件
more 文件名


多阶段构建
as 别名
—from 引入
￼

```

```
示例2:构建一个nginx镜像

构建dockerfile
1、在一个空目录下，新建一个名为 Dockerfile 文件，并在文件内添加以下内容：
FROM nginx
RUN echo '这是一个本地构建的nginx镜像' > /usr/share/nginx/html/index.html
2、在 Dockerfile 文件的存放目录下，执行构建动作。. 代表本次执行的上下文路径
docker build -t nginx:v3 .
```



# 四、docker存储 volume数据卷



Windows中使用弊端：volume路径是保存在虚拟机里面的，在windos中是无法查看到这个虚拟路径的

-v参数：指定数据卷存储位置

```
dockera安装mysql
1、docker pull mysql:5.7
2、docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=123456 -d -v mysql-data:/var/lib/mysql mysql:5.7
3、查看volume
docker volume ls
4、查看volume路径
docker volume inspect mysql-data
5、查看volume文件
Docker volume ls (查看所有持久化文件)
docker volume inspect volumename（查看持久化路径）
docker volume prune (删除没有使用的volume)
More 路径/文件名（查看文件内容）
6、强制删除容器，查看volume是否存在
docker rm -f id
docker volume ls
```

# 5、docker网络

# 6、docker compose

- 使用 Docker Compose 可以轻松、高效的管理容器，它是一个用于定义和运行多容器 Docker 的应用程序工具

  ![1](https://gitee.com/lindaifeng/img/raw/master/img/20220123231219.png)

  ```
  示例：docker-compose.yml
  version: "3.8"
  service:
      flask-demo:
          image: flask-demo:latest
          environment:
              - REDIS_HOST=redis-server
          network:
              - demo-network
          ports:
              - 8080:5000
      redis-server:
          image: redis:latest
          networks:
              - demo-network
      networks:
          demo-network:
  ```

  

  ```ruby
  安装 Docker Compose 可以通过下面命令自动下载适应版本的 Compose，并为安装脚本添加执行权限
  sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
  sudo chmod +x /usr/local/bin/docker-compose
  查看安装是否成功
  docker-compose -v
  
  ```

```
快速入门
1、打包项目，获得 jar 包 docker-demo-0.0.1-SNAPSHOT.jar
mvn clean package
2、在 jar 包所在路径创建 Dockerfile 文件，添加以下内容
FROM java:8
VOLUME /tmp
ADD docker-demo-0.0.1-SNAPSHOT.jar app.jar
RUN bash -c 'touch /app.jar'
EXPOSE 9000
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","app.jar"]
3、在 jar 包所在路径创建文件 docker-compose.yml，添加以下内容
version: '2' # 表示该 Docker-Compose 文件使用的是 Version 2 file
services:
  docker-demo:  # 指定服务名称
    build: .  # 指定 Dockerfile 所在路径
    ports:    # 指定端口映射
      - "9000:8761"
4、在 docker-compose.yml 所在路径下执行该命令 Compose 就会自动构建镜像并使用镜像启动容器
docker-compose up
docker-compose up -d  // 后台启动并运行容器
5、访问 http://localhost:9000/hello 即可访问微服务接口
```

```
Docker Compose 常用命令与配置
常见命令
1、ps：列出所有运行容器
docker-compose ps
2、logs：查看服务日志输出
docker-compose logs
3、port：打印绑定的公共端口，下面命令可以输出 eureka 服务 8761 端口所绑定的公共端口
docker-compose port eureka 8761
4、build：构建或者重新构建服务
docker-compose build
5、start：启动指定服务已存在的容器
docker-compose start eureka
6、stop：停止已运行的服务的容器
docker-compose stop eureka
7、rm：删除指定服务的容器
docker-compose rm eureka
8、up：构建、启动容器
docker-compose up
9、kill：通过发送 SIGKILL 信号来停止指定服务的容器
docker-compose kill eureka
10、pull：下载服务镜像
11、scale：设置指定服务运气容器的个数，以 service=num 形式指定
docker-compose scale user=3 movie=3
12、run：在一个服务上执行一个命令
docker-compose run web bash

```

## Docker Compose示例：

### 一、安装Docker Compose

```shell
# Compose目前已经完全支持Linux、Mac OS和Windows，在我们安装Compose之前，需要先安装Docker。下面我 们以编译好的二进制包方式安装在Linux系统中。 
curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
# 设置文件可执行权限 
chmod +x /usr/local/bin/docker-compose
# 查看版本信息 
docker-compose -version
```

### 二、卸载Docker Compose

```shell
# 二进制包方式安装的，删除二进制文件即可
rm /usr/local/bin/docker-compose
```



### 三、 使用docker compose编排nginx+springboot项目

1. 创建docker-compose目录

```shell
mkdir ~/docker-compose
cd ~/docker-compose
```

2. 编写 docker-compose.yml 文件

```shell
version: '3'
services:
  nginx:
   image: nginx
   ports:
    - 80:80
   links:
    - app
   volumes:
    - ./nginx/conf.d:/etc/nginx/conf.d
  app:
    image: app
    expose:
      - "8080"
```

3. 创建./nginx/conf.d目录

```shell
mkdir -p ./nginx/conf.d
```



4. 在./nginx/conf.d目录下 编写itheima.conf文件

```shell
server {
    listen 80;
    access_log off;

    location / {
        proxy_pass http://app:8080;
    }
   
}
```

5. 在~/docker-compose 目录下 使用docker-compose 启动容器

```shell
docker-compose up
```

6. 测试访问

```shell
http://192.168.149.135/hello
```



# 7、docker swarm容器编排

docker compose不建议在生产环境使用，因为是它是运行在单机环境下

多机的环境下则需要用到docker swarm。

> Docker Swarm 是 Docker 的集群管理工具。它将 Docker 主机池转变为单个虚拟 Docker 主机。 Docker Swarm 提供了标准的 Docker API，所有任何已经与 Docker 守护程序通信的工具都可以使用 Swarm 轻松地扩展到多个主机。

k8s在容器编排领域处于绝对领先的地位



```
查看是否激活swarm模式（默认没有）
docker info
Swarm: inactive表示没有激活
激活swarm，两个方法
1、初始化一个swarm集群
docker swarm init
docker node ls（查看集群节点）
2、加入一个已存在的swarm集群 
```

```
docker swarm init(初始化集群)
docker node ls（查看集群节点）
docker swarm leave --force（强制离开集群）
```



```
创建一个nginx服务
docker service create nginx:latest
查看nginx服务
docker service ls
docker service ps 服务id
复制三个service
docker service update 服务id --replicas 3
当我们删除一个容器后，swarm会帮我们创建一个容器运行起来（即创建容器又帮我们维护容器）
docker rm -f 容器id
要想删除则需要对service进行操作
docker service rm 服务ID
```



# 8、docker 多架构支持

