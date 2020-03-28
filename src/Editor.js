import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import React from "react";

function Editor(props) {
    return (
        <div>
            <InputGroup.Prepend >
                <InputGroup.Text
                    style={{width: '100%'}}
                >
                    Editor
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                id='editor'
                style={{height: '200px'}}
                as="textarea"
                aria-label="Editor"
                size="lg"
                defaultValue={props.text}
                onChange={props.onChange}
            />
        </div>
    );
}

export default Editor;