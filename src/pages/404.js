import React from 'react'
import { navigateTo } from 'gatsby';

class NotFoundPage extends React.Component {
    componentDidMount() {
        navigateTo("slo/")
    }

    render() {
        return null;
    }
}

export default NotFoundPage
