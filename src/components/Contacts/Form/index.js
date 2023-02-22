import React, { useEffect, useState } from 'react'

const initialValues={fullname:"",phone_number:""};
function Form({addContact,contacts}) {
    const [form,setForm]=useState(initialValues);

    useEffect(()=>{
        setForm(initialValues);
    },[contacts])

    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        if(form.fullname==="" || form.phone_number===""){
            return false;
        }
        addContact([...contacts,form]);
    };

  return (

    <form onSubmit={onSubmit}>
        <div>
            <input type="text" name='fullname' placeholder='İsim Soyisim' value={form.fullname} onChange={onChangeInput}/>
        </div>
        <div>
            <input type="text" name='phone_number' placeholder='Telefon Numarası' value={form.phone_number} onChange={onChangeInput}/>
        </div>
        <div>
            <button>Ekle</button>
        </div>
    </form>

  )
}

export default Form