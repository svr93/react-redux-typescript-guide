import * as React from 'react';

import { withState, OutputProps } from '../hoc';
import { FCCounter, Props as FCCounterProps } from '../components';

const FCCounterWithState = withState<OutputProps<FCCounterProps>>(FCCounter);

export default () => <FCCounterWithState label={'FCCounterWithState'} />;
