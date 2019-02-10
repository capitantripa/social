import React, { Fragment } from 'react';
import PostView from '../../../components/posts/view.jsx';
import Header from '../../../components/user_header/index.jsx';


function View (props){

  return (
    <Fragment>
      <Header
        text={props.name || 'Etiqueta'}
        image="public/img/icons/tag.png"
      />
      <PostView {...props} />
    </Fragment>
  )
}

export default View;
