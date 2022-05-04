import { useState } from "react";
import React from "react";
import AddressEditModal from "./AddressEditModal";
import Backdrop from "./Backdrop";

const addressInfo = [
  {
    id: "a1",
    label: "Street: ",
    content: "1 Sanctuary Rd.",
  },
  {
    id: "a2",
    label: "City: ",
    content: "Boston",
  },
  {
    id: "a3",
    label: "Province/State: ",
    content: "Massechusetts",
  },
  {
    id: "a4",
    label: "Postal/ZIP Code: ",
    content: "02127",
  },
  {
    id: "a5",
    label: "Country: ",
    content: "USA",
  },
];

function AddressInfoSection() {
  const [editAddressIsOpen, setEditAddressIsOpen] = useState(false);
  // const [street, setStreet] = useState(addressInfo[0].content);
  // const [city, setCity] = useState(addressInfo[1].content);
  // const [p_s, setP_S] = useState(addressInfo[2].content);
  // const [postal, setPostal] = useState(addressInfo[3].content);
  // const [country, setCountry] = useState(addressInfo[4].content);

  function modalToInfoSection(
    newStreet,
    newCity,
    newP_S,
    newPostal,
    newCountry
  ) {
    addressInfo[0].content = newStreet;
    // setStreet(newStreet);
    addressInfo[1].content = newCity;
    // setCity(newCity);
    addressInfo[2].content = newP_S;
    // setP_S(newP_S);
    addressInfo[3].content = newPostal;
    // setPostal(newPostal);
    addressInfo[2].content = newCountry;
    // setCountry(newCountry);
  }

  function editGeneralHandler() {
    setEditAddressIsOpen(true);
  }
  function closeGeneralHandler() {
    setEditAddressIsOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h3>Address Info</h3>
        <div className="line-break">
          <ul>
            {addressInfo.map((info) => {
              return (
                <li key={info.id}>
                  {info.label} {info.content}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="actions">
          <p>{"\n"}</p>
          <button className="btn" onClick={editGeneralHandler}>
            Edit General
          </button>
        </div>

        {editAddressIsOpen && (
          <AddressEditModal
            onCancel={closeGeneralHandler}
            onSave={closeGeneralHandler}
            info={addressInfo}
            modalToInfoSection={modalToInfoSection}
          />
        )}
        {editAddressIsOpen && <Backdrop onCancel={closeGeneralHandler} />}
      </div>
    </div>
  );
}

export default AddressInfoSection;
