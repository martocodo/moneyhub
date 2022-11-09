import PropTypes from "prop-types";

import {
    StyledList, StyledListItem,StyledItemText,
} from "./style";


// Account List with loop of items to display
const AccountList = ({ list }) => (
    <StyledList>
        { list.map(item => {
            return (
                <StyledListItem>
                    <StyledItemText>{item}</StyledItemText>
                </StyledListItem>
            );
        })}
    </StyledList>
)

RowContainer.propTypes = {
    list: PropTypes.array.isRequired,
}

export default AccountList