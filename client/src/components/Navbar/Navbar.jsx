import { Component } from "react";
import data from "../../temp/__data";
import Category from "./category";

const categories = data.data.categories;

class Navbar extends Component {
  render() {
    return (
      <header>
          <nav className="h-[80px] flex relative justify-around items-center">
            <div className="flex">
              {categories.map((category) => (
                <Category key={category.name} name={category.name} data-testid='category-link'></Category>
              ))}
            </div>
            <div>
              <img
                src="/logo.png"
                alt="scandiweb logo maybe..."
                className="size-10 absolute left-1/2 bottom-1/4"
              />
            </div>
            <div>
              <button className="p-6" data-testid='cart-btn'>
                <img src="/cart.svg" alt="cart icon" />
              </button>
            </div>
          </nav>
      </header>
    );
  }
}

export default Navbar;
