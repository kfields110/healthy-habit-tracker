import React from "react";
import "./AccountPage.css";
import GeneralInfoSection from "./GeneralInfoSection";
import MeasurementInfoSection from "./MeasurementInfoSection";
import GoalCompletionSection from "./GoalCompletionSection";
import { useAuthContext } from "../../hooks/useAuthContext";
import UserPoints from "./UserPoints";

//Account page layout that renders the all info needed


function AccountPage() {

  const {user} = useAuthContext()

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
            src={user.photoURL}
            alt=""
          />
        }
        <p>ACCOUNT INFORMATION</p>
      </header>

      <ul className="account">
        {/* Requirement 1.1.0 */}
        <li>
          <GeneralInfoSection />
        </li>
        {/* Requirement 1.2.0 */}
        <li>
          <MeasurementInfoSection />
        </li>
        {/* Requirement 1.3.0 */}
        <li>
          <UserPoints />
        </li>
        <li>
          <GoalCompletionSection title="Daily Goal Completion" />
        </li>
      </ul>
    </div>
  );
}
export default AccountPage;
