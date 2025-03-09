import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(
          name
        )}?fullText=true`
      );
      const country = await response.json();
      setCountry(country[0]);
      console.log(country[0]);
    };
    fetchCountryData();
  }, [name]);

  const {
    cca3,
    name: countryName,
    flags,
    capital,
    region,
    population,
    subregion,
    languages,
  } = country;

  return (
    <>
      <section className="p-20">
        <Link to="/" className="mt-100 text-white">
          Home
        </Link>

        <div key={cca3} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            {/* <img src={svg} alt={common} className="" /> */}
          </figure>
          <div className="card-body">
            {/* <h2 className="card-title text-3xl">   Name: {countryName && countryName.common ? countryName.common : "Unknown"}</h2> */}
            {/* <h3 className="text-sm text-blue-400 font-semibold">
              Capital: {capital}
            </h3> */}
            <h3 className="text-sm text-blue-400 font-semibold">
              Region: {region}
            </h3>
            <h3 className="text-sm text-blue-400 font-semibold">
              Population: {population}
            </h3>
            <h3 className="text-sm text-blue-400 font-semibold">
              Subregion: {subregion}
            </h3>
            <h3 className="text-sm text-blue-400 font-semibold">
              Languages: {languages}
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};
