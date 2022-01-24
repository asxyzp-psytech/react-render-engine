//IMPORTING MODULES/PACKAGES
import { Container } from './lib/index';
import React, { useEffect, useState } from 'react';

/**
 * FUNCTION: App COMPONENT
 * FUNCTIONALITY: APP COMPONENT TO RENDER POST CARD USING THE DATA WHICH 
 * @param {Object} props : COMPONENT PROPS
 * @returns <Container/> (JSX)
 */
function App(props) {

    //STATES
    const [postCards, setPostCards] = useState([]);

    //useEffect TO LOAD CARD CONTENT
    useEffect(() => {
        fetch('http://localhost:8080/data')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data))
                    setPostCards(data);
            });
    }, []);

    //METHODS
    /**
     * FUNCTION: changeCard(event)
     * FUNCTIONALITY: CHANGING NEXT CARD IN THE STACK
     * @param {*} event EVENT OBJECT
     * @returns UNDEFINED
     */
    const changeCard = (event) => {
        const card = postCards.shift();
        postCards.push(card);

        /**LESSON: DOING shift() or push() ON AN ARRAY STATE DOESN'T UPDATES THE ARRAY
         * BECAUSE IT IS STILL THE SAME ARRAY. ONLY WHEN A NEW ARRAY IS PASSED THAT THE
         * ARRAY STATE WILL UPDATE: https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render */        
        setPostCards([...postCards]);
    };

    return (
        <div className="d-flex flex-column vh-100">

            {/* TOP NAVBAR */}
            <div className="bg-primary p-3 fw-bold text-light">
                <i className="bi bi-box fa-2x"></i> &nbsp;
                mutter-react-render-engine
            </div>

            {/* BODY */}
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                {
                    postCards.length === 0 ?
                        <div className="m-card shadow border text-center d-flex flex-column justify-content-center align-items-center">
                            <i className="d-block h1 bi bi-eye-slash-fill"></i>
                            <h1>Nothing to see here</h1>
                            <p className="text-secondary">Run <code className="p-1 bg-dark text-light rounded">json-server --watch db.json <br /> -p 8080</code> to load the cards.</p>
                        </div> :
                        <>

                            <div className="m-card-height vw-100 d-flex flex-column justify-content-center align-items-center">
                                {
                                    postCards.map((postCard) => {
                                        return (<Container template={postCard.template} id={postCard.template.topElementId} key={postCard.template.topElementId} />);
                                    })
                                }
                            </div>
                            <button onClick={changeCard} className="btn btn-primary m-card-width mt-3">Next <i className="bi bi-skip-forward-fill"></i></button>
                        </>
                }
            </div>
        </div>
    );
}

export default App;