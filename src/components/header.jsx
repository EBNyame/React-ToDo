import React, { Component } from 'react'
class Header extends Component {
    state = { 
        userName: "Exodus",
        imageUrl: "https://picsum.photos/200"
     } 
    render() { 
        return <div>
            <span className=''>{this.state.userName}</span>
            <img className='img-fluid ' src={this.state.imageUrl} alt="" />
        </div>
    }
}
 
export default Header;