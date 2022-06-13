import React from "react";
import { useStateValue } from "../Component/redux/StateProvider";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { getCartTotal, getTotalQty } from "../Component/redux/reducer";

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
    <>
      <section className={styles.cartheader}>
        <div>Book Summery</div>
      </section>
      <section className={styles.cartitems}>
        {cart.map(
          ({ b_name, price, id, count, d_name, s_code, sem, p_name }) => {
            return (
              <div className={styles.item}>
                <div className={styles.discription}>
                  <div>
                    <Image src="/Images/CSDS.jpg" width={100} height={150} />
                  </div>
                  <div>
                    <h5>{b_name}</h5>
                    <p>Semester : {sem}</p>
                    <p>Department name : {d_name}</p>
                    <p>subject code : {s_code}</p>
                    <p>Publication name: {p_name}</p>
                  </div>
                </div>

                <div>
                  <h5>{price}/-</h5>
                </div>
                <div>
                  <h5>Quantity</h5>
                  <p>{count}</p>{" "}
                  <p
                    onClick={() => {
                      addToCart({
                        id: id,
                        b_name: b_name,
                        price: price,
                        count: findCount(id) + 1,
                        index: findIndex(id),
                        d_name: d_name,
                        sem: sem,
                        s_code: s_code,
                        p_name: p_name,
                      });
                    }}
                  >
                    add
                  </p>
                  <p
                    onClick={() => {
                      reduceQty(id, {
                        id: id,
                        b_name: b_name,
                        price: price,
                        count: findCount(id) - 1,
                        index: findIndex(id),
                        d_name: d_name,
                        sem: sem,
                        s_code: s_code,
                        p_name: p_name,
                      });
                    }}
                  >
                    remove
                  </p>
                </div>
                <div>
                  <h4>{count * price}/-</h4>
                </div>
              </div>
            );
          }
        )}
      </section>
      <section
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <span>Total Qty: {getTotalQty(cart)}</span>
        <span>Total Amount: {getCartTotal(cart)}/-</span>
      </section>
    </>
  );
};

const CartButton = ({ name, reduce, add }) => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={reduce}
        style={{
          width: "25%",
          borderRight: "1px solid black",
          cursor: "pointer",
        }}
      >
        -
      </div>
      <div style={{ width: "70%" }}>{cart[name].count}</div>
      <div
        onClick={add}
        style={{
          width: "25%",
          borderLeft: "1px solid black",
          cursor: "pointer",
        }}
      >
        +
      </div>
    </div>
  );
};

export default cart2;
