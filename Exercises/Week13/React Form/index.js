function SignUp(){

    const [year, setYear] =React.useState('');



    function handle(){
        console.log('year:', year);
    }
    return (
        <>
        <select value={year} onChange={e => setYear(e.target.value)}>
                <option>Freshman</option>
                <option>Sophmore</option>
                <option>Junior</option>
                <option>Senior</option>
            </select>
            <div>Name</div>
            <input type="text"/>
            <div>Email</div>
            <input type="text"/>
            <div>Password</div>
            <input type="text"/>
            <div><input type="checkbox"/> Remember me</div>
            <button onClick={handle}>Submit</button>
        </>
    )
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)