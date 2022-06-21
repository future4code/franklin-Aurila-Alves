import React, {useState} from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
  
  const listaDeComponentes = posts.map((post) => {
  
   
    const [posts, setPosts] = useState([

        {
          nomeUsuario: "paulinha",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        },
        {
          nomeUsuario: "ana",
          fotoUsuario: "https://picsum.photos/40/40",
          fotoPost: "https://picsum.photos/60/60"
        },
        {
          nomeUsuario: "bia",
          fotoUsuario: "https://picsum.photos/47/47",
          fotoPost: "https://picsum.photos/62/62"
        }
      ]
  )

    const [valorInputNomeUsuario, setvalorInputNomeUsuario] = useState("");
    const [valorInputFotoUsuario, setvalorInputFotoUsuario] = useState("");
    const [valorInputFotoPost, setvalorInputFotoPost] = useState("");
  
    const adicionaPost = () => {

      const novoPost = {
  
        nomeUsuario: valorInputNomeUsuario,
      
        fotoUsuario: valorInputFotoUsuario,
        fotoPost:valorInputFotoPost,
  
      };
  
      const novoPosts = [...posts, novoPost];
  
      setPosts(novoPosts);
    };
  
    const onChangeInputNomeUsuario = (event) => {

      setvalorInputNomeUsuario(event.target.value);
    };
  
    const onChangeInputFotoUsuario = (event) => {

      setvalorInputFotoUsuario(event.target.value);
    };
    const onChangeInputFotoPost = (event) =>{
      setvalorInputFotoPost(event.target.value)
    };
  

   
      return (
        <div>
         <MainContainer>
                   <Post
                    nomeUsuario={post.nomeUsuario}
                    fotoUsuario={post.fotoUsuario}
                    fotoPost={post.fotoPost}
                  /></MainContainer>
        
        </div>
      );
  );
      
  
    return (
      
        <div>
          <input
   
            value={valorInputNomeUsuario}
            
            onChange={onChangeInputNomeUsuario}
            placeholder={"Nome do Usuário"}
          />
          <input
            
            value={valorInputFotoUsuario}

            onChange={onChangeInputFotoUsuario}
            placeholder={"Foto do Usuário"}
          />
          <input
          value = {valorInputFotoPost}
          onChange = {onChangeInputFotoPost}
          placeholder = {"Foto Post"}
          />
          
          <button onClick={adicionaPost}>Adicionar</button>
        <div>{listaDeComponentes}</div>
      </div>
    );
  };



export default App;
