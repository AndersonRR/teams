import { Alert } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';

import { Container, Content, Icon } from './styles';

import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { AppError } from '@utils/AppError';

export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  async function handleNew() {
    const groupFomated = group.trim();

    try {
      if (groupFomated.length === 0) {
        return Alert.alert('Nova turma', 'Informe o nome da turma.');
      }

      await groupCreate(groupFomated);

      navigation.navigate('players', { group: groupFomated });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova turma', error.message);
      } else {
        Alert.alert('Nova turma', 'Não foi possível criar o grupo.');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />
        <Input
          placeholder='Nome da turma'
          onChangeText={setGroup}
        />
        <Button
          title='Criar'
          style={{ marginTop: 24 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}
