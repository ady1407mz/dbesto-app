import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Left, Button, Thumbnail, Input, Label, Content, Body, Right, Title, Card, Header, CardItem, Footer, FooterTab, Icon } from 'native-base';
export default class Outlet extends Component {
    render() {
        return (
            <Container style={{flex:1, backgroundColor:"#FFED54"}}>
                <Content style={{flex:1, backgroundColor:"#FFED54"}}>
                    <Card style={{marginTop:20, alignItems:"center", borderColor:"#DDDDDD",borderBottomWidth:3, borderTopWidth:3, borderLeftWidth:3, borderRightWidth:3, borderRadius:10, marginRight:10, marginLeft:10}}>
                        <Text style={{color:"#E76400", alignItems:"center", fontSize:20, justifyContent:"center"}}>
                            OUTLET D'BESTO BANDUNG
                        </Text>
                        <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20}}>
                            <Body>
                                <Text style={{marginLeft:30, alignItems:"center", fontSize:18, justifyContent:"center"}}>
                                    d'BestO Cikutra
                                </Text>
                                <Card style={{marginLeft:30, marginRight:30,width:280 , marginTop:10, backgroundColor:"#cccccc", borderTopRightRadius:20 , borderBottomRightRadius:20, alignItems:"center", justifyContent:"center"}}>
                                      <Text style={{marginLeft:30, marginTop:10, marginBottom:10}}>
                                          ~ Jl. Cikutra Barat No 42, Cibeunying Kaler, Cigadung, Kota Bandung ~
                                      </Text>
                                </Card>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20}}>
                            <Body>
                                <Text style={{marginLeft:30, alignItems:"center", fontSize:18, justifyContent:"center"}}>
                                    d'BestO Cikutra
                                </Text>
                                <Card style={{marginLeft:30, marginRight:30,width:280 , marginTop:10, backgroundColor:"#cccccc", borderTopRightRadius:20 , borderBottomRightRadius:20, alignItems:"center", justifyContent:"center"}}>
                                    <Text style={{marginLeft:30, marginTop:10, marginBottom:10}}>
                                        ~ Jl. Cikutra Barat No 42, Cibeunying Kaler, Cigadung, Kota Bandung ~
                                    </Text>
                                </Card>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20}}>
                            <Body>
                                <Text style={{marginLeft:30, alignItems:"center", fontSize:18, justifyContent:"center"}}>
                                    d'BestO Cikutra
                                </Text>
                                <Card style={{marginLeft:30, marginRight:30,width:280 , marginTop:10, backgroundColor:"#cccccc", borderTopRightRadius:20 , borderBottomRightRadius:20, alignItems:"center", justifyContent:"center"}}>
                                    <Text style={{marginLeft:30, marginTop:10, marginBottom:10}}>
                                        ~ Jl. Cikutra Barat No 42, Cibeunying Kaler, Cigadung, Kota Bandung ~
                                    </Text>
                                </Card>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20}}>
                            <Body>
                                <Text style={{marginLeft:30, alignItems:"center", fontSize:18, justifyContent:"center"}}>
                                    d'BestO Cikutra
                                </Text>
                                <Card style={{marginLeft:30, marginRight:30,width:280 , marginTop:10, backgroundColor:"#cccccc", borderTopRightRadius:20 , borderBottomRightRadius:20, alignItems:"center", justifyContent:"center"}}>
                                    <Text style={{marginLeft:30, marginTop:10, marginBottom:10}}>
                                        ~ Jl. Cikutra Barat No 42, Cibeunying Kaler, Cigadung, Kota Bandung ~
                                    </Text>
                                </Card>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20}}>
                            <Body>
                                <Text style={{marginLeft:30, alignItems:"center", fontSize:18, justifyContent:"center"}}>
                                    d'BestO Cikutra
                                </Text>
                                <Card style={{marginLeft:30, marginRight:30,width:280 , marginTop:10, backgroundColor:"#cccccc", borderTopRightRadius:20 , borderBottomRightRadius:20, alignItems:"center", justifyContent:"center"}}>
                                    <Text style={{marginLeft:30, marginTop:10, marginBottom:10}}>
                                        ~ Jl. Cikutra Barat No 42, Cibeunying Kaler, Cigadung, Kota Bandung ~
                                    </Text>
                                </Card>
                            </Body>
                        </CardItem>
                        <CardItem style={{alignItems:"center", borderRadius:50, marginRight:20}}>
                            <Body>
                                <Text style={{marginLeft:30, alignItems:"center", fontSize:18, justifyContent:"center"}}>
                                    d'BestO Cikutra
                                </Text>
                                <Card style={{marginLeft:30, marginRight:30,width:280 , marginTop:10, backgroundColor:"#cccccc", borderTopRightRadius:20 , borderBottomRightRadius:20, alignItems:"center", justifyContent:"center"}}>
                                    <Text style={{marginLeft:30, marginTop:10, marginBottom:10}}>
                                        ~ Jl. Cikutra Barat No 42, Cibeunying Kaler, Cigadung, Kota Bandung ~
                                    </Text>
                                </Card>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={{alignItems:"center", marginRight:10, marginBottom:10, backgroundColor:"#FFED54"}}>
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
        );
    }
}
