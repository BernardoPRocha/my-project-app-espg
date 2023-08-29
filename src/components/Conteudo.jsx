
export default function Conteudo(props){
    //Área declarativa


    return(
        <>
            {/* Área imperativa */}
            <section>
              {/* Área imperativa */}
              <p>
                <a href="/">Home Page</a>
              </p>
              <button onClick={() => alert("Hello World")}>Click Me</button>
              <img src={props.reactLogoProps} alt={props.reactLogoAltProps} />
          </section>
        </>
    )
}