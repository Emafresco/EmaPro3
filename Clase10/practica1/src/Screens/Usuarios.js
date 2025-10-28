import React, {Component} from 'react';
import { View, Text, Pressable,  StyleSheet } from 'react-native';
import { db } from '../firebase/Config';
import { auth } from '../firebase/Config';


 class Usuarios extends Component{
    constructor(props) {
    super(props);
    this.state = {
     usuarios:[],
     email:"",
     userName:"",
     password:""
    };
  }
  componentDidMount(){
        db.collection('users').onSnapshot(
            docs => {
                let users = []
                docs.forEach(
                    doc => {users.push({
                        dataUsuarios: doc.data(),
                        id: doc.id,
                        
                    })}
                )
              this.setState({usuarios:users})
            })
        }
    
    
    render(){
        return(
        <View style={styles.container}>
            <View style={styles.card}>
        <Text style={styles.title}>usuario</Text>
           </View>
        </View>
        )
    }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '50%',
    padding: 25,
    alignItems: 'center',
    height: '30%'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2f3640',
  }
});



export default Usuarios;