import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight
        title="Minhas turmas"
        subtitle="Aqui você pode ver todas as suas turmas."
      />

      <GroupCard
        title="Galera da ZenFisio"
      />
    </Container>
  );
}
