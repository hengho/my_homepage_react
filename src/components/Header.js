import react, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <div class='header'>
                <nav>
                    <ul>
                        <li id="right"><a href="/portfolio" onClick={function(e){
                            e.preventDefault();
                            this.props.onMode('portfolio');

                        }.bind(this)}>Portfolio</a></li>
                        <li><a href="/timeline" onClick={function(e){
                            e.preventDefault();
                            this.props.onMode('timeline');

                        }.bind(this)}>Timeline</a></li>
                        <li><a href="/main" onClick={function(e){
                            e.preventDefault();
                            this.props.onMode('main');

                        }.bind(this)}>Home</a></li>
                    </ul>
                </nav>
                <h2 id="title">{this.props.title}</h2>
            </div>
        );
    }
}

export default Header;