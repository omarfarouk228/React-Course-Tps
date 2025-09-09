import './App.css';
import Counter from './Counter';
import CustomForm from './CustomForm';
import ProfileCard from './ProfileCard';

const users = [
  {
    name: 'Alice Martin',
    image: 'https://i.pravatar.cc/150?u=alice',
    description: 'Dévelopeuse frontend spécialisée en React et amatrice de café',
    socialNetworks: {
      linkedin: 'https://www.linkedin.com/in/alice-martin/',
      github: 'https://github.com/alice'
    }
  },
  {
    name: 'Bob Durand',
    image: 'https://i.pravatar.cc/150?u=bob',
    description: 'Architecte Backend, passioné par les microservices.',
    socialNetworks: {
      linkedin: 'https://www.linkedin.com/in/bob-durand/',
      github: 'https://github.com/bob'
    }
  },
  {
    name: 'Claire Petit',
    image: 'https://i.pravatar.cc/150?u=claire',
    description: 'Designer UI/UX, transforme des idées complexes en interfaces simples.',
    socialNetworks: {
      linkedin: 'https://www.linkedin.com/in/claire-petit/',
      github: 'https://github.com/claire'
    }
  },
   {
    name: 'John Doe',
    image: 'https://i.pravatar.cc/150?u=doe',
    description: 'Architecte Backend, passioné par les microservices.',
    socialNetworks: {
      linkedin: 'https://www.linkedin.com/in/john-doe/',
      github: 'https://github.com/doe'
    }
  },
];
function App() {
  return (
    <div className="App">
      <h1 className='title'>Mon équipe</h1>
       <div className='profiles-container'>
        {
          users.map(user => (<ProfileCard key={user.name} name={user.name} image={user.image} description={user.description} socialNetworks={user.socialNetworks} />))
        }
      </div>   
      <hr/>
      <Counter />  
      <hr />
      <CustomForm/>
    </div>
  );
}

export default App;
