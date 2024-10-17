import { Component } from "react";
import data from "../../temp/__data";
import ColorButton from "../UI/ColorButton";
import AttributeButton from "../UI/AttributeButton";

export default class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);
    const productId = window.location.pathname.split("/").pop();
    this.state = {
      productId: productId,
      product: data.data.products.find((product) => product.id == productId),
      productAttributes: [],
    };
  }

  componentDidMount() {
    this.setState({
      selectedImage: this.state.product.gallery[0],
      productAttributes: this.state.product.attributes,
    });
  }

  onImageChangeHandler = (e) => {
    this.setState({ selectedImage: e.target.src });
  };

  render() {
    console.log(this.state);
    return (
      <div className="mx-24 mt-12 font-raleway flex space-x-6">
        {/* Product Image Previews and Carousel */}
        <div className="columns-1 space-y-3 min-w-16">
          {this.state.product.gallery.map((image) => (
            <img
              onClick={this.onImageChangeHandler}
              className="size-16 cursor-pointer object-cover"
              key={image}
              src={image}
              alt={this.state.productId + " preview"}
            />
          ))}
        </div>

        <div className="w-1/2">
          <img className="w-full h-3/4 object-contain" src={this.state.selectedImage} alt="" />
        </div>

        {/* Product Details + Place Order Button*/}
        <div className="font-semibold">
          <h1 className="text-3xl mb-6">{this.state.product.name}</h1>
          {this.state.productAttributes.map((attribute) => (
            <div key={attribute.id}>
              <p className="uppercase font-semibold mb-2">{attribute.id}:</p>
              <div className="flex mb-8">
                {attribute.items.map((item) => (
                  <div key={item.id}>
                    <input
                      type="radio"
                      id={item.id}
                      name={attribute.id}
                      value={item.value}
                      className="hidden peer"
                    />
                    {attribute.id == "Color" ? (
                      <ColorButton item={item} />
                    ) : (
                      <AttributeButton item={item} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="uppercase font-semibold mb-2">Price: </p>
          <p className="text-3xl mb-6">
            {this.state.product.prices[0].currency.symbol +
              this.state.product.prices[0].amount}
          </p>

          <button className="px-24 py-4 text-white uppercase text-nowrap bg-[#5ECE7B] hover:bg-[#5ECE7B]/90 active:bg-[#408d54]">
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
