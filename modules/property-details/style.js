import styled from "styled-components";

// Helper functions
export const handleColorTypeBackground = (status,theme) => {
  switch (status) {
    case "good":
      return theme.colors.green.light;
    case "ok":
      return theme.colors.orange.light;
    case "bad":
      return theme.colors.red.light;
    default:
      return theme.colors.neutral.default;
  }
};

export const handleColorTypeFont = (status,theme) => {
  switch (status) {
    case "good":
      return theme.colors.green.dark;
      case "ok":
        return theme.colors.orange.dark;
      case "bad":
          return theme.colors.red.dark;
      default:
        return theme.colors.white.default;
    }
};

// Containers and Wrappers
export const AccountSectionContainer = styled.div`
  padding: ${(props) => props.theme.space.m} 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[200]};
  }
}
`;

// List stylings
export const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  width: 100%;
`;

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.space.m};
  }
`;

export const StyledItemText = styled.div`
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
`;

// Headings and labels
export const AccountLabel = styled.div`
  font-size: ${(props) => props.theme.typography.xl.fontSize};
  line-height: ${(props) => props.theme.typography.xl.lineHeight};
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.s};
`;

export const AccountHeadline = styled.h2`
  font-size: ${(props) => props.theme.typography["3xl"].fontSize};
  line-height: ${(props) => props.theme.typography["3xl"].lineHeight};
  font-weight: normal;
  color: ${(props) => props.theme.colors.neutral[900]};
  margin-bottom: ${(props) => props.theme.space.m};
`;

export const Inset = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
`;
