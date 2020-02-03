import React, { useState, Fragment } from "react";
import "./Checkout.css";
// import { withRouter } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import Modal from "../../components/UI/Modal/Modal";
import { Transition } from "react-transition-group";
import { useHistory } from "react-router-dom";

function Checkout(props) {
  //axios request clean-up
  // _isMounted = false;

  const [instagram, setInstagram] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const history = useHistory();
  //cancel state update on unMounted component
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  const goBackHandler = e => {
    e.preventDefault(); //form is not connected error
    history.push("/bright-burger");
  };

  //sync state with user input form
  const updateFormHandler = e => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setInstagram(e.target.value);
    }
  };

  //send order to firebase
  const orderHandler = e => {
    // this._isMounted = true;
    e.preventDefault(); //form is not connected error
    setLoading(true); // start spinner
    const order = {
      ingredients: props.ing,
      price: props.ttlP,
      customer: {
        instagram: instagram,
        UserName: name
      }
    };

    axios
      .post("/orders.json", order)
      .then(
        response => {
          setLoading(false);
          setModal(true);
        } // end spinner}
      )
      .catch(error => setLoading(false)); //end spinner

    //go back
    setTimeout(function() {
      history.push("/orders");
    }, 3500);
  };

  //show spinner while sending a request
  let orderCheckout = (
    <CheckoutForm
      updateForm={updateFormHandler}
      back={goBackHandler}
      order={orderHandler}
      name="name"
      instagram="instagram"
    />
  );
  if (modal) {
    orderCheckout = null;
  }
  if (loading) {
    orderCheckout = <Spinner />;
  }

  //success message after order
  const message = (
    <Fragment>
      <h2>Thanks, {name}</h2>
      <h4>Maybe check your order in the orders section?</h4>
    </Fragment>
  );

  return (
    <div className="BackBurger">
      {/* show modal with transition */}
      <Transition mountOnEnter unmountOnExit in={modal} timeout={300}>
        {state => <Modal show={state}>{message}</Modal>}
      </Transition>

      {orderCheckout}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ing: state.bbd.ingredients,
    ttlP: state.bbd.totalPrice
  };
};

export default connect(mapStateToProps)(withErrorHandler(Checkout, axios));
