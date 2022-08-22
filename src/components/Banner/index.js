import React from 'react';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.scss'
const Banner = (props) =>{
    const {title, backgroundUrl} = props;
    const bannerStyle = backgroundUrl 
    ? {backgroundImage:`url(${backgroundUrl})`}
     : {}
    return (
        <section className='banner' style={bannerStyle}>
            <h1 className='banner__title'>{title}</h1>
        </section>
    )
}
Banner.propTypes ={
    titlle: PropTypes.string,
    backgroundUrl: PropTypes.string
}
export default Banner