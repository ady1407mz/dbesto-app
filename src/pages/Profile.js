import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Left, Button, Item, Input, Label, Content, Body, Right, Title, Card, Header, CardItem, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Profile = () => {
    const goToBeranda = () => {
        Actions.beranda()
    }
    return (
        <Container style={{flex:1}}>
            <Content style={{flex:1, backgroundColor:"#FFED54"}}>
                <Card>
                    <CardItem>
                        <Body>
                            <View style={{marginLeft:120, alignItems:"center", justifyContent:"center"}}>
                                <Text style={{fontWeight: "bold"}}>ADY MIZA</Text>
                            </View>
                            <Item floatingLabel style={{marginTop: 50}}>
                                <Label>Nama Lengkap</Label>
                                <Input value={"ADY MIFTAKHUZ ZAMAN"} />
                            </Item>
                            <Item floatingLabel style={{marginTop: 30}}>
                                <Label>NIM</Label>
                                <Input value={"17180071"} />
                            </Item>
                            <Item floatingLabel style={{marginTop: 30}}>
                                <Label>Username</Label>
                                <Input value={"ADY MIZA"} />
                            </Item>
                            <Item floatingLabel style={{marginTop: 30}}>
                                <Label>Nomor Handphones</Label>
                                <Input value={"0858-9299-8043"} />
                            </Item>
                        </Body>
                    </CardItem>
                </Card>
                <View style={{marginTop:10, alignItems:"center", justifyContent:"center"}}>
                    <Button style={{width:100, alignItems:"center", justifyContent:"center"}} warning onPress = {goToBeranda}><Text style={{color: "white"}}> OK </Text></Button>
                </View>
            </Content>
            <Footer>
                <FooterTab style={{backgroundColor: '#F4F4F4'}}>
                    <Button>
                        <Icon name="arrow-back" />
                    </Button>
                    <Button warning>
                        <Text style={{fontWeight: "bold"}}>d'BestO jagonya rasa</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}
export default Profile
