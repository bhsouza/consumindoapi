import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import {useNavigate} from 'react-router-dom';

function App(props) {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false)
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data
      const repositoriesName = []
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      navigate('/repositories')
    }).catch(err => {
      setErro(true)
    })
  }
  return (
    // Como divs podem causar bugs dependendo de como forem usadas, pode ser utilizado os fragments que são uma tag vazia
    <S.HomeContainer> 
      <S.Content>
        <S.Input name="usuario" id="usuario" className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}> Pesquisar </S.Button>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}

export default App;

//useState retorna um array de 2 posições [usuario, setUsuario]

// No react ao invés de class é utilizado o className no html
// Todo componente recebe o atributo props de propriedades
// JSX: é um html dentro do js