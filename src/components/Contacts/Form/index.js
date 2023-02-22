import React, { useState } from 'react'

function Form() {
    const [form,setForm]=useState({fullname:"",phone_number:""});

    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        if(form.fullname==="" || form.phone_number===""){
            return false;
        }
        console.log(form);
    };

  return (

    <form onSubmit={onSubmit}>
        <div>
            <input type="text" name='fullname' placeholder='İsim Soyisim' onChange={onChangeInput}/>
        </div>
        <div>
            <input type="text" name='phone_number' placeholder='Telefon Numarası' onChange={onChangeInput}/>
        </div>
        <div>
            <button>Ekle</button>
        </div>
    </form>

  )
}

export default Form