import React, { Component } from "react";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countcards: this.props.CardsDataContent,
    };
  }

  render() {
    const CardsNewdata = this.props.CardsDataContent;
    const { length } = this.state.countcards;
    return (
      <div className="container">
        <div className="row">
          {CardsNewdata.map((experience, index) => (
            <React.Fragment>
              {experience.roles.map((datacard, index) => (
                <div className={length === 3 ? "col-md-4" : "col-md-6"}>
                  <h2>{datacard.title}</h2>
                  <p>{datacard.description}</p>
                  <p>
                    <a href={datacard.ctaURL} className="btn btn-secondary">
                      {datacard.ctaText}
                    </a>
                  </p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}
export default Cards;
