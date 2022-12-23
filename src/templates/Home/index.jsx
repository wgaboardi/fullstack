//import logo from './logo.svg';
import './styles.css';
import { Component } from 'react';
//import { PostCard } from './Components/PostCard';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../Components/Posts';
class Home extends Component {
  // com construtor
  /*constructor(props) {
    super(props);
    this.handlePClick = this.handlePClick.bind(this);
    this.state = {
      name: 'Wellington',
      city: 'Curitiba',
      counter: 0
    }
  }
  */
  //sem construtor - class fields
  state = {
    posts: [],
  }
  timeoutUpdate = null;


  //second method
  loadPosts2 = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });

  }

  // apos montar componente
  /*
  componentDidMount() {
    //this.handleTimeout();
    console.log('montado');
    //this.loadPosts();
    this.loadPosts2();
  }
*/
  // refactoring
  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }


  // usado quando o componente for atualizado (acaba entrando em bug)
  componentDidUpdate() {
    //this.handleTimeout();
    console.log('updated')
  }

  //limpar lixos
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  render() {
    const { posts } = this.state;
    //return (<p onClick={() => console.log('oi')}> Hi {name} from {city}</p>) // => arrow function
    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    ) // => arrow function
  }
}
export default Home;
