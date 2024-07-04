

const Option = ({option}) => {
    const {price,features,name}
    return (
        <div>
            <p>{price}</p>
            <p>{name}</p>
        </div>
    );
};

export default Option;