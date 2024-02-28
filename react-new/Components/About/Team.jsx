import React from 'react';

const Team = () => {
    const teamMembers = [
        { id: 1, name: 'John Doe', role: 'CEO', image: require('./images/Team_F.jpg')  },
        { id: 2, name: 'Jane Smith', role: 'Developer', image:require('./images/Team_S.jpg')   },
        { id: 3, name: 'John Doe', role: 'CEO', image:require('./images/Team_T.jpg')   }
      ];
    return (
        <div className="team-section">
            <div className='container'>
            <h2 className='title text-center'>Our Team</h2>
                <div className='row'>
               

        <div className="team-members d-flex my-5">
          {teamMembers.map(({ name, role, image, id }) => (
             <div className="team-member mx-3" key={id}>
                <div className='team-img'><img src={image}  alt={name}/></div>
             
             <h3>{name}</h3>
             <p>{role}</p>
           </div>
          ))}
        </div>
                </div>
            </div>
        
      </div>
    );
}

export default Team;
