import { Typography } from "@mui/material";
import { ReactComponent as Icircle} from '../../Atoms/Icon/icircle.svg'
import styled from "styled-components";

const ContentDiv=styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0rem;
gap: .5rem;
width: 10.25rem;
height: 1.375rem;
color: #C9C8CC;
flex-wrap: wrap;
order: 0;
align-self: stretch;
flex-grow: 0;`


const TypoIcon:React.FC<{children:string}>=(props)=>{
    const {children}=props;
    return(
        <ContentDiv>
            <Typography variant="body1">{children} </Typography>
            <Icircle></Icircle>
           
        </ContentDiv>
    )
}

export default TypoIcon