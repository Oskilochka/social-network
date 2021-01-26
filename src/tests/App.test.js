import App from '../App';
import ReactDOM from 'react-dom'
it('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
});
