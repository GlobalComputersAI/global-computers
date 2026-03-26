"use client";

import { useMemo, useState } from "react";

type BillItem = {
  id: string;
  description: string;
  details: string;
  qty: number;
  unit: string;
  rate: number;
};

type BusinessProfile = {
  companyName: string;
  tagline: string;
  ownerName: string;
  phone: string;
  email: string;
  website: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  gstin: string;
  pan: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  ifsc: string;
  upiId: string;
};

type ClientProfile = {
  clientName: string;
  companyName: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  gstin: string;
};

type ProjectInfo = {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  quotationNumber: string;
  projectTitle: string;
  projectType: string;
  siteLocation: string;
  area: string;
  areaUnit: string;
  designerName: string;
  paymentTerms: string;
  deliveryTimeline: string;
  notes: string;
  terms: string;
  discountType: "percent" | "fixed";
  discountValue: number;
  taxPercent: number;
  advancePaid: number;
  showBankDetails: boolean;
  showTerms: boolean;
  showNotes: boolean;
  showDetailsColumn: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function numberToCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function safeNumber(value: number) {
  if (!Number.isFinite(value)) return 0;
  return value;
}

function createEmptyItem(): BillItem {
  return {
    id: crypto.randomUUID(),
    description: "",
    details: "",
    qty: 1,
    unit: "Nos",
    rate: 0,
  };
}

const defaultBusiness: BusinessProfile = {
  companyName: "Interior Design Studio",
  tagline: "Premium Interior Design • Modular Solutions • Turnkey Execution",
  ownerName: "Gaurav Sah",
  phone: "+91 9752422686",
  email: "info@globalcomputers.net",
  website: "www.globalcomputers.net",
  addressLine1: "Main Office / Studio Address",
  addressLine2: "Near Landmark / Business Area",
  city: "Korba",
  state: "Chhattisgarh",
  pincode: "495677",
  gstin: "22ABCDE1234F1Z5",
  pan: "ABCDE1234F",
  bankName: "State Bank of India",
  accountName: "Interior Design Studio",
  accountNumber: "12345678901",
  ifsc: "SBIN0001234",
  upiId: "interiorstudio@upi",
};

const defaultClient: ClientProfile = {
  clientName: "Client Name",
  companyName: "",
  phone: "",
  email: "",
  addressLine1: "Client Address Line 1",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
  gstin: "",
};

const today = new Date();
const due = new Date();
due.setDate(due.getDate() + 7);

const defaultProject: ProjectInfo = {
  invoiceNumber: "INT-2026-001",
  invoiceDate: today.toISOString().slice(0, 10),
  dueDate: due.toISOString().slice(0, 10),
  quotationNumber: "QTN-2026-001",
  projectTitle: "Complete Home Interior Design",
  projectType: "Interior Design & Execution",
  siteLocation: "Client Site Address",
  area: "1200",
  areaUnit: "sq ft",
  designerName: "Gaurav Sah",
  paymentTerms: "50% advance, 30% mid-stage, 20% before final handover",
  deliveryTimeline: "3 - 5 Weeks",
  notes:
    "Thank you for choosing us for your interior project. We look forward to delivering a beautiful and practical space.",
  terms:
    "Material shades may slightly vary from digital presentation. Work timeline depends on site readiness, approvals, and material availability. Any additional work outside approved scope will be billed separately.",
  discountType: "percent",
  discountValue: 0,
  taxPercent: 18,
  advancePaid: 0,
  showBankDetails: true,
  showTerms: true,
  showNotes: true,
  showDetailsColumn: true,
};

const defaultItems: BillItem[] = [
  {
    id: crypto.randomUUID(),
    description: "Living Room Interior Design",
    details: "TV unit design, feature wall, false ceiling, lighting and styling",
    qty: 1,
    unit: "Job",
    rate: 85000,
  },
  {
    id: crypto.randomUUID(),
    description: "Modular Kitchen Work",
    details: "Kitchen layout, storage planning, finish direction and execution support",
    qty: 1,
    unit: "Job",
    rate: 125000,
  },
  {
    id: crypto.randomUUID(),
    description: "Bedroom Wardrobe & Interior",
    details: "Wardrobe layout, bed-back concept, storage planning and finish selection",
    qty: 1,
    unit: "Job",
    rate: 78000,
  },
];

function InputLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-2 block text-sm font-bold text-slate-800">
      {children}
      {required ? <span className="ml-1 text-rose-600">*</span> : null}
    </label>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="field"
    />
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="textarea"
    />
  );
}

function SelectInput({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="select"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={cn(
        "flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition",
        checked
          ? "border-emerald-300 bg-emerald-50"
          : "border-slate-200 bg-white"
      )}
    >
      <span className="text-sm font-semibold text-slate-800">{label}</span>
      <span
        className={cn(
          "inline-flex h-7 w-12 items-center rounded-full p-1 transition",
          checked ? "bg-emerald-500" : "bg-slate-300"
        )}
      >
        <span
          className={cn(
            "h-5 w-5 rounded-full bg-white transition",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </span>
    </button>
  );
}

function formatDisplayDate(dateString: string) {
  if (!dateString) return "—";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function BillingGeneratorClient() {
  const [business, setBusiness] = useState<BusinessProfile>(defaultBusiness);
  const [client, setClient] = useState<ClientProfile>(defaultClient);
  const [project, setProject] = useState<ProjectInfo>(defaultProject);
  const [items, setItems] = useState<BillItem[]>(defaultItems);

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + safeNumber(item.qty) * safeNumber(item.rate),
        0
      ),
    [items]
  );

  const discountAmount = useMemo(() => {
    if (project.discountType === "percent") {
      return (subtotal * safeNumber(project.discountValue)) / 100;
    }
    return safeNumber(project.discountValue);
  }, [project.discountType, project.discountValue, subtotal]);

  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const taxAmount = (taxableAmount * safeNumber(project.taxPercent)) / 100;
  const grandTotal = taxableAmount + taxAmount;
  const balanceDue = Math.max(0, grandTotal - safeNumber(project.advancePaid));

  function updateBusiness<K extends keyof BusinessProfile>(
    key: K,
    value: BusinessProfile[K]
  ) {
    setBusiness((prev) => ({ ...prev, [key]: value }));
  }

  function updateClient<K extends keyof ClientProfile>(
    key: K,
    value: ClientProfile[K]
  ) {
    setClient((prev) => ({ ...prev, [key]: value }));
  }

  function updateProject<K extends keyof ProjectInfo>(
    key: K,
    value: ProjectInfo[K]
  ) {
    setProject((prev) => ({ ...prev, [key]: value }));
  }

  function updateItem<K extends keyof BillItem>(
    id: string,
    key: K,
    value: BillItem[K]
  ) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  }

  function addItem() {
    setItems((prev) => [...prev, createEmptyItem()]);
  }

  function removeItem(id: string) {
    setItems((prev) => (prev.length > 1 ? prev.filter((item) => item.id !== id) : prev));
  }

  function handlePrint() {
    window.print();
  }

  function handleReset() {
    setBusiness(defaultBusiness);
    setClient(defaultClient);
    setProject(defaultProject);
    setItems(defaultItems);
  }

  return (
    <div className="section">
      <div className="container">
        <div className="mb-8 print:hidden">
          <span className="eyebrow">Bill Generator</span>
          <h1 className="heading-xl mt-5">
            Create professional interior bills, quotations, and client-ready invoices
          </h1>
          <p className="lead mt-4 max-w-prose">
            Fill your business details, client information, project scope, and line items.
            Then print or save as PDF and send it directly to your client.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 print:hidden">
            <section className="surface-strong p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="heading-md">Business Details</h2>
                  <p className="text-muted mt-2 text-sm">
                    These details will appear at the top of the invoice.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <InputLabel required>Company / Studio Name</InputLabel>
                  <TextInput
                    value={business.companyName}
                    onChange={(v) => updateBusiness("companyName", v)}
                    placeholder="Interior Design Studio"
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel>Tagline</InputLabel>
                  <TextInput
                    value={business.tagline}
                    onChange={(v) => updateBusiness("tagline", v)}
                    placeholder="Premium Interior Design • Turnkey Execution"
                  />
                </div>

                <div>
                  <InputLabel>Owner / Contact Person</InputLabel>
                  <TextInput
                    value={business.ownerName}
                    onChange={(v) => updateBusiness("ownerName", v)}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <InputLabel required>Phone</InputLabel>
                  <TextInput
                    value={business.phone}
                    onChange={(v) => updateBusiness("phone", v)}
                    placeholder="+91 xxxxxxxxxx"
                  />
                </div>

                <div>
                  <InputLabel>Email</InputLabel>
                  <TextInput
                    value={business.email}
                    onChange={(v) => updateBusiness("email", v)}
                    placeholder="info@example.com"
                    type="email"
                  />
                </div>

                <div>
                  <InputLabel>Website</InputLabel>
                  <TextInput
                    value={business.website}
                    onChange={(v) => updateBusiness("website", v)}
                    placeholder="www.example.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel>Address Line 1</InputLabel>
                  <TextInput
                    value={business.addressLine1}
                    onChange={(v) => updateBusiness("addressLine1", v)}
                    placeholder="Office / studio address"
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel>Address Line 2</InputLabel>
                  <TextInput
                    value={business.addressLine2}
                    onChange={(v) => updateBusiness("addressLine2", v)}
                    placeholder="Landmark / area"
                  />
                </div>

                <div>
                  <InputLabel>City</InputLabel>
                  <TextInput
                    value={business.city}
                    onChange={(v) => updateBusiness("city", v)}
                    placeholder="Korba"
                  />
                </div>

                <div>
                  <InputLabel>State</InputLabel>
                  <TextInput
                    value={business.state}
                    onChange={(v) => updateBusiness("state", v)}
                    placeholder="Chhattisgarh"
                  />
                </div>

                <div>
                  <InputLabel>Pincode</InputLabel>
                  <TextInput
                    value={business.pincode}
                    onChange={(v) => updateBusiness("pincode", v)}
                    placeholder="495677"
                  />
                </div>

                <div>
                  <InputLabel>GSTIN</InputLabel>
                  <TextInput
                    value={business.gstin}
                    onChange={(v) => updateBusiness("gstin", v)}
                    placeholder="GST number"
                  />
                </div>

                <div>
                  <InputLabel>PAN</InputLabel>
                  <TextInput
                    value={business.pan}
                    onChange={(v) => updateBusiness("pan", v)}
                    placeholder="PAN number"
                  />
                </div>
              </div>
            </section>

            <section className="surface-strong p-5 md:p-6">
              <h2 className="heading-md">Client Details</h2>
              <p className="text-muted mt-2 text-sm">
                Add the customer information exactly as you want it shown in the bill.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <InputLabel required>Client Name</InputLabel>
                  <TextInput
                    value={client.clientName}
                    onChange={(v) => updateClient("clientName", v)}
                    placeholder="Client name"
                  />
                </div>

                <div>
                  <InputLabel>Company Name</InputLabel>
                  <TextInput
                    value={client.companyName}
                    onChange={(v) => updateClient("companyName", v)}
                    placeholder="Client company"
                  />
                </div>

                <div>
                  <InputLabel>Phone</InputLabel>
                  <TextInput
                    value={client.phone}
                    onChange={(v) => updateClient("phone", v)}
                    placeholder="+91 xxxxxxxxxx"
                  />
                </div>

                <div>
                  <InputLabel>Email</InputLabel>
                  <TextInput
                    value={client.email}
                    onChange={(v) => updateClient("email", v)}
                    placeholder="client@example.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel>Address Line 1</InputLabel>
                  <TextInput
                    value={client.addressLine1}
                    onChange={(v) => updateClient("addressLine1", v)}
                    placeholder="Client address"
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel>Address Line 2</InputLabel>
                  <TextInput
                    value={client.addressLine2}
                    onChange={(v) => updateClient("addressLine2", v)}
                    placeholder="Landmark / area"
                  />
                </div>

                <div>
                  <InputLabel>City</InputLabel>
                  <TextInput
                    value={client.city}
                    onChange={(v) => updateClient("city", v)}
                    placeholder="City"
                  />
                </div>

                <div>
                  <InputLabel>State</InputLabel>
                  <TextInput
                    value={client.state}
                    onChange={(v) => updateClient("state", v)}
                    placeholder="State"
                  />
                </div>

                <div>
                  <InputLabel>Pincode</InputLabel>
                  <TextInput
                    value={client.pincode}
                    onChange={(v) => updateClient("pincode", v)}
                    placeholder="Pincode"
                  />
                </div>

                <div>
                  <InputLabel>GSTIN</InputLabel>
                  <TextInput
                    value={client.gstin}
                    onChange={(v) => updateClient("gstin", v)}
                    placeholder="Client GST number"
                  />
                </div>
              </div>
            </section>

            <section className="surface-strong p-5 md:p-6">
              <h2 className="heading-md">Invoice / Project Details</h2>
              <p className="text-muted mt-2 text-sm">
                Control the bill format, project title, taxes, discount, and payment details.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <InputLabel required>Invoice Number</InputLabel>
                  <TextInput
                    value={project.invoiceNumber}
                    onChange={(v) => updateProject("invoiceNumber", v)}
                    placeholder="INT-2026-001"
                  />
                </div>

                <div>
                  <InputLabel>Quotation Number</InputLabel>
                  <TextInput
                    value={project.quotationNumber}
                    onChange={(v) => updateProject("quotationNumber", v)}
                    placeholder="QTN-2026-001"
                  />
                </div>

                <div>
                  <InputLabel required>Invoice Date</InputLabel>
                  <TextInput
                    type="date"
                    value={project.invoiceDate}
                    onChange={(v) => updateProject("invoiceDate", v)}
                  />
                </div>

                <div>
                  <InputLabel>Due Date</InputLabel>
                  <TextInput
                    type="date"
                    value={project.dueDate}
                    onChange={(v) => updateProject("dueDate", v)}
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel required>Project Title</InputLabel>
                  <TextInput
                    value={project.projectTitle}
                    onChange={(v) => updateProject("projectTitle", v)}
                    placeholder="Complete Home Interior Design"
                  />
                </div>

                <div>
                  <InputLabel>Project Type</InputLabel>
                  <TextInput
                    value={project.projectType}
                    onChange={(v) => updateProject("projectType", v)}
                    placeholder="Interior Design & Execution"
                  />
                </div>

                <div>
                  <InputLabel>Site Location</InputLabel>
                  <TextInput
                    value={project.siteLocation}
                    onChange={(v) => updateProject("siteLocation", v)}
                    placeholder="Project site address"
                  />
                </div>

                <div>
                  <InputLabel>Area</InputLabel>
                  <TextInput
                    value={project.area}
                    onChange={(v) => updateProject("area", v)}
                    placeholder="1200"
                  />
                </div>

                <div>
                  <InputLabel>Area Unit</InputLabel>
                  <SelectInput
                    value={project.areaUnit}
                    onChange={(v) => updateProject("areaUnit", v)}
                    options={["sq ft", "sq m", "Room", "Unit", "Lot"]}
                  />
                </div>

                <div>
                  <InputLabel>Designer / Consultant</InputLabel>
                  <TextInput
                    value={project.designerName}
                    onChange={(v) => updateProject("designerName", v)}
                    placeholder="Designer name"
                  />
                </div>

                <div>
                  <InputLabel>Delivery Timeline</InputLabel>
                  <TextInput
                    value={project.deliveryTimeline}
                    onChange={(v) => updateProject("deliveryTimeline", v)}
                    placeholder="3 - 5 Weeks"
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel>Payment Terms</InputLabel>
                  <TextInput
                    value={project.paymentTerms}
                    onChange={(v) => updateProject("paymentTerms", v)}
                    placeholder="50% advance, balance before handover"
                  />
                </div>

                <div>
                  <InputLabel>Discount Type</InputLabel>
                  <SelectInput
                    value={project.discountType}
                    onChange={(v) =>
                      updateProject("discountType", v as "percent" | "fixed")
                    }
                    options={["percent", "fixed"]}
                  />
                </div>

                <div>
                  <InputLabel>Discount Value</InputLabel>
                  <TextInput
                    type="number"
                    value={project.discountValue}
                    onChange={(v) =>
                      updateProject("discountValue", Number(v) || 0)
                    }
                    placeholder="0"
                  />
                </div>

                <div>
                  <InputLabel>Tax %</InputLabel>
                  <TextInput
                    type="number"
                    value={project.taxPercent}
                    onChange={(v) => updateProject("taxPercent", Number(v) || 0)}
                    placeholder="18"
                  />
                </div>

                <div>
                  <InputLabel>Advance Paid</InputLabel>
                  <TextInput
                    type="number"
                    value={project.advancePaid}
                    onChange={(v) =>
                      updateProject("advancePaid", Number(v) || 0)
                    }
                    placeholder="0"
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel>Notes</InputLabel>
                  <TextArea
                    value={project.notes}
                    onChange={(v) => updateProject("notes", v)}
                    placeholder="Additional notes for client"
                    rows={4}
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel>Terms & Conditions</InputLabel>
                  <TextArea
                    value={project.terms}
                    onChange={(v) => updateProject("terms", v)}
                    placeholder="Terms and conditions"
                    rows={4}
                  />
                </div>

                <div className="md:col-span-2 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  <Toggle
                    checked={project.showDetailsColumn}
                    onChange={(v) => updateProject("showDetailsColumn", v)}
                    label="Show details column"
                  />
                  <Toggle
                    checked={project.showBankDetails}
                    onChange={(v) => updateProject("showBankDetails", v)}
                    label="Show bank details"
                  />
                  <Toggle
                    checked={project.showNotes}
                    onChange={(v) => updateProject("showNotes", v)}
                    label="Show notes"
                  />
                  <Toggle
                    checked={project.showTerms}
                    onChange={(v) => updateProject("showTerms", v)}
                    label="Show terms"
                  />
                </div>
              </div>
            </section>

            <section className="surface-strong p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="heading-md">Bill Items</h2>
                  <p className="text-muted mt-2 text-sm">
                    Add services, products, or scope-wise interior work items.
                  </p>
                </div>

                <button type="button" onClick={addItem} className="btn btn-primary">
                  + Add Item
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="text-base font-extrabold text-slate-900">
                        Item {index + 1}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="rounded-full border border-rose-200 px-3 py-1.5 text-sm font-bold text-rose-600 transition hover:bg-rose-50"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="md:col-span-2">
                        <InputLabel required>Description</InputLabel>
                        <TextInput
                          value={item.description}
                          onChange={(v) => updateItem(item.id, "description", v)}
                          placeholder="Living room interior work"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <InputLabel>Details</InputLabel>
                        <TextArea
                          value={item.details}
                          onChange={(v) => updateItem(item.id, "details", v)}
                          placeholder="Feature wall, TV unit, ceiling, lighting..."
                          rows={3}
                        />
                      </div>

                      <div>
                        <InputLabel>Qty</InputLabel>
                        <TextInput
                          type="number"
                          value={item.qty}
                          onChange={(v) =>
                            updateItem(item.id, "qty", Math.max(0, Number(v) || 0))
                          }
                        />
                      </div>

                      <div>
                        <InputLabel>Unit</InputLabel>
                        <SelectInput
                          value={item.unit}
                          onChange={(v) => updateItem(item.id, "unit", v)}
                          options={[
                            "Nos",
                            "Job",
                            "Set",
                            "sq ft",
                            "sq m",
                            "Lot",
                            "Piece",
                          ]}
                        />
                      </div>

                      <div>
                        <InputLabel>Rate</InputLabel>
                        <TextInput
                          type="number"
                          value={item.rate}
                          onChange={(v) =>
                            updateItem(item.id, "rate", Math.max(0, Number(v) || 0))
                          }
                        />
                      </div>

                      <div>
                        <InputLabel>Amount</InputLabel>
                        <div className="field flex items-center bg-slate-50 font-bold">
                          {numberToCurrency(item.qty * item.rate)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="surface-strong p-5 md:p-6">
              <h2 className="heading-md">Bank / Payment Details</h2>
              <p className="text-muted mt-2 text-sm">
                These details appear in the payment section of the bill.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <InputLabel>Bank Name</InputLabel>
                  <TextInput
                    value={business.bankName}
                    onChange={(v) => updateBusiness("bankName", v)}
                    placeholder="Bank name"
                  />
                </div>

                <div>
                  <InputLabel>Account Name</InputLabel>
                  <TextInput
                    value={business.accountName}
                    onChange={(v) => updateBusiness("accountName", v)}
                    placeholder="Account holder"
                  />
                </div>

                <div>
                  <InputLabel>Account Number</InputLabel>
                  <TextInput
                    value={business.accountNumber}
                    onChange={(v) => updateBusiness("accountNumber", v)}
                    placeholder="Account number"
                  />
                </div>

                <div>
                  <InputLabel>IFSC</InputLabel>
                  <TextInput
                    value={business.ifsc}
                    onChange={(v) => updateBusiness("ifsc", v)}
                    placeholder="IFSC code"
                  />
                </div>

                <div className="md:col-span-2">
                  <InputLabel>UPI ID</InputLabel>
                  <TextInput
                    value={business.upiId}
                    onChange={(v) => updateBusiness("upiId", v)}
                    placeholder="yourupi@bank"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={handlePrint} className="btn btn-primary">
                  Print / Save as PDF
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-secondary"
                >
                  Reset Demo Data
                </button>
              </div>
            </section>
          </div>

          <div className="print-area">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.12)] print:rounded-none print:border-0 print:shadow-none">
              <div className="bg-gradient-to-r from-[#8b5e3c] via-[#6d4528] to-[#2f4f4f] px-6 py-7 text-white md:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <div className="text-2xl font-black tracking-tight md:text-3xl">
                      {business.companyName || "Your Company Name"}
                    </div>
                    {business.tagline ? (
                      <p className="mt-2 text-sm text-white/85">{business.tagline}</p>
                    ) : null}

                    <div className="mt-5 grid gap-2 text-sm text-white/90">
                      {business.ownerName ? <div>Contact: {business.ownerName}</div> : null}
                      {business.phone ? <div>Phone: {business.phone}</div> : null}
                      {business.email ? <div>Email: {business.email}</div> : null}
                      {business.website ? <div>Website: {business.website}</div> : null}
                      {(business.addressLine1 ||
                        business.addressLine2 ||
                        business.city ||
                        business.state ||
                        business.pincode) && (
                        <div>
                          Address:{" "}
                          {[
                            business.addressLine1,
                            business.addressLine2,
                            business.city,
                            business.state,
                            business.pincode,
                          ]
                            .filter(Boolean)
                            .join(", ")}
                        </div>
                      )}
                      {business.gstin ? <div>GSTIN: {business.gstin}</div> : null}
                      {business.pan ? <div>PAN: {business.pan}</div> : null}
                    </div>
                  </div>

                  <div className="min-w-[250px] rounded-[24px] bg-white/12 p-5 backdrop-blur">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                      Client Invoice
                    </div>
                    <div className="mt-3 text-3xl font-black">INVOICE</div>

                    <div className="mt-5 grid gap-2 text-sm text-white/90">
                      <div className="flex justify-between gap-4">
                        <span>Invoice No.</span>
                        <span className="font-bold">{project.invoiceNumber || "—"}</span>
                      </div>
                      {project.quotationNumber ? (
                        <div className="flex justify-between gap-4">
                          <span>Quote No.</span>
                          <span className="font-bold">{project.quotationNumber}</span>
                        </div>
                      ) : null}
                      <div className="flex justify-between gap-4">
                        <span>Invoice Date</span>
                        <span className="font-bold">
                          {formatDisplayDate(project.invoiceDate)}
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Due Date</span>
                        <span className="font-bold">
                          {formatDisplayDate(project.dueDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 print:p-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Bill To
                    </div>
                    <div className="mt-3 text-lg font-black text-slate-900">
                      {client.clientName || "Client Name"}
                    </div>
                    {client.companyName ? (
                      <div className="mt-1 font-semibold text-slate-700">
                        {client.companyName}
                      </div>
                    ) : null}
                    <div className="mt-3 space-y-1 text-sm text-slate-600">
                      {client.phone ? <div>Phone: {client.phone}</div> : null}
                      {client.email ? <div>Email: {client.email}</div> : null}
                      {(client.addressLine1 ||
                        client.addressLine2 ||
                        client.city ||
                        client.state ||
                        client.pincode) && (
                        <div>
                          Address:{" "}
                          {[
                            client.addressLine1,
                            client.addressLine2,
                            client.city,
                            client.state,
                            client.pincode,
                          ]
                            .filter(Boolean)
                            .join(", ")}
                        </div>
                      )}
                      {client.gstin ? <div>GSTIN: {client.gstin}</div> : null}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Project Details
                    </div>
                    <div className="mt-3 text-lg font-black text-slate-900">
                      {project.projectTitle || "Project Title"}
                    </div>
                    <div className="mt-3 grid gap-2 text-sm text-slate-600">
                      {project.projectType ? (
                        <div className="flex justify-between gap-4">
                          <span>Project Type</span>
                          <span className="font-semibold text-slate-900">
                            {project.projectType}
                          </span>
                        </div>
                      ) : null}
                      {project.siteLocation ? (
                        <div className="flex justify-between gap-4">
                          <span>Site Location</span>
                          <span className="text-right font-semibold text-slate-900">
                            {project.siteLocation}
                          </span>
                        </div>
                      ) : null}
                      {project.area ? (
                        <div className="flex justify-between gap-4">
                          <span>Area</span>
                          <span className="font-semibold text-slate-900">
                            {project.area} {project.areaUnit}
                          </span>
                        </div>
                      ) : null}
                      {project.designerName ? (
                        <div className="flex justify-between gap-4">
                          <span>Consultant</span>
                          <span className="font-semibold text-slate-900">
                            {project.designerName}
                          </span>
                        </div>
                      ) : null}
                      {project.deliveryTimeline ? (
                        <div className="flex justify-between gap-4">
                          <span>Timeline</span>
                          <span className="font-semibold text-slate-900">
                            {project.deliveryTimeline}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="mt-8 overflow-x-auto rounded-[24px] border border-slate-200">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-left text-sm font-black text-slate-700">
                        <th className="px-4 py-4">#</th>
                        <th className="px-4 py-4">Description</th>
                        {project.showDetailsColumn ? (
                          <th className="px-4 py-4">Details</th>
                        ) : null}
                        <th className="px-4 py-4 text-center">Qty</th>
                        <th className="px-4 py-4 text-center">Unit</th>
                        <th className="px-4 py-4 text-right">Rate</th>
                        <th className="px-4 py-4 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr key={item.id} className="border-t border-slate-200 align-top">
                          <td className="px-4 py-4 text-sm font-bold text-slate-500">
                            {index + 1}
                          </td>
                          <td className="px-4 py-4">
                            <div className="font-bold text-slate-900">
                              {item.description || "—"}
                            </div>
                          </td>
                          {project.showDetailsColumn ? (
                            <td className="px-4 py-4 text-sm text-slate-600">
                              {item.details || "—"}
                            </td>
                          ) : null}
                          <td className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                            {item.qty}
                          </td>
                          <td className="px-4 py-4 text-center text-sm text-slate-600">
                            {item.unit}
                          </td>
                          <td className="px-4 py-4 text-right text-sm font-semibold text-slate-700">
                            {numberToCurrency(item.rate)}
                          </td>
                          <td className="px-4 py-4 text-right text-sm font-black text-slate-900">
                            {numberToCurrency(item.qty * item.rate)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
                  <div className="space-y-6">
                    {project.paymentTerms ? (
                      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                        <div className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                          Payment Terms
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-700">
                          {project.paymentTerms}
                        </p>
                      </div>
                    ) : null}

                    {project.showNotes && project.notes ? (
                      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                        <div className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                          Notes
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-700">
                          {project.notes}
                        </p>
                      </div>
                    ) : null}

                    {project.showTerms && project.terms ? (
                      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                        <div className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                          Terms & Conditions
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-700">
                          {project.terms}
                        </p>
                      </div>
                    ) : null}

                    {project.showBankDetails ? (
                      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                        <div className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                          Bank / Payment Details
                        </div>
                        <div className="mt-4 grid gap-2 text-sm text-slate-700">
                          {business.bankName ? <div>Bank: {business.bankName}</div> : null}
                          {business.accountName ? (
                            <div>Account Name: {business.accountName}</div>
                          ) : null}
                          {business.accountNumber ? (
                            <div>Account Number: {business.accountNumber}</div>
                          ) : null}
                          {business.ifsc ? <div>IFSC: {business.ifsc}</div> : null}
                          {business.upiId ? <div>UPI ID: {business.upiId}</div> : null}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-5 text-white">
                    <div className="text-sm font-black uppercase tracking-[0.16em] text-white/70">
                      Invoice Summary
                    </div>

                    <div className="mt-5 space-y-4 text-sm">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-white/75">Subtotal</span>
                        <span className="font-bold">{numberToCurrency(subtotal)}</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-white/75">
                          Discount{" "}
                          {project.discountType === "percent"
                            ? `(${project.discountValue || 0}%)`
                            : "(Fixed)"}
                        </span>
                        <span className="font-bold">
                          - {numberToCurrency(discountAmount)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-white/75">Taxable Amount</span>
                        <span className="font-bold">
                          {numberToCurrency(taxableAmount)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-white/75">
                          Tax ({project.taxPercent || 0}%)
                        </span>
                        <span className="font-bold">{numberToCurrency(taxAmount)}</span>
                      </div>

                      <div className="h-px bg-white/15" />

                      <div className="flex items-center justify-between gap-4 text-lg">
                        <span className="font-black">Grand Total</span>
                        <span className="font-black">{numberToCurrency(grandTotal)}</span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <span className="text-white/75">Advance Paid</span>
                        <span className="font-bold">
                          - {numberToCurrency(project.advancePaid)}
                        </span>
                      </div>

                      <div className="h-px bg-white/15" />

                      <div className="flex items-center justify-between gap-4 rounded-[20px] bg-white/10 px-4 py-4 text-lg">
                        <span className="font-black">Balance Due</span>
                        <span className="font-black">{numberToCurrency(balanceDue)}</span>
                      </div>
                    </div>

                    <div className="mt-6 rounded-[20px] bg-white/10 p-4 text-sm text-white/85">
                      This invoice is computer generated and can be shared directly with
                      the client as a quotation, estimate, or final bill.
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-dashed border-slate-300 pt-6 text-center text-sm text-slate-500">
                  Thank you for your business.
                  <div className="mt-2 font-semibold text-slate-700">
                    For any clarification, please contact {business.companyName || "our team"}.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[24px] border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 print:hidden">
              Tip: Click <span className="font-bold">Print / Save as PDF</span> and choose
              <span className="font-bold"> Save as PDF </span>
              in the print dialog to send this invoice to your client professionally.
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: #ffffff !important;
          }

          header,
          footer,
          .print\\:hidden {
            display: none !important;
          }

          .print-area {
            width: 100% !important;
          }

          .section,
          .container {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          @page {
            size: A4;
            margin: 12mm;
          }
        }
      `}</style>
    </div>
  );
}