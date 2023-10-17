import {User} from "./User";

const Users = () => {
    const users =[
        {id: 1, name:'Гомер', image:'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'},
        {id: 2, name:'Барт', image:'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'},
        {id: 3, name:'Мардж', image:'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'},
        {id: 4, name:'Ліза', image:'https://static.wikia.nocookie.net/simpsons/images/5/57/Lisa_Simpson2.png'},
        {id: 5, name:'Меггі', image:'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'},

    ]
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};