import React, { Component } from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'


export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        
    }

    
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            </div>
        )
    }
}