import * as React from 'react';

import { withState } from '../hoc';
import { FCCounter, Props as FCCounterProps } from '../components';

const FCCounterWithState = withState<withState.Props<FCCounterProps>>(
  FCCounter
);

export default () => <FCCounterWithState label={'FCCounterWithState'} />;
