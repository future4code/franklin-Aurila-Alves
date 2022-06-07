
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const App = () => {
	const [etapa, setEtapa]= useState(1)
	const renderizaEtapa() = () => {
		switch (state.evento) {
	      case 1: 
	        return <Etapa1 />;
	      case 2: 
	        return <Etapa2 />;
				case 3:
          return <Etapa3/>;
        case 4:
          return <Final />;
		}
	}
	  return(
      <div>
			{renderizaEtapa()}
      <button>Próxima Etapa</button>
      </div>

			)
	  }

export default App;
