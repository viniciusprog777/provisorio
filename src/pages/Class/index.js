import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import {
  Container,
  Header,
  ProfilePic,
  MenuContainer,
  Content,
  FeedContainer,
  QuadradinhoLogo,
  MenuHg,
  LabelMenu,
  HeaderFeed,
  MainFeed,
  SubMenus,
  ButtonCreateQuizz,
  CardHomeUp,
  CardHomeDown,
  TesteCima,
  TesteBaixo,
} from "./styles";

function CardClass({ classes }) {
  const [showAnswers, setShowAnswers] = useState(false);

  const [newAnswer, setNewAnswer] = useState("");


  const qtdAnswers = answers.length;

  const student = getUser();

  return (
    <CardHomeUp>
        <li>SALAS</li>
        <li>SALAS</li>
        <li>TURMAS</li>
        <li>TURMAS</li>
    </CardHomeUp>
  );
}
function Class() {
  const history = useHistory();

  const [classes, setClasses] = useState([]);

  const [reload, setReload] = useState(null);
  const [] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  useEffect(() => {
    const loadClasses = async () => {   

      const response = await api.get("/class");
      setClasses(response.data);
    };

    loadClasses();
  }, [reload]);

  return (
    <>
      <Container>
        <Header>
          <ProfilePic />
        </Header>
        <Content>
          <MenuContainer>
            <MenuHg>
              <span>Cursos</span>
              <span>Turma</span>
              <hr />
              <h1>Recentes</h1>
              <LabelMenu>Card Turmas Recentes</LabelMenu>
              <LabelMenu>Card Turmas Recentes</LabelMenu>
              <LabelMenu>Card Turmas Recentes</LabelMenu>
            </MenuHg>
          </MenuContainer>
          <FeedContainer>
            <HeaderFeed>
              <QuadradinhoLogo>
                <h1>TE</h1>
              </QuadradinhoLogo>
              <h1>Turma TCC</h1>
              <SubMenus>
                <li>Home</li>
                <li>Alunos</li>
                <li>Gráficos</li>
              </SubMenus>
              <ButtonCreateQuizz>Criar Quizz</ButtonCreateQuizz>
            </HeaderFeed>
            <MainFeed>
              <span>Cursos</span>
              <TesteCima>
                {classes.map((c) => (
                  <CardClass
                    classes={c}
                  />
                ))}

                <hr/>
              </TesteCima>

              {/* <TesteBaixo>
                <CardHomeDown>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeDown>

                <CardHomeDown>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeDown>

                <CardHomeDown>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeDown>

                <CardHomeDown>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeDown>

                <CardHomeDown>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                  <li>teste</li>
                </CardHomeDown>

              </TesteBaixo> */}

              
              
            </MainFeed>
          </FeedContainer>
        </Content>
      </Container>
    </>
  );
}

// Nao consegui terminar as telas dessa sprint

export default Class;
