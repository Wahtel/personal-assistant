import React from 'react';
import styled from '@emotion/native';
import { ScrollView } from 'react-native';
import { TasksHint, Categories } from './components';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #0a0c0b;
`;

const Text = styled.Text`
  color: #ffffff;
`;

const Tasks = [{
  id: 1,
  title: 'Post',
  description: 'Compose engaging instagram post',
  icon: 'instagram',
  color: '#8959C733',
  prompt: 'As a content strategist specializing in Instagram engagement, draft a post on [topic]. This post targets [business description] and should resonate with [target audience]. The main aim of this post is [post objective]. Please create an Instagram post that aligns with the specified objectives and audience preferences.'
}, {
  id: 2,
  title: 'Post',
  description: 'Compose engaging instagram post',
  icon: 'facebook',
  color: '#8959C733',
  prompt: 'As a content strategist specializing in Instagram engagement, draft a post on [topic]. This post targets [business description] and should resonate with [target audience]. The main aim of this post is [post objective]. Please create an Instagram post that aligns with the specified objectives and audience preferences.'
}, {
  id: 3,
  title: 'Post',
  description: 'Compose engaging instagram post',
  icon: 'x',
  color: '#8959C733',
  prompt: 'As a content strategist specializing in Instagram engagement, draft a post on [topic]. This post targets [business description] and should resonate with [target audience]. The main aim of this post is [post objective]. Please create an Instagram post that aligns with the specified objectives and audience preferences.'
}, {
  id: 4,
  title: 'Post',
  description: 'Compose engaging instagram post',
  icon: 'tiktok',
  color: '#8959C733',
  prompt: 'As a content strategist specializing in Instagram engagement, draft a post on [topic]. This post targets [business description] and should resonate with [target audience]. The main aim of this post is [post objective]. Please create an Instagram post that aligns with the specified objectives and audience preferences.'
}];

export const TasksComponent = (props) => {
  const { navigation } = props;

  return (<Container>
      <ScrollView>
        <TasksHint icon='🤖' title='Personalize Assistant'
                   description='Tailor your assistant to meet your real-life needs'
                   onPress={() => navigation.navigate('CustomizeAssistantScreen')} />
        <Categories title='Recent' tasks={Tasks} />
        <Categories title='Suggested' tasks={Tasks} />
      </ScrollView>
    </Container>);
};
