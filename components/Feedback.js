/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import PropTypes from "prop-types";
import { Component } from "react";

export default class Feedback extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <p
          className="text-lg mb-8 md:text-contentTitle text-center 
                      max-w-none md:max-w-6xl px-8"
        >
          "{this.props.feedback.comment}”
        </p>
        <div className="text-center">
          <Image
            className="mb-4 w-16 h-16 md:w-24 md:h-24 mx-auto"
            src={this.props.customer.avatar}
            alt="Customer's avatar"
            width={48}
            height={48}
          />
          <p>
            {this.props.customer.lastName}, {this.props.customer.firstName}
          </p>
          <p className="font-light">{this.props.feedback.source}</p>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  customer: PropTypes.object,
  feedback: PropTypes.object,
};
