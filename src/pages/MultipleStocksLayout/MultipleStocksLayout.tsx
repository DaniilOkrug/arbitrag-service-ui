import React, { useEffect, useState } from "react";
import axios from "axios";

import HeaderExchanges from "../../components/HeaderExchanges/HeaderExchanges";
import TableExchanges from "../../components/TableExchanges/TableExchanges";
import FooterExchanges from "../../components/FooterExchanges/FooterExchanges";
import Spacer from "../../components/Spacer/Spacer";

const MultipleStocksLayout = () => {
  const [exchangesData, setExchangesData] = useState<any>({});

  useEffect(() => {
    const getExchangesData = async () => {
      try {
        const response = await axios.get("https://mockupdealer.ru/api/");
        console.log(JSON.parse(response.data));

        setExchangesData(JSON.parse(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    getExchangesData();

    const timer = setInterval(() => {
      try {
        getExchangesData();
      } catch (error) {
        console.log(error);
      }
    }, 120000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <HeaderExchanges cases={exchangesData} />

      <TableExchanges cases={exchangesData} />

      <Spacer></Spacer>

      <FooterExchanges />
    </div>
  );
};

export default MultipleStocksLayout;
