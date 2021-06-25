import React from "react";
import Styles from "./accordian.module.css";

const Accordian = () => {
  return (
    <div className={Styles["accordian-wrapper"]}>
      <div className={Styles["access-control-wrapper"]}>
        <span className={Styles["title"]}>
          All aspects in the bidding module
        </span>
        <div className={Styles["access-control"]}>
          <span>Access control</span>
          <label>
            <input type="radio" />
            All Access<p className={Styles["text"]}>can access all items</p>
          </label>
          <label>
            <input type="radio" />
            Restricted Access
            <p className={Styles["text"]}>
              can access only assigned or created items
            </p>
          </label>
        </div>
      </div>
      <div className={Styles["permission-wrapper"]}>
        <div className={Styles["permission-control"]}>
          <span>Permissions</span>
          <label>
            <input type="checkbox" />
            View items in access
          </label>
          <label>
            <input type="checkbox" />
            Edit items in access
          </label>
          <label>
            <input type="checkbox" />
            Create items in access
          </label>
          <label>
            <input type="checkbox" />
            Delete items in access
          </label>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
