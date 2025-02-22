import styled from "styled-components";

export const Button = styled.button`
border: ${props => props.theme === "primary" ? "none" : "1px solid #fff"};
background: ${props =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
font-size: 16px;
color: #fff;
padding: 16px 32px;
width: fit-content;
cursor: pointer;
border-radius: 30px;

&:hover {
  background: linear-gradient(180deg, #ff6378 0%, #fe7e);
    opacity: 0.9;
}
&:active {
  background: linear-gradient( 180deg, #4e4e 0%, #4deaff);
  opacity: 0.8;
}
&:active {
  color: #5f0d3b;
}
`