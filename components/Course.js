import React from "react";
import styled from "styled-components";

const Course = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Name>{props.name}</Name>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  width: 315px;
  height: 335px;
`;

const Cover = styled.View`
  height: 260px;
`;

const Image = styled.Image``;

const Logo = styled.Image``;

const Title = styled.Text``;

const Subtitle = styled.Text``;

const Content = styled.View``;

const Avatar = styled.Image``;

const Caption = styled.Text``;

const Name = styled.Text``;
