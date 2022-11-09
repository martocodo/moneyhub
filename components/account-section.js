import PropTypes from "prop-types";

import AccountList from "./account-list";
import {
    AccountHeadline, AccountLabel, AccountSectionContainer,
} from "../modules/property-details/style";

import RowContainer from './row-container';

// Account Section Container
const AccountSection = ({ 
    hasRow,
    headline,
    label,
    list,
    onClick,
}) => (
    <AccountSectionContainer>
        <AccountLabel>{label}</AccountLabel>
        {headline &&
            <AccountHeadline>{headline}</AccountHeadline>
        }
        {hasRow 
            ? <RowContainer onClick={onClick ? onClick : undefined }><AccountList list={list} /></RowContainer>
            : <AccountList list={list} />
        }
    </AccountSectionContainer>
)

AccountSection.propTypes = {
    hasRow: PropTypes.bool,
    headline: PropTypes.string,
    label: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}

export default AccountSection