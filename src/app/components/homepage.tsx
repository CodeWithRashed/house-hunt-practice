"use client";

import { useEffect, useState } from "react";
import HomeDataCard from "./homeCard";
import Cookies from "js-cookie";
import { getTokenData } from "@/helpers/getTokenData";
import axios from "axios";
interface House {
  id: number;
  address: {
    street: string;
    city: string;
    state: string;
  };
  description: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  rent: number;
  image: string;
  area: number;
  price: number;
}
const HomepageData = () => {
  const [houseData, setHouseData] = useState<House[]>([]);
  const [allHouseData, setAllHouseData] = useState<House[]>([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        // Check if document is defined

        // Retrieve the token from the cookie (replace 'yourCookieName' with the actual cookie name)
        // const token = await Cookies.get("token", { path: '/' });
        // console.log(token);
        // Make a GET request to the backend API with the token in the headers
        // const res = await axios.get("/api/users/verify", {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });

        // Log the decoded user data
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    const rawHouseData = [
      {
        id: 1,
        address: {
          street: "606 Pine Street",
          city: "Gulshan",
          state: "Dhaka Division",
        },
        description:
          "Sleek 2-bedroom penthouse with stunning city views and a private terrace.",
        type: "Penthouse",
        bedrooms: 2,
        garage: 1,
        bathrooms: 2,
        rent: 2800,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 1600,
        price: 18000,
      },
      {
        id: 2,
        address: {
          street: "707 Elm Street",
          city: "Mirpur",
          state: "Dhaka Division",
        },
        description:
          "Quaint 1-bedroom cottage surrounded by nature. Ideal for a peaceful retreat.",
        type: "Cottage",
        bedrooms: 1,
        garage: 0,
        bathrooms: 1,
        rent: 1000,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 800,
        price: 7000,
      },
      {
        id: 3,
        address: {
          street: "808 Oak Street",
          city: "Dhaka",
          state: "Dhaka Division",
        },
        description:
          "Modern 3-bedroom apartment with high-end finishes and a spacious balcony.",
        type: "Apartment",
        bedrooms: 3,
        garage: 1,
        bathrooms: 2,
        rent: 2200,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 1400,
        price: 16000,
      },
      {
        id: 4,
        address: {
          street: "567 Pine Street",
          city: "Gulshan",
          state: "Dhaka Division",
        },
        description:
          "Modern 4-bedroom house with a spacious living room and a beautiful garden.",
        type: "House",
        bedrooms: 4,
        garage: 2,
        bathrooms: 3,
        rent: 2500,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 1800,
        price: 15000,
      },
      {
        id: 5,
        address: {
          street: "890 Maple Street",
          city: "Banani",
          state: "Dhaka Division",
        },
        description:
          "Charming 2-bedroom cottage with a fireplace. Perfect for a cozy retreat.",
        type: "Cottage",
        bedrooms: 2,
        garage: 0,
        bathrooms: 1,
        rent: 1200,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 1000,
        price: 9000,
      },
      {
        id: 6,
        address: {
          street: "101 Cedar Street",
          city: "Uttara",
          state: "Dhaka Division",
        },
        description:
          "Elegant 3-bedroom apartment with a balcony and panoramic city views.",
        type: "Apartment",
        bedrooms: 3,
        garage: 1,
        bathrooms: 2,
        rent: 2000,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 1500,
        price: 12000,
      },
      {
        id: 7,
        address: {
          street: "202 Birch Street",
          city: "Mohakhali",
          state: "Dhaka Division",
        },
        description:
          "Spacious 5-bedroom house with a large backyard and swimming pool.",
        type: "House",
        bedrooms: 5,
        garage: 3,
        bathrooms: 4,
        rent: 3500,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 2500,
        price: 20000,
      },
      {
        id: 8,
        address: {
          street: "303 Ash Street",
          city: "Banani",
          state: "Dhaka Division",
        },
        description:
          "Cozy 1-bedroom apartment with modern amenities. Ideal for young professionals.",
        type: "Apartment",
        bedrooms: 1,
        garage: 0,
        bathrooms: 1,
        rent: 900,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 800,
        price: 7000,
      },
      {
        id: 9,
        address: {
          street: "404 Walnut Street",
          city: "Gulshan",
          state: "Dhaka Division",
        },
        description:
          "Luxurious 6-bedroom mansion with a private theater and fitness center.",
        type: "Mansion",
        bedrooms: 6,
        garage: 4,
        bathrooms: 5,
        rent: 5000,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 3500,
        price: 30000,
      },
      {
        id: 10,
        address: {
          street: "505 Oak Street",
          city: "Mirpur",
          state: "Dhaka Division",
        },
        description:
          "Affordable 2-bedroom apartment with convenient access to public transport.",
        type: "Apartment",
        bedrooms: 2,
        garage: 0,
        bathrooms: 1,
        rent: 1000,
        image:
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        area: 900,
        price: 8000,
      },
    ];

    setAllHouseData(rawHouseData);
    setHouseData(rawHouseData);
    // getUserData();
  }, []);

  const handleSearch = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const searchData = form.search.value;
    setSearchString(searchData);
    if (searchData) {
      let filteredHouseData = allHouseData.filter((house: any) =>
        house.address.city.toLowerCase().includes(searchData.toLowerCase())
      );
      setHouseData(filteredHouseData);
    }

    form.reset();
  };

  return (
    <div>
      <div>
        {/* Filter Manure */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex justify-between w-full">
            <div className="flex gap-5 items-center w-1/2">
              <p>Welcome</p>
            </div>
            {/* Search Input */}
            <form name="searchForm" onSubmit={handleSearch} className="w-1/2">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  name="search"
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500"
                  placeholder="Search by city"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Filter Data */}

        <div className="mt-5 my-5">
          <div>
            {houseData.length > 0 ? (
              <div className="grid lg:grid-cols-3 gap-5">
                {houseData.map((house, index) => (
                  <div key={index}>
                    <HomeDataCard house={house} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full min-w-screen flex justify-center items-center">
                <p>No Data Found!!!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageData;
