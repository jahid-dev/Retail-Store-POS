import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import ContentItems from "./ContentItems";
import useAxiosPublic from "../hooks/useAxiosPublic";


const ContentAll = () => {
    const axiosPublic = useAxiosPublic();
    const [itemsData, setItemsData] = useState([])
    const getAllItems = () =>{
        axiosPublic.get('/items').then((res) =>{
            setItemsData(res.data)
        }).catch((error) =>{
            console.log(error);
        })
    }
    useEffect(() => {
        getAllItems()
    },[])
    return (
        <Row gutter={20}>
            {
                itemsData.map((item) => {
                    return <Col key={item} span={6} xs={24} lg={6} md={12} sm={6}>
                        <ContentItems item = {item}/>
                    </Col>
                })
            }
        </Row>
    );
};

export default ContentAll;