import  { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import MainContent from "../../components/MainContent";
const Customers = () => {
  const axiosPublic = useAxiosPublic();
    const componentRef = useRef();
  const [billsData, setBillsData] = useState([]);

  const dispatch = useDispatch();
  const getAllBills = () => {
    dispatch({ type: "showLoading" });
    axiosPublic
      .get("/bills/get-all-bills")
      .then((response) => {
        dispatch({ type: "hideLoading" });
        const data = response.data
        data.reverse()
        setBillsData(data);
      })
      .catch((error) => {
        dispatch({ type: "hideLoading" });
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Customer",
      dataIndex: "customerName",
    },
    {
      title: "Phone Number",
      dataIndex: "customerPhoneNumber",
    },
    {
      title: "Created On",
      dataIndex: "createdAt",
      render :(value)=><span>{value.toString().substring(0,10)}</span>
    },
   
    
  ];
 

  useEffect(() => {
    getAllBills();
  }, []);

 

  return (
    <MainContent>
      <div className="d-flex justify-content-between">
        <h3>Customers</h3>
      </div>
      <Table columns={columns} dataSource={billsData} bordered />

     
    </MainContent>
  );
}

export default Customers;