import  { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Table } from "antd";
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
      <div className="flex justify-between">
        <h3 className="my-3 text-2xl">Customers</h3>
      </div>
      <Table columns={columns} dataSource={billsData} bordered />

     
    </MainContent>
  );
}

export default Customers;