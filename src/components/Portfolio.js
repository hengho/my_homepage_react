import React, { Component } from 'react';

class Portfolio extends Component {
    getContent()
    {
        var mode = this.props.mode_portfolio;
        var _article
        if(mode === 'read')
        {
            _article=<input onClick={function(e){
                e.preventDefault();
                this.props.onChange('create');
            }.bind(this)}
            type="button" value="create"></input>
        }
        else if(mode === 'create')
        {
            _article=<form action='/create_process' method='post'
            onSubmit={function(e){
                e.preventDefault();
            }.bind(this)}>
                <p><input type="text" name='title' placeholder='title'></input></p>
                <p>
                <textarea name = "desc" placeholder="description"></textarea>
                </p>
                <p><input type="submit"></input></p>
            </form>
        }
        return _article;
    }
    render(){
        var lists=[];
        var data = this.props.data;
        for(var i=0;i<data.length;i++)
        {
            lists.push(
                <div class="portfolio_1">
                    <h3>
                        {data[i].title}
                    </h3>
                    {data[i].desc}
                </div>
            )
        }
        return(
            <div class="body">
                <h1>Portfolio</h1>
                {lists}
                {this.getContent()}
            </div>
        );
    }
}

export default Portfolio;