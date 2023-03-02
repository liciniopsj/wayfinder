import styled from "styled-components";

const InputDefault = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: ${(props) => props?.bgColor || "papayawhip"};
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const LabelDefault = styled.label`
  color: #2c2d34;
  position: relative;
`;

const SelectInput = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export { InputDefault, SelectInput, LabelDefault };
