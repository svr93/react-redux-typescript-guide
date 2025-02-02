import * as React from 'react';

export namespace FCCounter {
  export type Props = {
    label: string;
    count: number;
    onIncrement: () => void;
  };
}

export const FCCounter: React.FC<FCCounter.Props> = props => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => {
    onIncrement();
  };

  return (
    <div>
      <span>
        {label}: {count}
      </span>
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
  );
};
