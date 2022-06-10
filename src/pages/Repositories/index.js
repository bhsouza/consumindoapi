import React, { useEffect, useState } from "react"; //useEffect dispara uma função quando a linguagem for alterada
import * as S from './styled';
import {useNavigate} from 'react-router-dom';

export default function Repositories() {
  const [repositories, setRepositories] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName')
    if(repositoriesName != null){
      repositoriesName = JSON.parse(repositoriesName)
      setRepositories(repositoriesName)
      localStorage.clear()
    } else {
      navigate('/')
    }
  }, [])

  return(
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.list>
        {repositories.map(repository => {
          return (
            <S.ListItem>Repositório: {repository}</S.ListItem>
          )
        })}
      </S.list>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}