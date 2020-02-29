import React, { Component } from 'react';
import { Button, SCButton } from '../components/atoms/Button';



export class TestPage extends Component {
	render() {
		return (
			<div id="app">
				<div>
					<Button>BEL</Button>
					<Button red>BEL</Button>
					<Button gray>BEL</Button>
					<Button className="Test">BEL</Button>
				</div>
				<div id="app">
					<SCButton>Styled-Components</SCButton>
					<SCButton red>Styled-Components</SCButton>
					<SCButton gray>Styled-Components</SCButton>
				</div>
			</div>
		);
	}
}
