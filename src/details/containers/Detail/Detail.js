import React from 'react';
import PropTypes from 'prop-types';

function Detail(props) {
  const { name, thumbnail = {}, description } = props;
  const imageUrl = `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`;
  return (
    <main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
          <h1 className="hero-name">{name}</h1>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <svg
                className="bd-placeholder-img img-width-card"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
              >
                <image href={imageUrl} width="100%" height="100%" />
              </svg>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>{description}</p>
            </div>
          </div>
          <div className="album py-5 bg-light card-general-hero">
            <div className="container">
              <div className="row">
                <div className="card bg-light mb-3 card-width-hero">
                  <div className="card-header card-header-hero">Comics</div>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias reiciendis
                      enim praesentium omnis cum quaerat, iusto delectus assumenda ea! Sequi id
                      error tempore provident! Fuga, ullam. Labore eligendi sint perferendis? Fugit,
                      minima mollitia? Perspiciatis tenetur expedita eos doloribus nihil nemo
                      dolores ad dolor quibusdam unde ex odit ut consequatur quia, suscipit alias
                      minima accusamus repellat quos iusto eum. Reprehenderit rem harum magni eaque
                      quaerat maiores laudantium aut nesciunt accusantium mollitia, porro expedita,
                      doloribus, repellat aliquam ea esse! Ullam magnam enim corporis officia non,
                      aperiam pariatur adipisci voluptas molestiae est consequatur odit, fuga
                      dolores. Repellendus, ipsa voluptatem! Ratione quisquam dignissimos facere,
                      sint illo vitae consequuntur non? Autem, doloribus culpa. Nemo neque obcaecati
                      dolorum optio veniam commodi ratione perspiciatis qui dolores sed fugiat
                      minima quod sapiente quibusdam voluptatibus, quam itaque hic nihil tenetur?
                      Placeat libero necessitatibus, vitae eveniet harum ab quia nemo incidunt
                      officia nobis animi eligendi inventore. Quisquam nostrum, officia earum hic,
                      possimus natus neque odio enim, cupiditate excepturi temporibus voluptas ea!
                      Natus magni suscipit autem cumque aut possimus esse mollitia blanditiis?
                      Impedit enim unde voluptate voluptatum natus soluta aliquid. Quod, dignissimos
                      cupiditate officia fuga rerum, at voluptates repudiandae veniam saepe magnam
                      tempora, aliquam impedit tenetur. Voluptatem voluptatum architecto quisquam
                      aperiam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="album py-5 bg-light card-general-hero">
            <div className="container">
              <div className="row">
                <div className="card bg-light mb-3 card-width-hero">
                  <div className="card-header card-header-hero">History</div>
                  <div className="card-body">
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias reiciendis
                      enim praesentium omnis cum quaerat, iusto delectus assumenda ea! Sequi id
                      error tempore provident! Fuga, ullam. Labore eligendi sint perferendis? Fugit,
                      minima mollitia? Perspiciatis tenetur expedita eos doloribus nihil nemo
                      dolores ad dolor quibusdam unde ex odit ut consequatur quia, suscipit alias
                      minima accusamus repellat quos iusto eum. Reprehenderit rem harum magni eaque
                      quaerat maiores laudantium aut nesciunt accusantium mollitia, porro expedita,
                      doloribus, repellat aliquam ea esse! Ullam magnam enim corporis officia non,
                      aperiam pariatur adipisci voluptas molestiae est consequatur odit, fuga
                      dolores. Repellendus, ipsa voluptatem! Ratione quisquam dignissimos facere,
                      sint illo vitae consequuntur non? Autem, doloribus culpa. Nemo neque obcaecati
                      dolorum optio veniam commodi ratione perspiciatis qui dolores sed fugiat
                      minima quod sapiente quibusdam voluptatibus, quam itaque hic nihil tenetur?
                      Placeat libero necessitatibus, vitae eveniet harum ab quia nemo incidunt
                      officia nobis animi eligendi inventore. Quisquam nostrum, officia earum hic,
                      possimus natus neque odio enim, cupiditate excepturi temporibus voluptas ea!
                      Natus magni suscipit autem cumque aut possimus esse mollitia blanditiis?
                      Impedit enim unde voluptate voluptatum natus soluta aliquid. Quod, dignissimos
                      cupiditate officia fuga rerum, at voluptates repudiandae veniam saepe magnam
                      tempora, aliquam impedit tenetur. Voluptatem voluptatum architecto quisquam
                      aperiam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

Detail.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.object,
  description: PropTypes.string
};

export default Detail;
