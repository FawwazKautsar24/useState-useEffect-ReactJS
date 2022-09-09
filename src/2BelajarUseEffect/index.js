import React from 'react';
import LifeCycle from './LifeCycle';
import LifeCycleFunc from './LifeCycleFunc';

class BelajarUseEffect extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isHide: false,
        }
    }
    
    render(){
        return (
            <div style={{ padding: '30px'}}>
                <h2>Contoh Lifecycle Component & useEffect</h2>
                <hr/>
                
                <button onClick={() => this.setState({ isHide: !this.state.isHide })}>
                    {this.state.isHide ? 'Tampilkan' : 'Sembunyikan'}
                </button>
                
                {/* Life Cycle menggunakan Class */}
                {!this.state.isHide && <LifeCycle />}


                {/* Life Cycle menggunakan Fungsi */}
                {!this.state.isHide && <LifeCycleFunc />}
            </div>
        );
    }
}

export default BelajarUseEffect;
