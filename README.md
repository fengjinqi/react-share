
## react-share

react封装社会化分享组件，支持qq、微信、微博、豆瓣谷歌等一系列分享
直接集成到react项目中

```javascript
<Share
            title={document.title}//标题
            url={window.location.href}//地址
            origin={window.location.href}//空间需要
            image={document.images[0]?document.images[0].src:''}//默认第一个图片
            description={document.getElementsByName('description')[0].getAttribute('content')}//描述
            sites={ ['weibo','qq','wechat','douban','qzone']}//  sites: ["qzone", "weibo", "google", "twitter", "qq","tencent", "wechat", "douban", "linkedin", "facebook"],
        />
```

