// dependencias
import React, { Component } from 'react';
// estilos
import './css/SubmitPost.css'

class SubmitPost extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title:'👨‍ El muro del cocinerx 🍳',
      act:0,
      index:'',
      datas:[]
    }
  }
  componentDidMount() {
    this.refs.name.focus();
  }
  handleSubmitPost = (e) =>{
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.refs.name.value;
    if (this.state.act === 0) {
      let data = {
        name
      }
      datas.push(data);
    }else{
      let index = this.state.index;
      datas[index].name = name; 
     
    }
    
    this.setState({
      datas:datas,
      act:0
    });
    this.refs.cardPubication.reset();
    this.refs.name.focus();
  }
  handleRemovePost = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    });
    this.refs.cardPubication.reset();
    this.refs.name.focus();
  }
  handleEditPost = (i) =>{
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.name.focus();
    this.setState ({
      act:1,
      index:i
    })

  }
  
  render() {
    let datas = this.state.datas;
    return (
      <div className='container central'>
        <section className="row justify-content-center ">
          <div className='col'>
          <h2>{this.state.title}</h2> 
          <form ref='cardPubication' className=''>
            <textarea type='text' ref='name' placeholder='Que tienes HOY en tu refri' className='caja-receta' />    
              <button onClick={(e)=>this.handleSubmitPost(e)} className='btn button-Submit'>Publicar</button>
          </form>
          </div>
           <div className='recetas col'>
              {
                datas.map((data, i) =>
                <div key={i} className='posts' >
                {i+1}. {data.name}
                <button onClick={()=>this.handleRemovePost(i)} className='btn button-Remove' >Eliminar</button>
                <button onClick={()=>this.handleEditPost(i)} className='btn button-Edit'>Editar</button>          
                </div>)
              }
          </div>          
        </section>
      </div>
    );
  }  
}
export default SubmitPost;
