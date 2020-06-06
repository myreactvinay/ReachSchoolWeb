import React, { Component } from "react";

class Imagecap extends Component {
  render() {
    const imgdt = this.props.Imagecapdata;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row text-center d-flex justify-content-center">
            {imgdt.map((itemdata, index) => (
              <div
                className="card mx-1 my-3 text-left"
                style={{ width: "15rem" }}
              >
                <img
                  src={itemdata.imageUrl}
                  className="card-img-top"
                  alt="imagecap"
                />
                <div class="card-body">
                  <h5 className="card-title">{itemdata.Title}</h5>
                  <p className="card-text">{itemdata.Paragraph}</p>
                  <a href={itemdata.CtaUrl} className="btn btn-primary">
                    {itemdata.CtaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Imagecap;
