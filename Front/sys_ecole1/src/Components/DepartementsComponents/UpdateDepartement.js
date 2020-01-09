import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios'

class UpdateDepartement extends Component{

    state={
        nom:''
        
    }
    onChangeHandler=(e)=>{ this.setState({nom:e.target.value})}

    onSubmit=(e)=>{
        var EtObj={
            _id:this.props.dep._id,
            nom:this.state.dep

        }
        e.preventDefault();
        Axios.put('http://localhost:4000/api/UpdateDepartement',EtObj);
        window.location.assign('/Departement')
    }
    componentDidMount(){

        document.getElementById("nom").value=this.props.dep.nom;


        this.setState({nom:this.props.dep.nom})
    }
    render(){
        return (
            <div>
                <h1>Modifier Un Departement</h1>
                <Form method="PUT" onSubmit={(e)=>this.onSubmit(e)}>
                <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text' id="nom" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Button type ="submit" variant="dark" >Update</Button>                  
                    </Form>

            </div>
        );
    }
}
export default UpdateDepartement