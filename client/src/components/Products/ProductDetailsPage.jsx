import { Component } from "react";
import data from "../../temp/__data";

export default class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);
    const productId = window.location.pathname.split("/").pop();
    this.state = {
      productId: productId,
      product: data.data.products.find((product) => product.id == productId),
      selectedImage: "",
    };
  }

  componentDidMount() {
    this.setState({
      selectedImage: this.state.product.gallery[0],
    })
  }

  onImageChangeHandler = (e) => {
    this.setState({ selectedImage: e.target.src })
  }

  render() {
    return (
      <div className="m-24 font-raleway flex">
        {/* Product Image Previews and Carousel */}
        <div className="grid grid-cols-2 gap-6">
          <div className="columns-1">
            {this.state.product.gallery.map((image) => (
              <img onClick={this.onImageChangeHandler} className="size-16 cursor-pointer" key={image} src={image} alt={this.state.productId + " preview"} />
            ))}
          </div>

          <div>
            <img className="size-64" src={this.state.selectedImage} alt="" />
          </div>
        </div>

        {/* Product Details + Place Order Button*/}
        <div className="ml-32 font-semibold">
            <h1 className="text-3xl ">{this.state.product.name}</h1>
            <p>Size: </p>
            <div className="flex">
              
            </div>
        </div>
      </div>
    );
  }
}
