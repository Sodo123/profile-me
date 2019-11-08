import React from 'react';
import { Button, Row, Col } from 'antd';


const axios = require('axios');

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            full_name: 'Lê Tiến Đức',
            avatar: 'https://miro.medium.com/fit/c/128/128/1*G49pUpz42eH5aXBIPWfBfg@2x.jpeg',
            city: 'Blessington',
            email: 'duclt.it@gmail.com',
            gender: 'male',
        }
    }

    async randomProfile(){
        const user = await this.getUser();
        this.setState({
            full_name: user.full_name,
            avatar: user.avatar,
            city: user.city,
            email: user.email,
            gender: user.gender,
            phone: user.phone,
        })
    }

    async getUser(){
        try {
            const response = await axios.get("https://randomuser.me/api/");
            console.log(response.data);
            const jsonObject = response.data.results[0]
            let user = {}
            user.gender = jsonObject["gender"];
            user.full_name = jsonObject["name"]["first"] + jsonObject["name"]["last"]
            user.email = jsonObject["email"]
            user.phone = jsonObject["phone"]
            user.city =  jsonObject["location"]["city"]
            user.avatar = jsonObject["picture"]["medium"]
            return user
            
        } catch (error) {
            console.error(error);
        }
    }

    render(){
        return(
            <div>
                <h2>
                    Profile
                </h2>

                <Row>
                    <Col span={12}>
                        <h3>{this.state.full_name}</h3>
                        <div>Gender: {this.state.gender}</div>
                        <div>Phone: {this.state.phone}</div>
                        <div>Email: {this.state.email}</div>
                        <div>City: {this.state.city}</div>
                    </Col>
                    <Col span={8}>
                        <img src={this.state.avatar} alt="avatar" width="120px" height="120px"/>
                    </Col>
                    
                </Row>
                <Row>
                    <Col span={8}>
                        <Button type="primary" onClick={() => {this.randomProfile()}}>Random</Button>
                    </Col>
                    
                </Row>
                
            </div>
        )
    }
}

export default Profile;

