import React, { useState } from 'react';  

const FrameworkList = () => {

    let[frameworks, setFrameworks] = useState([
        {
            id: 1,
            name: 'React'
        },
        {
            id: 2,
            name: 'Vue'
        },

        {
            id: 3,
            name: 'Angular'
        }
    ]);

    let [frameworkName, setFrameworkName]= useState('');

    const addFramwork = (e) => {
        e.preventDefault();
        setFrameworks([...frameworks, {id: Date.now(), name: frameworkName}]);
        setFrameworkName('');
    }
    return ( 
        <div>
            <form onSubmit={addFramwork}>
                <input type="text" 
                value={frameworkName} 
                onChange={e =>  setFrameworkName(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>

            {
                (frameworks.length === 0 )? (<h1> No List</h1>) : 
                
                (
                
                    <ul>
                        { frameworks.map(f => <li key= {f.id} > {f.name}</li>)}
                    </ul>


                )
                
                

            }
        </div>
     );
}
 
export default FrameworkList;