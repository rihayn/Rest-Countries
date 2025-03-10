import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <section className=" p-30 grid lg:grid-cols-3   gap-10 bg-black  md:grid-cols-2 sm:grid-cols-1 ">
        {countries.map((country) => {
          const { cca3, name, population, region, capital, flags } = country;
          return (
            <Link to={`/countries/${name.common}`}>
              <div
                key={cca3}
                className="card  bg-base-100 image-full h-70  shadow-sm "
              >
                <figure>
                  <img src={flags.svg} alt={name} className="" />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title text-3xl"> {name.common}</h2>
                  <h3 className="text-sm text-blue-400 font-semibold">
                    Capital : {capital}
                  </h3>
                  <h3 className="text-sm text-blue-400 font-semibold">
                    Region : {region}
                  </h3>
                  <h3 className="text-sm text-blue-400 font-semibold">
                    Population : {population}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
