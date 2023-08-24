import { FlatList } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    'Grupo da ZenFisio',
    'Gurizada',
  ]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }
  return (
    <Container>
      <Header />
      <Highlight
        title='Minhas turmas'
        subtitle='Aqui você pode ver todas as suas turmas.'
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message='Que tal cadastrar a primeira turma?' />
        )}
      />

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}
