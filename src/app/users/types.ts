export interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cnic: string;
  age: string;
  gender: string;
  passportNumber: string;
  passportIssue: string;
  passportExpiry: string;
  passportCountry: string;
  passportType: string;
  image: File | null;
}

export interface UserFormProps {
  existingUser?: any;
  onSave: (user: any) => void;
  onCancel: () => void;
}
export interface PassportFormData {
  userName: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  FatherName: string;
  DOB: string;
  PlaceOfBirth: string;
  CNIC: string;
  Gender: string;
  ContactNumber: string;
  Email: string;
  CurrentAddress: string;
  PermanentAddress: string;
  fatherCnicFront: File | null;
  fatherCnicBack: File | null;
  motherCnicFront: File | null;
  motherCnicBack: File | null;
  clientID: string; // <-- add this
  cnicFrontPic: FileList; // input type="file"
  cnicBackPic: FileList;
  degreePicture: FileList;
}

export interface PassportType {
  id: string;
  userName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  fatherName: string;
  dob: string;
  placeOfBirth: string;
  cnic: string;
  gender: string;
  contactNumber: string;
  email: string;
  currentAddress: string;
  permanentAddress: string;
  fatherCnicFrontUrl?: string;
  fatherCnicBackUrl?: string;
  motherCnicFrontUrl?: string;
  motherCnicBackUrl?: string;
  fullName?: string;
  age?: number;
  passportType?: string;
  role?: any;
}
export interface UserFormState {
  id: number;
  firstName: string;
  MiddleName: string;
  lastName: string;
  email: string;
  cnic: string;
  age: string;
  gender: string;
  passportNumber: string;
  passportIssue: string;
  passportExpiry: string;
  passportCountry: string;
  passportType: string;
  image: File | null;
}
export interface FormData {
  service: string;
  name: string;
  fees: string;
  type: string;
  description: string;
}

export interface ServiceFormProps {
  onSave: (data: FormData) => void;
  onClose?: () => void;
}

export interface PassportFormData {
  userName: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  FatherName: string;
  DOB: string;
  PlaceOfBirth: string;
  CNIC: string;
  Gender: string;
  ContactNumber: string;
  Email: string;
  CurrentAddress: string;
  PermanentAddress: string;
  fatherCnicFront: File | null;
  fatherCnicBack: File | null;
  motherCnicFront: File | null;
  motherCnicBack: File | null;
}
export interface CnicFormData {
  id: string;
  firstName: string;
  userName: string;
  middleName: string;
  fullName: string;
  lastName: string;
  fatherName: string;
  dob: string;
  placeOfBirth: string;
  cnic: string;
  gender: string;
  contactNumber: string;
  email: string;
  currentAddress: string;
  permanentAddress: string;
  birthCertificate: File | null;
  fatherCnicFront: File | null;
  fatherCnicBack: File | null;
  motherCnicFront: File | null;
  motherCnicBack: File | null;
  livePhoto: File | null;
  signatureImage: File | null;
}


export interface b_form {
  childName: string;
  userName: string;
  fatherName: string;
  motherName: string;
  dob: string;
  PlaceOfBirth: string;
  permanentAddress: string;
  gender: string;
  ContactNumber: string;
  parentCnic: string;
}
export interface bill_and_payment {
  userName: string;
  paymentType: string;
  InvoiceNumber: string;
  paymentDate: string;
  amount: string;
  paidBy: string;
  remarks: string;
}
export interface vehicle_form {
  userName: string;
  ownerName: string;
  cnic: string;
  contactNumber: string;
  vehicleMake: string;
  vehicleModel: string;
  year: string;
  registrationNumber: string;
  address: string;
}
export interface driving_License {
  userName: string;
  fullName: string;
  fatherName: string;
  dob: string;
  cnic: string;
  contactNumber: string;
  address: string;
  licenseType: string;
  issueDate: string;
  expiryDate: string;
}
export interface number_Plate {
  userName: string;
  VehicleType: string;
  Make: string;
  Year: string;
  EngineNumber: string;
  ChassisNumber: string;
  Color: string;
  OwnerName: string;
  FatherName: string;
  MobileNumber: string;
  Address: string;
  Province: string;
  City: string;
  Purpose: string;
  PreviousPlate: string;
}
export interface vehicle_Transfer {
  userName: string;
  VehicleType: string;
  Make: string;
  Model: string;
  Year: string;
  EngineNumber: string;
  ChassisNumber: string;
  RegistrationNumber: string;
  currentOwnerName: string;
  CurrentOwnerCNIC: string;
  CurrentOwnerMobile: string;
  NewOwnerName: string;
  NewOwnerMobile: string;
  NewOwnerAddress: string;
  NewOwnerCNIC: string;
}

export interface birth_Certificate {
  userName: string;
  ChildName: string;
  DOB: string;
  Gender: string;
  PlaceOfBirth: string;
  FatherName: string;
  MotherName: string;
  FatherCNIC: string;
  MotherCNIC: string;
  ContactNumber: string;
  ParentMobile: string;
  Address: string;
}

export interface domicile_prc {
  userName: string;
  serviceType: string;
  FullName: string;
  FatherName: string;
  CNIC: string;
  DOB: string;
  DistrictOrPlace: string;
  Purpose: string;
  Address: string;
}

export interface FormValues {
  name: string;
  fatherName: string;
  motherName: string;
  email: string;
  cnic: string;
  Age: string;
  Gender: string;
  contact: string;
  emergencyContactNumber: string;
  permenentAddress: string;
  city: string;
  country: string;
  postalCode: string;
  birthDate: string;
  role: string;
  religion: string;
  facePicture: File | null;
}

export interface UserList {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cnic: string;
  age: string;
  gender: string;
  passportNumber: string;
  passportIssue: string;
  passportExpiry: string;
  passportCountry: string;
  passportType: string;
  image: File | null;
}
export interface UserListProps {
  users: UserList[];
  onEdit: (user: UserList) => void;
  onDelete: (id: number) => void;
}

export interface Service {
  id: string;
  title: string;
  description?: string;
  price?: number;
  image?: string;
  slug?: string;
}
export interface DogImage {
  message: string;
  status: string;
}
