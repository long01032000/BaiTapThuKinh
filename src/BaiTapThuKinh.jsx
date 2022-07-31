import React, { Component } from "react";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class BaiTapThuKinh extends Component {
  state = {
    glass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlass = (glassCurrent) => {
    this.setState({
      glass: glassCurrent,
    });
  };

  renderGlasses = () => {
    return data.map((prod, index) => {
      return (
        <img
          src={prod.url}
          alt="..."
          width={110}
          className="me-2 p-2 border border-1"
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => {
            this.changeGlass(prod);
          }}
        />
      );
    });
  };
  render() {
    const styleBg = {
      backgroundImage: "url('../img/glassesimage/background.jpg')",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "800px",
    };

    const styleCoverBg = {
      minHeight: "800px",
    };

    const styleImage = {
      width: "160px",
      top: "101px",
      left: "78px",
      opacity: "0.7",
      position: "absolute",
    };

    const styleName = {
      width: "318px",
      top: "-120px",
      left: "0",
      paddingLeft: "15px",
      backgroundColor: "rgba(255,127,0,.5)",
      textAlign: "left",
      height: "120px",
      position: "relative",
    };

    const styleDescript = {
      color: "#fff",
      fontSize: "14px",
      fontWeight: 400,
      paddingRight: "5px",
    };

    let {url,name,desc} = this.state.glass;

    return (
      <div style={styleBg}>
        <div style={styleCoverBg}>
          <header>
            <h3 className="text-center text-uppercase text-white py-lg-4" style={{backgroundColor: "rgba(0,0,0,.5)"}}>
              try glasses app online
            </h3>
          </header>
          <section>
            <div className="container">
              <div className="row mt-lg-5">
                <div className="col-6 d-flex justify-content-center">
                  <div className="item w-50 position-relative">
                    <img
                      src={url}
                      alt="..."
                      style={styleImage}
                    />
                    <img
                      src="./img/glassesimage/model.jpg"
                      alt="..."
                      className="w-100"
                    />
                    <div style={styleName}>
                      <span
                        className="font-weight-bold d-block"
                        style={{ color: "#AB82FF", fontSize: "17px" }}
                      >
                        {name}
                      </span>
                      <span style={styleDescript}>
                        {desc}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center">
                  <div className="item w-50">
                    <img
                      src="./img/glassesimage/model.jpg"
                      alt="..."
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container bg-light text-center d-flex justify-content-center p-5">
              {this.renderGlasses()}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
