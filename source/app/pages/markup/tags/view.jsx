import React, { Fragment } from 'react';
import Section from '../../../components/section/index.jsx';
import Header from '../../../components/user_header/index.jsx';
import Empty from '../../../components/empty/index.jsx';
import { Helmet } from 'react-helmet';

function View (props){
  if (!props.items.length && !props.loading) return (<Empty />);
  return (
    <Fragment>
      <Helmet>
        <title>Etiquetas</title>
        <meta name="description" content="Lista de todas las etiquetas" />
        <meta name="robots" content="index" />
      </Helmet>
      <Header text="Etiquetas" image="public/img/icons/tag.png" />
      <Section
        {...props}
        path="etiqueta"
      />
    </Fragment>
  )
}

export default View;
