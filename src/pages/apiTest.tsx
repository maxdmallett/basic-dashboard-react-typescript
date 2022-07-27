import { useEffect, useState } from "react";

interface Name {
    title: string;
    first: string;
    last: string;
}

interface IUserData {
    name: Name;
    age: string;
    gender: string;
    picture: string;
}

const APITest = () => {

    const [fetching, setFetching] = useState(false);
    const [userData, setUserData] = useState<IUserData | null>(null);

    const handleClick = () => {
        fetchData();
    }

    const fetchData = () => {
        setFetching(true);
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUserData({
                    name: data.results[0].name,
                    age: data.results[0].dob.age,
                    gender: data.results[0].gender,
                    picture: data.results[0].picture.medium
                });
                setFetching(false);
            }).catch(error => {
                console.error(error);
                setFetching(false);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (fetching) {
        return (
            <div className='generic-page'>
                <h1>API Test</h1>
                <p>Fetching...</p>
            </div>
        )
    }

    return (
        <div className='generic-page'>
            <h1>API Test</h1>
            <div className='card'>
                <h2>
                    User data
                </h2>

                <div className="user-info">

                    <img src={userData?.picture} alt={userData?.name.first} />

                    <div className="text">
                        <p className="name">
                            { `${userData?.name.title} ${userData?.name.first} ${userData?.name.last}` }
                        </p>

                        <p className="age">
                            { `${userData?.age} year old ${userData?.gender}` }
                        </p>
                    </div>
                    
                </div>

                <button onClick={handleClick} className="btn-primary">Fetch new user</button>

            </div>

        </div>
    )
}

export default APITest