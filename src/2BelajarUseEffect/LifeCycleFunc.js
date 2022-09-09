import React, { useEffect, useState } from "react";

function LifeCycleFunc(){
    const [resultName, setName] = useState("");
    const [isUpdate, setUpdate] = useState(false);
    
    // ComponentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => {
                setName(
                    json.name
                );
            });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        
        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: resultName,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            setUpdate(
                true
            );
        });
    }

    // ComponentDidUpdate
    useEffect(() => {
        if(isUpdate){
            alert('Nama berhasil diubah');
            setUpdate(
                false
            );
        }
    }, [isUpdate]); // value yg berubah memicu ComponentDidUpdate ini dipanggil

    // ComponentWillUnmount
    useEffect(() => {
        return () => {
            console.log('Komponen Berhasil Dicopot!~~~');
        }
    }, []);

    const clearData = () => {
        setName(
            ''
        );
    }

    return (
        <div>
            <div>
                <hr/>
                <h3>Menggunakan Functional Component</h3>
                <h3>Name: {resultName}</h3>
                <h3>Update Name: </h3>
                <form onSubmit={(e) => onSubmit(e)}>
                    <input type="text" placeholder="Change Name" name="resultNameXXXX" value={resultName} onChange={(event) => setName(event.target.value)} />
                    <button type="submit">Submit</button>
                </form>

                <button type="clear" onClick={() => clearData()}>
                    Clear
                </button>
            </div>
        </div>
    );
}

export default LifeCycleFunc;
