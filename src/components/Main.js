import React, {Component} from 'react';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
          title:'Hanho Ryu',
          desc:'Hello, I\'m Hanho Ryu who is undergraduate student of KAIST, School of Computing.',
          profile:[
            'Korea Institute of Science and Technology, KAIST, School of Computing',
            'Gyeonggibuk Science Highschool (early graduation)',
            'Seoul, Korea, Republic of'
        ]
        }
    }
    render()
    {
        return(
            <div class="body">
        <img id="photo" src="./images/photo.jpg" alt="my photo"></img>
        <h2 id="main">{this.state.title}</h2>
        {this.state.desc}

        <br></br>
        <br></br>

         <h3>Profile</h3>
          <ul>
            <li>{this.state.profile[0]}</li>
            <li>{this.state.profile[1]}</li>
            <li>{this.state.profile[2]}</li>
          </ul>

          <h3>Contact</h3>
          <ul>
            <li>E-mail: gksghyou@kaist.ac.kr</li>
            <li>Github : <a href="https://github.com/hengho">https://github.com/hengho</a></li>
            <li>LinkedIn : <a href="https://www.linkedin.com/in/hanhoryu/">https://www.linkedin.com/in/hanhoryu/</a></li>
          </ul>
      </div>
        );
    }
}

export default Main;