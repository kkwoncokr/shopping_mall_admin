import React from "react";
import MainContent from "../../components/main/MainContent";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "주문",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "취소",
      backgroundColor: "rgba(255,89,102,0.2)",
      borderColor: "rgba(255,89,102,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,89,102,0.4)",
      hoverBorderColor: "rgba(255,89,102,1)",
      data: [30, 12, 49, 20, 10, 5, 20],
    },
  ],
};
const MainContainer = () => <MainContent data={data} />;

export default MainContainer;
