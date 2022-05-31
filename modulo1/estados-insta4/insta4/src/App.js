import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <div>
    <div>
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>

      </div>
      <div>
      <MainContainer>
           <Post
            nomeUsuario={'silvana'}
            fotoUsuario={'https://picsum.photos/56/56'}
            fotoPost={'https://picsum.photos/200/157'}
          />
        </MainContainer>
      </div>
      <div>
      <MainContainer>
           <Post
            nomeUsuario={'berg'}
            fotoUsuario={'https://picsum.photos/52/52'}
            fotoPost={'https://picsum.photos/200/154'}
          />
        </MainContainer>
      </div>
  </div>

 
)

}


export default App;
