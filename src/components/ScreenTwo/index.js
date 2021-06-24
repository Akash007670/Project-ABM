import React from "react";
import Styles from "./ScreenTwo.module.css";
import { ReactComponent as SyncLogo } from "../../assets/icons/sync.svg";
import { ReactComponent as PermissionLogo } from "../../assets/icons/permissions.svg";
import { ReactComponent as ApprovalLogo } from "../../assets/icons/approval.svg";
import { Table2 } from "../Tables";

const tableData = [
  {
    id: 1,
    department: "Budget",
    access: "All Access",
    summary: "view",
    lastUpdated: "1 min Ago",
  },
  {
    id: 2,
    department: "Bidding",
    access: "All Access",
    summary: "view",
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
      <Table2 tableData={tableData} />
    </div>
  );
};

export default ScreenTwo;
