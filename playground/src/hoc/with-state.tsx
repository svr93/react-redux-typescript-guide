import * as React from 'react';

// These props will be subtracted from base component props
interface InjectedProps {
  count: number;
  onIncrement: () => void;
}

type HocProps = {
  // here you can extend hoc with new props
  initialCount?: number;
};

export type OutputProps<WrappedComponentProps> = Omit<WrappedComponentProps, keyof InjectedProps> & HocProps;

export function withState<AdditionalProps extends Record<string, unknown>>(
  BaseComponent: React.ComponentType<AdditionalProps & InjectedProps>
) {

  type HocState = {
    readonly count: number;
  };

  return class Hoc extends React.Component<AdditionalProps & HocProps, HocState> {
    // Enhance component name for debugging and React-Dev-Tools
    static displayName = `withState(${BaseComponent.name})`;
    // reference to original wrapped component
    static readonly WrappedComponent = BaseComponent;

    readonly state: HocState = {
      count: Number(this.props.initialCount) || 0,
    };

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      const { ...restProps } = this.props;
      const { count } = this.state;

      return (
        <BaseComponent
          count={count} // injected
          onIncrement={this.handleIncrement} // injected
          {...restProps}
        />
      );
    }
  };
};
