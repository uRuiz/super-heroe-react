import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { id, name, thumbnail } = props;
  const imageUrl = `${thumbnail}/standard_fantastic.jpg`;
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <a href={`?id=${id}`}>
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >
            <image href={imageUrl} width="100%" height="100%" />
          </svg>
        </a>
        <div className="card-body">
          <h4>{name}</h4>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-center align-items-center mx-auto">
            <div className="btn-group">
              <a href={`?id=${id}`} className="btn btn-danger view-botton">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.string
};

export default Card;
