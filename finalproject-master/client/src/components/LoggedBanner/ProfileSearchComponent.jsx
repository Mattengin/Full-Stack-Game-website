import React, { Component } from "react";
import { Link } from "react-router-dom";
import Style from "./LoggedBanner.module.scss";

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
            <form className="navbar-form" role="search">
                <div className="input-group">
                    <input type="text" className={`form-control ${Style.searchBar}`} placeholder="Who ya scopin' for?" name="q"
                        onChange={event => this.onInputChange(event)}
                    />
                        <div className="input-group-btn">
                            <Link 
                                className="btn btn-default"
                                to={{
                                    pathname: `/Profiles/${this.state.searchString}`,
                                    state: { searchString: this.state.searchString}
                                }} 
                            ><i className="glyphicon glyphicon-search"></i></Link>
                        </div>
                </div>
            </form>

            );
        }
}
        
export default ListSearchComponent;