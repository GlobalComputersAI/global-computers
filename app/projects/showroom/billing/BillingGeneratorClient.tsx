"use client";

import { useMemo, useState } from "react";

type InvoiceItem = {
  id: number;
  itemName: string;
  qty: number;
  price: number;
};

const today = new Date();

function formatCurrency(value: number) {
  return `₹${value.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function BillingGeneratorClient() {
  const [invoiceNo, setInvoiceNo] = useState("INV-1001");
  const [invoiceDate, setInvoiceDate] = useState(
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(
      today.getDate()
    ).padStart(2, "0")}`
  );

  const [businessName, setBusinessName] = useState("ShowroomLuxe");
  const [businessAddress, setBusinessAddress] = useState(
    "Main Market Road, Korba, Chhattisgarh"
  );
  const [businessPhone, setBusinessPhone] = useState("+91 97524 22686");
  const [businessGstin, setBusinessGstin] = useState("22AAAAA0000A1Z5");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const [gstPercent, setGstPercent] = useState(18);

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, itemName: "Premium Product", qty: 1, price: 25000 },
    { id: 2, itemName: "Showroom Item", qty: 2, price: 7500 },
  ]);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.qty * item.price, 0),
    [items]
  );

  const gstAmount = useMemo(
    () => (subtotal * gstPercent) / 100,
    [subtotal, gstPercent]
  );

  const grandTotal = useMemo(() => subtotal + gstAmount, [subtotal, gstAmount]);

  const updateItem = (
    id: number,
    key: keyof Omit<InvoiceItem, "id">,
    value: string | number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [key]:
                key === "itemName"
                  ? String(value)
                  : Number.isNaN(Number(value))
                  ? 0
                  : Number(value),
            }
          : item
      )
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        itemName: "",
        qty: 1,
        price: 0,
      },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => (prev.length > 1 ? prev.filter((item) => item.id !== id) : prev));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setInvoiceNo("INV-1001");
    setBusinessName("ShowroomLuxe");
    setBusinessAddress("Main Market Road, Korba, Chhattisgarh");
    setBusinessPhone("+91 97524 22686");
    setBusinessGstin("22AAAAA0000A1Z5");
    setCustomerName("");
    setCustomerPhone("");
    setCustomerAddress("");
    setGstPercent(18);
    setItems([
      { id: 1, itemName: "Premium Product", qty: 1, price: 25000 },
      { id: 2, itemName: "Showroom Item", qty: 2, price: 7500 },
    ]);
  };

  return (
    <div className="form-grid">
      <div className="billing-card">
        <div className="eyebrow">Invoice form</div>
        <h2>Create customer invoice</h2>
        <p>
          Fill invoice details, add items, and generate a clean professional bill for your client.
        </p>

        <div className="form-row two">
          <input
            className="input"
            placeholder="Invoice Number"
            value={invoiceNo}
            onChange={(e) => setInvoiceNo(e.target.value)}
          />
          <input
            className="input"
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
        </div>

        <div className="form-row two">
          <input
            className="input"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <input
            className="input"
            placeholder="Business Phone"
            value={businessPhone}
            onChange={(e) => setBusinessPhone(e.target.value)}
          />
        </div>

        <div className="form-row two">
          <input
            className="input"
            placeholder="GST Number"
            value={businessGstin}
            onChange={(e) => setBusinessGstin(e.target.value)}
          />
          <input
            className="input"
            type="number"
            min="0"
            placeholder="GST %"
            value={gstPercent}
            onChange={(e) => setGstPercent(Number(e.target.value) || 0)}
          />
        </div>

        <div className="form-row">
          <textarea
            className="textarea"
            placeholder="Business Address"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
          />
        </div>

        <div className="form-row two">
          <input
            className="input"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            className="input"
            placeholder="Customer Phone"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
        </div>

        <div className="form-row">
          <textarea
            className="textarea"
            placeholder="Customer Address"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              alignItems: "center",
              marginBottom: "14px",
              flexWrap: "wrap",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "22px",
                lineHeight: 1.2,
                color: "#111111",
              }}
            >
              Invoice Items
            </h3>

            <button type="button" className="btn btn-primary" onClick={addItem}>
              Add Item
            </button>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            {items.map((item, index) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid rgba(17, 17, 17, 0.08)",
                  borderRadius: "20px",
                  padding: "16px",
                  background: "#fafafa",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    alignItems: "center",
                    marginBottom: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <strong style={{ color: "#111111" }}>Item {index + 1}</strong>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="btn btn-outline"
                  >
                    Remove
                  </button>
                </div>

                <div className="form-row">
                  <input
                    className="input"
                    placeholder="Item Name"
                    value={item.itemName}
                    onChange={(e) => updateItem(item.id, "itemName", e.target.value)}
                  />
                </div>

                <div className="form-row two">
                  <input
                    className="input"
                    type="number"
                    min="1"
                    placeholder="Quantity"
                    value={item.qty}
                    onChange={(e) => updateItem(item.id, "qty", e.target.value)}
                  />
                  <input
                    className="input"
                    type="number"
                    min="0"
                    placeholder="Price"
                    value={item.price}
                    onChange={(e) => updateItem(item.id, "price", e.target.value)}
                  />
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontWeight: 800,
                    color: "#111111",
                    fontSize: "15px",
                  }}
                >
                  Line Total: {formatCurrency(item.qty * item.price)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bill-toolbar">
          <button type="button" className="btn btn-primary" onClick={handlePrint}>
            Print Invoice
          </button>
          <button type="button" className="btn btn-outline" onClick={handleReset}>
            Reset Form
          </button>
        </div>
      </div>

      <div className="side-card">
        <div className="eyebrow">Invoice preview</div>
        <h2>Professional bill preview</h2>
        <p>
          This invoice updates live as you enter values. Use Print Invoice to generate a bill for
          your customer.
        </p>

        <div className="invoice-shell" id="printable-invoice">
          <div className="invoice-top">
            <div className="invoice-brand">
              <h3>{businessName || "Your Business Name"}</h3>
              <p>{businessAddress || "Business address"}</p>
              <p>{businessPhone || "Business phone"}</p>
              <p>GSTIN: {businessGstin || "-"}</p>
            </div>

            <div className="invoice-meta">
              <strong>Invoice</strong>
              <p style={{ margin: "0 0 6px", color: "#64748b" }}>
                No: {invoiceNo || "-"}
              </p>
              <p style={{ margin: 0, color: "#64748b" }}>
                Date: {invoiceDate || "-"}
              </p>
            </div>
          </div>

          <div className="invoice-client">
            <h4>Bill To</h4>
            <p>{customerName || "Customer name"}</p>
            <p>{customerPhone || "Customer phone"}</p>
            <p>{customerAddress || "Customer address"}</p>
          </div>

          <div className="table-wrap" style={{ marginTop: "18px" }}>
            <table className="invoice-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.itemName || "-"}</td>
                    <td>{item.qty}</td>
                    <td>{formatCurrency(item.price)}</td>
                    <td>{formatCurrency(item.qty * item.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="total-box">
            <div className="total-line">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="total-line">
              <span>GST ({gstPercent}%)</span>
              <span>{formatCurrency(gstAmount)}</span>
            </div>
            <div className="total-line grand">
              <span>Grand Total</span>
              <span>{formatCurrency(grandTotal)}</span>
            </div>
          </div>

          <div
            style={{
              marginTop: "18px",
              paddingTop: "14px",
              borderTop: "1px dashed rgba(17,17,17,0.12)",
              color: "#64748b",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            Thank you for your business. Please contact us for any billing support or product
            enquiry.
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }

          #printable-invoice,
          #printable-invoice * {
            visibility: visible;
          }

          #printable-invoice {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
            border: none;
          }
        }
      `}</style>
    </div>
  );
}