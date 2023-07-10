import { useState } from 'react';

const Mc = ({record,gate}:any) => {
  
  const initialValues = {
    choice: "",
  };
  
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
  <>
  <div key={record.id}>

      {record.hash&&<img src={`https://${gate}/ipfs/${record.hash}/${record.pic}`} width="256px" alt=""/>}

      {record.title&&<h4>{record.title}</h4>}
      
      <div onChange={handleInputChange}>
        <ul>
          <li>{record.a&&<input type="radio" value="a" name="choice" />} {record.a&&record.a}{values.choice===record.ans && record.ans==="a" &&"✔️"}</li>
          <li>{record.b&&<input type="radio" value="b" name="choice" />} {record.b&&record.b}{values.choice===record.ans && record.ans==="b" &&"✔️"}</li>
          <li>{record.c&&<input type="radio" value="c" name="choice" />} {record.c&&record.c}{values.choice===record.ans && record.ans==="c" &&"✔️"}</li>
          {record.d&&<li>{record.d&&<input type="radio" value="d" name="choice" />} {record.d&&record.d}{values.choice===record.ans && record.ans==="d" &&"✔️"}</li>}
        </ul>
      </div>

  </div>
  </>
  );
}

export default Mc;