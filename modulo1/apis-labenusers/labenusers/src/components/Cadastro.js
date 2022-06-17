import React, { useEffect, useState } from "react";
import axios from "axios";
 
function Cadastro(){

    useEffect(PegaUsuario, [])
    const [inputNome, setInputNome] = useState(" ")
    
    function OnChangeInputNome(event){
        setInputNome(event.target.value)
    }

    const [inputEmail, setInputEmail] = useState("")
    function OnChangeInputEmail(event){
        setInputEmail(event.target.value)
    }

    const [listaUsuarios, setListaUsuarios] = useState([])
    function PegaUsuario(){
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers:{
                Authorization: "aurila-alves-franklin"

        }}).then((response)=>{
            setListaUsuarios(response.data)
            console.log(response.data)
        })

    }

    function CriaUsuario(){
        const body = {
            "name": inputNome,
            "email": inputEmail
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "aurila-alves-franklin"
            }
        }).then((response) => {
            alert("Usuário cadastrado com sucesso")
            PegaUsuario()
        }).catch((error) => {
            alert("Erro no cadastro do usuário")
            console.log(error);
        })
    }

    

    return(
        <div>
            <input
            value={inputNome}
            onChange= {OnChangeInputNome}

            />
            <input
            value={inputEmail}
            onChange= {OnChangeInputEmail}
            />
            <button onClick={CriaUsuario} > Criar </button>

            {listaUsuarios.map((usuario) => {
                
                const DeletaUsuario = ()=> {
                    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuario.id}`, {
                        headers:{
                            Authorization: "aurila-alves-franklin"
                        }
                    }).then((response) =>{
                        alert("Usuário deletado")
                        PegaUsuario()
                    }).catch((error) => {
                        // alert("erro ao deletar usuário")
                        console.log(error);
            
                    })
                }
                return(
                    
                    <div>
                    <p key={usuario.id}>{usuario.name}</p>
                    <button onClick={DeletaUsuario}>x</button>
                    </div>
                )
            })}

        </div>

    )
}
export default Cadastro;