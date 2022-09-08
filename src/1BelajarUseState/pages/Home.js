import React from 'react';
import Count from '../components/Count';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: 0
    //     }
    // }

    render(){
        return (
            <div style={{ padding:'50px' }}>
                <header>
                    <h2>Aplikasi Penghitng Jumlah Pengunjung</h2>
                </header>
                <hr/>
                <Count />
                <hr/>
                <footer>
                    <p>Created by Fawwaz</p>
                </footer>
            </div>
        );
    }
}

export default Home;
