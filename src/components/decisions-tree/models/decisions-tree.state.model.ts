import DecisionItem from '../../decision/models/decision-item.props.model'

export default interface DecisionTreeState {
    decisions: DecisionItem;
    showPopup: boolean;
    editableItem: DecisionItem;
    scale: number;
}