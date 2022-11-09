import PropTypes from "prop-types";
import styled from "styled-components";
import {
    handleColorTypeBackground,
    handleColorTypeFont,
    StyledList,
    StyledListItem,
    StyledItemText,
} from "../modules/property-details/style";


const StyledBadge = styled.div`
    display: inline;
    color: ${(props) => handleColorTypeFont(props.status,props.theme)};
    background-color: ${(props) => handleColorTypeBackground(props.status,props.theme)};
    border-radius: 1rem;
    font-size: ${(props) => props.theme.typography.s.fontSize};
    font-weight: bold;
    text-align: center;
    padding-top: ${(props) => props.theme.space.xs};
    padding-bottom: ${(props) => props.theme.space.xs};
    min-width: 10rem;
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

AccountList.propTypes = {
    list: PropTypes.array.isRequired,
}

export default AccountList