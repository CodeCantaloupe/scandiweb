import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
    };
  }

  checkStock = (var1, var2) => {
    return this.state.product.inStock ? var1 : var2;
  }

  render() {
    return (
      <Link
        to={"/product/" + this.state.product.id}
        className="group p-4 font-raleway hover:shadow-xl hover:scale-105 transition"
        data-testid={"product-" + this.state.product.id}>
        <div className="relative">
          <img
            className={
              "h-[330px] mx-auto mb-6 " +
              this.checkStock("", "opacity-50")
            }
            src={this.state.product.gallery[0]}
            alt={this.state.product.name + " Product image"}
          />

          <h1
            className={
              "uppercase text-2xl text-nowrap text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " +
              this.checkStock("hidden", "block")
            }>
            out of stock
          </h1>

          <button
            className={
              "hidden bg-[#5ECE7B] p-4 rounded-full absolute bottom-[-30px] right-6 " +
              this.checkStock("group-hover:block", "")
            }
            onClick={() => {console.log("Fast Add to cart: " + this.state.product.id)}}>
            <img src="/fast_order.svg" alt="Fast order icon" />
          </button>
        </div>

        <h1 className="text-xl font-[300]">{this.state.product.name}</h1>
        <p
          className={
            "text-xl font-[400] mb-4 " +
              this.checkStock("", "text-slate-400")
          }>
          {this.state.product.prices[0].currency.symbol}
          {this.state.product.prices[0].amount}
        </p>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
