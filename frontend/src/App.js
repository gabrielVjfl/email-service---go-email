import React, {useState} from 'react'
import {Container, Title, Card, CardBody} from './styled'
import Axios from 'axios'
import Swal from 'sweetalert2'
const App = () => {


const [subject, setSubject] = useState('')
const [text, setText] = useState('')
const [to, setTo] = useState('')

let [loading, setLoading] = useState(false)

const HandleSubmit = async(e) => {
  try {

    
  setLoading(true)

  e.preventDefault()


    let response = await Axios.post(`http://localhost:7676/send`, {
      subject: subject,
      text: text,
      to: to
    })
    console.log(response)

    setSubject('')
    setText('')
    setTo('')

    setLoading(false)


    Swal.fire({
      title: 'Sucesso!',
      text: 'Email enviado com sucesso!',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
  catch(err) {
    setLoading(false)
  console.log(err)
  Swal.fire({
    title: 'Ocorreu um erro!',
    text: 'Verifique se o email do destinatário é correto ou se os campos estão preenchidos!',
    icon: 'error',
    confirmButtonText: 'Ok'
  })
  }
}



  return (
    <Container>
  
             <Card className="card">
               <CardBody className="card-body">
                  <Title>Go Email</Title>
                  <form onSubmit={HandleSubmit} style={{width: '100%', display: 'flex', 
                  alignItems: 'center', flexDirection: 'column'}}>
                  <label style={{color: 'white'}}>Assunto - Subject : </label>
                  <input className="form-control" onChange={(e) => setSubject(e.target.value)} 
                  placeholder="Digite o Assunto - Subject" required value={subject} name="subject"/>
                  <br/>
                  <label style={{color: 'white'}}>Email do destinatário :</label>
                  <input className="form-control" onChange={(e) => setTo(e.target.value)} 
                  placeholder="Digite o email do destinatário" required value={to} name="to"/>
                  <br/>
                  <label style={{color: 'white'}}>Texto :</label>
                  <textarea style={{resize: 'none', height: '150px'}} 
                  className="form-control" placeholder="Digite o texto" 
                  onChange={(e) => setText(e.target.value)} required value={text} name="text"/>
                  <br/>
                 
                  <button type="submit" className="btn btn-warning">Enviar</button>
<br/>
                  {
               loading == true ? (
                 
                <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
               ) : ''
             }
                  </form>
                  <br/>
                
               </CardBody>
             </Card>
            
          
    </Container>
  );
}

export default App;
