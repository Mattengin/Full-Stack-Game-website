import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListSearchComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchString: ""
        }
    }

    onInputChange(event){
        this.setState({searchString: event.currentTarget.value})
    }

    render(){
        return (
            <div className="col-sm-3 col-md-3">
                <form className="navbar-form" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter Game Name here" name="q"
                            onChange={event => this.onInputChange(event)}
                        />
                            <div className="input-group-btn">
                                <Link 
                                    className="btn btn-default"
                                    to={{
                                        pathname: `/GameCatalogue/gameSearch/search/${this.state.searchString}`,
                                        state: { searchString: this.state.searchString}
                                    }} 
                                ><i className="glyphicon glyphicon-search"></i></Link>
                            </div>
                    </div>
                </form>
            </div>

            );
        }
}
        
export default ListSearchComponent;