import React, { Component } from "react";

class Cadastro extends Component {

    constructor(props) {
        super(props)
            this.state = {
                nome :'',
                email : '',
                senha : ''
            }
            this.cadastro = this.cadastro.bind(this)
        
        }
    cadastro(event){
        event.preventDefault()
        const {nome, email, senha} = this.state
        if(nome=== '' || email==='' || senha===''){
            alert('!!CAMPOS EM BRANCO!!')
            return
        }
        alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
    }
    render(){
        return (
            <div id="area-principal">
                <form onSubmit={this.cadastro}>

                <label>Nome:</label>
                <input type="text"
                placeholder="Seu Nome Aqui"
                value={this.state.nome}
                onChange={(e) => this.setState({ nome: e.target.value})}
                 />
                <br />
                <label>E-mail:</label>
                <input type='email'
                value={this.state.email}
                 placeholder="E-mail"
                 onChange={(e) => this.setState({ email: e.target.value})}
                />
                <br />
                <label>Senha:</label>
                <input type='password'
                value={this.state.senha}
                placeholder="*****"
                onChange={(e) => this.setState({ senha: e.target.value})}                
                />
                <br />
                <select>
                    <option>Masc</option>
                    <option>Fem</option>
                </select>
                <br/>
                <button type='submit'>Enviar</button>
                </form>

            </div>
        )

    }
}
export default Cadastro