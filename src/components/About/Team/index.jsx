import React, { Component } from "react";
import img1 from "../../../resources/images/team1.jpg";
import img2 from "../../../resources/images/team2.jpg";
import img3 from "../../../resources/images/team3.jpg";
import img4 from "../../../resources/images/team4.jpg";
import Slider from "react-slick";
class Team extends Component {
  state = {
    names: ["John Anderson", "Erina Gray", "Micheal Carter", "Nelson Roar"],
    images: [img1, img2, img3, img4],
    job: ["Assistant", "Managing Director", "Supervisor", "Project Manager"]
  };
  showCards = () => {
    return this.state.names.map((el, i) => (
      <div className="col-md-4"  key={i}>
        <div className="team-item">
          <div className="team-image">
            <img src={this.state.images[i]} alt={el} />
          </div>
          <div className="team-content">
            <h4>{el}</h4>
            <p> {this.state.job[i]} </p>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ));
  };
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <section className="about-team">
        <div className="container">
          <div className="section-title">
            <h2>
              Explore <span>Team</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              neque, sodales accumsan sapien et, auctor vulputate quam donec
              vitae consectetur turpis
            </p>
          </div>
          <Slider {...settings} className="row team-slider">{this.showCards()}</Slider>
        </div>
      </section>
    );
  }
}

export default Team;
