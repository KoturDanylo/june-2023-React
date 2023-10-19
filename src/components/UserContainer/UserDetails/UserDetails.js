const UserDetails = ({userDetails}) => {
    const {id,name,username, email,title, body, userId}=userDetails;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <div>userId: {userId}</div>
        </div>
    );
};

export {UserDetails};