import * as React from 'react';
import Alert from '../../components/Alert';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Alert />
      </div>
    );
  }
}
