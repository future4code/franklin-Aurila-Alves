import React from "react";


export const goToLogin = (history) =>{
history.push("/login")
}

export const goToSignUp = (history) =>{
    history.push('/cadastro')
    }

    export const goToAddRecipes = (history) =>{
        history.push('/adicionar-receita')
    }

    export const goToRecipeDetail = (history) =>{
history.push(`/detalhe/${id}`)
}

export const goToRecipeList = (history) =>{
    history.push('/')
    }
