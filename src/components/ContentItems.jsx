import { Button } from 'antd';
import { useDispatch } from 'react-redux';

const ContentItem = ({ item }) => {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch({ type: 'addToCart', payload: { ...item, quantity: 1 } });
  }

  return (
    <div className="item p-4 md:p-2 lg:p-4 xl:p-6 h-full flex flex-col">
      <h4 className="name text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">
        {item.name}
      </h4>
      <div className="flex-grow">
        <img
          src={item.image}
          alt=""
          className="object-cover mb-2"
          style={{ height: '150px', width: '100%' }}
        />
      </div>
      <h4 className="price text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <b>Price :</b> {item.price} $/-
      </h4>
      <div className="flex justify-end mt-2">
        <Button onClick={() => addToCart()}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default ContentItem;
