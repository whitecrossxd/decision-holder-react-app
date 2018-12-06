import { MouseEventHandler } from "react";
import DecisionItem from './../../decision/models/decision-item.props.model'

export default interface DecisionCreationPopupProps {
    createDecision(data: DecisionItem): void;
    closePopup: MouseEventHandler;
}
