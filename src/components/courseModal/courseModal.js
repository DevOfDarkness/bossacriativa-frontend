import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../services/api'
import Modal from '../lessonModal/modal'
import { IoMdAddCircle } from 'react-icons/io'
import { FaEdit } from 'react-icons/fa'
import { IconContext } from 'react-icons'

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState()
  const [name, setName] = useState()
  const [duration, setDuration] = useState()

  async function handleCoursePost(e){
    e.preventDefault()

    const data = {
      type,
      name,
      duration
    }
      try{
        await api.post('/courses', data)
        alert("Curso adicionado")
        handleClose()
      }catch(err){
        alert("Erro ao adicionar curso")
      }
  }
  async function handleCourseEdit(e){
    e.preventDefault()

    const data = {
      type,
      name,
      duration
    }

    try{
      await api.put(`/course/${props.id}`, data)
      alert("Curso editado com sucesso")
      handleClose()
    } catch(err){
      return alert("Algo deu errado")
    }
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        {props.addCourse ? 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <IoMdAddCircle onClick={handleClickOpen}/>
          </IconContext.Provider> : 
          <IconContext.Provider value={{ size:"2em", className: "del" }}>
            <FaEdit onClick={handleClickOpen}/>
          </IconContext.Provider>
        }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Curso</DialogTitle>
        <DialogContent onSubmit={handleCoursePost}>
          <DialogContentText>
            Para {props.action} um curso, preencha os campos abaixo
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Categoria"
            type="text"
            fullWidth
            value={type}
            onChange={e => setType(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value) }
          />
          <TextField
            autoFocus
            margin="dense"
            id="duration"
            label="Duração em horas"
            type="text"
            fullWidth
            value={duration}
            onChange={e => setDuration(e.target.value) }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={props.action == "adicionar" ? handleCoursePost : handleCourseEdit} color="primary" type="submit">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
