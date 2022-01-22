//IMPORTING MODULES/PACKAGES
import React, { useEffect, useState } from 'react';
import { Container } from './lib/index';

/**
 * FUNCTION: App COMPONENT
 * FUNCTIONALITY: APP COMPONENT TO RENDER POST CARD USING THE DATA WHICH 
 * @param {Object} props : COMPONENT PROPS
 * @returns <Container/> (JSX)
 */
function App(props) {

    const [postCards, setPostCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/data')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data))
                    setPostCards(data);
            });
    }, []);

    return (
        <div className="d-flex flex-column vh-100">
            <div className="bg-dark text-light fw-bolder">mutter-react-render-engine</div>
            <div className="h-100">
                {
                    postCards.length === 0 ?
                        "NOTHING TO SEE HERE" :
                        postCards.map((postCard) => {
                            return <Container template={postCard.template} id={postCard.template.topElementId} key={postCard.template.topElementId}/>
                        })
                }
            </div>
        </div>
    );
}

export default App;