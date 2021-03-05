import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavigationBar from './components/NavigationBar'
import IntroductionPage from './views/introduction-page'
import HomePage from './views/home-page'
import FlashcardSetsView from './views/flashcard-sets-view'
import FlashcardListView from './views/flashcard-list-view'
import CreateFlashcardSetView from './views/create-flashcard-set-view'
import './styles/App.scss'

class App extends React.Component {
	render() {
		return(
			<Router>
        <div>
					<NavigationBar />
					<Route path="/introduction" component={IntroductionPage} />
					<Route path="/" exact component={HomePage} />
					<Route path="/flashcard-sets-view" component={FlashcardSetsView} />
					<Route path="/flashcard-list-view/:id" render={props => <FlashcardListView id={props.match.params.id} />} />
					<Route path="/create-flashcard-set-view" component={CreateFlashcardSetView} />
				</div>
			</Router>
		);
	}
}

export default App;