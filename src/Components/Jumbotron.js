import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    const Aboutjumbotron = this.props.Jumbotorndata;
    return (
      <React.Fragment>
        {Aboutjumbotron.map((Jdata, Index) => (
          <div className="jumbotron text-left mt-5">
            <div className="container">
              <h1 className="display-3">{Jdata.Heading}</h1>
              <p>{Jdata.Paragraph}</p>
              <p>
                <a
                  className="btn btn-primary btn-lg"
                  href={Jdata.CtaUrl}
                  role="button"
                  target="_self"
                >
                  {Jdata.CtaText}
                </a>
              </p>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Jumbotron;
