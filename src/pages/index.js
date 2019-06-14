import React from 'react'
import { navigateTo } from 'gatsby';

class IndexPage extends React.Component {

    componentDidMount() {
        navigateTo("slo/");
    }

    render() {
        return null;
    }
}

export default IndexPage