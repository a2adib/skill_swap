import React from "react";
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
const TopRatedProviders = () => {
  return (
    <div className="mt-12 px-[145px] py-8">
      <div>
        <h3 className="font-bold text-3xl text-center mb-8">
          Top Rated Providers
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-7">
        <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={p3}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Aisha Khan, PhD</h2>
          <p>Programmer</p>
          <p>8 Years Exp.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Talk with him</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={p2}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ricardo</h2>
          <p>Chef</p>
          <p>6 Years Exp.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Talk with him</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={p1}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">David Chen</h2>
          <p>Finance Advisor</p>
          <p>10 Years Exp.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Talk with him</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;
