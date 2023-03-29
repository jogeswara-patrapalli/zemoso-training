import Typography from "@mui/material/Typography";

import styled from "styled-components";

const TagStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  gap: 0.625;
  flex-wrap: wrap;
  position: absolute;
  width: 7.68rem;
  height: 1.563rem;
  right: 1.25rem;
  top: 1.25rem;
  background: #e39ab2;
  border-radius: .25rem;

order: 0;
flex-grow: 1;
z-index: 0;
`;

const Tag: React.FC<{ due: Date }> = (props) => {
  const { due } = props;
  const d: Date = new Date();
  const diff: number = due.getTime() - d.getTime();
  const No_Days: number = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return (
    <TagStyled>
      <Typography variant="body2">Due in {No_Days} day(s)</Typography>
    </TagStyled>
  );
};

export default Tag;
