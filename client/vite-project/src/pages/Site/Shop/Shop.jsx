import React, { useEffect, useState, useCallback } from "react";
import "./Shop.scss";
import ShopCarousel from "../../../components/ShopCarousel/ShopCarousel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TuneIcon from "@mui/icons-material/Tune";
import StarIcon from "@mui/icons-material/Star";
import Loading from "../../../components/Loading/Loading";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Shop() {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="shop__container">
          <div className="shop__slider">
            <ShopCarousel />
          </div>

          <div className="product__filters">
            <div className="product__filters__left">
              <ul>
                <li>
                  <button>
                    <p>Product Type</p>
                    <p>
                      {" "}
                      <ArrowDropDownIcon className="dropicon" />
                    </p>{" "}
                  </button>
                </li>
                <li>
                  <button>
                    <p>Price</p>{" "}
                    <p>
                      {" "}
                      <ArrowDropDownIcon className="dropicon" />
                    </p>{" "}
                  </button>
                </li>
                <li>
                  <button>
                    <p>Material</p>{" "}
                    <p>
                      {" "}
                      <ArrowDropDownIcon className="dropicon" />
                    </p>{" "}
                  </button>
                </li>
                <li>
                  <button>
                    <p>Offer</p>{" "}
                    <p>
                      {" "}
                      <ArrowDropDownIcon className="dropicon" />
                    </p>{" "}
                  </button>
                </li>
                <li>
                  <button>
                    <p>All Filters</p>{" "}
                    <p>
                      {" "}
                      <TuneIcon className="dropicon" />
                    </p>{" "}
                  </button>
                </li>
              </ul>
            </div>

            <div className="product__filters__right">
              <button>
                <p>Sort by</p>
                <p>
                  {" "}
                  <ArrowDropDownIcon className="dropicon" />
                </p>
              </button>
            </div>
          </div>

          <div className="shop__vitrin">


            <div className="product__card">
  <div className="favourite__box"><FavoriteIcon onClick={handleClick} style={{ color: clicked ? 'red' : 'black' }}/></div>
              <img
                src="https://sr20.driftworks.com/media/catalog/product/cache/d51c85e004305c0d39cf9586ba8c5789/6/0/6061.33.1001-blk-leather-white-spokes-grey-stitch-1_1.jpg"
                alt=""
              />
              <div className="product__info">
                <div>
                  <h5 className="product__name">Alışdırma şamı</h5>
                </div>
                <div>
                  <p className="product__price">$120.00</p>
                </div>
              </div>
              <div className="product__quarenty__info">
                <p>Original car accessories</p>
              </div>
              <div className="reiting__box">
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <p>(120)</p>
              </div>
              <button className="addbtn">Add to Cart</button>
            </div>



            

            {/* <div className="product__card">
       <div className="favourite__box"><FavoriteIcon onClick={handleClick} style={{ color: clicked ? 'red' : 'black' }}/></div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className="product__info">
                <div>
                  <h5 className="product__name">Alışdırma şamı</h5>
                </div>
                <div>
                  <p className="product__price">$120.00</p>
                </div>
              </div>
              <div className="product__quarenty__info">
                <p>Original car accessories</p>
              </div>
              <div className="reiting__box">
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <p>(120)</p>
              </div>
              <button className="addbtn">Add to Cart</button>
            </div>

            <div className="product__card">
              <div className="favourite__box"><FavoriteIcon onClick={handleClick} style={{ color: clicked ? 'red' : 'black' }}/></div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className="product__info">
                <div>
                  <h5 className="product__name">Alışdırma şamı</h5>
                </div>
                <div>
                  <p className="product__price">$120.00</p>
                </div>
              </div>
              <div className="product__quarenty__info">
                <p>Original car accessories</p>
              </div>
              <div className="reiting__box">
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <p>(120)</p>
              </div>
              <button className="addbtn">Add to Cart</button>
            </div>

            <div className="product__card">
<div className="favourite__box"><FavoriteIcon onClick={handleClick} style={{ color: clicked ? 'red' : 'black' }}/></div>
              <img
                src="https://i.ebayimg.com/images/g/93kAAOSwd3phaTjm/s-l400.jpg"
                alt=""
              />
              <div className="product__info">
                <div>
                  <h5 className="product__name">Alışdırma şamı</h5>
                </div>
                <div>
                  <p className="product__price">$120.00</p>
                </div>
              </div>
              <div className="product__quarenty__info">
                <p>Original car accessories</p>
              </div>
              <div className="reiting__box">
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <p>(120)</p>
              </div>
              <button className="addbtn">Add to Cart</button>
            </div>

            <div className="product__card">
<div className="favourite__box"><FavoriteIcon onClick={handleClick} style={{ color: clicked ? 'red' : 'black' }}/></div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7XxfIX4ElaByW7Z5o6kwrnyKI4rcqxzecM9zDekRlN3LTqQfX4S6baGYMehVe7QFp10&usqp=CAU"
                alt=""
              />
              <div className="product__info">
                <div>
                  <h5 className="product__name">Alışdırma şamı</h5>
                </div>
                <div>
                  <p className="product__price">$120.00</p>
                </div>
              </div>
              <div className="product__quarenty__info">
                <p>Original car accessories</p>
              </div>
              <div className="reiting__box">
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <StarIcon className="reitingicon" />
                <p>(120)</p>
              </div>
              <button className="addbtn">Add to Cart</button>
            </div> */}
          </div>
        </section>
      )}
    </>
  );
}

export default Shop;
