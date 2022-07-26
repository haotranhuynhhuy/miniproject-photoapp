import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

function PhotoList(props) {
    const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props
    return (
        <Row>
            {
                photoList.map((photo) => {
                    return (
                        <Col key={photo.id} xs="12" md='6' lg='3'>
                            <PhotoCard
                                photo={photo}
                                onEditClick={onPhotoEditClick}
                                onRemoveClick={onPhotoRemoveClick}
                            />
                        </Col>
                    )
                })
            }
        </Row>
    );
}
PhotoList.propTypes = {
    photoList: PropTypes.array,
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func,
};
export default PhotoList;