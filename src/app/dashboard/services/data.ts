export interface ServiceField {
  name: string;
  type: "text" | "number" | "email" | "date" | "file" | "select" | "image";
  options?: string[];
  placeholder?: string;
}

export interface Service {
  title: string;
  image?: string;
  fields: ServiceField[];
}

export const SERVICES: Service[] = [
  {
    title: "New Passport Application",
    image: "/images/services/passport/new.png",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "Father's Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      { name: "Date of Birth", type: "date" },
      { name: "Gender", type: "select", options: ["Male", "Female"] },
      { name: "Nationality", type: "text" },
      { name: "Permanent Address", type: "text" },
      { name: "Current Address", type: "text" },
      { name: "Phone Number", type: "text" },
      { name: "Email", type: "email" },
      { name: "Place of Birth", type: "text" },
      { name: "Passport Type", type: "select", options: ["Normal", "Urgent"] },
      { name: "Upload Photo", type: "file" },
      { name: "Upload CNIC Front", type: "file" },
      { name: "Upload CNIC Back", type: "file" },
    ],
  },

  {
    /*     title: "Passport Renewal",*/

    title: "CNIC",
  image: "/images/services/passport/new.png",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      { name: "Old Passport Number", type: "text" },
      { name: "Old Passport Issue Date", type: "date" },
      { name: "Old Passport Expiry Date", type: "date" },
      { name: "Reason for Renewal", type: "text" },
      { name: "Upload Old Passport Scan", type: "file" },
      { name: "Upload CNIC", type: "file" },
      { name: "New Photo", type: "file" },
    ],
  },
  {
    /* title: "Lost Passport Replacement", */
    title: "B-form",

    fields: [
      { name: "Full Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      { name: "Lost Passport Number", type: "text" },
      { name: "Date of Loss", type: "date" },
      { name: "Reason for Loss", type: "text" },
      { name: "Upload CNIC", type: "file" },
      { name: "Police Report", type: "file" },
      { name: "New Photo", type: "file" },
    ],
  },
  {
    /*     title: "Damaged Passport Reprint",
     */ title: "Damaged Passport Reprint",

    fields: [
      { name: "Full Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      { name: "Passport Number", type: "text" },
      { name: "Date of Damage", type: "date" },
      { name: "Reason for Reprint", type: "text" },
      { name: "Upload Damaged Passport", type: "file" },
      { name: "Upload CNIC", type: "file" },
      { name: "New Photo", type: "file" },
    ],
  },
  {
    title: "Modify / Update Passport Information",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      { name: "Passport Number", type: "text" },
      { name: "Fields to Update", type: "text" },
      { name: "Upload CNIC", type: "file" },
      { name: "New Photo", type: "file" },
    ],
  },
  {
    title: "Track Passport Application Status",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      { name: "Passport Number", type: "text" },
    ],
  },
  {
    title: "Appointment Booking Service",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      { name: "Preferred Date", type: "date" },
      { name: "Preferred Time", type: "text" },
      { name: "Contact Number", type: "text" },
    ],
  },
  {
    title: "Online Fee Payment",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      {
        name: "Payment Method",
        type: "select",
        options: ["Credit Card", "Debit Card", "Bank Transfer"],
      },
      { name: "Amount", type: "number" },
    ],
  },
  {
    title: "Document Upload Service",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      {
        name: "Document Type",
        type: "select",
        options: ["CNIC", "Passport Photo", "Other"],
      },
      { name: "Upload Document", type: "file" },
    ],
  },
  {
    title: "User Registration & Login",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "Email", type: "email" },
      { name: "Password", type: "text" },
    ],
  },
  {
    title: "Customer Support / Helpdesk",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "Email", type: "email" },
      { name: "Issue Subject", type: "text" },
      { name: "Issue Description", type: "text" },
      { name: "Attachment", type: "file" },
    ],
  },
  {
    title: "Admin Panel Services",
    fields: [
      { name: "Admin Name", type: "text" },
      { name: "Admin Email", type: "email" },
      {
        name: "Service Type",
        type: "select",
        options: ["Add User", "Remove User", "Update Service"],
      },
      { name: "Remarks", type: "text" },
    ],
  },
];

/* // src/app/dashboard/services/data.ts
export interface ServiceField {
  name: string;
  type: "text" | "number" | "email" | "date" | "file" | "select";
  options?: string[]; // for select
}

export interface Service {
  title: string;
  fields: ServiceField[];
}

export const SERVICES: Service[] = [
  {
    title: "New Passport Application",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "Father's Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      { name: "Date of Birth", type: "date" },
      { name: "Gender", type: "select", options: ["Male", "Female"] },
      { name: "Nationality", type: "text" },
      { name: "Permanent Address", type: "text" },
      { name: "Current Address", type: "text" },
      { name: "Phone Number", type: "text" },
      { name: "Email", type: "email" },
      { name: "Place of Birth", type: "text" },
      { name: "Passport Type", type: "select", options: ["Normal", "Urgent"] },
      { name: "Upload Photo", type: "file" },
      { name: "Upload CNIC Front", type: "file" },
      { name: "Upload CNIC Back", type: "file" },
    ],
  },
  {
    title: "Passport Renewal",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "CNIC Number", type: "text" },
      { name: "Passport Number", type: "text" },
      { name: "Date of Birth", type: "date" },
      { name: "Upload Old Passport", type: "file" },
    ],
  },
];
 */
