import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import apiService from "../service/apiService";

function ApiShows() {
  const [data, setData] = useState();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    var req = {
      listSize: 5,
      pageNumber: 2,
      showProductImage: 1,
      searchString: "",
      show: "SALEAVAILABLE",
    };
    apiService("product/list", req, "unauthpost")
      .then((result) => {
        setData(result.data.responseModelList);
        console.log(result);

      })
      .catch((err) => {
        console.log(err);
      });
  };
console.log(data);
  return (
    <div>
      {data &&
        data.map((a, i) => {
          return(
            <div>
                <ul key={i}>
                    <img src={a.imageURL} alt="img"/>
                    <p>{a.productName}</p>
                </ul>
            </div>
          )
         
        })}
    </div>
  );
}

export default ApiShows;
