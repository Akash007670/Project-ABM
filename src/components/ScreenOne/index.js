import React, { useState } from "react";
import Styles from "./screenone.module.css";
import { ReactComponent as PermissionLogo } from "../../assets/icons/permissions.svg";
import { ReactComponent as ApprovalLogo } from "../../assets/icons/approval.svg";
import { ReactComponent as SyncLogo } from "../../assets/icons/sync.svg";
import { Table1, Table2 } from "../Tables";
import { useContext } from "react";
import { TableContext } from "../../context";

const ScreenOne = () => {
  let data = useContext(TableContext);
  const [showTable, setShowTable] = useState(true);
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
      {showTable ? (
        <Table1 tableData={data.data} setShowTable={setShowTable} />
      ) : (
        <Table2 tableData={data.data} setShowTable={setShowTable} />
      )}
    </div>
  );
};

export default ScreenOne;
