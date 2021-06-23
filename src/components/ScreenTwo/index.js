import React, { useState } from "react";
import Styles from "./ScreenTwo.module.css";
import { ReactComponent as BackLogo } from "../../assets/icons/arrow_back.svg";
import { ReactComponent as PencilLogo } from "../../assets/icons/pencil.svg";
import { ReactComponent as SyncLogo } from "../../assets/icons/sync.svg";
import { ReactComponent as PermissionLogo } from "../../assets/icons/permissions.svg";
import { ReactComponent as ApprovalLogo } from "../../assets/icons/approval.svg";
import { ReactComponent as AddCircleLogo } from "../../assets/icons/add_circle_outline.svg";
import { ReactComponent as ToggleLogo } from "../../assets/icons/on-label.svg";

const tableData = [
  {
    id: 1,
    department: "Budget",
    access: "All Access",
    summary: "veiw",
    lastUpdated: "1 min Ago",
  },
  {
    id: 2,
    department: "Bidding",
    access: "All Access",
    summary: "veiw",
    lastUpdated: "1 min Ago",
  },
  {
    id: 3,
    department: "Vendor Portal",
    access: "Restricted Access",
    summary: "create",
    lastUpdated: "1 min Ago",
  },
  {
    id: 4,
    department: "Purchase Order/Work Order",
    access: "Restricted Access",
    summary: "edit",
    lastUpdated: "1 min Ago",
  },
  {
    id: 5,
    department: "Organisational Profile",
    access: "All Access",
    summary: "create",
    lastUpdated: "1 min Ago",
  },
  {
    id: 6,
    department: "Permissions & Access Control",
    access: "No Access",
    summary: "-",
    lastUpdated: "1 min Ago",
  },
];

const ScreenTwo = () => {
  const [expand, setExpand] = useState(false);
  const expandHandler = () => {
    console.log("hello");
    setExpand(true);
  };
  return (
    <div className={Styles["screen-wrapper"]}>
      <div className={Styles["nav-wrapper"]}>
        <div className={Styles["permissions-wrapper"]}>
          <div
            className={`${Styles["permission"]} ${Styles["permission-active"]}`}
          >
            <PermissionLogo />
            <span className={Styles["text"]}>Permissions</span>
          </div>
          <div className={Styles["permission"]}>
            <ApprovalLogo />
            <span className={Styles["text"]}>Approval Matrix</span>
          </div>
        </div>
        <div className={Styles["activity"]}>
          <SyncLogo className={Styles["sync"]} />
          <span className={Styles["text"]}>Last synced 15 mins ago</span>
        </div>
      </div>
      <div className={Styles["table-container"]}>
        <div className={Styles["back-nav-wrapper"]}>
          <BackLogo />
          <span className={Styles["nav-text"]}>Management Team</span>
          <PencilLogo />
        </div>
        <div className={Styles["table-wrapper"]}>
          <table className={Styles["table"]}>
            <tr className={Styles["table-head"]}>
              <th />
              <th>Deparment/Role Name</th>
              <th>Access Level</th>
              <th>Summary</th>
              <th>Last Updated</th>
              <th />
            </tr>
            {tableData.map((data) => (
              <tr key={data.id} className={Styles["data-row"]}>
                <td className={Styles["add-circle-logo"]}>
                  <AddCircleLogo onClick={expandHandler} />
                </td>
                <td>{data.department}</td>
                <td>
                  <div
                    className={`${
                      data.access === "All Access"
                        ? Styles["access"]
                        : Styles["restricted"]
                    }`}
                  >
                    {data.access}
                  </div>
                </td>
                <td>{data.summary}</td>
                <td>{data.lastUpdated}</td>
                <td className={Styles["eye-logo"]}>
                  <ToggleLogo />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScreenTwo;
