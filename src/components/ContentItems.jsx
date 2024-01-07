
const ContentItems = ({item}) => {
    return (
        <div>
            <h4 className="text-2xl">{item.name}</h4>
            <img src={item.image} alt="" height='150' width='150' />
            <h4 className="text-2xl">Price:{item.price}$</h4>
        </div>
    );
};

export default ContentItems;