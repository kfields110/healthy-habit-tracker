import React from "react";
import profilepic from "./images/profilepic.png";
import "./AccountPage.css";
import InfoSection from "./InfoSection";
import GoalCompletionSection from "./GoalCompletionSection";

const generalInfo = [
  {
    id: "g1",
    label: "First Name: ",
    content: "Preston",
  },
  {
    id: "g2",
    label: "Last Name: ",
    content: "Garvey",
  },
  {
    id: "g3",
    label: "Email: ",
    content: "minuteman4life@gmail.com",
  },
];
const measurementInfo = [
  {
    id: "m1",
    label: "Height: ",
    content: "6'1",
  },
  {
    id: "m2",
    label: "Weight: ",
    content: "200 lbs",
  },
  {
    id: "m3",
    label: "Age: ",
    content: "33",
  },
];
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
    label: "Provice/State: ",
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

function AccountPage() {
  return (
    <div>
      <header className="account-header">
        {
          <img
            style={{
              borderRadius: "50%",
              display: "block",
              background: `url('https://cdn.icon-icons.com/icons2/1186/PNG/512/1490135017-visa_82256.png') black`,
              backgroundPosition: "center",
              backgroundSize: "auto 80px",
            }}
            className="profileP"
            src={profilepic}
            alt=""
          />
        }
        <p>ACCOUNT INFORMATION</p>
        {/* <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Potato"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about a great starch, the potato.
        </a> */}
      </header>

      <ul className="account">
        {/* Requirement 1.1.0 */}
        <li>
          <InfoSection title="General" info={generalInfo} />
        </li>
        {/* Requirement 1.2.0 */}
        <li>
          <InfoSection title="Measurements" info={measurementInfo} />
        </li>
        {/* Requirement 1.3.0 */}
        <li>
          <InfoSection title="Address" info={addressInfo} />
        </li>
        <li>
          <GoalCompletionSection title="Daily Goal Completion" />
        </li>
      </ul>
    </div>
  );
}
export default AccountPage;
