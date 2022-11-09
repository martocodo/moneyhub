import PropTypes from "prop-types";

import {
    handleColorTypeBackground,
    handleColorTypeFont,
    StyledList,
    StyledListItem,
    StyledItemText,
} from "./style";


const StyledBadge = styled.div`
    display: flex;
    color: ${(props) => handleColorTypeFont(props.status)};
    background-color: ${(props) => handleColorTypeBackground(props.status)};
`;

// Account List with loop of items to display
const AccountList = ({ list }) => (
    <StyledList>
        { list.map(item => {
            return (
                <StyledListItem>
                    <StyledItemText>{item.text}</StyledItemText>
                    { item.badge &&
                        <StyledBadge status={item.badge.status}>
                            {item.badge.value}
                        </StyledBadge>
                    }
                </StyledListItem>
            );
        })}
    </StyledList>
)

RowContainer.propTypes = {
    list: PropTypes.array.isRequired,
}

export default AccountList