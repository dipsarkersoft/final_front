import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "antd";
import { MdDashboard } from "react-icons/md";


export const AdminOverview = () => {

    const [totalUser, setTotalUser] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalCategory, setTotalCategory] = useState(0);
    const [monthSell, setMonthSell] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalReview, setTotalReview] = useState(0);

  return (
    <>
    
      {/* <div className="container dashboardCard">
        <h4 className="mb-3 fw-5">Overview</h4>
        <Row gutter={[40, 40]}>
          
          <Col span={8}>
            <Card 
            className="card"
              title="Total User"
             
              style={{ marginBottom: "20px" }}
            >
              {totalProduct}
            </Card>
          </Col>
          <Col span={8}>
            <Card
            className="card"
              title="Total Products"
              
              style={{ marginBottom: "20px" }}
            >
              {totalSell}
            </Card>
          </Col>
          <Col span={8}>
            <Card

            className="card"
            title="Total Category"
             
              style={{ marginBottom: "20px" }}
            >
              {totalProduct}
            </Card>
          </Col>
          
        </Row>

        <Row gutter={[40, 40]}>
          <Col className="SecCol" span={8}>
            <Card className="card"
              title="This Months Total sell"
             
              style={{ marginBottom: "20px" }}
            >
              {monthssell}
            </Card>
          </Col>
          <Col className="SecCol" span={8}>
            <Card
              title="Total Income This Year"
             className="card"
              style={{ marginBottom: "20px" }}
            >
              100
            </Card>
          </Col>
          <Col className="SecCol" span={8}>
            <Card
              title="Total Review Review"
            className="card"
              style={{ marginBottom: "20px" }}
            >
              100
            </Card>
          </Col>
        </Row>
      </div> */}


<div className="container dashboardCard">
      <h4 className="mb-3 fw-bold">Overview</h4>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card ">
            <div className="card-header fs-3">Total Users</div>
            <div className="card-body">
              <p className="  card-text fs-4    ">{totalUser}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card ">
            <div className="card-header fs-3">Total Products</div>
            <div className="card-body">
              <p className="  card-text fs-4    ">{totalProduct}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card   ">
            <div className="card-header fs-3    ">Total Categories</div>
            <div className="card-body ">
              <p className="  card-text fs-4     fs-4">{totalCategory}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card   ">
            <div className="card-header fs-3     ">This Month's Total Sell</div>
            <div className="card-body">
              <p className="  card-text fs-4      ">{monthSell}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card   ">
            <div className="card-header fs-3   ">Total Income This Year</div>
            <div className="card-body">
              <p className=" card-text fs-4    ">{totalIncome}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card   ">
            <div className="card-header fs-3">Total Reviews</div>
            <div className="card-body">
              <p className="  card-text fs-4    ">{totalReview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="chartcompo">
        {/* <ChartComponents /> */}
      </div>
    </>
  );
};
