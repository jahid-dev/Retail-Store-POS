import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import "../../resourses/items.css";
import { useDispatch } from "react-redux";
import MainContent from "../../components/MainContent";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import ContentItem from "../../components/ContentItems";
const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [itemsData, setItemsData] = useState([]);
  const [selectedCategory, setSelectedCategoty] = useState("fruits");
  const categories = [
    {
      name: "fruits",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg",
    },
    {
      name: "vegetables",
      imageURL:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg",
    },
    {
      name: "meat",
      imageURL:
        "https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg?fm=jpg&w=900&fl=progressive",
    },
  ];
  const dispatch = useDispatch();
  const getAllItems = () => {
    dispatch({ type: "showLoading" });
    axiosPublic
      .get("/items/get-all-items")
      .then((response) => {
        dispatch({ type: "hideLoading" });
        setItemsData(response.data);
      })
      .catch((error) => {
        dispatch({ type: "hideLoading" });
        console.log(error);
      });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <MainContent>

      <div className="flex flex-wrap categories">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => setSelectedCategoty(category.name)}
            className={`flex category items-center ${selectedCategory === category.name && "selected-category"
              }`}
          >
            <h4 className="hidden lg:block">{category.name}</h4>
            <img
              src={category.imageURL}
              alt={category.name}
              height="60"
              width="80"
              className="lg:ml-2"
            />
          </div>
        ))}
      </div>

      <Row gutter={20}>

        {itemsData.filter((i) => i.category === selectedCategory).map((item) => {
          return (
            <Col key={item} xs={24} lg={6} md={12} sm={6}>
              <ContentItem item={item} />
            </Col>
          );
        })}
      </Row>
    </MainContent>
  );
}

export default Home;
