export enum UserRole {
  Admin = 'admin',
  Consigner = 'consigner',
  ReviewBoard = 'review_board',
  Driver = 'driver',
  FleetOwner = 'fleet_owner'
}

export interface UserRegister {
  username: string;
  password: string;
  role: UserRole; 
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface businessInfo {
  id: string;
  businessName: string;
  brn: string;
  logo: string;
}

export interface contactInfo {
  id: string;
  mainNumber: string;
  altNumber: string;
}

export interface locationInfo {
  id: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  province: string;
  postalCode: string;
}