import React from "react";
import "./CheckoutForm.css";
import Button from "../UI/Button/button";
import Input from "../UI/Input/Input";

export default function CheckoutForm(props) {
  return (
    <div className="Form">
      <h4>Time to Share</h4>
      <form action="User Info" onSubmit={props.order}>
        <Input name={props.name} label="Your Name" changed={props.updateForm} />
        <br />
        <Input
          name={props.instagram}
          label="And Instagram"
          changed={props.updateForm}
        />
        <br />

        <Button clicked={props.back}>CANCEL</Button>
        <Button>ORDER</Button>
      </form>
    </div>
  );
}
