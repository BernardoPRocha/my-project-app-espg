import React from 'react'

export default function EditarProdutos() {

    //Recuperando o parâmetro ID com o HOOK useParams();

    const {id} = useParams();

    document.title = "EDITAR PRODUTOS" + id;

  return (
    <div>EditarProdutos</div>
  )
}