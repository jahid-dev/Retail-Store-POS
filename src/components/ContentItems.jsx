import { Button } from "antd";

const ContentItems = ({item}) => {
    return (
        <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-64 w-64 p-[15px] text-[20px] mt-5">
            <h4 className="text-2xl text-[tomato]">{item.name}</h4>
            <img src={item.image} alt="" height='150' width='150' />
            <h4 className="text-[20px] text-center text-[#0000009f]">Price:{item.price}$</h4>
            <div className="flex justify-end">
                <Button className="mt-[10px] bg-green-700 text-white">Add To Cart</Button>
            </div>
        </div>
    );
};

export default ContentItems;