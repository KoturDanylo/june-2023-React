const User = ({user}) => {
    const {name,image} = user;

    return (
        <div>
            <div>name:{name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {User};