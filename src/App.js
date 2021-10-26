import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
  id : 1,
  image : 'https://placeimg.com/64/64/1',
  name: '유연아',
  birthday: '981127',
  gender: '여자',
  job: '깐부'
  },
  {
  id : 2,
  image : 'https://placeimg.com/64/64/2',
  name: '조지훈',
  birthday: '980404',
  gender: '남자',
  job: '깐부'
  },
  {
    id : 3,
    image : 'https://placeimg.com/64/64/3',
    name: '금쪽이',
    birthday: '200910',
    gender: '천사',
    job: '깐풍기'
  }
]

class App extends Component {
  render(){
    const { classes } = this.props;
  return (
    <Paper className = {classes.root}>
      <Table className = {classes.table}>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
          {customers.map(c => {return (<Customer id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>)})}
        </TableBody>
      </Table>
    </Paper>
  );
  } 
}

export default withStyles(styles)(App);
