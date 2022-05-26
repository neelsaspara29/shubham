import React from "react";
import { useStateValue } from "../Component/redux/StateProvider";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const cart2 = () => {
  const [{ cart }, dispatch] = useStateValue();

  const findCount = (_id) => {
    const index = cart.findIndex((item) => {
      return item.id == _id;
    });
    console.log(cart);
    if (index != -1) {
      return cart[index].count;
    } else {
      return 0;
    }
    // console.log(index);

    // return 0;
  };

  const findIndex = (_id) => {
    const index = cart.findIndex((item) => {
      return item.id == _id;
    });
    // console.log(cart)
    return index;
  };

  const reduceQty = (_id, item) => {
    const index = findIndex(_id);
    const qty = cart[index].count;
    dispatch({
      type: "REMOVE_FROM_CART",
      item: {
        index: index,
        qty: qty,
        item: item,
      },
    });
  };

  const addToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      item: item,
    });
  };
  return (
    <div>
      {cart.map(({ price, b_name, id }) => {
        {
          /* const count = cart.filter((item) => {
              return (item.id == _id)
            }) */
        }

        {
          /* console.log(count.length()) */
        }
        return (
          <div className={styles.book}>
            <div>
              <Image src={"/Images/CSDS.jpg"} width={300} height={300} />
            </div>
            <div style={{ fontSize: "16px" }}>{b_name}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "16px",
              }}
            >
              <span>Price</span> &#8377; {price}/-
            </div>
            <div
              className={styles.bookscart}
              onClick={
                findIndex(id) == -1
                  ? () => {
                      addToCart({
                        id: id,
                        b_name: b_name,
                        price: price,
                        count: findCount(id) + 1,
                        index: findIndex(id),
                      });
                    }
                  : () => {}
              }
            >
              {findIndex(id) == -1 ? (
                "add to cart"
              ) : (
                <CartButton
                  reduce={() => {
                    reduceQty(id, {
                      id: id,
                      b_name: b_name,
                      price: price,
                      count: findCount(id) - 1,
                      index: findIndex(id),
                    });
                  }}
                  name={findIndex(id)}
                  add={() => {
                    addToCart({
                      id: id,
                      b_name: b_name,
                      price: price,
                      count: findCount(id) + 1,
                      index: findIndex(id),
                    });
                  }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CartButton = ({ name, reduce, add }) => {
const [{ cart }, dispatch] = useStateValue();

  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={reduce}
        style={{ width: "25%", borderRight: "1px solid black" }}
      >
        -
      </div>
      <div style={{ width: "70%" }}>{cart[name].count}</div>
      <div
        onClick={add}
        style={{ width: "25%", borderLeft: "1px solid black" }}
      >
        +
      </div>
    </div>
  );
};

export default cart2;
