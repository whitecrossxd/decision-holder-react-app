import DecisionItem from './../../decision/models/decision-item.props.model';

export default interface DecisionLevelProps {
    levelItems: DecisionItem[];
    attr: string;
    openPopup(data: DecisionItem): void;
}