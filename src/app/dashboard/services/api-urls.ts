export const urls = {
  //get used form getting the data
  // create /post
  //getByCnic: "POST" (agar body me CNIC bhej rahe ho)

  //update /put to update the data
  //delete

  /* getAll: "GET",          // every  records
    create: "POST",        // new  record
    update: "PUT",         // update record
    delete: "DELETE",      // delete record
    get: "GET",             // single record by id
    getByCnic: "GET / POST" //  depend on situation 
    */

  passport: {
    getAll: "/services/allPassport",
    createBycnic: "/services/PassportByCnic",
    update: "/services/passportUpdate/:id",
    delete: "",
    get: "/services/allPassport",
  },

  cnic: {
    getAll: "/services/getAllCnic",
    create: "/services/getClientCnicNumber",
    update: "/services//cnic/:cnicID",
    delete: "",
    get: "/services/getAllCnic",
  },

  b_form: {
    getAll: "/services/AllbForm",
    create: "/services/Bform",
    update: "/services/getbForm",
    delete: "/services/deletebForm",
    get: "/services/AllbForm",
  },

  bill_and_payments: {
    getAll: "",
    create: "",
    update: "",
    delete: "",
    get: "",
  },

  vehicle_registration: {
    getAll: "/services/getVehicleData",
    create: "/services/createVehicleRegistration",
    update: "/services/updateVehicleData",
    delete: "/services/deleteVehicle",
    get: "/services/getVehicleData",
    getDataByCnic: "/services/vehicleDataByCnic",
  },
  driving_license: {
    getAll: "",
    create: "",
    update: "",
    delete: "",
    get: "",
    getByCnic: "/services/PassportByCnic",
  },
  number_plate: {
    getAll: "",
    create: "",
    update: "",
    delete: "",
    get: "",
    getByCnic: "/services/PassportByCnic",
  },
  vehicle_transfer: {
    getAll: "",
    create: "",
    update: "",
    delete: "",
    get: "",
    getByCnic: "/services/PassportByCnic",
  },
  brith_certificate: {
    getAll: "",
    create: "",
    update: "",
    delete: "",
    get: "",
    getByCnic: "/services/PassportByCnic",
  },
  domicle_and_prc: {
    getAll: "",
    create: "",
    update: "",
    delete: "",
    get: "",
    getByCnic: "/services/PassportByCnic",
  },
};
