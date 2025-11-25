import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      const findResult = services.find((service) => service.skillId == id);
      setServiceDetails(findResult);
    }
  }, [id, services]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!serviceDetails) {
    return <div className="text-center text-xl mt-10">Service not found.</div>;
  }

  const {
    skillName,
    providerName,
    image,
    ratingAvg,
    reviews,
    slotsAvailable,
    description,
  } = serviceDetails;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <div className="mb-8 shadow-lg rounded-lg overflow-hidden">
          <img
            src={image}
            alt={skillName}
            className="rounded-lg object-cover w-full h-auto md:h-96"
          />
        </div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{skillName}</h1>
          <div className="items-center mt-2 text-gray-600">
            <p className="font-semibold">Hosted by {providerName}</p>
            <p className="text-green-600 font-semibold">
              {slotsAvailable} slots available
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
