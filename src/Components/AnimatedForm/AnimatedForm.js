/**
 * Created by willo on 2/17/2017.
 */
import React, {Component, PropTypes} from 'react';

class AnimatedForm extends Component {

  static propTypes = {
    maxFieldsShown: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      formTop: 0,
      formBottom: 0,
      numChildrenActive: this.countActiveChildren(this.props),
    };

    this.formRef = null;

  }

  componentWillReceiveProps(nextProps) {
    const numChildrenActive = this.countActiveChildren(nextProps);
    if (this.state.numChildrenActive !== numChildrenActive) {
      this.setState({numChildrenActive});
    }
  }

  componentDidMount() {
    this.handleScrollOrResize();
    this.formRef.addEventListener('scroll', this.handleScrollOrResize.bind(this));
    window.addEventListener('resize', this.handleScrollOrResize.bind(this));
  }

  componentWillUnmount() {
    this.formRef.removeEventListener('scroll', this.handleScrollOrResize.bind(this));
    window.removeEventListener('resize', this.handleScrollOrResize.bind(this));
    }

  handleScrollOrResize(e) {
     let formBounds = this.formRef.getBoundingClientRect();
     this.setState({formTop: formBounds.top, formBottom: formBounds.bottom});
   }

   // Forms are dynamic: Children come and go and some may be hidden.
   countActiveChildren(props) {
    let count = 0;
    React.Children.forEach(props.children,
      (child) => {
        if (child) {
          if (child.props.hide === undefined || child.props.hide !== false) count++;
        }
      });
    return count;
   }




  render() {

    let index = 0;
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        if (child) {                 // React will pass null children when conditionally rendering (inline)
          return React.cloneElement(child, {key: index++, containerTopOffset: this.state.formTop, containerBottom: this.state.formBottom});
        }
      }
    );
    return (
      <div ref={(formRef) => {this.formRef = formRef;}} {...this.props}>
        {childrenWithProps}
      </div>

    )

  }
}

export default AnimatedForm;