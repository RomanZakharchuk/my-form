import React from "react";
import styled from 'styled-components';

const MyLabel = (props) => {
    return (
        <StyleForForm>
            {props.text}
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </StyleForForm>
    )
}

const StyleForForm = styled.label`
padding: 5px 0;
`;

export default MyLabel;

