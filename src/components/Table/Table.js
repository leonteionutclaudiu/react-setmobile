import Table from 'react-bootstrap/Table';
import classes from './Table.module.css';

function Table1() {
  let erpPaymentId = [];
  let erpInvoiceId = [];
  let documentType = [];
  let invoiceSerial = [];
  let invoiceNumber = [];
  let documentDate = [];
  let invoiceValue = [];
  let i = 6;

  function addNew(e) {
    const fetchData = () => {
      fetch(`https://test.aqmeter.com/v2/test/payment-history`)
        .then((response) => response.json())
        .then((actualData) => {
          console.log(actualData[0]);
          erpPaymentId.push(Object.values(actualData[0])[0]);
          erpInvoiceId.push(Object.values(actualData[0])[1]);
          documentType.push(Object.values(actualData[0])[2]);
          invoiceSerial.push(Object.values(actualData[0])[3]);
          invoiceNumber.push(Object.values(actualData[0])[4]);
          documentDate.push(Object.values(actualData[0])[5]);
          invoiceValue.push(Object.values(actualData[0])[6]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    e.preventDefault();
    fetchData();
    i++;
    console.log(i);

    let element = document.querySelector(`.tableBody`);

    let trElements = document.querySelectorAll(`.newRow`);
    trElements.forEach((tr) => {
      let td = document.createElement(`td`);
      let tdText = document.createTextNode(`${erpPaymentId}`);
      td.appendChild(tdText);
      tr.appendChild(td);
      td.classList.add(`td`);

      let td2 = document.createElement(`td`);
      let tdText2 = document.createTextNode(`${erpInvoiceId}`);
      td2.appendChild(tdText2);
      tr.appendChild(td2);
      td2.classList.add(`td`);

      let td3 = document.createElement(`td`);
      let tdText3 = document.createTextNode(`${documentType}`);
      td2.appendChild(tdText3);
      tr.appendChild(td3);
      td3.classList.add(`td`);

      let td4 = document.createElement(`td`);
      let tdText4 = document.createTextNode(`${invoiceSerial}`);
      td2.appendChild(tdText4);
      tr.appendChild(td4);
      td4.classList.add(`td`);

      let td5 = document.createElement(`td`);
      let tdText5 = document.createTextNode(`${invoiceNumber}`);
      td2.appendChild(tdText5);
      tr.appendChild(td5);
      td5.classList.add(`td`);

      let td6 = document.createElement(`td`);
      let tdText6 = document.createTextNode(`${documentDate}`);
      td2.appendChild(tdText6);
      tr.appendChild(td6);
      td6.classList.add(`td`);

      let td7 = document.createElement(`td`);
      let tdText7 = document.createTextNode(`${invoiceValue}`);
      td2.appendChild(tdText7);
      tr.appendChild(td7);
      td7.classList.add(`td`);
    });

    let tr = document.createElement(`tr`);
    let trText = document.createTextNode(i);
    tr.appendChild(trText);
    element.appendChild(tr);
    tr.classList.add(`newRow`);

    erpPaymentId = [];
    erpInvoiceId = [];
    documentType = [];
    invoiceSerial = [];
    invoiceNumber = [];
    documentDate = [];
    invoiceValue = [];
  }

  return (
    <div className={classes.table}>
      <h3>Table</h3>
      <p>Just another table example</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>erpPaymentId</th>
            <th>erpInvoiceId</th>
            <th>documentType</th>
            <th>invoiceSerial</th>
            <th>invoiceNumber</th>
            <th>documentDate</th>
            <th>invoiceValue</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          <tr>
            <td>1</td>
            <td>Something</td>
            <td>Lorem ipsum dolor sit amet, consectetur.</td>
            <td>29.99</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nothing</td>
            <td>Lorem ipsum dolor sit amet, consectetur.</td>
            <td>19.99</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Something</td>
            <td>Lorem ipsum dolor sit amet, consectetur.</td>
            <td>29.99</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Nothing</td>
            <td>Lorem ipsum dolor sit amet, consectetur.</td>
            <td>19.99</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Something</td>
            <td>Lorem ipsum dolor sit amet, consectetur.</td>
            <td>29.99</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Nothing</td>
            <td>Lorem ipsum dolor sit amet, consectetur.</td>
            <td>19.99</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>100.00</td>
          </tr>
        </tbody>
      </Table>
      <button className={('addBtn', classes.addBtn)} onClick={addNew}>
        Add new
      </button>
    </div>
  );
}

export default Table1;
