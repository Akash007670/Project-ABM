import React from "react";
import Styles from "./screenone.module.css";
import { ReactComponent as PermissionLogo } from "../../assets/icons/permissions.svg";
import { ReactComponent as ApprovalLogo } from "../../assets/icons/approval.svg";
import { ReactComponent as SyncLogo } from "../../assets/icons/sync.svg";
import { ReactComponent as AddLogo } from "../../assets/icons/add.svg";
import { ReactComponent as PencilLogo } from "../../assets/icons/pencil.svg";
import { ReactComponent as DeleteLogo } from "../../assets/icons/delete.svg";

const ScreenOne = () => {
  return (
    <div className={Styles["main-ui-wrapper"]}>
      {/* <div className={Styles["nav-wrapper"]}>
        <div className={Styles["permissions"]}>
          <PermissionLogo />
          <span className={Styles["text"]}>Permissions</span>
          <ApprovalLogo />
          <span className={Styles["text"]}>Approval Matrix</span>
        </div>
        <div className={Styles["activity"]}>
          <SyncLogo className={Styles["sync"]} />
          <span className={Styles["text"]}>Last synced 15 mins ago</span>
        </div>
      </div> */}
      <div className={Styles["dynamic-ui-wrapper"]}>
        <button className={Styles["button-wrapper"]}>
          <AddLogo className={Styles["logo"]} />
          <span className={Styles["add-button"]}>Add Role</span>
        </button>
        <PencilLogo className={Styles["pencil"]} />
        <DeleteLogo className={Styles["delete"]} />
      </div>
    </div>
  );
};

export default ScreenOne;
