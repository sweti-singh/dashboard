import React from "react";
import "../css/table.css";
import { useContext } from "react";
import { AppContext } from "../Context/context";

const Table = () => {
  const { dataValue } = useContext(AppContext);
  return (
    <div className="table-container">
      <table className="custom-table">
        <tbody>
          {dataValue &&
            dataValue.map((item, index) => {
              return (
                <tr className="table-content">
                  <td>{`Data ${index + 1}`}</td>
                  <td>{(item[index] ?? 0) * 1000}</td>
                  <td>{(item[index + 1] ?? 0) * 1000}</td>
                  <td>{(item[index + 2] ?? 0) * 1000}</td>
                  <td>{(item[index + 3] ?? 0) * 1000}</td>
                  <td>{(item[index + 4] ?? 0) * 1000}</td>
                  <td>{(item[index + 5] ?? 0) * 1000}</td>
                  <td>{(item[index + 6] ?? 0) * 1000}</td>
                  <td>{(item[index + 7] ?? 0) * 1000}</td>
                  <td>{(item[index + 8] ?? 0) * 1000}</td>
                  <td>{(item[index + 9] ?? 0) * 1000}</td>
                  <td>{(item[index + 10] ?? 0) * 1000}</td>
                  <td>{(item[index + 11] ?? 0) * 1000}</td>
                  <td>{(item[index + 12] ?? 0) * 1000}</td>
                  <td>{(item[index + 13] ?? 0) * 1000}</td>
                  <td>{(item[index + 14] ?? 0) * 1000}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
