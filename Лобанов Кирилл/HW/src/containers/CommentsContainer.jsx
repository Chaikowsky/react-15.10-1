import React, {Component, Fragment} from 'react';

import { connect } from 'react-redux';

import CommentsList from 'components/CommentsList';
import {load} from 'actions/comments';

class CommentsContainer extends Component {
  // handleScroll = () => {
  //   if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
  //     if (!this.state.loading) {
  //       this.loadComments();
  //     }
  //   }
  // };

  componentDidMount() {
    const { loadComments } = this.props;

    loadComments();

    //window.addEventListener('scroll', this.handleScroll);
  }

  // componentWillUnMount(){
  //
  // }

  render () {
    const { loading, comments } = this.props;

    return (
      <Fragment>
        <CommentsList comments={comments}/>
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
return{
  ...props,
  comments: state.comments.entities,
  loading: state.comments.loading,
}
}

function mapDispatchToProps(dispatch, props) {
return{
  ...props,
  loadComments: () => load(dispatch),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer);
