import PropTypes from "prop-types";
import { Component } from "react";

export default class SideToSideSection extends Component {
  render() {
    return (
      <section
        className={`flex flex-col w-full ${
          this.props.reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div
          className="flex items-center justify-center flex-1 text-center 
                        md:text-left"
        >
          <div className="w-full p-10 md:p-16 lg:px-20">
            <h1 className="mb-4 text-xl font-bold lg:text-2xl md:mb-8">
              {this.props.title}
            </h1>
            <p className="mb-4 text-md lg:text-lg md:mb-6">
              {this.props.subTitle}
            </p>
            <div>
              <button
                className="border-black flex mx-auto uppercase 
                                 border rounded-lg md:mx-0 px-10 py-2 "
              >
                {this.props.cta}
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div
            className="aspect-w-3 aspect-h-2 md:aspect-w-1 md:aspect-h-1 
                          lg:aspect-w-4 lg:aspect-h-3"
          >
            {this.props.img}
          </div>
        </div>
      </section>
    );
  }
}

SideToSideSection.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  cta: PropTypes.string,
  img: PropTypes.object,
  reversed: PropTypes.bool,
};

SideToSideSection.defaultProps = {
  title: "",
  subTitle: "",
  cta: "",
  img: "",
  reversed: false,
};
