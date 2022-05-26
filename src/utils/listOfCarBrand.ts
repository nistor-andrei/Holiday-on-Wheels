import bmw from "../assets/brand/BMW.svg";
import mercedes from "../assets/brand/Mercedes.svg";
import ferrari from "../assets/brand/Ferrari.svg";
import ford from "../assets/brand/Ford.svg";
import lamborghini from "../assets/brand/Lamborghini.svg";
import nissan from "../assets/brand/Nissan.svg";

export interface CarBrand {
  name: string;
  image: any;
}

export interface ListOfCarBrand extends Array<CarBrand> {}

export const listOfCarBrand: ListOfCarBrand = [
  {
    name: "BMW",
    image: bmw,
  },
  {
    name: "Mercedes",
    image: mercedes,
  },
  {
    name: "Ferrari",
    image: ferrari,
  },
  {
    name: "Ford",
    image: ford,
  },
  {
    name: "Lamborghini",
    image: lamborghini,
  },
  {
    name: "Nissan",
    image: nissan,
  },
];
