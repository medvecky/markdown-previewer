import React from "react";
import Card from "react-bootstrap/Card";

function Previewer(props) {
    return (
        <div>
            <Card>
                <Card.Header>
                    Previewer
                </Card.Header>
                <Card.Body
                    id='preview'
                    dangerouslySetInnerHTML={props.text}
                >
                </Card.Body>
            </Card>
        </div>
    );
}

export default Previewer;