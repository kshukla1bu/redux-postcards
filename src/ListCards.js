import React from 'react';
import { connect } from 'react-redux';

function ListCards(props) {
  const { posts } = props
 return(
    <div className="row">
      {
        posts.map((card, index) => (
        <div className="col-sm-2" key = {index}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{"User Id: "+card.userId}</h5>
            <h5 className="card-title">{"Post ID: "+card.id}</h5>
            <p className="card-text">{card.title}</p>
          </div>
        </div>
      </div>
      ))
      }
    </div>
 );
}

export default connect((state) => ({
  posts : state.card
}))(ListCards)