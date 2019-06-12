import React from 'react'
import { Redirect } from '@reach/router'

class IndexPage extends React.Component {

    render() {
        return(
            <Redirect to="slo" />
        )
    }
}

export default IndexPage