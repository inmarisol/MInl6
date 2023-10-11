import { useEffect, useState } from "react";

const URL = 'https://random.dog/woof.json';

const getRandomDog = async () => {
    const response = await fetch(URL);
    const body = await response.json();

    return body.url;
}

export const App = () => {
    const [url, seturl] = useState(null);

    const onClickHandler = async () => {
        const url = await getRandomDog();
        seturl(url);
       // console.log("getting here");
    };

    useEffect(() => {
        onClickHandler();
    }, []);


    return (
        <div>
            <button onClick={onClickHandler}>Click här för mer hundbilder!</button>
            <span>{url}</span>
            <img src={url} alt= 'description of img'></img>
        </div>
    )
}; 