import { Button } from 'antd';
import { useDispatch } from 'react-redux';

const ContentItem = ({ item }) => {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch({ type: 'addToCart', payload: { ...item, quantity: 1 } });
  }

  return (
    <div className="item p-5 md:p-2 lg:p-4 xl:p-6" style={{ height: '300px'}}>
      <h4 className="name text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">
        {item.name}
      </h4>
      <img
        src={item.image}
        alt=""
        className="mb-2"
        style={{ maxHeight: '120px', maxWidth: '100%' }}
      />
      <h4 className="price text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <b>Price :</b> {item.price} $/-
      </h4>
      <div className="flex justify-end mt-4">
        <Button onClick={() => addToCart()}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default ContentItem;
