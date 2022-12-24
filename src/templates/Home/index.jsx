//import logo from './logo.svg';
import './styles.css';
import { Component } from 'react';
//import { PostCard } from './Components/PostCard';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../Components/Posts';
import { Button } from '../../Components/Button';
import { TextInput } from '../../Components/TextInput';
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
    allPosts: [],
    page: 0,
    postsPerPage: 53,
    searchValue: ''
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
    const { page, postsPerPage } = this.state;
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    //spread
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
    console.log(posts);
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

  handleChanged = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase())) : posts;
    //const filteredPosts = !!searchValue ? posts.filter((post) => {return post.title.toLowerCase().includes(searchValue.toLowerCase())}) : posts;
    //return (<p onClick={() => console.log('oi')}> Hi {name} from {city}</p>) // => arrow function
    //short-circuit !!searchvalue

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <h1>Search value: {searchValue}</h1>
          )
          }
          <TextInput searchValue={searchValue} handleChanged={this.handleChanged} />
        </div>
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <p>Not found posts</p>
        )}
        {!searchValue && (
          <Button
            disabled={noMorePosts}
            text="Load more posts..." onClick={this.loadMorePosts} />
        )
        }
      </section>
    ) // => arrow function
  }
}
export default Home;
