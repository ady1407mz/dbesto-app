import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Left, Button, Thumbnail, Input, Label, Content, Body, Right, Title, Card, Header, CardItem, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Order = () => {
    const goToNota = () => {
        Actions.nota()
    }
    return (
        <Container style={{flex:1}}>
            <Content style={{flex:1, backgroundColor:"#FFED54"}}>
                <Card style={{marginTop:20, marginLeft:10, marginRight:10, marginBottom:20, height:550, alignItems:"center", justifyContent:"center"}}>
                    <CardItem>
                        <Body>
                            <Text  style={{fontWeight: "bold", color:"#E76400",marginTop:20, marginLeft:100, alignItems:"center", justifyContent:"center"}}>
                                Layanan Catering
                            </Text>
                            <Card style={{marginTop:20, alignItems:"center", justifyContent:"center"}}>
                                <CardItem style={{marginTop:10}}>

                                </CardItem>
                                <CardItem cardBody style={{marginTop:20, marginBottom:20, alignItems:"center", justifyContent:"center"}}>
                                    <Image source={require("../images/Screenshot_1.png")} style={{height: 250, width: null, flex: 1}}/>
                                </CardItem>
                                <CardItem>

                                </CardItem>
                            </Card>
                            <View style={{marginTop:10,marginLeft:100, alignItems:"center", justifyContent:"center"}}>
                                <Button style={{width:120, alignItems:"center", justifyContent:"center"}} warning onPress = {goToNota}><Text style={{color: "white"}}> PESAN </Text></Button>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
            <Footer>
                <FooterTab style={{backgroundColor: '#F4F4F4'}}>
                    <Button style={{width:20}}>
                        <Icon name="arrow-back" />
                    </Button>
                    <Button warning style={{width:200}}>
                        <Text style={{fontWeight: "bold"}}>d'BestO jagonya rasa</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}
export default Order
