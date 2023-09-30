import React from "react";
import "../CSS/Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-heading">Our Special Menus</h1>
      <div className="menu-card">
        <div className="sub-1">
          <img
            src="https://img.freepik.com/premium-photo/fresh-spring-rolls-with-vegetables-cheese-white-plate-close-up_848191-457.jpg?size=626&ext=jpg&ga=GA1.1.136947427.1695810927&semt=sph"
            alt=" breakfast-img"
            className="menu-img"
          />
        </div>
        <div className="sub-2">
          <h2 className="menu-sub-heading">Breakfast</h2>
          <p className="menu-description">
            Proin a ligula a velit convallis pretium. Vestibulum nec eros nec
            odio ornare viverra nec vel dui. Nullam finibus tempus felis ut
            volutpat. Duis sagittis mi dui, sit amet porta ipsum finibus vitae.
            Sed rhoncus velit eget nibh dignissim.
          </p>
          <button className="menu-btn">View Menu</button>
        </div>
      </div>
      <div className="menu-card">
        <div className="sub-2">
          <h2 className="menu-sub-heading">Lunch</h2>
          <p className="menu-description">
            Proin a ligula a velit convallis pretium. Vestibulum nec eros nec
            odio ornare viverra nec vel dui. Nullam finibus tempus felis ut
            volutpat. Duis sagittis mi dui, sit amet porta ipsum finibus vitae.
            Sed rhoncus velit eget nibh dignissim.
          </p>
          <button className="menu-btn">View Menu</button>
        </div>
        <div className="sub-1">
          <img
            src="https://st4.depositphotos.com/9144918/25441/i/600/depositphotos_254419644-stock-photo-mixed-ceviche-with-peruvian-sauce.jpg"
            alt=" breakfast-img"
            className="menu-img"
          />
        </div>
      </div>
      <div className="menu-card">
        <div className="sub-1">
          <img
            src="https://magnaflor.com/blog/wp-content/uploads/2018/11/Food-flower-1536x1024.jpg"
            alt=" breakfast-img"
            className="menu-img"
          />
        </div>
        <div className="sub-2">
          <h2 className="menu-sub-heading">Dinner</h2>
          <p className="menu-description">
            Proin a ligula a velit convallis pretium. Vestibulum nec eros nec
            odio ornare viverra nec vel dui. Nullam finibus tempus felis ut
            volutpat. Duis sagittis mi dui, sit amet porta ipsum finibus vitae.
            Sed rhoncus velit eget nibh dignissim.
          </p>
          <button className="menu-btn">View Menu</button>
        </div>
      </div>
      <div className="menu-card">
        <div className="sub-2">
          <h2 className="menu-sub-heading">Dessert</h2>
          <p className="menu-description">
            Proin a ligula a velit convallis pretium. Vestibulum nec eros nec
            odio ornare viverra nec vel dui. Nullam finibus tempus felis ut
            volutpat. Duis sagittis mi dui, sit amet porta ipsum finibus vitae.
            Sed rhoncus velit eget nibh dignissim.
          </p>
          <button className="menu-btn">View Menu</button>
        </div>
        <div className="sub-1">
          <img
            src="https://img.freepik.com/free-photo/gold-elements-birthday-party-cake_23-2150397217.jpg?size=626&ext=jpg&ga=GA1.1.142091225.1695830935&semt=ais"
            alt=" breakfast-img"
            className="menu-img"
          />
        </div>
      </div>
      <div className="menu-card">
        <div className="sub-1">
          <img
            src="https://img.freepik.com/free-photo/crystal-glass-with-red-cocktail-garnished-with-orange-wheel_140725-6006.jpg?w=740&t=st=1695831386~exp=1695831986~hmac=178fe656defd1d44c0baa2e10c9372dc946667a9c22e5c2dc99271df52b9efd7"
            alt=" breakfast-img"
            className="menu-img"
          />
        </div>
        <div className="sub-2">
          <h2 className="menu-sub-heading">Beverage</h2>
          <p className="menu-description">
            Proin a ligula a velit convallis pretium. Vestibulum nec eros nec
            odio ornare viverra nec vel dui. Nullam finibus tempus felis ut
            volutpat. Duis sagittis mi dui, sit amet porta ipsum finibus vitae.
            Sed rhoncus velit eget nibh dignissim.
          </p>
          <button className="menu-btn">View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
