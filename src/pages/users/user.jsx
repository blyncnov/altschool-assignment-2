import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import LoadingImage from "../../assets/loading.gif";

import { IoIosArrowRoundBack } from "react-icons/io";

const Users = ({ resultFromApi }) => {
  let { id } = useParams();

  const NewFilteredArray = resultFromApi.find((val) => val.login.uuid === id);

  return (
    <>
      {NewFilteredArray ? (
        <>
          <div className="user-background">
            <div className="user-profile-controls">
              <Link to={-1}>
                <IoIosArrowRoundBack
                  style={{ fontSize: "30px", fontWeight: "bolder" }}
                />
              </Link>
            </div>
            <div className="user-profile-picture">
              <h2> {NewFilteredArray?.name.last.slice(0, 1).toUpperCase()}</h2>
              {/* <img src={NewFilteredArray.picture.large} alt="dp" /> */}
            </div>
          </div>
          <div className="user-title-text">
            <h2 className="user-visit-name">
              {NewFilteredArray.name.last}'s Profile
            </h2>
            <br />
          </div>

          <div className="main-profile-grid">
            <div style={{ margin: "0 1em" }}>
              <div style={{ height: "100%" }}>
                <div className="user-profile-tile">
                  <div className="user-pic-tile">
                    <img src={NewFilteredArray.picture.large} alt="dp" />
                  </div>
                  <div className="info-tile">
                    <h4>
                      {NewFilteredArray.name.last} {NewFilteredArray.name.first}
                    </h4>
                    <div className="info-box">
                      <p> {NewFilteredArray.email}</p>
                      <p> {NewFilteredArray.cell}</p>
                      <a href={`tel:${NewFilteredArray.cell}`}>Contact Me</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ margin: "0 1em" }}>
              <div style={{ height: "100%" }}>
                <div className="user-profile-tile">
                  <div className="info-box-others">
                    <p>
                      Address:{" "}
                      <span>
                        {NewFilteredArray.location.street.number},{" "}
                        {NewFilteredArray.location.street.name}{" "}
                        {NewFilteredArray.location.street.state}{" "}
                        {NewFilteredArray.location.country}
                      </span>
                    </p>
                    <p>
                      City: <span>{NewFilteredArray.location.city}</span>
                    </p>
                    <p>
                      Country: <span>{NewFilteredArray.location.country}</span>
                    </p>
                    <p>
                      Date of Birth: <span>{NewFilteredArray.dob.date}</span>
                    </p>
                    <p>
                      Date Registered:{" "}
                      <span>{NewFilteredArray.registered.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loading-state">
          <img src={LoadingImage} alt="loading" />
        </div>
      )}
    </>
  );
};

export default Users;
