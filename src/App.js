import React from 'react';
import ReactFCCtest from 'react-fcctest';
import './App.css';
import InputGroup from "react-bootstrap/InputGroup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Editor from "./Editor";
import Previewer from "./Previewer";
import marked from 'marked';

const defaultText = "# This is a sub-heading...\n" +
    "## And here's some other cool stuff:\n" +
    "  \n" +
    "Heres some code, `<div></div>`, between 2 backticks.\n" +
    "\n" +
    "```\n" +
    "// this is multi-line code:\n" +
    "\n" +
    "function anotherExample(firstLine, lastLine) {\n" +
    "  if (firstLine == '```' && lastLine == '```') {\n" +
    "    return multiLineCode;\n" +
    "  }\n" +
    "}\n" +
    "```\n" +
    "  \n" +
    "You can also make text **bold**... whoa!\n" +
    "Or _italic_.\n" +
    "Or... wait for it... **_both!_**\n" +
    "And feel free to go crazy ~~crossing stuff out~~.\n" +
    "\n" +
    "There's also [links](https://www.freecodecamp.com), and\n" +
    "> Block Quotes!\n" +
    "\n" +
    "And if you want to get really crazy, even tables:\n" +
    "\n" +
    "Wild Header | Crazy Header | Another Header?\n" +
    "------------ | ------------- | ------------- \n" +
    "Your content can | be here, and it | can be here....\n" +
    "And here. | Okay. | I think we get it.\n" +
    "\n" +
    "- And of course there are lists.\n" +
    "  - Some are bulleted.\n" +
    "     - With different indentation levels.\n" +
    "        - That look like this.\n" +
    "\n" +
    "\n" +
    "1. And there are numbererd lists too.\n" +
    "1. Use just 1s if you want! \n" +
    "1. But the list goes on...\n" +
    "- Even if you use dashes or asterisks.\n" +
    "* And last but not least, let's not forget embedded images:\n" +
    "\n" +
    "![React Logo w/ Text](https://goo.gl/Umyytc)";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: defaultText
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    compileText(text) {
        marked.setOptions({
            breaks: true,
        });
        return { __html: marked(text) };
    }


    render() {
        return (
            <div className='margin'>
                <ReactFCCtest/>
                <InputGroup size='lg'>
                    <Container>
                        <Row>
                            <Col>
                                <Editor
                                    text={this.state.value}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Previewer text={this.compileText(this.state.value)} />
                            </Col>
                        </Row>
                    </Container>
                </InputGroup>
            </div>
        );
    }
}

export default App;
