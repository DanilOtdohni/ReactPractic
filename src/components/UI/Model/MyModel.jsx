import React from 'react';
import './MyModel.css'
import { Transition } from 'react-transition-group';
import react from "react";

const MyModel = ({children, visible, setVisible}) => {



    const duration = 150;

    return (
        <Transition in={visible} timeout={duration} mountOnEnter unmountOnExit>
            {state => (
                <><div className="background" onClick={() => setVisible(false)}></div>
                <div className={`ModalWindow ${state}`}>
                    <div onClick={() => setVisible(false)}>
                        <div onClick={(e) => e.stopPropagation()}>
                            {children}
                        </div>
                    </div>
                </div>
                </>
            )}
        </Transition>


    );
};

export default MyModel;