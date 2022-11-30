import styled from "styled-components";
import "../Modal.css"




const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);

`;

const BigTitle = (props) => {
  return (
    <Text className="text-big" top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle;
