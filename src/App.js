import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';

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
  return (
    <div>
    {
      customers.map(c => {
        return (
          <Customer
            key = {c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            job = {c.job}/>
        )
      })
    }
    </div>
  );
  }
}

export default App;
