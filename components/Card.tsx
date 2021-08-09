/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Component } from "react";

type CardType = {
  cardTitle: string;
  cardText: string;
  imgAlt: string;
  imgSrc: string;
};

export default class Card extends Component<CardType> {
  constructor(props: CardType) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="aspect-w-1 aspect-h-1">
          <img
            alt={this.props.imgAlt}
            src={this.props.imgSrc}
          />
        </div>
        <div className="text-center">
          <h1 className="text-lg md:text-2xl">{this.props.cardTitle}</h1>
          <p className="text-md">{this.props.cardText}</p>
        </div>
      </div>
    );
  }
}
