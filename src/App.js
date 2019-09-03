import React from 'react';
import Share from './components/Share'
import './App.css';
import './static/css/share.min.css'
class App extends React.Component{
  render() {
    return(
        <div style={{margin:200}}>
            <Share
            title={document.title}
            url={window.location.href}
            origin={window.location.href}
            image={document.images[0]?document.images[0].src:''}
            description={document.getElementsByName('description')[0].getAttribute('content')}
            sites={ ['weibo','qq','wechat','douban','qzone']}
        />
        </div>
    )
  }

}

export default App;
