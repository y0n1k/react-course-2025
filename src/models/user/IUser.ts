export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: IHair;
	ip: string;
	address: IAddress;
	macAddress: string;
	university: string;
	bank: IBank;
	company: ICompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: ICrypto;
	role: string;
}
export interface IHair {
	color: string;
	type: string;
}
export interface RootObjectAddressCoordinates {
	lat: number;
	lng: number;
}
export interface IAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: RootObjectAddressCoordinates;
	country: string;
}
export interface IBank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}
export interface RootObjectCompanyAddressCoordinates {
	lat: number;
	lng: number;
}
export interface RootObjectCompanyAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: RootObjectCompanyAddressCoordinates;
	country: string;
}
export interface ICompany {
	department: string;
	name: string;
	title: string;
	address: RootObjectCompanyAddress;
}
export interface ICrypto {
	coin: string;
	wallet: string;
	network: string;
}