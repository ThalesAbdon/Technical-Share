import './App.scss';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Header from './components/Header';
import Filters from './components/Filters';

function App() {
  return (
    <div className='App'>

		<Navigation/> 
		<Header />
		<Filters/>
		<Profile/>
		
      {/* <footer>
		<div class="main-content">
			<div class="left box">
				<h2> Sobre nós</h2>
				<div class="content">
					<p>Apenas um Teste</p>
				</div>
			</div>
			<div class="center box">
				<h2>Endereço</h2>
				<div class="content">
					<div class="place">
						<span class="text">Algum lugar do Brasil</span>
					</div>

					<div class="phone">
						<span class="text">+55 99 9999-9999</span>
					</div>

					<div class="email">
						<span class="text">exemplo@exemplo.com</span>
					</div>
				</div>
			</div>
			<div class="right box">
				<h2>Contato</h2>
				<div class="content">
					<form action="#">
						<div class="email">
							<div class="text">Mande um Email</div>
							<input type="email" required/>
						</div>
						<div class="msg">
							<div class="text">Mande uma Mensagem *</div>
							<textarea rows="2" cols="25" required></textarea>
						</div>
						<div class="btn">
							<button type="submit">Enviar</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="center">
				<span class="credit">Example</span>
				<span class="far fa-copyright"> Apenas um teste</span>
			</div>
		</div>
	</footer> */}
     

     
    </div>
  );
}

export default App;

