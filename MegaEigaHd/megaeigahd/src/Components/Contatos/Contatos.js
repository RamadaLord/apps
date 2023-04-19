import React, { Component } from "react";
import './style.input.css'
class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha: '',
            sexo: '',
            preferencia:''
        }
        this.cadastro = this.cadastro.bind(this)

    }
    cadastro(event) {
        event.preventDefault()
        const { nome, email, senha, sexo, preferencia } = this.state
        if (nome === '' || email === '' || senha === '' || sexo === '') {
            alert('!!CAMPOS EM BRANCO!!')
            return;
        }
        alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha} \n Sexo: ${sexo} \nPreferencia: ${preferencia}`)
    }
    render() {
        return (
            <div id="area-principal">
                <form onSubmit={this.cadastro}>


                    <label>Nome:</label>
                    <input type="text"
                    id="Input"
                    className="Input"
                        placeholder="Seu Nome Aqui"
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                    />
                    <br />
                    <label>E-mail:</label>
                    <input type='email'
                    id="Input"
                        value={this.state.email}
                        placeholder="E-mail"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <label>Senha:</label>
                    <input type='password'
                    id="Input"
                        value={this.state.senha}
                        placeholder="*****"
                        onChange={(e) => this.setState({ senha: e.target.value })}
                    />
                    <br />
                    <fieldset value={this.state.preferencia}
                        onChange={(e) => this.setState({ preferencia: e.target.value })}>
                        <legend>Preferencia?</legend>
                        <label>
                            <input type="radio" name="Preferencia" value="Filmes"  />
                            Filmes</label>
                        <label>
                            <input type="radio" name="Preferencia" value="Series" />
                            Series</label>
                    </fieldset>
                    <label>Selecione Seu Genero</label>
                    <br />
                    <select
                        value={this.state.sexualidade}
                        onChange={(e) => this.setState({ sexo: e.target.value })}
                    >
                        <option>Selecionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                    <br />
                    <button type='submit'>Enviar</button>
                </form>

            </div>
        )

    }
}
export default Cadastro