import { useEffect, useContext, useState } from "react";
import Styles from "./tables.module.css";

import { ReactComponent as AddLogo } from "../../assets/icons/add.svg";
import { ReactComponent as PencilLogo } from "../../assets/icons/pencil.svg";
import { ReactComponent as DeleteLogo } from "../../assets/icons/delete.svg";
import { ReactComponent as EyeLogo } from "../../assets/icons/eye.svg";
import { ReactComponent as AddCircleLogo } from "../../assets/icons/add_circle_outline.svg";
import { ReactComponent as SubLogo } from "../../assets/icons/subtract_circle_outline.svg";
import { ReactComponent as ToggleLogo } from "../../assets/icons/on-label.svg";
import { ReactComponent as BackLogo } from "../../assets/icons/arrow_back.svg";
import { useHistory, useLocation } from "react-router-dom";
import { TableContext } from "../../context";
import Accordian from "../Accordian";
import FormModal from "./FormModal";

const Table1 = ({ tableData, setShowTable, ...props }) => {
  const history = useHistory();
  const location = useLocation();
  const contextData = useContext(TableContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");
    if (id) {
      setShowTable(false);
    } else {
      setShowTable(true);
    }
  }, [location, setShowTable]);

  const gotoRoute = (route, state = null, search = "") => {
    history.replace({ pathname: route, state, search });
  };

  return (
    <div className={Styles["table-container"]}>
      <div className={Styles["table-header"]}>
        <button className={Styles["add-role"]} onClick={() => setIsOpen(true)}>
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
          <thead>
            <tr className={Styles["table-head"]}>
              <th />
              <th>Deparment/Role Name</th>
              <th>Access Level</th>
              <th>No of members</th>
              <th>Last Updated</th>
              <th />
            </tr>
          </thead>
          <tbody>
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
                <td
                  className={Styles["eye-logo"]}
                  onClick={(e) => {
                    contextData.selectRow(data.id);
                    gotoRoute("/", null, `?id=${data.id}`);
                  }}
                >
                  <EyeLogo />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FormModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

const tabledata2 = [
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

const Table2 = ({ setShowTable, ...props }) => {
  const contextData = useContext(TableContext);
  const history = useHistory();

  const gotoRoute = (route, state = null, search = "") => {
    history.replace({ pathname: route, state, search });
  };
  const [clicked, setClicked] = useState(false);
  const toggleHandler = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div className={Styles["table-container"]}>
      <div className={Styles["back-nav-wrapper"]}>
        <BackLogo
          onClick={(e) => {
            gotoRoute("/");
            setShowTable(true);
          }}
        />
        <span className={Styles["nav-text"]}>
          {contextData.selectedRow.department}
        </span>
        <PencilLogo />
      </div>
      <div className={Styles["table-wrapper"]}>
        <table className={Styles["table"]}>
          <thead>
            <tr className={Styles["table-head"]}>
              <th />
              <th>Deparment/Role Name</th>
              <th>Access Level</th>
              <th>Summary</th>
              <th>Last Updated</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {tabledata2.map((data, index) => (
              <tr key={data.id} className={Styles["data-row"]}>
                <td
                  className={Styles["add-circle-logo"]}
                  onClick={() => toggleHandler(index)}
                  value={index}
                >
                  {clicked === index ? <SubLogo /> : <AddCircleLogo />}
                </td>
                {clicked === index ? (
                  <>
                    <td>
                      {data.department}
                      <Accordian />
                    </td>
                    <td>{}</td>
                    <td />
                    <td>{data.lastUpdated}</td>
                    <td className={Styles["eye-logo"]}>
                      <ToggleLogo />
                    </td>
                  </>
                ) : (
                  <>
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
                    <td>{data.summary ?? "je"}</td>
                    <td>{data.lastUpdated}</td>
                    <td className={Styles["eye-logo"]}>
                      <ToggleLogo />
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Table1, Table2 };
