import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Left, Button, Thumbnail, Input, Label, Content, Body, Right, Title, Card, Header, CardItem, Footer, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Menu = () => {
    const goToAbout = () => {
        Actions.about()
    }
    return (
        <Container style={{flex:1, backgroundColor:"#FFED54"}}>
            <Content style={{flex:1, backgroundColor:"#FFED54"}}>
                <Card style={{marginTop:20, alignItems:"center", borderColor:"#EE1212",borderBottomWidth:3, borderTopWidth:3, borderLeftWidth:3, borderRightWidth:3, borderRadius:20, marginRight:20, marginLeft:20}}>
                    <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20, marginLeft:20}}>
                        <Body>
                            <Text style={{marginLeft:90, alignItems:"center", justifyContent:"center"}}>
                                FRIED CHICKEN
                            </Text>
                            <Card style={{marginLeft:30, marginRight:30, borderRadius:30, alignItems:"center", justifyContent:"center"}}>
                                <CardItem cardBody style={{borderRadius:50}}>
                                    <Image source={require("../images/chicken.jpg")} style={{height: 150, borderRadius:20,  width: null, flex: 1}}/>
                                </CardItem>
                            </Card>
                            <Text style={{marginLeft:35, alignItems:"center", color:"#F5C401", justifyContent:"center"}}>
                                Potongan ayam goreng d'BestO
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{marginTop:20, alignItems:"center", borderColor:"#EE1212",borderBottomWidth:3, borderTopWidth:3, borderLeftWidth:3, borderRightWidth:3, borderRadius:20, marginRight:20, marginLeft:20}}>
                    <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20, marginLeft:20}}>
                        <Body>
                            <Text style={{marginLeft:90, alignItems:"center", justifyContent:"center"}}>
                                FRIED CHICKEN
                            </Text>
                            <Card style={{marginLeft:30, marginRight:30, borderRadius:30, alignItems:"center", justifyContent:"center"}}>
                                <CardItem cardBody style={{borderRadius:50}}>
                                    <Image source={require("../images/chicken.jpg")} style={{height: 150, borderRadius:20,  width: null, flex: 1}}/>
                                </CardItem>
                            </Card>
                            <Text style={{marginLeft:35, alignItems:"center", color:"#F5C401", justifyContent:"center"}}>
                                Potongan ayam goreng d'BestO
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{marginTop:20, alignItems:"center", borderColor:"#EE1212",borderBottomWidth:3, borderTopWidth:3, borderLeftWidth:3, borderRightWidth:3, borderRadius:20, marginRight:20, marginLeft:20}}>
                    <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20, marginLeft:20}}>
                        <Body>
                            <Text style={{marginLeft:90, alignItems:"center", justifyContent:"center"}}>
                                FRIED CHICKEN
                            </Text>
                            <Card style={{marginLeft:30, marginRight:30, borderRadius:30, alignItems:"center", justifyContent:"center"}}>
                                <CardItem cardBody style={{borderRadius:50}}>
                                    <Image source={require("../images/chicken.jpg")} style={{height: 150, borderRadius:20,  width: null, flex: 1}}/>
                                </CardItem>
                            </Card>
                            <Text style={{marginLeft:35, alignItems:"center", color:"#F5C401", justifyContent:"center"}}>
                                Potongan ayam goreng d'BestO
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card style={{marginTop:20, alignItems:"center", borderColor:"#EE1212",borderBottomWidth:3, borderTopWidth:3, borderLeftWidth:3, borderRightWidth:3, borderRadius:20, marginRight:20, marginLeft:20}}>
                    <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20, marginLeft:20}}>
                        <Body>
                            <Text style={{marginLeft:90, alignItems:"center", justifyContent:"center"}}>
                                FRIED CHICKEN
                            </Text>
                            <Card style={{marginLeft:30, marginRight:30, borderRadius:30, alignItems:"center", justifyContent:"center"}}>
                                <CardItem cardBody style={{borderRadius:50}}>
                                    <Image source={require("../images/chicken.jpg")} style={{height: 150, borderRadius:20,  width: null, flex: 1}}/>
                                </CardItem>
                            </Card>
                            <Text style={{marginLeft:35, alignItems:"center", color:"#F5C401", justifyContent:"center"}}>
                                Potongan ayam goreng d'BestO
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

            </Content>
            <Footer style={{alignItems:"center", marginRight:10, backgroundColor:"#FFED54"}}>
                <FooterTab style={{backgroundColor:"white", borderBottomLeftRadius:10, borderTopLeftRadius:10, borderColor:"#E76400", marginLeft:10}}>
                    <Button style={{backgroundColor:"white", borderBottomLeftRadius:10, borderTopLeftRadius:10, borderColor:"#E76400"}}>
                        <Icon style={{color:"black"}} name="arrow-back" />
                    </Button>
                    <Button style={{fontWeight: "bold", borderLeftWidth:150, backgroundColor:"#E76400", borderBottomRightRadius:10, borderTopRightRadius:10, borderColor:"#E76400"}}>
                        <Text style={{fontWeight: "bold"}}>d'BestO Jagonya Rasa</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}
export default Menu
