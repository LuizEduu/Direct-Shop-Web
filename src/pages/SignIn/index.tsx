import React from 'react';

import { Container, Background, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Background>
          <h1>Sua plataforma de vendas online</h1>
        </Background>

        <Content>
          <form>
            <h1>Fazer login</h1>
            <input name="email" />
            <input name="password" type="password" />
            <button type="button">Entrar</button>
          </form>

          <p>
            Não tem conta? <a href="SignUp">Cadastre-se</a>
          </p>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
