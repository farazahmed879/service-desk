export interface Service {
  title: string;
  slug: string;
  image?: any;
  children?: any;
}

export interface FormData {
  service: string;
  name: string;
  fees: string;
  type: string;
  description: string;
}

export const SERVICES: Service[] = [
  /* -------passport and its Services---------- */
  {
    title: " Passport Application",
    slug: "passport",
    image: "/images/services/passport/new.png",
    children: [
      {
        title: "New Passport",
        slug: "passport",
        image: "/images/services/passport/new-passport.png",
      },
      {
        title: "Renew Passport",
        slug: "passport",
        image: "/images/services/passport/renew-passport.png",
      },
      {
        title: "Lost Passport",
        slug: "passport",
        image: "/images/services/passport/lost.png",
      },
    ],
  },

  /* ------- Cnic and its Services---------- */
  {
    title: "CNIC ",
    slug: "cnic",
    image: "/images/services/passport/cnic.png",
    children: [
      {
        title: "New Cnic",
        slug: "cnic",
        image: "/images/services/passport/new-cnic.png",
      },

      {
        title: "Renew Cnic",
        slug: "cnic",
        image: "/images/services/passport/renew-cnic.png",
      },

      {
        title: "Lost Cnic",
        slug: "cnic",
        image: "/images/services/passport/lost-cnic.png",
      },
    ],
  },

 
  /* -------B-Form and its Services---------- */
  {
    title: "B-Form",
    slug: "b-form",
    image: "/images/services/passport/b-form.png",
    children: [
      {
        title: "New B-Form",
        slug: "b-form",
        image: "/images/services/passport/b-form.png",
      },

      {
        title: "Renew B-Form",
        slug: "b-form",
        image: "/images/services/passport/renew-bform.png",
      },

      {
        title: "Lost B-Form",
        slug: "b-form",
        image: "/images/services/passport/b-form.png",
      },
    ],
  },
   {
    title: "Nadra",
    slug: "nadra",
    image: "/images/services/passport/cnic.png",
      children: [ 
      {
        title: "CNIC ",
        slug: "nadra",
        image: "/images/services/passport/cnic.png",
      },
      {
        title: "birth certificate ",
        slug: "nadra",
        image: "/images/services/passport/cnic.png",
      },
      {
        title: "Nikah name ",
        slug: "nadra",
        image: "/images/services/passport/cnic.png",
      },

      
      ],

  },

  /* -------bills ,Taxes and challans and its Services---------- */
  {
    title: "Bill and payments",
    slug: "bill-and-payments",
    image: "/images/services/passport/challan.png",
    children: [
      {
        title: "Taxes and Challans",
        slug: "bill-and-payments",
        image: "/images/services/passport/challan.png",
      },
      {
        title: "Deposit of Income Tax",
        slug: "bill-and-payments",
        image: "/images/services/passport/challan.png",
      },
      {
        title: "Property Tax",
        slug: "bill-and-payments",
        image: "/images/services/passport/challan.png",
      },
      {
        title: "Vehicle Tax",
        slug: "bill-and-payments",
        image: "/images/services/passport/challan.png",
      },
      {
        title: "NTN Registration",
        slug: "bill-and-payments",
        image: "/images/services/passport/challan.png",
      },
    ],
  },

  /* -------Vehicle and its Services---------- */
  {
    title: "Vehicle ",
    slug: "vehicle-registration",
    image: "/images/services/passport/vehicle.png",
    children: [
      {
        title: "Registration",
        slug: "vehicle-registration",
        image: "/images/services/passport/vehicle.png",
      },
      {
        title: "Vehicle Transfer",
        slug: "vehicle-registration",
        image: "/images/services/passport/vehicle.png",
      },
      {
        title: "Tax Payment",
        slug: "vehicle-registration",
        image: "/images/services/passport/vehicle.png",
      },
      {
        title: "Number Plate ",
        slug: "number-plate",
        image: "/images/services/passport/number-plate.png",
      },
      {
        title: "Vehicle Transfer",
        slug: "vehicle-transfer",
        image: "/images/services/passport/vehicle-transfer.png",
      },
    ],
  },

  /* -------Driving License and its Services---------- */
  {
    title: "Driving License",
    slug: "driving-license",
    image: "/images/services/passport/driving.png",
    children: [
      {
        title: "New License",
        slug: "driving-license",
        image: "/images/services/passport/driving.png",
      },
      {
        title: "Renew License",
        slug: "driving-license",
        image: "/images/services/passport/driving.png",
      },
      {
        title: " Lost License",
        slug: "driving-license",
        image: "/images/services/passport/driving.png",
      },
    ],
  },

  /* -------Gas Connection Service and its Services---------- */
  {
    title: "Sui Gas",
    slug: "gas",
    image: "/images/services/passport/gas.png",
    children: [
      {
        title: "Gas Connection",
        slug: "gas-connection",
        image: "/images/services/passport/gas.png",
      },
      {
        title: "Gas Billing",
        slug: "gas-connection",
        image: "/images/services/passport/gas.png",
      },
      {
        title: "Meter Change",
        slug: "gas-connection",
        image: "/images/services/passport/gas.png",
      },
      {
        title: "Name Change",
        slug: "gas-connection",
        image: "/images/services/passport/gas.png",
      },
    ],
  },

  /* ------Electric Service and its Services---------- */
  {
    title: "Electric ",
    slug: "electric",
    image: "/images/services/passport/electric.png",
    children: [
      {
        title: "Connection",
        slug: "electric",
        image: "/images/services/passport/electric.png",
      },
      {
        title: "Billing",
        slug: "electric",
        image: "/images/services/passport/electric.png",
      },
      {
        title: "Meter Change",
        slug: "electric",
        image: "/images/services/passport/electric.png",
      },
      {
        title: "Name  Change",
        slug: "electric",
        image: "/images/services/passport/electric.png",
      },
    ],
  },
  /*  {
    title: "Number Plate ",
    slug: "number-plate",
    image: "/images/services/passport/number-plate.png",
  }, */
  /*  {
    title: "Vehicle Transfer",
    slug: "vehicle-transfer",
    image: "/images/services/passport/vehicle-transfer.png",
  }, */
  {
    title: "Birth Certificate",
    slug: "birth-certificate",
    image: "/images/services/passport/b-certificate.png",
  },
  {
    title: "Domicle and Prc",
    slug: "domicile-prc",
    image: "/images/services/passport/domicile.png",
  },
];

/* export interface ServiceField {
  name: string;
  type:
    | "text"
    | "number"
    | "email"
    | "date"
    | "file"
    | "select"
    | "image"
    | "slug";
  options?: string[];
  placeholder?: string;
}

export interface Service {
  title: string;
  slug: string;
  image?: string;
  fields: any[];
}

export const SERVICES: Service[] = [
  {
    title: "New Passport Application",
    image: "/images/services/passport/new.png",
    slug: "new-passport-application",
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
  title: "CNIC",
  slug: "cnic",
  image: "/images/services/passport/cnic.png",

  fields: [
    { name: "Full Name", type: "text", placeholder: "Enter your full name" },
    { name: "Father/Husband Name", type: "text", placeholder: "Enter father/husband name" },
    { name: "Date of Birth", type: "date" },
    { name: "Gender", type: "select", options: ["Male", "Female", "Other"] },
    { name: "Mobile Number", type: "text", placeholder: "03xx-xxxxxxx" },
    { name: "Email Address", type: "email", placeholder: "Enter your email" },
    { name: "Permanent Address", type: "text", placeholder: "Enter full address" },
    { name: "Current Address", type: "text", placeholder: "Enter current address" },

    {
      name: "CNIC Application Type",
      type: "select",
      options: ["New CNIC", "Duplicate CNIC", "Modify Information"],
    },

    {
      name: "Update Type",
      type: "select",
      options: ["Name", "Address", "Marital Status", "Photo Update", "Other"],
    },

    { name: "Upload Birth Certificate", type: "file" },
    { name: "Upload Father/Husband CNIC", type: "file" },
    { name: "Upload Photo", type: "file" },
  ],
},


  {
    title: "B-form",
    slug: "bform",
    image: "/images/services/passport/b-form.png",

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
    title: "Challan and  payments",
    slug: "Challan-and-payments",
    image: "/images/services/passport/Challan.png",
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
    title: "Vehicle Registration",
    slug: "Vehicle-Registration",
    image: "/images/services/passport/vehicle.png",

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
  title: "Driving License",
  slug: "driving-license",
  image: "/images/services/passport/driving.png",
  fields: [
    { name: "Full Name", type: "text" },
    { name: "CNIC Number", type: "text" },
    { name: "Passport Number", type: "text" },
  ],
},
  {
    title: "Track Passport Application Status",
    slug: "Track-Passport-Application-Status",
    image: "/images/services/passport/track-Passport.png",
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
    slug: "Online-Fee-Payment",
    image: "/images/services/passport/online-payment.png",
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
    slug: "Document-Upload-Service",
    image: "/images/services/passport/documnet-upload.png",

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
    slug: "UserRegistration&Login",
    image: "/images/services/passport/registration.png",
    fields: [
      { name: "Full Name", type: "text" },
      { name: "Email", type: "email" },
      { name: "Password", type: "text" },
    ],
  }, 
  {
    title: "Customer Support / Helpdesk",
    slug: "Customer-Support-Helpdesk",
    image: "/images/services/passport/helpdesk.png",
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
    slug: "AdminPanelServices",
    image: "/images/services/passport/admin.png",

    fields: [
      { name: "Admin Name", type: "text" },
      { name: "Admin Email", type: "email" },
      {
        name: "ServiceType",
        type: "select",
        options: ["Add User", "Remove User", "Update Service"],
      },
      { name: "Remarks", type: "text" },
    ],
  },
];
 */
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
