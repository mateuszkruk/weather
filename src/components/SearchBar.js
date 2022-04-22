import React from "react";

class SearchBar extends React.Component {
    state = {term: "Warsaw"}
    
    
    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.term)

        
    }

    render () {
        return (
        <div className="ui segment"  >
        <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>City:</label>
          <input type="text" onChange={this.onInputChange} 
          value={this.state.term}/>
        </div>
      </form>
      </div>
      
      )
    }
}

export default SearchBar