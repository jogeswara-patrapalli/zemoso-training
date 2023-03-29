import {ReactComponent as Icon} from './Components/Atoms/Icon/icon.svg'
import TypoIcon from './Components/Molecules/TypoIcon';
import Tag from './Components/Atoms/tag';
import Typography from '@mui/material/Typography'
import styled from 'styled-components';
const AppDiv=styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 2rem;
gap: .75rem;
isolation: isolate;
position: absolute;
width: 21.25rem;
height: 16.1875rem;
left: 17.375rem;
top: 8.9375rem;
background: #201F24;

border: .0625rem solid #28272B;
border-radius: .75rem;`

const InDiv=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0rem;
gap: 1.5rem;
width: 17.25rem;
height: 10.5rem;
flex-wrap: wrap;
order: 0;
flex-grow: 1;
z-index: 0;`

const TextDiv=styled.div`
padding: 0rem;
gap: .5rem;
width: 10.25rem;
height: 1.375rem;
color:#E8E7F0;`




function App() {
  const monthNames:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const d:Date=new Date("06/21/2023")
const Month:string= monthNames[d.getMonth()]
const Year:number=d.getFullYear()
const Date_1:number=d.getDate()
const s:string="Due - "+Month+" "+Date_1+", "+Year

  return (
    <AppDiv>
      <InDiv>
      <Icon ></Icon>
      <TextDiv>
      <TypoIcon>{s}</TypoIcon>
      <Typography variant='h6' color='#E8E7F0'>$14,204.55</Typography>
      </TextDiv>
      </InDiv>
      <Tag due={d}></Tag>
    </AppDiv>
  );
}

export default App;
