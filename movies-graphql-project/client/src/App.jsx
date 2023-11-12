import './App.css'
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className='app'>
        <h1>Watch list</h1>
        <div className=''>
          <MovieList />
          <AddMovie />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
