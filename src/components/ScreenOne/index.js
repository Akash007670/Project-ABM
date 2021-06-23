import React from "react";
import Styles from "./screenone.module.css";
import { ReactComponent as PermissionLogo } from "../../assets/icons/permissions.svg";
import { ReactComponent as ApprovalLogo } from "../../assets/icons/approval.svg";
import { ReactComponent as SyncLogo } from "../../assets/icons/sync.svg";
import { ReactComponent as AddLogo } from "../../assets/icons/add.svg";
import { ReactComponent as PencilLogo } from "../../assets/icons/pencil.svg";
import { ReactComponent as DeleteLogo } from "../../assets/icons/delete.svg";
import { ReactComponent as EyeLogo } from "../../assets/icons/eye.svg";

const tableData = [
  {
    id: 1,
    department: "Management Team",
    access: "All Access",
    noOfMembers: 4,
    lastUpdated: "1 min Ago",
  },
  {
    id: 2,
    department: "Procurement Team",
    access: "Restricted Access",
    noOfMembers: 8,
    lastUpdated: "1 min Ago",
  },
  {
    id: 3,
    department: "Project Team",
    access: "Restricted Access",
    noOfMembers: 16,
    lastUpdated: "1 min Ago",
  },
  {
    id: 4,
    department: "IT Team",
    access: "Restricted Access",
    noOfMembers: 4,
    lastUpdated: "1 min Ago",
  },
  {
    id: 5,
    department: "Super Admin",
    access: "All Access",
    noOfMembers: 1,
    lastUpdated: "1 min Ago",
  },
];

const ScreenOne = () => {
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
        <div className={Styles["table-header"]}>
          <button className={Styles["add-role"]}>
            <AddLogo className={Styles["add-role-icon"]} />
            <p>Add Role</p>
          </button>
          <span className={Styles["table-header-icon"]}>
            <PencilLogo />
          </span>
          <span className={Styles["table-header-icon"]}>
            <DeleteLogo />
          </span>
        </div>
        <div className={Styles["table-wrapper"]}>
          <table className={Styles["table"]}>
            <tr className={Styles["table-head"]}>
              <th />
              <th>Deparment/Role Name</th>
              <th>Access Level</th>
              <th>No of members</th>
              <th>Last Updated</th>
              <th />
            </tr>
            {tableData.map((data) => (
              <tr key={data.id} className={Styles["data-row"]}>
                <td>
                  <div className={Styles["initial-circle"]}></div>
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
                <td>{data.noOfMembers}</td>
                <td>{data.lastUpdated}</td>
                <td className={Styles["eye-logo"]}>
                  <EyeLogo />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScreenOne;
