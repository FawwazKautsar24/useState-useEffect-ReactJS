import React from 'react';

class Lifecycle extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    name: json.name,
                    isUpdate: false,
                });
            });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: this.state.name,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                isUpdate: true,
            });
        });
    }
    
    componentDidUpdate(){
        if(this.state.isUpdate){
            alert('Berhasil diubah');
            this.setState({
                isUpdate: false,
            });
        }
    }

    componentWillUnmount(){
        console.log('Komponen Berhasil Dicopot!');
    }

    clearData = () => {
        this.setState({
            name: '',
        });
    }
    
    render(){
        return (
            <div>
                <hr/>
                <h3>Menggunakan Class Component</h3>
                <h3>Name: {this.state.name}</h3>
                <h3>Update Name: </h3>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" placeholder="Change Name" name="name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                    <button type="submit">Submit</button>
                </form>

                <button type="clear" onClick={() => {this.clearData()}}>
                    Clear
                </button>
            </div>
        );
    }
}

export default Lifecycle;
