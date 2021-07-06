import React, { Component } from 'react';

class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData :null,
            noData : false
        }
    }
    search (key) {
        fetch ('http://localhost:3000/restaurant?q='+key).then((result)=>{
             result.json().then((resp)=>{
                 if (resp.length>0) {
                     this.setState({searchData:resp, noData:false})
                 } else {
                     this.setState({searchData:null, noData:true})
                 }
             })
        })
    }
    render() {
        
        return (
            <div>
                <h1>Restaurant Search</h1>
                <input type="text" onChange={(e)=>this.search(e.target.value)}/>
                {
                    <div>
                        {
                            this.state.searchData?
                            <div>
                                {
                                    this.state.searchData.map((item)=><div>
                                        <div className="search-row">{item.name}</div>
                                        </div>)
                                }
                            </div>
                            : ""
                        }
                        {
                            this.state.noData? <h3>No data found</h3>:null
                        }
                    </div>
                }
            </div>
        );
    }
}

export default RestaurantSearch;