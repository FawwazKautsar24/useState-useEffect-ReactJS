/* Penggunaan Cara Baru */
// fungsi yang memiliki state
import React, {useState} from 'react';

function Count(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Jumlah Pengunjung : {count} Pengunjung</p>
            <button onClick={() => setCount(count+1)}>Tambah Pengunjung</button>
        </div>
    );
}

export default Count;
/* Penggunaan Cara Baru */


/* Penggunaan Cara Lama */
// import React from "react";

// class Count extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             count: 0,
//         }
//     }

//     render(){
//         return (
//             <div>
//                 <p>Jumlah Pengunjung : {this.state.count} Pengunjung</p>
//                 <button onClick={() => this.setState({ count: this.state.count+1 })}>Tambah Pengunjung</button>
//             </div>
//         );
//     }
// }

// export default Count;
/* Penggunaan Cara Lama */
