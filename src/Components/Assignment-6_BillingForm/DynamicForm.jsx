import React, { useState } from "react";
import style from "./DynamicForm.module.css";

export default function DynamicForm() {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");
  const [qty, setQty] = useState();
  const [dependent, setDependent] = useState("a");
  const [tableVisivility, setTableVisivility] = useState(false);
  const [product, setProduct] = useState({
    fruit1: "",
    price: "",
    quantity: "",
  });
  const [tableData, setTableData] = useState([]);
  function handleAdd() {
    setDependent(dependent + "a");

    setProduct({
      ["fruit1"]: fruit,
      ["price"]: "10",
      ["quantity"]: qty,
    });
    // console.log(product);

    let x = [...tableData];
    x.push(product);
    setTableData([...x]);
  }

  function handleBill() {
    setProduct({
      ["fruit1"]: fruit,
      ["price"]: "10",
      ["quantity"]: qty,
    });
    // console.log(product);

    let x = [...tableData];
    x.push(product);
    setTableData([...x]);
    // console.log(tableData);
    setTableVisivility(true);
  }

  return (
    <div>
      <h2>Billing Form</h2>
      <div>Customer Name</div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Customer Name"
      />
      {Array.from(dependent).map((item) => (
        <div>
          <hr />
          <div className={style.formContent}>
            <div className={style.productField}>
              <div>Select Product</div>
              <select
                name="products"
                id="products"
                onChange={(e) => setFruit(e.target.value)}
              >
                <option value="" disabled>
                  select
                </option>
                <option value="Apple">Apple</option>
                <option value="Mango">Mango</option>
                <option value="Banana">Banana</option>
                // ...
              </select>
            </div>
            <div className={style.qtyField}>
              <div>Quantity</div>
              <input
                onChange={(e) => setQty(e.target.value)}
                placeholder="Quantity"
                type="number"
              ></input>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <div>
        <button onClick={handleAdd}>Add More Item</button>
        <button onClick={handleBill}>Create Bill</button>
      </div>
      <hr />
      {tableVisivility && (
        <div className={style.tableBox}>
          <table>
            <thead>
              <tr>
                <td>Customer Name: {name}</td>
              </tr>
              <tr>
                <td>Date : 12/04/2023</td>
              </tr>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((ele) => (
                <tr>
                  <td>{ele.fruit1}</td>
                  <td>{ele.quantity}</td>
                  <td>{ele.price}</td>
                  <td>{parseInt(ele.price) * parseInt(ele.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
