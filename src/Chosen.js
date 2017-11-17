import React from 'react';

import $ from 'jquery';

class Chosen extends React.Component {
  componentDidMount() {
    console.log('this.el', this.el);
    this.$el = $(this.el);
    console.log('this.$el', this.$el);
    // this.$el.chosen();
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      // this.$el.trigger('chosen:updated');
    }
  }

  componentWillUnmount() {
    // this.$el.off('change', this.handleChange);
    this.$el.chosen('destroy');
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el} >{this.props.children}</select>
      </div>
    );
  }
}

export default function Example() {
  return (
    <Chosen >
      <option >vanila</option>
      <option >strawberry</option>
      <option >chocolate</option>
    </Chosen>
    );
}

