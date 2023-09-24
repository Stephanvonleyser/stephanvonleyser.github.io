function useForm(initialValues){
    const [values, setValues] = React.useState(initialValues);

    function handleValue(e){
        if (e.target.type == 'checkbox') return e.target.checked;
        return e.target.value;
    }

    return [
        values,
        e => {
            if (e.type === 'change'){ 
                console.log('name:',e.target.name);
                setValues({
                    ...values,
                    [e.target.name]: (handleValue(e))
                });
            }
        }
    ];
}