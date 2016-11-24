import * as React from 'react';

interface AppProps {
    message: string
}

class App extends React.Component<AppProps, {}> {
    public render() {
        return (
            <h4>{this.props.message}</h4>
        );
    }
}

export default App;