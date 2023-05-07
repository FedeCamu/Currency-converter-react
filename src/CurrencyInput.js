import React from "react";

export default function CurrencyInput(){

    return (
      <div className="CurrencyInput">
        <div className="row">
          <div className="col-3">Amount</div>
          <div className="col-3">From</div>
          <div className="col-3"></div>
          <div className="col-3">To</div>
        </div>
        <div className="row">
          <div className="col-3">
            <input type="number" placeholder="enter amount" />
          </div>
          <div className="col-3">
            <input type="number" placeholder="enter amount" />
          </div>
          <div className="col-3 swap-currencies">
            <button>swap</button>
          </div>
          <div className="col-3">
            <input type="number" placeholder="enter amount" />
          </div>
        </div>
      </div>
    );
}