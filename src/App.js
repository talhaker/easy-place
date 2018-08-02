import React, { Component } from 'react';

import './App.css';
import EasyPlace from './EasyPlace.js';

//!!Organizing temp layoesut
import styled from 'styled-components'

//!!Organizing temp layout
const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

class App extends Component {

    render() {
        return (
            <EasyPlace />
        );
    }
}

export default App;