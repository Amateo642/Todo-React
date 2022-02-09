import React, {useContext} from "react";
import {CSSTransition} from 'react-transition-group';
import { AlertContex } from "../contex/alert/alertContex";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContex)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Внимание!</strong>
                &nbsp;{alert.text}
                <button onClick={hide} type="button" className="btn-close" aria-label="Close">
                    <span aria-hidden="true"></span>
                </button>
            </div>
        </CSSTransition>
    )
}