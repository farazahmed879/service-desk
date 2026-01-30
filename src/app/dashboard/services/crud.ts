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

export const urls = {
  passport: {
    create :"/passport/create",
    getAll: "http://localhost:5000/passport/get-all",
    getPassportByCnic: "/passport/get-by-cnic",
    update: "/passport//update/:id",
    delete: "",
  },

  cnic: {
    getAll: "/cnic/get-all",
    create: "/cnic/create",
    update: "/services/cnic/:cnicID",
    getCnicByNumber:"/cnic/get-by-cnic-number",
    delete: "",
  },

  b_form: {

    getAll: "/bform/get-all",
    create: "/bform//create",
    update: "/bform/update/:id",
    delete: "/bform/deletebForm",
    get: "/bform/AllbForm",

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
