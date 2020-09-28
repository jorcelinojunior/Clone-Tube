import React, { Component } from "react";
import { Segment, Input } from "semantic-ui-react";
import { connect } from 'react-redux';
import { buscaVideo } from './../store/actions/busca-video';

class SearchBar extends Component {

  constructor (props) {
    super (props);

    this.props.buscaVideo('react redux');
  }

  pesquisaTermo = e => {
    if(e.keyCode === 13){
      const termo = e.target.value;
      this.props.buscaVideo(termo);
    }
  }

  render() {
    return (
      <div className="search-bar">
        <Segment stacked>
          <Input icon="search" onKeyUp={(e) => this.pesquisaTermo(e) } size="large" placeholder="Search..."></Input>
        </Segment>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buscaVideo: (termo) => dispatch(buscaVideo(termo))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
