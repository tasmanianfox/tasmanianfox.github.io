import React from 'react';

import Layout from '../containers/Layout';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.onMenuItemClick = this.onMenuItemClick.bind(this);
	}

	onMenuItemClick(e) {

	}

  render() {
    return <Layout
		history={this.props.history}
	>
        Welcome!
    </Layout>;
  }
}

export default Home;